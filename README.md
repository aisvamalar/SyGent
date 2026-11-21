# Supercode Studio Showcase

A modern, full-stack web application built with TanStack Start, React, and TypeScript.

## Tech Stack

- **Framework:** TanStack Start (full-stack React with SSR)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Build Tool:** Vite
- **Package Manager:** Bun

## Development

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) with npm

### Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd supercode-studio-showcase
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env` and fill in your Supabase credentials (if applicable).

4. Start the development server:
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
bun run build
# or
npm run build
```

The production build will be output to the `.output` directory, ready for deployment to Cloudflare Workers, Netlify, Vercel, or other platforms via Nitro presets.

## Project Structure

- `src/routes/` — Application routes (file-based routing via TanStack Router)
- `src/components/` — React components
- `src/lib/` — Utility functions and shared logic
- `src/data/` — Static site content and configuration
- `src/styles.css` — Global styles and Tailwind base imports

## Scripts

- `bun run dev` — Start development server
- `bun run build` — Build for production
- `bun run preview` — Preview production build locally
- `bun run lint` — Run ESLint
- `bun run format` — Format code with Prettier
- `bun run test` — Run tests (Vitest)

## License

[Add your license here]
