import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-form.schema-BTUgNRo-.js
var contactFormSchema = objectType({
	name: stringType().trim().min(2, "Please enter your name (minimum 2 characters)").max(100),
	email: stringType().trim().email("Please enter a valid email address").max(255),
	company: stringType().trim().min(1, "Please enter your company name").max(120),
	phone: stringType().trim().regex(/^[+\d][\d\s()-]{6,19}$/, "Please enter a valid phone number"),
	website: stringType().trim().max(255).refine((v) => v === "" || /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}.*$/i.test(v), "Please enter a valid website URL").optional().default(""),
	service: stringType().min(1, "Please select a service"),
	description: stringType().trim().min(10, "Please provide more details about your project (minimum 10 characters)").max(2e3),
	budget: stringType().optional().default("")
});
//#endregion
export { contactFormSchema as t };
