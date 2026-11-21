import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Capabilities } from "@/components/site/Capabilities";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { About } from "@/components/site/About";
import { FoundingTeam } from "@/components/site/FoundingTeam";
import { Services } from "@/components/site/Services";
import { WhySyGent } from "@/components/site/WhySyGent";
import { Process } from "@/components/site/Process";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "SyGent — AI & Digital Engineering Studio";
const description = "SyGent builds intelligent AI solutions, AI agents, AR experiences, web & mobile apps and e-commerce platforms that move business forward.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Capabilities /><FeaturedWork /><About /><FoundingTeam /><Services /><WhySyGent /><Process /><FAQ /><Contact />
      </main>
      <Footer />
    </>
  );
}
