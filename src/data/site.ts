export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const capabilities = [
  "Artificial Intelligence", "Generative AI", "AI Agents", "Machine Learning", "Automation",
  "Augmented Reality", "Web Development", "Mobile Development", "E-commerce",
];

export type Project = { id: string; num: string; name: string; category: string; summary: string; description: string; platform: string; devices: Array<"web" | "mobile"> };
export const projects: Project[] = [
  { id: "influnz", num: "01", name: "INFLUNZ", category: "Platform · AI Matching", summary: "A creator and business collaboration platform.", description: "A digital platform designed to connect creators and businesses through campaign discovery, AI-assisted creator matching, offer negotiation, and collaboration workflows.", platform: "Web", devices: ["web"] },
  { id: "speaksi", num: "02", name: "SPEAKSI", category: "AI · Speech", summary: "An AI-powered speech assistance application.", description: "SPEAKSI uses speech analysis and intelligent feedback to support pronunciation practice and provide personalised guidance.", platform: "Mobile app", devices: ["mobile"] },
  { id: "carepath", num: "03", name: "CAREPATH", category: "Healthcare · Analytics", summary: "A healthcare-focused digital platform.", description: "CAREPATH brings together patient-focused experiences, care coordination, and intelligent analytics to support healthcare workflows.", platform: "Web", devices: ["web"] },
  { id: "redwolf", num: "04", name: "REDWOLF", category: "Augmented Reality · 3D", summary: "An augmented reality experience platform.", description: "REDWOLF explores how augmented reality can connect physical and digital environments through immersive 3D experiences.", platform: "Web and mobile web", devices: ["web", "mobile"] },
];

export const founders = [
  { name: "Vishwa", expertise: ["AGENTS", "END-TO-END PLATFORM"] },
  { name: "Janani", expertise: ["AI AGENTS", "GEN AI"] },
  { name: "Aisva Malar", expertise: ["END-TO-END PLATFORM", "E-COMMERCE", "AR DEVELOPMENT"] },
  { name: "Subitsha", expertise: ["AI AGENTS", "GEN AI"] },
  { name: "Rayyan", expertise: ["END-TO-END PLATFORM", "BACKEND", "E-COMMERCE"] },
];

export const services = [
  { num: "01", title: "Artificial Intelligence & Machine Learning", text: "Intelligent systems that transform data into useful insights and practical solutions." },
  { num: "02", title: "AI Agents & Automation", text: "AI-powered agents and automation workflows that help businesses streamline processes and improve productivity." },
  { num: "03", title: "Augmented Reality Development", text: "Immersive AR experiences and interactive 3D solutions that connect digital content with the real world." },
  { num: "04", title: "Web & Mobile Application Development", text: "Scalable, user-focused digital platforms and applications designed for real-world business needs." },
  { num: "05", title: "E-commerce Development", text: "Modern e-commerce experiences and digital commerce solutions built to support business growth." },
];

export const reasons = [
  { title: "Intelligence First", text: "We approach challenges with intelligent thinking and practical AI capabilities." },
  { title: "Purposeful Innovation", text: "We focus on building technology that solves meaningful problems." },
  { title: "End-to-End Engineering", text: "From concept to implementation, we bring ideas into functional digital products." },
  { title: "Built for Growth", text: "We create solutions with scalability, usability, and long-term value in mind." },
];

export const steps = [
  { num: "01", title: "DISCOVER", text: "Understand the business, its goals, and the problem to solve." },
  { num: "02", title: "DESIGN", text: "Define the experience, architecture, and solution direction." },
  { num: "03", title: "DEVELOP", text: "Build, integrate, and refine the digital solution." },
  { num: "04", title: "DEPLOY", text: "Launch, evaluate, and continue improving." },
];

export const faqs = [
  { q: "What does SyGent do?", a: "SyGent is an AI and digital engineering studio. We design and build intelligent products, digital platforms, automation solutions, and immersive AR experiences." },
  { q: "What types of businesses do you work with?", a: "We work with startups and established businesses that want to turn an idea or a process challenge into a working digital product." },
  { q: "Do you develop custom AI solutions?", a: "Yes. We build custom AI systems, including AI agents, generative AI features, and machine learning solutions shaped around your data and goals." },
  { q: "Can SyGent build an end-to-end digital platform?", a: "Yes. We can take a platform from discovery and design through development and deployment, covering web, mobile, and backend." },
  { q: "Do you develop AR and e-commerce experiences?", a: "Yes. Augmented reality and e-commerce development are both core services in our studio." },
  { q: "How can a business start working with SyGent?", a: "Share a few details through the contact form or schedule a meeting. We'll start with a conversation about your goals and the problem you want to solve." },
];

export const serviceOptions = services.map((s) => s.title).concat("Not sure yet");
export const budgetOptions = ["Under ₹2 lakh", "₹2–5 lakh", "₹5–15 lakh", "₹15 lakh+", "Prefer to discuss"];
