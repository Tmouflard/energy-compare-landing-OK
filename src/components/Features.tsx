import { Check, Shield, Clock, PiggyBank } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "100% Gratuito",
    description: "Sin costes ocultos ni compromiso",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Rápido y Sencillo",
    description: "Compara en menos de 2 minutos",
  },
  {
    icon: <Check className="h-8 w-8" />,
    title: "Servicio Oficial",
    description: "Comparador autorizado por la CNMC",
  },
  {
    icon: <PiggyBank className="h-8 w-8" />,
    title: "Ahorra hasta 300€",
    description: "En tu factura anual de la luz",
  },
];

export const Features = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};