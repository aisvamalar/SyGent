import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/site";
import { Reveal } from "./Reveal";

export function FAQ() {
  return (
    <section className="py-24 sm:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5"><p className="eyebrow mb-6">FAQ</p><h2 className="display-lg">LET'S CLEAR THINGS UP.</h2></Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <Accordion type="single" collapsible className="border-t">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger className="py-7 text-left font-display text-xl font-bold hover:no-underline sm:text-2xl">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-7 text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
