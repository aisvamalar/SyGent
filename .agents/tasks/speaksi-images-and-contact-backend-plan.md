# Implementation Plan: SPEAKSI Image Enhancement + Contact Form Backend

## Overview
This plan covers two independent features:
1. **SPEAKSI Image Clarity Enhancement**: Replace the existing SPEAKSI PNG files with higher-quality versions
2. **Contact Form Backend with Supabase**: Implement a production-ready backend for the contact form using Supabase

## Exploration Findings

### Current State
- **SPEAKSI images**: Currently using `speaksi1.png` (950KB), `speak2.png` (missing from listing), `speaksi3.png` (686KB)
- **Contact form**: Lives in `src/components/site/Contact.tsx`, validates with Zod but shows "not sent" message (per AGENTS.md requirement)
- **Supabase**: Not currently configured (no supabase folder, no migrations)
- **Build system**: Bun (bun.lock present), TanStack Start + Vite
- **Form fields**: name, email, company, phone, website (optional), service, description, budget (optional)

### Contact Form Schema (from Contact.tsx)
```typescript
{
  name: string (2-100 chars),
  email: string (valid email, max 255 chars),
  company: string (min 1, max 120 chars),
  phone: string (regex: /^[+\d][\d\s()-]{6,19}$/),
  website: string (optional, max 255 chars, URL format),
  service: string (required, one of serviceOptions),
  description: string (20-2000 chars),
  budget: string (optional, one of budgetOptions)
}
```

## Feature 1: SPEAKSI Image Clarity Enhancement

### Assumptions & Decisions
- User will provide three high-quality PNG replacements for: `speaksi1.png`, `speak2.png`, `speaksi3.png`
- Images should be optimized for web (compressed but high clarity, ideally under 1MB each)
- Current images are already in use by the previous plan's ProjectPreviews.tsx updates
- Enhancement is a file replacement task — no code changes needed if filenames stay the same

### Implementation Steps

- [ ] 1. Prepare high-quality SPEAKSI images.
      
      **Files:** User responsibility (manual task before implementation)
      
      **What to do:**
      - Create or obtain three high-quality PNG images for the SPEAKSI mobile app screens:
        - `speaksi1.png`: Welcome screen with speech recognition UI
        - `speak2.png`: Battery care reminder screen
        - `speaksi3.png`: Hearing aid monitor screen
      - Optimize each image:
        - Use PNG compression tools (e.g., TinyPNG, pngquant, ImageOptim) to reduce file size while maintaining visual clarity
        - Target resolution: at least 800-1000px width for mobile mockups (to support retina displays)
        - Target file size: under 1MB each if possible
        - Ensure text is readable and UI elements are crisp
      - Name files exactly as: `speaksi1.png`, `speak2.png`, `speaksi3.png`
      
      **Verify:** Three PNG files ready with clear, production-quality visuals and optimized file sizes.

- [ ] 2. Replace SPEAKSI PNG files in src/assets/.
      
      **Files:** 
      - `c:\Users\DELL\Downloads\supercode-studio-showcase\src\assets\speaksi1.png`
      - `c:\Users\DELL\Downloads\supercode-studio-showcase\src\assets\speak2.png`
      - `c:\Users\DELL\Downloads\supercode-studio-showcase\src\assets\speaksi3.png`
      
      **What to do:**
      - Backup the existing files (optional, in case rollback is needed)
      - Copy the three new high-quality PNG files into `src/assets/`, overwriting the existing ones
      - Maintain exact filenames to avoid breaking imports in ProjectPreviews.tsx
      
      **Verify:** Run `ls "c:\Users\DELL\Downloads\supercode-studio-showcase\src\assets" -Filter "speak*.png"` and confirm three files exist with new timestamps and file sizes.

- [ ] 3. Clear Vite cache and rebuild to ensure new images are used.
      
      **Files:** None (command-line operations only)
      
      **What to do:**
      - Delete the Vite cache: `Remove-Item -Recurse -Force "c:\Users\DELL\Downloads\supercode-studio-showcase\node_modules\.vite"` (if it exists)
      - Rebuild the project: `bun run build` (or `npm run build`)
      - Start the dev server: `bun run dev` (or `npm run dev`)
      - Open http://localhost:8081/ in a browser and navigate to the "Our Work" section → SPEAKSI project
      
      **Verify:** New high-quality SPEAKSI images render in the project gallery with improved clarity. No console errors, no 404s for image assets.

## Feature 2: Contact Form Backend with Supabase

### Database Schema Design

Based on the form validation schema in Contact.tsx, here is the proposed Supabase table structure:

**Table name:** `contact_submissions`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique submission ID |
| created_at | timestamptz | NOT NULL, DEFAULT now() | Submission timestamp |
| name | text | NOT NULL, CHECK (length(name) BETWEEN 2 AND 100) | Contact name |
| email | text | NOT NULL, CHECK (length(email) <= 255) | Business email |
| company | text | NOT NULL, CHECK (length(company) BETWEEN 1 AND 120) | Company name |
| phone | text | NOT NULL, CHECK (length(phone) BETWEEN 6 AND 20) | Phone number |
| website | text | CHECK (website IS NULL OR length(website) <= 255) | Company website (optional) |
| service | text | NOT NULL | Selected service |
| description | text | NOT NULL, CHECK (length(description) BETWEEN 20 AND 2000) | Project description |
| budget | text | | Budget range (optional) |
| status | text | NOT NULL, DEFAULT 'new' | Status: 'new', 'contacted', 'qualified', 'converted', 'archived' |
| notes | text | | Internal notes (for future admin dashboard) |

**Indexes:**
- `created_at DESC` (for chronological listing)
- `status` (for filtering by status)
- `email` (for duplicate detection)

**Row-Level Security (RLS):**
- `INSERT` policy: Allow anonymous inserts (public can submit forms)
- `SELECT/UPDATE/DELETE` policies: Require authentication (for future admin dashboard)

### Architecture Decisions

1. **Server function approach**: Use TanStack Start's server functions (not API routes) for type-safe form submission
2. **Validation**: Keep client-side Zod validation, add server-side validation with the same schema
3. **Error handling**: Return typed errors to client; never expose Supabase internals
4. **Rate limiting**: Add simple rate limiting based on IP or email (prevent spam)
5. **Confirmation**: Replace "not sent" message with success/error states
6. **Environment variables**: Store Supabase URL and anon key in `.env` (NOT `.env.example` per AGENTS.md — Lovable manages secrets)
7. **No email notifications yet**: First phase only stores in database; email/Slack notifications can be added later

### Implementation Steps

- [ ] 4. Set up Supabase project and obtain credentials.
      
      **Files:** User responsibility (manual Supabase dashboard task)
      
      **What to do:**
      - Go to https://supabase.com and create a new project (or use existing one)
      - Wait for project provisioning to complete
      - Navigate to Project Settings → API
      - Copy the following values:
        - Project URL (e.g., `https://xxxxx.supabase.co`)
        - `anon` / `public` API key (safe to use in client/server code)
      - Keep these values ready for the next step
      
      **Verify:** You have the Supabase project URL and anon key ready to paste into environment configuration.

- [ ] 5. Create the contact_submissions table in Supabase.
      
      **Files:** Supabase dashboard (SQL Editor) — DO NOT create migration files locally per AGENTS.md
      
      **What to do:**
      - In the Supabase dashboard, go to SQL Editor
      - Run the following SQL to create the table:
        ```sql
        CREATE TABLE contact_submissions (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          name TEXT NOT NULL CHECK (length(name) BETWEEN 2 AND 100),
          email TEXT NOT NULL CHECK (length(email) <= 255),
          company TEXT NOT NULL CHECK (length(company) BETWEEN 1 AND 120),
          phone TEXT NOT NULL CHECK (length(phone) BETWEEN 6 AND 20),
          website TEXT CHECK (website IS NULL OR length(website) <= 255),
          service TEXT NOT NULL,
          description TEXT NOT NULL CHECK (length(description) BETWEEN 20 AND 2000),
          budget TEXT,
          status TEXT NOT NULL DEFAULT 'new',
          notes TEXT
        );

        -- Create indexes
        CREATE INDEX idx_contact_submissions_created_at ON contact_submissions (created_at DESC);
        CREATE INDEX idx_contact_submissions_status ON contact_submissions (status);
        CREATE INDEX idx_contact_submissions_email ON contact_submissions (email);

        -- Enable Row-Level Security
        ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

        -- Policy: Allow anonymous inserts
        CREATE POLICY "Allow public insert" ON contact_submissions
          FOR INSERT TO anon
          WITH CHECK (true);

        -- Policy: Only authenticated users can view (for future admin dashboard)
        CREATE POLICY "Allow authenticated select" ON contact_submissions
          FOR SELECT TO authenticated
          USING (true);

        -- Policy: Only authenticated users can update
        CREATE POLICY "Allow authenticated update" ON contact_submissions
          FOR UPDATE TO authenticated
          USING (true);
        ```
      
      **Verify:** In Supabase dashboard → Table Editor, confirm `contact_submissions` table exists with all columns and indexes. In Authentication → Policies, confirm RLS is enabled with the three policies.

- [ ] 6. Install Supabase client library.
      
      **Files:** `package.json` (dependency added)
      
      **What to do:**
      - Run: `bun add @supabase/supabase-js` (or `npm install @supabase/supabase-js`)
      - Confirm installation completes without errors
      
      **Verify:** Run `bun list | grep supabase` (or check package.json) and confirm `@supabase/supabase-js` is listed.

- [ ] 7. Create Supabase client configuration.
      
      **Files:** `src/lib/supabase.ts` (new file)
      
      **What to do:**
      - Create a new file at `src/lib/supabase.ts` with the following content:
        ```typescript
        import { createClient } from '@supabase/supabase-js';

        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseAnonKey) {
          throw new Error('Missing Supabase environment variables. Check .env file.');
        }

        export const supabase = createClient(supabaseUrl, supabaseAnonKey);

        export type ContactSubmission = {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          company: string;
          phone: string;
          website: string;
          service: string;
          description: string;
          budget: string;
          status?: string;
          notes?: string;
        };
        ```
      - This creates a singleton Supabase client and exports the submission type
      
      **Verify:** TypeScript compilation succeeds with no errors (run `npx tsc --noEmit`).

- [ ] 8. Create server function for form submission.
      
      **Files:** `src/lib/contact.ts` (new file)
      
      **What to do:**
      - Create a new file at `src/lib/contact.ts` with a TanStack Start server function:
        ```typescript
        import { createServerFn } from '@tanstack/start';
        import { z } from 'zod';
        import { supabase, type ContactSubmission } from './supabase';

        // Reuse the same schema from Contact.tsx for server-side validation
        const schema = z.object({
          name: z.string().trim().min(2).max(100),
          email: z.string().trim().email().max(255),
          company: z.string().trim().min(1).max(120),
          phone: z.string().trim().regex(/^[+\d][\d\s()-]{6,19}$/),
          website: z.string().trim().max(255).refine(
            (v) => v === '' || /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}.*$/i.test(v),
            'Invalid website'
          ),
          service: z.string().min(1),
          description: z.string().trim().min(20).max(2000),
          budget: z.string(),
        });

        export type SubmitContactResult =
          | { success: true }
          | { success: false; error: string; field?: keyof z.infer<typeof schema> };

        export const submitContactForm = createServerFn({
          method: 'POST',
        })
          .validator(schema)
          .handler(async ({ data }) => {
            // Server-side validation already done by .validator()
            try {
              // Prepare submission data
              const submission: ContactSubmission = {
                name: data.name,
                email: data.email,
                company: data.company,
                phone: data.phone,
                website: data.website || '',
                service: data.service,
                description: data.description,
                budget: data.budget || '',
              };

              // Insert into Supabase
              const { error } = await supabase
                .from('contact_submissions')
                .insert(submission);

              if (error) {
                console.error('Supabase insert error:', error);
                return {
                  success: false,
                  error: 'We could not save your message. Please try again or email us directly.',
                } satisfies SubmitContactResult;
              }

              return { success: true } satisfies SubmitContactResult;
            } catch (err) {
              console.error('Unexpected error in submitContactForm:', err);
              return {
                success: false,
                error: 'An unexpected error occurred. Please try again later.',
              } satisfies SubmitContactResult;
            }
          });
        ```
      - This server function validates data, inserts it into Supabase, and returns a typed result
      
      **Verify:** TypeScript compilation succeeds with no errors.

- [ ] 9. Update Contact.tsx to call the server function.
      
      **Files:** `src/components/site/Contact.tsx`
      
      **What to do:**
      - Import the server function at the top:
        ```typescript
        import { submitContactForm } from "@/lib/contact";
        ```
      - Add state for submission status:
        ```typescript
        const [submitting, setSubmitting] = useState(false);
        const [submitSuccess, setSubmitSuccess] = useState(false);
        const [submitError, setSubmitError] = useState<string | null>(null);
        ```
      - Replace the `submit` function body (remove the `setNotConnected(true)` logic):
        ```typescript
        const submit = async (e: React.FormEvent) => {
          e.preventDefault();
          const r = schema.safeParse(values);
          if (!r.success) {
            const errs: Partial<Record<keyof Values, string>> = {};
            for (const iss of r.error.issues) {
              const k = iss.path[0] as keyof Values;
              errs[k] ??= iss.message;
            }
            setErrors(errs);
            setSubmitSuccess(false);
            setSubmitError(null);
            return;
          }
          setErrors({});
          setSubmitting(true);
          setSubmitError(null);

          try {
            const result = await submitContactForm({ data: r.data });
            if (result.success) {
              setSubmitSuccess(true);
              setValues(empty); // Clear form on success
            } else {
              setSubmitError(result.error);
            }
          } catch (err) {
            setSubmitError('An unexpected error occurred. Please try again.');
          } finally {
            setSubmitting(false);
          }
        };
        ```
      - Replace the `notConnected` conditional block with success/error messages:
        ```typescript
        {submitSuccess && (
          <div role="status" className="flex gap-3 rounded-2xl border border-green-500/30 bg-green-50 p-4 text-sm sm:col-span-2 dark:bg-green-950/30">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
            <p><strong>Thank you!</strong> Your message has been received. We'll be in touch soon.</p>
          </div>
        )}
        {submitError && (
          <div role="alert" className="flex gap-3 rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm sm:col-span-2">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <p><strong>Something went wrong.</strong> {submitError}</p>
          </div>
        )}
        ```
      - Update the submit button to show loading state:
        ```typescript
        <button type="submit" disabled={submitting} className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-5 font-semibold tracking-wide text-background hover:text-ink-foreground transition-colors hover:bg-brand disabled:opacity-50 disabled:cursor-not-allowed sm:col-span-2 sm:justify-self-start">
          {submitting ? 'SENDING...' : 'START A CONVERSATION'} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
        ```
      - Remove the `notConnected` state variable (no longer needed)
      
      **Verify:** TypeScript compilation succeeds. No type errors in Contact.tsx.

- [ ] 10. Create .env file with Supabase credentials (DO NOT COMMIT).
      
      **Files:** `.env` (new file, should be in .gitignore)
      
      **What to do:**
      - Create a new file at the project root: `c:\Users\DELL\Downloads\supercode-studio-showcase\.env`
      - Add the following lines (using the credentials from step 4):
        ```
        VITE_SUPABASE_URL=https://xxxxx.supabase.co
        VITE_SUPABASE_ANON_KEY=your-anon-key-here
        ```
      - Replace `https://xxxxx.supabase.co` and `your-anon-key-here` with actual values
      - Confirm `.env` is listed in `.gitignore` (it should be by default in Vite projects)
      - **IMPORTANT**: Never commit this file. Per AGENTS.md, Lovable manages secrets — this is for local development only
      
      **Verify:** Run `Get-Content .env` and confirm the two variables are present with real values. Run `git status` and confirm `.env` is NOT listed (ignored).

- [ ] 11. Test the contact form end-to-end.
      
      **Files:** None (testing workflow)
      
      **What to do:**
      - Ensure `.env` is configured (step 10)
      - Restart the dev server to load environment variables: stop any running `bun run dev` and start it again
      - Open http://localhost:8081/ in a browser
      - Scroll to the "Contact" section
      - Fill out the form with valid test data:
        - Name: Test User
        - Email: test@example.com
        - Company: Test Company
        - Phone: +1234567890
        - Website: https://example.com (optional)
        - Service: Select any service
        - Description: This is a test submission to verify the contact form backend integration with Supabase.
        - Budget: Select any budget (optional)
      - Click "START A CONVERSATION"
      - Observe:
        - Button should show "SENDING..." briefly
        - A green success message should appear: "Thank you! Your message has been received..."
        - The form should clear after success
      - Go to Supabase dashboard → Table Editor → contact_submissions
      - Confirm the test submission appears in the table with all field values correct
      - Test error case: Disconnect internet or invalidate Supabase URL temporarily, submit again, confirm red error message appears
      
      **Verify:** Form successfully submits to Supabase, success message displays, data appears in Supabase table. Error states display correctly when submission fails.

- [ ] 12. Run build and verify production readiness.
      
      **Files:** None (command-line operations only)
      
      **What to do:**
      - Run: `bun run build` (or `npm run build`)
      - Confirm build completes with no errors
      - Confirm no TypeScript errors, no import resolution errors, no Supabase client initialization errors
      - Run: `bun run preview` (or `npm run preview`) to test the production build locally
      - Test the contact form in preview mode to ensure environment variables are correctly bundled
      
      **Verify:** Production build succeeds, preview server runs, contact form works in production mode.

## Verification Summary

**SPEAKSI Images:**
- New high-quality images render in the project gallery
- No visual artifacts or pixelation
- File sizes are optimized (under 1MB each ideally)
- No console errors or 404s

**Contact Form Backend:**
- Form validates correctly on client and server
- Submissions are stored in Supabase `contact_submissions` table
- Success message displays after successful submission
- Error message displays when submission fails
- Form clears after successful submission
- Loading state shows while submitting
- RLS policies prevent unauthorized access to stored data
- TypeScript types are correct throughout
- Production build succeeds

## Constraints Adhered To

- **AGENTS.md compliance**: 
  - No supabase/migrations or drizzle files created (schema created via Supabase SQL Editor)
  - No .env.example created (Lovable manages secrets)
  - Contact form no longer shows fake success (now uses real backend or shows honest error)
- **Type safety**: All server functions and client code are fully typed with TypeScript
- **Security**: RLS policies enforce access control; anon key only allows inserts, not reads
- **No breaking changes**: Contact.tsx retains all existing styling, field labels, and validation messages
- **Lovable sync**: All code changes are commit-safe (no generated files modified)

## Future Enhancements (Out of Scope)

- Email notifications when form is submitted (using Supabase Edge Functions or a service like SendGrid)
- Slack/Discord webhook notifications
- Admin dashboard to view and manage submissions
- Duplicate detection (check if email already submitted in last 24 hours)
- Rate limiting by IP address
- CAPTCHA or honeypot spam protection
- Attachment uploads (e.g., project briefs)

## Notes for Implementation

1. **Step 1 requires user action**: The implementer cannot generate images. The user must provide the three high-quality SPEAKSI PNG files before step 2 can proceed. If images are not ready, feature 1 should be skipped or paused.

2. **Supabase credentials**: Step 4 requires the user to create a Supabase project and obtain credentials. The implementer should pause and request these credentials from the user if they're not provided.

3. **Environment variables in production**: When deploying to Lovable or other hosting, the user must configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables in the hosting platform's settings (NOT in a committed .env file).

4. **Testing is critical**: Step 11 (end-to-end testing) should not be skipped. Supabase connection issues are common and must be caught before considering the feature complete.

5. **Independent features**: Features 1 and 2 are completely independent. If one is blocked, the other can proceed without issues.
