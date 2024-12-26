import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto puedo ahorrar en mi factura?",
    answer: "El ahorro medio anual es de 300€, aunque puede variar según tu consumo y tarifa actual.",
  },
  {
    question: "¿Tiene algún coste el servicio?",
    answer: "No, nuestro servicio es completamente gratuito y sin compromiso.",
  },
  {
    question: "¿Cuánto tarda el cambio de compañía?",
    answer: "El proceso de cambio suele tardar entre 15-20 días hábiles.",
  },
  {
    question: "¿Se puede interrumpir el suministro durante el cambio?",
    answer: "No, el cambio de compañía no afecta al suministro de energía.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Preguntas Frecuentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};