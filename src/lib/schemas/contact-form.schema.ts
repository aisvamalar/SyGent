import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (minimum 2 characters)").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  company: z.string().trim().min(1, "Please enter your company name").max(120),
  phone: z.string().trim().regex(/^[+\d][\d\s()-]{6,19}$/, "Please enter a valid phone number"),
  website: z
    .string()
    .trim()
    .max(255)
    .refine(
      (v) => v === "" || /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}.*$/i.test(v),
      "Please enter a valid website URL"
    )
    .optional()
    .default(""),
  service: z.string().min(1, "Please select a service"),
  description: z
    .string()
    .trim()
    .min(10, "Please provide more details about your project (minimum 10 characters)")
    .max(2000),
  budget: z.string().optional().default(""),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export interface ContactSubmission extends ContactFormInput {
  id: string;
  created_at: string;
  status: "new" | "contacted" | "qualified" | "converted";
  notes?: string;
}
