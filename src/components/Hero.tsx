import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    energyType: "",
    clientType: "",
    houseType: "",
    currentCompany: "",
    monthlyBill: "",
    postalCode: "",
    city: "",
    fullName: "",
    email: "",
    phone: "",
    gdprConsent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="text-left text-gray-900">
                    <Label>¿Qué tipo de energía te interesa?</Label>
                    <RadioGroup
                      onValueChange={(value) => handleInputChange("energyType", value)}
                      className="flex gap-4 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="luz" id="luz" />
                        <Label htmlFor="luz">Luz</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gas" id="gas" />
                        <Label htmlFor="gas">Gas</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both">Ambos</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="text-left text-gray-900">
                    <Label>Seleccione el tipo de cliente</Label>
                    <RadioGroup
                      onValueChange={(value) => handleInputChange("clientType", value)}
                      className="flex gap-4 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="particular" id="particular" />
                        <Label htmlFor="particular">Particular</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="empresa" id="empresa" />
                        <Label htmlFor="empresa">Empresa</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="text-left text-gray-900">
                    <Label>¿Qué tipo de vivienda tienes?</Label>
                    <Select onValueChange={(value) => handleInputChange("houseType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tipo de vivienda" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="piso">Piso</SelectItem>
                        <SelectItem value="casa">Casa</SelectItem>
                        <SelectItem value="chalet">Chalet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="button" onClick={handleNext} className="w-full">
                    Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="text-left text-gray-900">
                    <Label>¿Cuál es tu compañía actual?</Label>
                    <Select onValueChange={(value) => handleInputChange("currentCompany", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu compañía" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iberdrola">Iberdrola</SelectItem>
                        <SelectItem value="endesa">Endesa</SelectItem>
                        <SelectItem value="naturgy">Naturgy</SelectItem>
                        <SelectItem value="other">Otra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="text-left text-gray-900">
                    <Label>¿Cuál es el monto de tu factura mensual actual?</Label>
                    <Input
                      type="number"
                      placeholder="€/mes"
                      onChange={(e) => handleInputChange("monthlyBill", e.target.value)}
                    />
                  </div>

                  <div className="text-left text-gray-900">
                    <Label>Tu código postal</Label>
                    <Input
                      type="text"
                      placeholder="Código postal"
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    />
                  </div>

                  <Button type="button" onClick={handleNext} className="w-full">
                    Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="text-left text-gray-900">
                    <Label>Tu ciudad</Label>
                    <Input
                      type="text"
                      placeholder="Ciudad"
                      onChange={(e) => handleInputChange("city", e.target.value)}
                    />
                  </div>

                  <div className="text-left text-gray-900">
                    <Label>Tu nombre y apellidos</Label>
                    <Input
                      type="text"
                      placeholder="Nombre completo"
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                    />
                  </div>

                  <div className="text-left text-gray-900">
                    <Label>Tu email</Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div className="text-left text-gray-900">
                    <Label>Tu teléfono</Label>
                    <Input
                      type="tel"
                      placeholder="Teléfono"
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2 text-left text-gray-900">
                    <Checkbox
                      id="gdpr"
                      onCheckedChange={(checked) => handleInputChange("gdprConsent", checked as boolean)}
                    />
                    <Label htmlFor="gdpr" className="text-sm">
                      Al hacer clic en «Enviar», confirmo que he leído y acepto las{" "}
                      <a
                        href="https://comparadorluzgas.com/gaz-y-luz-condiciones-generales/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        condiciones generales de uso
                      </a>
                      .
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};