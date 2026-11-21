import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, MessageCircle, Phone, Mail } from "lucide-react";
import { serviceOptions } from "@/data/site";
import { Reveal } from "./Reveal";
import { contactFormSchema, type ContactFormInput } from "@/lib/schemas/contact-form.schema";
import { submitContactForm$ } from "@/lib/actions/contact-form";

function Field({ label, optional, error, children }: { label: string; optional?: boolean; error?: string | undefined; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}{optional && <span className="ml-1 normal-case tracking-normal">(optional)</span>}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-destructive">{error}</span>}
    </label>
  );
}

const field = "w-full border-0 border-b border-input bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand";
const selectField = "w-full border-0 border-b border-input bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand [&>option]:bg-card [&>option]:text-foreground";

// Budget ranges starting from 20k
const budgetRanges = [
  { value: 0, label: "₹20k - ₹50k" },
  { value: 1, label: "₹50k - ₹1L" },
  { value: 2, label: "₹1L - ₹2L" },
  { value: 3, label: "₹2L - ₹5L" },
  { value: 4, label: "₹5L - ₹10L" },
  { value: 5, label: "₹10L - ₹25L" },
  { value: 6, label: "₹25L+" },
];

export function Contact() {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [budgetIndex, setBudgetIndex] = useState(2); // Default to ₹5-10L

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      website: "",
      service: "",
      description: "",
      budget: "",
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    setSubmitState("loading");
    setErrorMessage("");

    // Add budget selection to submission
    const budgetValue = budgetRanges[budgetIndex].label;
    
    const submissionData = {
      ...data,
      budget: budgetValue,
    };

    try {
      const result = await submitContactForm$({ data: submissionData });

      if (result.success) {
        setSubmitState("success");
        reset(); // Clear the form
        setBudgetIndex(2); // Reset to default
      } else {
        setSubmitState("error");
        setErrorMessage(result.error || "Failed to submit your enquiry. Please try again.");
      }
    } catch (error) {
      setSubmitState("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="bg-paper py-24 sm:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="display-lg">HAVE AN IDEA? <span className="text-brand">LET'S BUILD IT.</span></h2>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">Tell us what you're imagining. Let's explore how the right technology can bring it to life.</p>
          
          {/* Contact Information */}
          <div className="mt-12 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Get in Touch</h3>
              
              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/919384157111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#20BA5A] hover:shadow-lg hover:shadow-[#25D366]/25"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-base">Contact Us</span>
              </a>

              {/* Call Numbers */}
              <div className="space-y-3">
                <a 
                  href="tel:+919384157111"
                  className="group flex items-center gap-3 text-lg transition-colors hover:text-brand"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand/20">
                    <Phone className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call</div>
                    <div className="font-medium">+91 93841 57111</div>
                  </div>
                </a>
                
                <a 
                  href="tel:+918608978710"
                  className="group flex items-center gap-3 text-lg transition-colors hover:text-brand ml-[52px]"
                >
                  <div>
                    <div className="font-medium">+91 86089 78710</div>
                  </div>
                </a>
              </div>

              {/* Email */}
              <a 
                href="mailto:vishwa.fury@gmail.com"
                className="group flex items-center gap-3 text-lg transition-colors hover:text-brand"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand/20">
                  <Mail className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">vishwa.fury@gmail.com</div>
                </div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
              <p className="text-sm text-muted-foreground">
                Based in India, working with businesses across the globe.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-8 rounded-3xl bg-card p-6 sm:grid-cols-2 sm:p-10">
            <Field error={errors.name?.message} label="Name">
              <input className={field} {...register("name")} autoComplete="name" disabled={submitState === "loading"} />
            </Field>
            <Field error={errors.email?.message} label="Business Email">
              <input type="email" className={field} {...register("email")} autoComplete="email" disabled={submitState === "loading"} />
            </Field>
            <Field error={errors.company?.message} label="Company">
              <input className={field} {...register("company")} autoComplete="organization" disabled={submitState === "loading"} />
            </Field>
            <Field error={errors.phone?.message} label="Phone Number">
              <input type="tel" className={field} {...register("phone")} autoComplete="tel" disabled={submitState === "loading"} />
            </Field>
            <Field error={errors.website?.message} label="Website" optional>
              <input className={field} {...register("website")} placeholder="yourcompany.com" disabled={submitState === "loading"} />
            </Field>
            <Field error={errors.service?.message} label="Service Required">
              <select className={selectField} {...register("service")} disabled={submitState === "loading"}>
                <option value="">Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field error={errors.description?.message} label="Project Description">
                <textarea rows={4} className={`${field} resize-none`} {...register("description")} disabled={submitState === "loading"} />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field error={errors.budget?.message} label="Project Budget" optional>
                <div className="space-y-3 py-3">
                  {/* Selected Budget Display - Compact */}
                  <div className="flex items-center justify-between rounded-lg bg-brand/10 px-4 py-2">
                    <span className="text-sm text-muted-foreground">Selected:</span>
                    <span className="text-lg font-bold text-brand">
                      {budgetRanges[budgetIndex].label}
                    </span>
                  </div>
                  
                  {/* Budget Options Grid - Compact */}
                  <div className="grid grid-cols-4 gap-2">
                    {budgetRanges.map((range, index) => (
                      <button
                        key={range.value}
                        type="button"
                        onClick={() => setBudgetIndex(index)}
                        disabled={submitState === "loading"}
                        className={`rounded-md border px-2 py-2 text-xs font-medium transition-all ${
                          budgetIndex === index
                            ? 'border-brand bg-brand text-white'
                            : 'border-border bg-background text-foreground hover:border-brand/50'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </Field>
            </div>

            {/* Success Message */}
            {submitState === "success" && (
              <div role="status" className="flex gap-3 rounded-2xl border border-green-500/30 bg-green-50 p-4 text-sm sm:col-span-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <p className="text-green-900">
                  <strong>Thank you! Your enquiry has been received.</strong> We'll be in touch with you soon to discuss your project.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitState === "error" && (
              <div role="alert" className="flex gap-3 rounded-2xl border border-red-500/30 bg-red-50 p-4 text-sm sm:col-span-2">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <p className="text-red-900">
                  <strong>Unable to submit your enquiry.</strong> {errorMessage}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitState === "loading"}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-5 font-semibold tracking-wide text-background transition-colors hover:bg-brand hover:text-ink-foreground disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2"
            >
              {submitState === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  SUBMITTING...
                </>
              ) : (
                <>
                  SEND ENQUIRY
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
