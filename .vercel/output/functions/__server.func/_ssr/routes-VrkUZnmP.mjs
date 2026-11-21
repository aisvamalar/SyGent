import { i as __toESM } from "../_runtime.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as contactFormSchema } from "./contact-form.schema-BTUgNRo-.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-y8qB80_F.mjs";
import { _ as Box, a as MousePointer2, b as ArrowLeft, c as Menu, d as LoaderCircle, f as CodeXml, g as BrainCircuit, h as ChevronDown, i as Phone, l as Maximize2, m as CircleAlert, n as Smartphone, o as Monitor, p as CircleCheck, r as Plus, s as MessageCircle, t as X, u as Mail, v as ArrowUpRight, x as ArrowDown, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-VrkUZnmP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-BQrt9XU8.png";
var navLinks = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Our Work",
		href: "#work"
	},
	{
		label: "Team",
		href: "#team"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var capabilities = [
	"Artificial Intelligence",
	"Generative AI",
	"AI Agents",
	"Machine Learning",
	"Automation",
	"Augmented Reality",
	"Web Development",
	"Mobile Development",
	"E-commerce"
];
var projects = [
	{
		id: "influnz",
		num: "01",
		name: "INFLUNZ",
		category: "Platform · AI Matching",
		summary: "A creator and business collaboration platform.",
		description: "A digital platform designed to connect creators and businesses through campaign discovery, AI-assisted creator matching, offer negotiation, and collaboration workflows.",
		platform: "Web",
		devices: ["web"]
	},
	{
		id: "speaksi",
		num: "02",
		name: "SPEAKSI",
		category: "AI · Speech",
		summary: "An AI-powered speech assistance application.",
		description: "SPEAKSI uses speech analysis and intelligent feedback to support pronunciation practice and provide personalised guidance.",
		platform: "Mobile app",
		devices: ["mobile"]
	},
	{
		id: "carepath",
		num: "03",
		name: "CAREPATH",
		category: "Healthcare · Analytics",
		summary: "A healthcare-focused digital platform.",
		description: "CAREPATH brings together patient-focused experiences, care coordination, and intelligent analytics to support healthcare workflows.",
		platform: "Web",
		devices: ["web"]
	},
	{
		id: "redwolf",
		num: "04",
		name: "REDWOLF",
		category: "Augmented Reality · 3D",
		summary: "An augmented reality experience platform.",
		description: "REDWOLF explores how augmented reality can connect physical and digital environments through immersive 3D experiences.",
		platform: "Web and mobile web",
		devices: ["web", "mobile"]
	}
];
var founders = [
	{
		name: "Vishwa",
		expertise: ["AGENTS", "END-TO-END PLATFORM"]
	},
	{
		name: "Janani",
		expertise: ["AI AGENTS", "GEN AI"]
	},
	{
		name: "Aisva Malar",
		expertise: [
			"END-TO-END PLATFORM",
			"E-COMMERCE",
			"AR DEVELOPMENT"
		]
	},
	{
		name: "Subitsha",
		expertise: ["AI AGENTS", "GEN AI"]
	},
	{
		name: "Rayyan",
		expertise: [
			"END-TO-END PLATFORM",
			"BACKEND",
			"E-COMMERCE"
		]
	}
];
var services = [
	{
		num: "01",
		title: "Artificial Intelligence & Machine Learning",
		text: "Intelligent systems that transform data into useful insights and practical solutions."
	},
	{
		num: "02",
		title: "AI Agents & Automation",
		text: "AI-powered agents and automation workflows that help businesses streamline processes and improve productivity."
	},
	{
		num: "03",
		title: "Augmented Reality Development",
		text: "Immersive AR experiences and interactive 3D solutions that connect digital content with the real world."
	},
	{
		num: "04",
		title: "Web & Mobile Application Development",
		text: "Scalable, user-focused digital platforms and applications designed for real-world business needs."
	},
	{
		num: "05",
		title: "E-commerce Development",
		text: "Modern e-commerce experiences and digital commerce solutions built to support business growth."
	}
];
var reasons = [
	{
		title: "Intelligence First",
		text: "We approach challenges with intelligent thinking and practical AI capabilities."
	},
	{
		title: "Purposeful Innovation",
		text: "We focus on building technology that solves meaningful problems."
	},
	{
		title: "End-to-End Engineering",
		text: "From concept to implementation, we bring ideas into functional digital products."
	},
	{
		title: "Built for Growth",
		text: "We create solutions with scalability, usability, and long-term value in mind."
	}
];
var steps = [
	{
		num: "01",
		title: "DISCOVER",
		text: "Understand the business, its goals, and the problem to solve."
	},
	{
		num: "02",
		title: "DESIGN",
		text: "Define the experience, architecture, and solution direction."
	},
	{
		num: "03",
		title: "DEVELOP",
		text: "Build, integrate, and refine the digital solution."
	},
	{
		num: "04",
		title: "DEPLOY",
		text: "Launch, evaluate, and continue improving."
	}
];
var faqs = [
	{
		q: "What does SyGent do?",
		a: "SyGent is an AI and digital engineering studio. We design and build intelligent products, digital platforms, automation solutions, and immersive AR experiences."
	},
	{
		q: "What types of businesses do you work with?",
		a: "We work with startups and established businesses that want to turn an idea or a process challenge into a working digital product."
	},
	{
		q: "Do you develop custom AI solutions?",
		a: "Yes. We build custom AI systems, including AI agents, generative AI features, and machine learning solutions shaped around your data and goals."
	},
	{
		q: "Can SyGent build an end-to-end digital platform?",
		a: "Yes. We can take a platform from discovery and design through development and deployment, covering web, mobile, and backend."
	},
	{
		q: "Do you develop AR and e-commerce experiences?",
		a: "Yes. Augmented reality and e-commerce development are both core services in our studio."
	},
	{
		q: "How can a business start working with SyGent?",
		a: "Share a few details through the contact form or schedule a meeting. We'll start with a conversation about your goals and the problem you want to solve."
	}
];
var serviceOptions = services.map((s) => s.title).concat("Not sure yet");
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 20);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: `flex items-center justify-between gap-4 rounded-full border bg-background/85 py-2 pl-2 pr-2 backdrop-blur-md transition-shadow duration-500 ${scrolled ? "shadow-[0_10px_40px_-20px_var(--ink)]" : ""}`,
				"aria-label": "Main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#home",
						className: "flex shrink-0 items-center rounded-full bg-ink px-4 py-2",
						"aria-label": "SyGent home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "SyGent — Intelligence meets innovation.",
							className: "h-8 w-auto sm:h-9"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
							children: l.label
						}) }, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "group hidden items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:text-ink-foreground transition-colors hover:bg-brand lg:inline-flex",
						children: ["Schedule a Meeting ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "grid h-11 w-11 place-items-center rounded-full bg-secondary lg:hidden",
						onClick: () => setOpen(!open),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 rounded-3xl border bg-background p-4 lg:hidden",
				children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "block border-b py-4 font-display text-2xl font-bold last:border-0",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "mt-3 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 font-semibold text-ink-foreground",
					children: ["Schedule a Meeting ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})]
			})]
		})
	});
}
var items = [
	{
		id: "ai",
		label: "AI",
		name: "Artificial intelligence",
		description: "Adaptive systems, agents and intelligent automation.",
		icon: BrainCircuit
	},
	{
		id: "ar",
		label: "AR",
		name: "Augmented reality",
		description: "Immersive 3D experiences connecting physical and digital worlds.",
		icon: Box
	},
	{
		id: "web",
		label: "WEB",
		name: "Digital products",
		description: "Web, mobile and e-commerce platforms engineered to scale.",
		icon: CodeXml
	}
];
function ProductComposer({ active, onSelect }) {
	const selected = items[active];
	const SelectedIcon = selected.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-fade": true,
		className: "relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "absolute -inset-3 -z-10 rounded-[2.5rem] border border-brand/15"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[2rem] border bg-paper/80 p-4 shadow-[0_40px_120px_-50px_var(--brand)] sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4 px-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-1.5 w-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" })]
						}), "SYGENT / LIVING IDENTITY"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 font-display text-xs font-bold text-brand",
						children: [
							"0",
							active + 1,
							" / 03"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-5 overflow-hidden rounded-[1.5rem] border bg-background",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b px-4 py-3 text-[8px] font-bold tracking-[0.17em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MORPHING LIVE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MousePointer2, { className: "h-3 w-3 text-brand" }), " MOVE TO DISRUPT"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "blueprint-grid relative aspect-[14/11]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleCanvas, { shape: selected.id }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									"aria-hidden": "true",
									className: "absolute left-4 top-4 h-3.5 w-3.5 text-brand/60"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									"aria-hidden": "true",
									className: "absolute bottom-4 right-4 h-3.5 w-3.5 text-brand/60"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"aria-hidden": "true",
									className: "absolute bottom-4 left-4 text-[7px] font-bold tracking-[0.2em] text-muted-foreground",
									children: ["FORM / ", selected.label]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 border-t",
							children: items.map((item, index) => {
								const Icon = item.icon;
								const isActive = index === active;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-label": `Show ${item.name}`,
									"aria-pressed": isActive,
									onClick: () => onSelect(index),
									className: `flex items-center justify-center gap-2 border-r px-3 py-4 text-[10px] font-bold tracking-[0.14em] transition-colors last:border-r-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand ${isActive ? "bg-brand text-ink-foreground" : "text-muted-foreground hover:bg-brand-soft/20 hover:text-brand"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-4 w-4",
											strokeWidth: 1.7
										}),
										" ",
										item.label
									]
								}, item.id);
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-24 px-1 pb-1 pt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500 motion-reduce:animate-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedIcon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-bold",
							children: selected.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted-foreground",
							children: selected.description
						})] })]
					}, selected.id)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-1 h-px overflow-hidden bg-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full origin-left bg-brand animate-[engine-progress_5s_linear] motion-reduce:animate-none" }, active)
				})
			]
		})]
	});
}
function ParticleCanvas({ shape }) {
	const canvasRef = (0, import_react.useRef)(null);
	const particlesRef = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");
		if (!canvas || !context) return;
		const width = 560;
		const height = 440;
		canvas.width = width;
		canvas.height = height;
		const targets = createTextTargets(shape, width, height);
		const previous = particlesRef.current;
		const particles = targets.map((target, index) => previous[index] ?? {
			x: width / 2 + (Math.random() - .5) * width,
			y: height / 2 + (Math.random() - .5) * height,
			vx: 0,
			vy: 0
		});
		particlesRef.current = particles;
		const brand = getComputedStyle(document.documentElement).getPropertyValue("--brand").trim();
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const mouse = {
			x: -1e3,
			y: -1e3
		};
		let frame = 0;
		function draw() {
			if (!context) return;
			context.clearRect(0, 0, width, height);
			context.fillStyle = brand;
			particles.forEach((particle, index) => {
				const target = targets[index];
				if (reducedMotion) {
					particle.x = target.x;
					particle.y = target.y;
				} else {
					const dx = target.x - particle.x;
					const dy = target.y - particle.y;
					particle.vx = (particle.vx + dx * .018) * .88;
					particle.vy = (particle.vy + dy * .018) * .88;
					const mouseX = particle.x - mouse.x;
					const mouseY = particle.y - mouse.y;
					const distance = Math.hypot(mouseX, mouseY);
					if (distance < 85 && distance > 0) {
						const force = (85 - distance) / 85;
						particle.vx += mouseX / distance * force * 3.2;
						particle.vy += mouseY / distance * force * 3.2;
					}
					particle.x += particle.vx;
					particle.y += particle.vy;
				}
				context.globalAlpha = .58 + index % 6 * .075;
				context.beginPath();
				context.arc(particle.x, particle.y, index % 13 === 0 ? 2.1 : 1.25, 0, Math.PI * 2);
				context.fill();
			});
			context.globalAlpha = 1;
			if (!reducedMotion) frame = window.requestAnimationFrame(draw);
		}
		function onPointerMove(event) {
			const bounds = canvasRef.current?.getBoundingClientRect();
			if (!bounds) return;
			mouse.x = (event.clientX - bounds.left) / bounds.width * width;
			mouse.y = (event.clientY - bounds.top) / bounds.height * height;
		}
		function onPointerLeave() {
			mouse.x = -1e3;
			mouse.y = -1e3;
		}
		canvas.addEventListener("pointermove", onPointerMove);
		canvas.addEventListener("pointerleave", onPointerLeave);
		draw();
		return () => {
			window.cancelAnimationFrame(frame);
			canvas.removeEventListener("pointermove", onPointerMove);
			canvas.removeEventListener("pointerleave", onPointerLeave);
		};
	}, [shape]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		"aria-hidden": "true",
		className: "block h-full w-full"
	});
}
function createTextTargets(shape, width, height) {
	const buffer = document.createElement("canvas");
	buffer.width = width;
	buffer.height = height;
	const context = buffer.getContext("2d", { willReadFrequently: true });
	if (!context) return [{
		x: width / 2,
		y: height / 2
	}];
	const label = shape === "web" ? "WEB" : shape.toUpperCase();
	const fontSize = shape === "web" ? 158 : 220;
	context.fillStyle = "currentColor";
	context.font = `800 ${fontSize}px Archivo, sans-serif`;
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText(label, width / 2, height / 2 + 8);
	const pixels = context.getImageData(0, 0, width, height).data;
	const points = [];
	const step = 5;
	for (let y = 0; y < height; y += step) for (let x = 0; x < width; x += step) if ((pixels[(y * width + x) * 4 + 3] ?? 0) > 100) points.push({
		x,
		y
	});
	if (points.length === 0) return [{
		x: width / 2,
		y: height / 2
	}];
	const count = Math.min(1500, Math.max(900, points.length));
	return Array.from({ length: count }, (_, index) => points[index % points.length]);
}
var lines = [
	{ text: "WE BUILD" },
	{
		text: "DIGITAL",
		outline: true
	},
	{
		text: "EXPERIENCES",
		editorial: true
	},
	{ text: "THAT MOVE" },
	{ text: "BUSINESS" },
	{
		text: "FORWARD.",
		accent: true
	}
];
var modes = [
	{
		label: "ARTIFICIAL INTELLIGENCE",
		icon: BrainCircuit,
		stream: "Building intelligent systems that learn, adapt and turn complex workflows into effortless experiences."
	},
	{
		label: "AUGMENTED REALITY",
		icon: Box,
		stream: "Blending digital imagination with the physical world through immersive, interactive AR experiences."
	},
	{
		label: "DIGITAL PRODUCTS",
		icon: CodeXml,
		stream: "Engineering fast, scalable web and mobile products around real people and measurable business growth."
	}
];
function StreamingText({ text }) {
	const [visibleText, setVisibleText] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setVisibleText(text);
			return;
		}
		let character = 0;
		const timer = window.setInterval(() => {
			character += 1;
			setVisibleText(text.slice(0, character));
			if (character >= text.length) window.clearInterval(timer);
		}, 24);
		return () => window.clearInterval(timer);
	}, [text]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		"aria-label": text,
		className: "min-h-[3.75rem] text-sm leading-relaxed text-muted-foreground sm:min-h-[3.5rem] sm:text-base",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: visibleText
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "ml-1 inline-block h-[1.05em] w-[2px] translate-y-[0.18em] bg-brand animate-pulse motion-reduce:hidden"
		})]
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	const ActiveModeIcon = modes[active].icon;
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let ctx;
		import("../_libs/gsap.mjs").then((n) => n.t).then(({ gsap }) => {
			ctx = gsap.context(() => {
				gsap.from("[data-line]", {
					yPercent: 110,
					duration: 1.1,
					ease: "power4.out",
					stagger: .07
				});
				gsap.from("[data-fade]", {
					opacity: 0,
					y: 24,
					duration: 1,
					delay: .45,
					stagger: .1,
					ease: "power3.out"
				});
			}, el);
		});
		return () => ctx?.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = window.setTimeout(() => setActive((current) => (current + 1) % modes.length), 5e3);
		return () => window.clearTimeout(timer);
	}, [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref,
		className: "relative isolate overflow-hidden border-b pb-12 pt-32 sm:pb-16 sm:pt-40 lg:pt-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand-soft/20 blur-3xl"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "pointer-events-none absolute -left-20 top-2 -z-10 select-none font-display text-[25rem] font-bold leading-none text-brand-soft/10 sm:text-[32rem]",
							children: "S"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-fade": true,
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-7 w-7 place-items-center rounded-full border border-brand/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 text-brand" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "AI & DIGITAL ENGINEERING STUDIO"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "absolute -left-8 top-0 hidden h-full flex-col justify-between py-2 xl:flex",
								children: modes.map((mode, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-px transition-all duration-500 ${index === active ? "h-16 bg-brand" : "h-8 bg-border"}` }, mode.label))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-[clamp(2.75rem,5.2vw,5rem)] font-bold leading-[0.88] tracking-[-0.05em]",
								children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block overflow-hidden pb-[0.08em]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"data-line": true,
										className: `block ${line.editorial ? "font-editorial font-normal italic tracking-[-0.055em]" : ""} ${line.accent ? "text-brand" : ""} ${line.outline ? "text-transparent [-webkit-text-stroke:1.25px_var(--foreground)]" : ""}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative inline-block",
											children: [line.text, line.accent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												className: "absolute bottom-0 left-0 h-[0.055em] w-full origin-left bg-brand animate-[forward-line_5s_ease-in-out_infinite] motion-reduce:animate-none"
											}) : null]
										})
									})
								}, line.text))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-fade": true,
							className: "relative mt-7 max-w-xl overflow-hidden rounded-xl border bg-paper/45",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 border-b px-4 py-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex h-2 w-2 shrink-0",
											"aria-hidden": "true",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-brand" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[8px] font-bold tracking-[0.18em] text-muted-foreground",
											children: ["LIVE STREAM / 0", active + 1]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-3 w-px bg-border",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-w-0 items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-500 motion-reduce:animate-none",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveModeIcon, { className: "h-3.5 w-3.5 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate font-display text-[9px] font-bold tracking-[0.08em] text-brand sm:text-[10px]",
												children: modes[active].label
											})]
										}, active)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative px-4 py-4 pl-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "absolute bottom-4 left-4 top-4 w-px bg-brand/30"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pl-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StreamingText, { text: modes[active].stream }, active)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-0.5 overflow-hidden bg-border",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-full origin-left bg-brand animate-[engine-progress_5s_linear] motion-reduce:animate-none" }, active)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-fade": true,
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-ink-foreground transition-colors hover:bg-foreground hover:text-background",
								children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#work",
								className: "group inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-4 font-semibold transition-colors hover:border-brand hover:text-brand",
								children: ["Explore our work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-4 w-4 transition-transform group-hover:translate-y-0.5" })]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductComposer, {
					active,
					onSelect: setActive
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-fade": true,
				className: "mt-14 flex items-center justify-between gap-6 border-t pt-5 text-[10px] font-bold tracking-[0.18em] text-muted-foreground sm:text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INTELLIGENCE MEETS INNOVATION." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#work",
					className: "group flex shrink-0 items-center gap-2 transition-colors hover:text-brand",
					children: ["SCROLL TO EXPLORE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-4 w-4 transition-transform group-hover:translate-y-1" })]
				})]
			})]
		})]
	});
}
function Capabilities() {
	const items = [...capabilities, ...capabilities];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Capabilities",
		className: "overflow-hidden border-y bg-paper py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee flex w-max gap-10",
			children: items.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-10 whitespace-nowrap font-display text-2xl font-semibold tracking-tight sm:text-3xl",
				"aria-hidden": i >= capabilities.length,
				children: [c, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-brand",
					children: "✦"
				})]
			}, i))
		})
	});
}
/** Fades/slides children in on scroll with GSAP ScrollTrigger. Respects reduced motion. */
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let ctx;
		let cancelled = false;
		(async () => {
			const { gsap } = await import("../_libs/gsap.mjs").then((n) => n.t);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			if (cancelled) return;
			gsap.registerPlugin(ScrollTrigger);
			ctx = gsap.context(() => {
				gsap.from(el, {
					y: 40,
					opacity: 0,
					duration: 1,
					delay,
					ease: "power3.out",
					scrollTrigger: {
						trigger: el,
						start: "top 88%",
						once: true
					}
				});
			});
		})();
		return () => {
			cancelled = true;
			ctx?.revert();
		};
	}, [delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className,
		children
	});
}
var projectGalleries = {
	influnz: [{
		src: "/assets/influn_1-CKzi_CBe.png",
		alt: "Influnz desktop website landing page",
		width: 1920,
		height: 1160,
		device: "web",
		deviceLabel: "Desktop web",
		title: "Landing page"
	}, {
		src: "/assets/influnz2-CSLl3pzl.png",
		alt: "Influnz desktop campaign builder with AI assistant",
		width: 1920,
		height: 1034,
		device: "web",
		deviceLabel: "Desktop web",
		title: "AI campaign dashboard"
	}],
	speaksi: [
		{
			src: "/assets/speaksi1-CTzzHuGz.png",
			alt: "SPEAKSI mobile app welcome screen with speech recognition and magic spell",
			width: 859,
			height: 1654,
			device: "mobile",
			deviceLabel: "Mobile app",
			title: "Welcome"
		},
		{
			src: "/assets/speak2-CfwwWDZP.png",
			alt: "SPEAKSI mobile app battery care reminder screen",
			width: 796,
			height: 1889,
			device: "mobile",
			deviceLabel: "Mobile app",
			title: "Battery care reminder"
		},
		{
			src: "/assets/speaksi3-DtoMjEMX.png",
			alt: "SPEAKSI mobile app hearing aid monitor screen",
			width: 849,
			height: 1879,
			device: "mobile",
			deviceLabel: "Mobile app",
			title: "Hearing aid monitor"
		}
	],
	carepath: [{
		src: "/assets/care1-lSy2ghX6.png",
		alt: "CAREPATH desktop website secure login",
		width: 1920,
		height: 1070,
		device: "web",
		deviceLabel: "Desktop web",
		title: "Secure login"
	}, {
		src: "/assets/care2-BnE7TsnG.png",
		alt: "CAREPATH desktop patient dashboard and AI triage",
		width: 1920,
		height: 1031,
		device: "web",
		deviceLabel: "Desktop web",
		title: "Patient dashboard and AI triage"
	}],
	redwolf: [
		{
			src: "/assets/red1-b4DLbt21.png",
			alt: "REDWOLF MEDIA desktop website with AR experience and product catalogue",
			width: 1679,
			height: 1124,
			device: "web",
			deviceLabel: "Desktop web",
			title: "AR experience and catalogue"
		},
		{
			src: "/assets/red2-Cc4rsyWY.png",
			alt: "REDWOLF MEDIA mobile website product catalogue",
			width: 714,
			height: 1409,
			device: "mobile",
			deviceLabel: "Mobile web",
			title: "Product catalogue"
		},
		{
			src: "/assets/red3--dm4ZFFm.png",
			alt: "REDWOLF MEDIA mobile website 32-inch Easel Standee product details",
			width: 709,
			height: 1399,
			device: "mobile",
			deviceLabel: "Mobile web",
			title: "Product details and AR view"
		}
	]
};
/**
* A project screenshot shown in the Our Work section.
* Clicking it opens the same image at its full size, so small UI text stays readable.
*/
function Shot({ src, alt, width, height, className = "" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = previousOverflow;
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => setOpen(true),
		"aria-label": `View ${alt} full size`,
		className: `block w-full cursor-zoom-in overflow-hidden rounded-2xl border shadow-[0_30px_80px_-40px_var(--ink)] transition-shadow duration-500 hover:shadow-[0_45px_100px_-40px_var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			width,
			height,
			loading: "lazy",
			decoding: "async",
			className: "block h-auto w-full"
		})
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": alt,
		onClick: () => setOpen(false),
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md sm:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setOpen(false),
			"aria-label": "Close full-size view",
			className: "absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border bg-paper text-ink-foreground transition-colors hover:bg-brand hover:text-ink-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			onClick: (event) => event.stopPropagation(),
			style: {
				maxWidth: `min(100%, ${width}px)`,
				maxHeight: `min(100%, ${height}px)`
			},
			className: "h-auto w-auto rounded-xl border object-contain shadow-[0_60px_160px_-40px_var(--ink)]"
		})]
	}) : null] });
}
function FeaturedWork() {
	const [activeId, setActiveId] = (0, import_react.useState)(projects[0].id);
	const [screenIndex, setScreenIndex] = (0, import_react.useState)(0);
	const activeProject = projects.find((project) => project.id === activeId) ?? projects[0];
	const gallery = projectGalleries[activeProject.id];
	const currentScreen = gallery[screenIndex] ?? gallery[0];
	const DeviceIcon = currentScreen.device === "web" ? Monitor : Smartphone;
	function selectProject(id) {
		setActiveId(id);
		setScreenIndex(0);
	}
	function changeScreen(direction) {
		setScreenIndex((current) => (current + direction + gallery.length) % gallery.length);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "py-24 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-12 grid gap-6 md:grid-cols-2 md:items-end sm:mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-brand",
					children: "SELECTED PROJECTS / 04"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg",
					children: "OUR WORK"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-lg text-muted-foreground md:justify-self-end",
					children: "Four products, explored up close. Choose a project, browse its screens, and zoom into the details."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-w-0 overflow-hidden rounded-[2rem] border bg-paper lg:grid-cols-[270px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 border-b lg:border-b-0 lg:border-r",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center justify-between border-b px-6 py-5 lg:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "PROJECT INDEX"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xs font-bold text-brand",
								children: "01—04"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": "Choose a project",
							className: "flex overflow-x-auto lg:block lg:overflow-visible",
							children: projects.map((project) => {
								const isActive = project.id === activeProject.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": isActive,
									"aria-controls": "project-showcase",
									onClick: () => selectProject(project.id),
									className: `group relative min-w-[175px] flex-1 border-r px-5 py-5 text-left transition-colors last:border-r-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand lg:flex lg:w-full lg:min-w-0 lg:items-center lg:gap-4 lg:border-b lg:border-r-0 lg:px-6 lg:py-7 ${isActive ? "bg-brand-soft/25" : "hover:bg-background/50"}`,
									children: [
										isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute inset-y-0 left-0 w-0.5 bg-brand",
											"aria-hidden": "true"
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-display text-xs font-bold ${isActive ? "text-brand" : "text-muted-foreground"}`,
											children: project.num
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-1 block lg:mt-0 lg:flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-display text-lg font-bold tracking-tight",
												children: project.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 hidden text-[10px] font-semibold uppercase tracking-wider text-muted-foreground lg:block",
												children: project.platform
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											className: `hidden h-4 w-4 shrink-0 transition-all lg:block ${isActive ? "text-brand opacity-100" : "opacity-0 group-hover:opacity-60"}`,
											"aria-hidden": "true"
										})
									]
								}, project.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden border-t p-6 lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground",
								children: "Select a project to open its interactive case-study gallery."
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					id: "project-showcase",
					"aria-live": "polite",
					className: "min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-in fade-in duration-500 motion-reduce:animate-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-7 p-6 sm:p-8 xl:grid-cols-[1fr_1.1fr] xl:gap-12 xl:p-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "eyebrow text-brand",
										children: [
											"PROJECT ",
											activeProject.num,
											" / ",
											activeProject.category
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-4xl font-bold sm:text-5xl",
										children: activeProject.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-lg text-lg font-semibold",
										children: activeProject.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex flex-wrap gap-2",
										"aria-label": `Available on ${activeProject.platform}`,
										children: [activeProject.devices.includes("web") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 rounded-full border bg-background px-3 py-2 text-[10px] font-bold uppercase tracking-wider",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, {
												className: "h-3.5 w-3.5 text-brand",
												"aria-hidden": "true"
											}), " Web"]
										}) : null, activeProject.devices.includes("mobile") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 rounded-full border bg-background px-3 py-2 text-[10px] font-bold uppercase tracking-wider",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, {
													className: "h-3.5 w-3.5 text-brand",
													"aria-hidden": "true"
												}),
												" ",
												activeProject.id === "speaksi" ? "Mobile app" : "Mobile web"
											]
										}) : null]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-2xl leading-relaxed text-muted-foreground",
										children: activeProject.description
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "group mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold underline-offset-8 hover:underline",
										children: ["Start a similar project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-y bg-background/45 p-4 sm:p-6 lg:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5 flex flex-wrap items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-w-0 items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceIcon, {
												className: "h-4 w-4",
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[9px] font-bold uppercase tracking-[0.16em] text-brand",
												children: currentScreen.deviceLabel
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-semibold",
												children: currentScreen.title
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mr-2 font-display text-xs font-bold text-muted-foreground",
												children: [
													"0",
													screenIndex + 1,
													" / 0",
													gallery.length
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => changeScreen(-1),
												"aria-label": "Previous screen",
												className: "grid h-10 w-10 place-items-center rounded-full border transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => changeScreen(1),
												"aria-label": "Next screen",
												className: "grid h-10 w-10 place-items-center rounded-full border transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "blueprint-grid grid min-h-[280px] place-items-center rounded-2xl border p-3 sm:min-h-[360px] sm:p-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `relative w-full animate-in fade-in zoom-in-95 duration-500 motion-reduce:animate-none ${currentScreen.device === "mobile" ? "max-w-[310px]" : "max-w-[1100px]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shot, {
											src: currentScreen.src,
											alt: currentScreen.alt,
											width: currentScreen.width,
											height: currentScreen.height
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border bg-background/90 px-3 py-2 text-[9px] font-bold uppercase tracking-wider backdrop-blur-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, {
												className: "h-3 w-3 text-brand",
												"aria-hidden": "true"
											}), " Click to zoom"]
										})]
									}, currentScreen.src)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-4 sm:p-6 lg:p-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid gap-3 ${gallery.length === 2 ? "grid-cols-2" : "grid-cols-3"}`,
									"aria-label": `${activeProject.name} screens`,
									children: gallery.map((screen, index) => {
										const isActive = index === screenIndex;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-pressed": isActive,
											"aria-label": `Show ${screen.title}`,
											onClick: () => setScreenIndex(index),
											className: `group min-w-0 overflow-hidden rounded-xl border text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${isActive ? "border-brand bg-brand-soft/20" : "hover:border-brand/50"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block aspect-[16/8] overflow-hidden border-b bg-background",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: screen.src,
													alt: "",
													width: screen.width,
													height: screen.height,
													loading: "lazy",
													decoding: "async",
													className: "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block p-2.5 sm:p-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: `block text-[8px] font-bold uppercase tracking-[0.14em] ${isActive ? "text-brand" : "text-muted-foreground"}`,
													children: [
														"0",
														index + 1,
														" / ",
														screen.deviceLabel
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 block truncate text-[11px] font-semibold sm:text-xs",
													children: screen.title
												})]
											})]
										}, screen.src);
									})
								})
							})
						]
					}, activeProject.id)
				})]
			}) })]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-ink py-24 text-ink-foreground sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-12 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-6 text-ink-muted",
					children: "About SyGent"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-lg",
					children: [
						"INTELLIGENCE",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"MEETS ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "INNOVATION."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .15,
				className: "space-y-6 text-lg leading-relaxed text-ink-muted lg:col-span-5 lg:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-semibold leading-snug text-ink-foreground",
						children: "At SyGent, we believe technology should do more than solve problems. It should create possibilities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We combine artificial intelligence, software engineering, automation, and immersive technology to build meaningful digital experiences." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From early-stage ideas to end-to-end digital products, our focus is on turning complex challenges into practical, scalable solutions." })
				]
			})]
		})
	});
}
function FoundingTeam() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "team",
		className: "py-24 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-6",
					children: "THE PEOPLE BUILDING SYGENT"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-2 md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-lg",
						children: [
							"FIVE FOUNDERS.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"ONE SHARED VISION."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-lg text-muted-foreground md:justify-self-end",
						children: "A multidisciplinary founding team bringing together AI innovation, platform engineering, and digital product development."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid border-t sm:grid-cols-2 lg:grid-cols-6",
				children: founders.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: i * .06,
					className: `group relative flex min-h-64 flex-col justify-between overflow-hidden border-b p-6 transition-colors duration-500 hover:bg-ink hover:text-ink-foreground sm:p-8 lg:col-span-2 ${i >= 3 ? "lg:col-span-3" : ""} sm:border-r`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-sm font-bold text-brand",
						children: ["0", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-4xl font-bold uppercase sm:text-5xl",
						children: f.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground transition-colors group-hover:text-ink-muted",
						children: f.expertise.join(" / ")
					})] })]
				}, f.name))
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "bg-paper py-24 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-16 grid gap-6 md:grid-cols-2 md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg",
					children: "WHAT WE DO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-lg text-muted-foreground md:justify-self-end",
					children: "We bring intelligence and engineering together to create technology that makes a difference."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "border-t border-foreground/15",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					className: "group border-b border-foreground/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "grid gap-4 py-10 transition-all duration-500 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-8 sm:group-hover:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-bold text-brand",
								children: s.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 lg:grid-cols-2 lg:items-center lg:gap-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl font-bold sm:text-4xl",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: s.text
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden h-14 w-14 place-items-center rounded-full border border-foreground/20 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-ink-foreground sm:grid",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5" })
							})
						]
					})
				}, s.num))
			})]
		})
	});
}
function WhySyGent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-lg mb-16 max-w-4xl",
				children: "WHY BUILD WITH SYGENT?"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .08,
					className: `group rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1 sm:p-12 ${i === 1 || i === 2 ? "bg-ink text-ink-foreground" : "bg-paper"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-sm font-bold text-brand",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-16 font-display text-3xl font-bold sm:text-4xl",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-4 max-w-sm ${i === 1 || i === 2 ? "text-ink-muted" : "text-muted-foreground"}`,
							children: r.text
						})
					]
				}, r.title))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink py-24 text-ink-foreground sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-6 text-ink-muted",
				children: "Our Process"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-lg mb-20",
				children: "FROM IDEA TO IMPACT."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative grid gap-12 border-l border-ink-muted/40 pl-8 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-12",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: i * .1,
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[2.4rem] top-1 h-3 w-3 rounded-full bg-brand lg:-top-[3.45rem] lg:left-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-bold text-brand",
							children: s.num
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-3xl font-bold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xs text-ink-muted",
							children: s.text
						})
					]
				}, s.num))
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-12 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-6",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg",
					children: "LET'S CLEAR THINGS UP."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "border-t",
					children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `q${i}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "py-7 text-left font-display text-xl font-bold hover:no-underline sm:text-2xl",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "pb-7 text-base text-muted-foreground",
							children: f.a
						})]
					}, f.q))
				})
			})]
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitContactForm$ = createServerFn({ method: "POST" }).validator((data) => {
	const result = contactFormSchema.safeParse(data);
	if (!result.success) throw new Error(result.error.errors[0]?.message || "Invalid form data");
	return result.data;
}).handler(createSsrRpc("82d837babb1b42fb2153f7d8d449e1a15ef05107fd75fa8c3f03e3eddd02587d"));
function Field({ label, optional, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [label, optional && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1 normal-case tracking-normal",
					children: "(optional)"
				})]
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm text-destructive",
				children: error
			})
		]
	});
}
var field = "w-full border-0 border-b border-input bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand";
var selectField = "w-full border-0 border-b border-input bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand [&>option]:bg-card [&>option]:text-foreground";
var budgetRanges = [
	{
		value: 0,
		label: "₹20k - ₹50k"
	},
	{
		value: 1,
		label: "₹50k - ₹1L"
	},
	{
		value: 2,
		label: "₹1L - ₹2L"
	},
	{
		value: 3,
		label: "₹2L - ₹5L"
	},
	{
		value: 4,
		label: "₹5L - ₹10L"
	},
	{
		value: 5,
		label: "₹10L - ₹25L"
	},
	{
		value: 6,
		label: "₹25L+"
	}
];
function Contact() {
	const [submitState, setSubmitState] = (0, import_react.useState)("idle");
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const [budgetIndex, setBudgetIndex] = (0, import_react.useState)(2);
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		resolver: u(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			company: "",
			phone: "",
			website: "",
			service: "",
			description: "",
			budget: ""
		}
	});
	const onSubmit = async (data) => {
		setSubmitState("loading");
		setErrorMessage("");
		const budgetValue = budgetRanges[budgetIndex].label;
		const submissionData = {
			...data,
			budget: budgetValue
		};
		try {
			const result = await submitContactForm$({ data: submissionData });
			if (result.success) {
				setSubmitState("success");
				reset();
				setBudgetIndex(2);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-paper py-24 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-16 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-lg",
						children: ["HAVE AN IDEA? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "LET'S BUILD IT."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-md text-lg text-muted-foreground",
						children: "Tell us what you're imagining. Let's explore how the right technology can bring it to life."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Get in Touch"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/919384157111",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#20BA5A] hover:shadow-lg hover:shadow-[#25D366]/25",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base",
										children: "Contact Us"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+919384157111",
										className: "group flex items-center gap-3 text-lg transition-colors hover:text-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand/20",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-brand" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-muted-foreground",
											children: "Call"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: "+91 93841 57111"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+918608978710",
										className: "group flex items-center gap-3 text-lg transition-colors hover:text-brand ml-[52px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: "+91 86089 78710"
										}) })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:vishwa.fury@gmail.com",
									className: "group flex items-center gap-3 text-lg transition-colors hover:text-brand",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-brand" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: "vishwa.fury@gmail.com"
									})] })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 rounded-2xl border border-border bg-card/50 p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Based in India, working with businesses across the globe."
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit(onSubmit),
					noValidate: true,
					className: "grid gap-8 rounded-3xl bg-card p-6 sm:grid-cols-2 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							error: errors.name?.message,
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: field,
								...register("name"),
								autoComplete: "name",
								disabled: submitState === "loading"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							error: errors.email?.message,
							label: "Business Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								className: field,
								...register("email"),
								autoComplete: "email",
								disabled: submitState === "loading"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							error: errors.company?.message,
							label: "Company",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: field,
								...register("company"),
								autoComplete: "organization",
								disabled: submitState === "loading"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							error: errors.phone?.message,
							label: "Phone Number",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								className: field,
								...register("phone"),
								autoComplete: "tel",
								disabled: submitState === "loading"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							error: errors.website?.message,
							label: "Website",
							optional: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: field,
								...register("website"),
								placeholder: "yourcompany.com",
								disabled: submitState === "loading"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							error: errors.service?.message,
							label: "Service Required",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: selectField,
								...register("service"),
								disabled: submitState === "loading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a service"
								}), serviceOptions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: s
								}, s))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								error: errors.description?.message,
								label: "Project Description",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									className: `${field} resize-none`,
									...register("description"),
									disabled: submitState === "loading"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								error: errors.budget?.message,
								label: "Project Budget",
								optional: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-lg bg-brand/10 px-4 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground",
											children: "Selected:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-bold text-brand",
											children: budgetRanges[budgetIndex].label
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-4 gap-2",
										children: budgetRanges.map((range, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setBudgetIndex(index),
											disabled: submitState === "loading",
											className: `rounded-md border px-2 py-2 text-xs font-medium transition-all ${budgetIndex === index ? "border-brand bg-brand text-white" : "border-border bg-background text-foreground hover:border-brand/50"}`,
											children: range.label
										}, range.value))
									})]
								})
							})
						}),
						submitState === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "status",
							className: "flex gap-3 rounded-2xl border border-green-500/30 bg-green-50 p-4 text-sm sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-green-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-green-900",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Thank you! Your enquiry has been received." }), " We'll be in touch with you soon to discuss your project."]
							})]
						}),
						submitState === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "alert",
							className: "flex gap-3 rounded-2xl border border-red-500/30 bg-red-50 p-4 text-sm sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-red-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-red-900",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Unable to submit your enquiry." }),
									" ",
									errorMessage
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: submitState === "loading",
							className: "group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-5 font-semibold tracking-wide text-background transition-colors hover:bg-brand hover:text-ink-foreground disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2",
							children: submitState === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "SUBMITTING..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["SEND ENQUIRY", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })] })
						})
					]
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink pt-20 pb-10 text-ink-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 border-b border-ink-muted/30 pb-16 md:grid-cols-[1.5fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full max-w-[420px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "SyGent — Intelligence meets innovation.",
							className: "block h-auto w-full"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-5 text-ink-muted",
							children: "Navigate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: l.href,
								className: "hover:text-brand",
								children: l.label
							}) }, l.href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5 text-ink-muted",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "hover:text-brand",
							children: s.title
						}) }, s.num))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "pt-8 text-sm text-ink-muted",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" SyGent. All rights reserved."
				]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capabilities, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedWork, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoundingTeam, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhySyGent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
