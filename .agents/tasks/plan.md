# Implementation Plan: Contact Form Email Enhancement with Excel Attachment

## Project Context

**Framework:** TanStack Start (full-stack React with SSR)  
**Language:** TypeScript  
**Package Manager:** Bun (fallback: npm)  
**Build Tool:** Vite  
**Database:** Supabase  
**Email Provider:** Resend  
**Test Framework:** Vitest  

**Key Build Commands:**
- Development: `bun run dev`
- Build: `bun run build`
- Test: `bun run test`
- Lint: `bun run lint`

**Project Constraints:**
- Contact form validates but shows "not sent" notice until a real delivery backend is added (per AGENTS.md)
- Email failures must NOT break form submission (existing try/catch in contact-form.ts handles this)
- Server-side only Excel generation (never in browser)
- Do NOT modify customer acknowledgment email
- Do NOT modify contact form UI/styles

**Key Files:**
- `src/lib/actions/email.ts` — sendInternalNotification and sendCustomerAcknowledgment functions
- `src/lib/email-templates.ts` — generateInternalNotificationEmail and generateCustomerAcknowledgmentEmail templates
- `src/lib/actions/contact-form.ts` — server function that calls email actions
- `src/lib/schemas/contact-form.schema.ts` — ContactFormInput and ContactSubmission types
- `package.json` — dependencies

**Current Email Flow:**
1. User submits contact form → `submitContactForm$` server function in `contact-form.ts`
2. Data saved to Supabase `contact_submissions` table
3. `sendInternalNotification` called with enquiry data (enquiryId, submittedAt, etc.)
4. `generateInternalNotificationEmail` generates HTML email body
5. Email sent via Resend API to `vishwa.fury@gmail.com` (NOTE: typo - should be `vishw.fury@gmail.com`)
6. Customer acknowledgment sent separately (not modified in this task)

**Resend Attachment API Format:**
```typescript
attachments: [
  {
    filename: 'example.xlsx',
    content: Buffer, // Node.js Buffer object
    // SDK automatically converts Buffer to Base64
  }
]
```

---

## Implementation Plan

- [ ] 1. **Install ExcelJS dependency**
      
      Install the `exceljs` package as a production dependency to enable server-side Excel workbook generation.
      
      **Files:** `package.json`
      
      **Command:**
      ```bash
      bun add exceljs
      ```
      
      **Verify:** Run `bun install` and confirm `exceljs` appears in `package.json` dependencies (not devDependencies). Check that `node_modules/exceljs` directory exists.

- [ ] 2. **Create Excel generation utility module**
      
      Create a new utility file `src/lib/utils/generate-enquiry-excel.ts` containing a single exported async function `generateEnquiryExcel(data: EmailData): Promise<Buffer>`. This function will:
      - Import ExcelJS (`import ExcelJS from 'exceljs'`)
      - Create a new workbook with sheet name "Enquiry Details"
      - Set up a two-column table with headers "Field" and "Value"
      - Apply formatting: bold headers with light gray background (#F3F4F6), bold field names in column A, column widths (A: 25, B: 50), text wrap on Description cell, thin borders on all data cells, freeze header row
      - Populate rows: Enquiry ID, Customer Name, Email, Company, Phone, Website, Service, Budget, Description, Status (hardcoded "New"), Submitted At
      - Handle optional fields gracefully: if company/website/budget are empty/null/undefined, show "N/A"
      - Sanitize customer name for filename: replace spaces and special characters with underscores
      - Return the workbook as a Buffer via `workbook.xlsx.writeBuffer()`
      
      **Why a separate utility:** Keeps email.ts focused on email sending logic; Excel generation is a discrete, testable concern that may grow (e.g., future features might generate Excel for batches of enquiries).
      
      **Files:** `src/lib/utils/generate-enquiry-excel.ts` (new file)
      
      **Verify:** Create a simple test file `test-excel-generation.ts` in project root that imports the function, passes mock data, writes the Buffer to a file, and confirms the file opens in Excel with correct formatting. Run: `bun test-excel-generation.ts`, then manually open the generated .xlsx file.

- [ ] 3. **Update email.ts to accept and attach Excel workbook**
      
      Modify `sendInternalNotification` function in `src/lib/actions/email.ts`:
      - Import the new utility: `import { generateEnquiryExcel } from '../utils/generate-enquiry-excel'`
      - Before calling `resend.emails.send`, call `const excelBuffer = await generateEnquiryExcel(data)` to generate the Excel workbook Buffer
      - Sanitize customer name for filename: `const sanitizedName = data.name.replace(/[^a-zA-Z0-9]/g, '_')`
      - Add `attachments` field to the Resend payload:
        ```typescript
        attachments: [
          {
            filename: `Enquiry_${data.enquiryId}_${sanitizedName}.xlsx`,
            content: excelBuffer,
          }
        ]
        ```
      - Update TypeScript types if needed (Resend SDK already types the attachments field, but verify imports are correct)
      
      **Why modify email.ts:** This is the orchestration layer that calls both the template generator and the email sender; attaching the Excel file belongs in the sending logic, not the template.
      
      **Files:** `src/lib/actions/email.ts`
      
      **Verify:** Run the development server (`bun run dev`), submit a test enquiry via the contact form, check the console logs for "✅ Internal notification sent successfully!", check the email received at `vishw.fury@gmail.com` (after fixing the typo), download the attachment, and confirm it opens with all fields populated correctly.

- [ ] 4. **Correct recipient email address typo**
      
      In `src/lib/actions/email.ts`, change `RECIPIENT_EMAIL` constant from `"vishwa.fury@gmail.com"` to `"vishw.fury@gmail.com"` (the correct owner email per the brief).
      
      **Why:** The brief explicitly states the owner email is `vishw.fury@gmail.com`, and the existing code has a typo.
      
      **Files:** `src/lib/actions/email.ts`
      
      **Verify:** Inspect the code change in the file; no separate verification needed (will be tested in step 6).

- [ ] 5. **Rewrite internal notification email template**
      
      Update `generateInternalNotificationEmail` function in `src/lib/email-templates.ts`:
      - Change subject line logic in caller (email.ts) from `New Website Enquiry – ${data.name}` to `🎉 New Project Enquiry – ${data.name}`
      - Rewrite HTML body structure to match the spec:
        - Opening: "Hey Team! 👋 — We've received a new project enquiry through our website. Here are the details!"
        - Section 1: **CUSTOMER INFORMATION** — Full Name, Email Address, Company Name, Phone Number, Website (if present, else omit row)
        - Section 2: **PROJECT INFORMATION** — Requested Service, Estimated Budget (if present, else omit row), Project Description
        - Section 3: **ENQUIRY TRACKING** — Unique Enquiry ID, Submission Date (formatted as readable date), Submission Time (formatted as readable time), Current Status (always "New")
        - Closing: "Please review the enquiry and get in touch with the customer. This could be an exciting new collaboration! 🚀"
      - Preserve existing professional HTML styling (dark theme, gradient headers, structured tables) but adjust section headers and content to match the new friendly tone
      - Format dates using existing logic: `submissionDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })` for Submission Date, and `submissionDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZoneName: "short" })` for Submission Time
      
      **Why rewrite the template:** The brief specifies a friendlier, more structured email format with three clear sections and specific opening/closing text.
      
      **Files:** `src/lib/email-templates.ts`, `src/lib/actions/email.ts` (subject line change)
      
      **Verify:** Submit a test enquiry, receive the email, and confirm:
        - Subject line is `🎉 New Project Enquiry – [Customer Name]`
        - Email opens with "Hey Team! 👋"
        - Three sections are clearly labeled: CUSTOMER INFORMATION, PROJECT INFORMATION, ENQUIRY TRACKING
        - All fields are present and formatted correctly
        - Email closes with the 🚀 message
        - Optional fields (website, budget) are handled gracefully (omitted if not provided)

- [ ] 6. **End-to-end verification**
      
      Perform complete testing of the entire feature:
      1. Start the development server: `bun run dev`
      2. Navigate to the contact form in the browser
      3. Fill out and submit a test enquiry with:
         - Customer name with spaces and special characters (e.g., "John O'Brien-Smith")
         - All required fields populated
         - Optional fields: include website and budget
      4. Verify Supabase record creation (check the `contact_submissions` table)
      5. Check console logs for successful email send message
      6. Check the inbox at `vishw.fury@gmail.com` for the notification email
      7. Verify the email subject: `🎉 New Project Enquiry – John O'Brien-Smith`
      8. Verify the email body structure matches the spec (three sections, friendly tone, closing message)
      9. Download the Excel attachment from the email
      10. Open the Excel file and verify:
          - Filename: `Enquiry_[UUID]_John_O_Brien_Smith.xlsx` (sanitized name)
          - Sheet name: "Enquiry Details"
          - Two-column table with "Field" and "Value" headers
          - All fields populated correctly (Enquiry ID, Customer Name, Email, Company, Phone, Website, Service, Budget, Description, Status: "New", Submitted At)
          - Professional formatting: bold headers with background, bold field names, appropriate column widths, text wrap on Description, borders, frozen header row
      11. Test edge cases:
          - Submit an enquiry without optional fields (website, budget) — verify email shows omitted rows and Excel shows "N/A"
          - Submit an enquiry with a very long description — verify text wrapping in Excel
          - Submit an enquiry with special characters in name, company, description — verify proper encoding in email and Excel
      12. Test email failure resilience:
          - Temporarily set invalid RESEND_API_KEY in .env
          - Submit an enquiry
          - Verify Supabase record is still saved despite email failure
          - Verify console logs show email error but form submission succeeds
          - Restore valid RESEND_API_KEY
      
      **Why comprehensive testing:** This is a user-facing feature involving multiple systems (form, database, email, Excel generation); end-to-end verification ensures all pieces integrate correctly and edge cases are handled.
      
      **Files:** All files modified in previous steps
      
      **Verify:** All verification steps listed above pass. Document any issues found and their resolutions.

- [ ] 7. **Run build and lint checks**
      
      Ensure the codebase builds successfully and passes linting:
      - Run `bun run build` and confirm no TypeScript compilation errors
      - Run `bun run lint` and confirm no linting errors
      - If tests exist for email or contact form functionality, run `bun run test` and confirm they pass
      
      **Why:** Production-readiness check; the feature must not introduce build or lint errors.
      
      **Files:** All modified files
      
      **Verify:** All commands complete successfully with exit code 0. If any errors occur, fix them and re-run the commands.

---

## Summary of Changes

**New Files:**
- `src/lib/utils/generate-enquiry-excel.ts` — Excel generation utility

**Modified Files:**
- `package.json` — Added `exceljs` dependency
- `src/lib/actions/email.ts` — Updated `sendInternalNotification` to generate and attach Excel, corrected recipient email typo, updated subject line
- `src/lib/email-templates.ts` — Rewrote `generateInternalNotificationEmail` to match friendly, structured format

**No Changes:**
- `src/lib/actions/contact-form.ts` — Email failure handling already in place via try/catch
- `src/lib/schemas/contact-form.schema.ts` — No type changes needed
- Customer acknowledgment email — Not modified per brief
- Contact form UI/styles — Not modified per brief

**Dependencies Added:**
- `exceljs` (production dependency)

**Configuration Steps After Implementation:**
- None required; Resend API key already configured in `.env`
- Verify the corrected recipient email `vishw.fury@gmail.com` is the intended owner address

**Known Limitations:**
- Email delivery depends on Resend API availability and valid API key
- Resend test mode (`onboarding@resend.dev` sender) can only send to the account owner's email
- To send customer acknowledgment emails, a verified domain must be configured in Resend
- Excel attachments increase email size; Resend has a 40MB total email size limit (including attachments after Base64 encoding)

---

## Implementation Notes for the Coder

**TypeScript Types:**
- `EmailData` interface in `email.ts` already extends `ContactFormInput` with `enquiryId` and `submittedAt` — no type changes needed
- ExcelJS types are included with the package (`@types/exceljs` bundled)
- Resend SDK already types the `attachments` field correctly

**Excel Formatting Details:**
- Header row (row 1): Bold font, light gray fill (#F3F4F6)
- Column A (Field names): Bold font, width 25
- Column B (Values): Regular font, width 50
- Description cell (row with "Description" field): Text wrap enabled (`wrapText: true`)
- All data cells: Thin borders on all sides
- Freeze panes: Freeze row 1 (header row) so it stays visible when scrolling

**Date Formatting:**
- Use the existing date formatting logic in `email-templates.ts` as the pattern
- Submission Date: `submissionDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })`
- Submission Time: `submissionDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZoneName: "short" })`

**Error Handling:**
- Excel generation errors should be caught in the `try/catch` block around email sending in `contact-form.ts`
- If Excel generation fails, log the error but continue with email sending (email without attachment is better than no email)
- The existing error handling in `contact-form.ts` already ensures form submission succeeds even if email fails

**Testing the Email:**
- During development, Resend test mode uses `onboarding@resend.dev` as sender
- Emails sent in test mode can only reach the Resend account owner's email address
- To test customer acknowledgment emails, verify a domain in Resend and set `RESEND_SENDER_EMAIL` env var

**Resend Attachment API Reference:**
- [Official Docs](https://resend.com/docs/dashboard/emails/attachments)
- Node.js SDK accepts Buffer directly in `content` field (no manual Base64 encoding needed)
- Filename must include the extension (.xlsx)
- Content type is auto-detected by Resend based on the file extension
