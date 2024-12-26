import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/90 to-secondary min-h-[600px] flex items-center text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Encuentra la tarifa de luz más barata
          </h1>
          <p className="text-xl mb-8 animate-fade-in opacity-90">
            Compara las mejores tarifas de luz y ahorra en tu factura
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
            <form className="flex flex-col md:flex-row gap-4">
              <Input
                type="text"
                placeholder="Código postal"
                className="flex-1 text-gray-900"
              />
              <Button type="submit" className="bg-primary hover:bg-secondary">
                Comparar Ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};