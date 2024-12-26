import { CircleIcon } from "lucide-react";

const steps = [
  {
    title: "Introduce tu código postal",
    description: "Para mostrarte las mejores ofertas disponibles en tu zona",
  },
  {
    title: "Compara las tarifas",
    description: "Analiza las diferentes opciones y elige la que más te convenga",
  },
  {
    title: "Ahorra en tu factura",
    description: "Cambia a una tarifa más económica y empieza a ahorrar",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Cómo funciona?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};