import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";

interface FormStep3Props {
  onInputChange: (field: string, value: string | boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const FormStep3 = ({ onInputChange, onSubmit }: FormStep3Props) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">Tu ciudad</Label>
          <Input
            type="text"
            placeholder="Ciudad"
            onChange={(e) => onInputChange("city", e.target.value)}
            className="h-14 text-base bg-white text-gray-900"
          />
        </div>

        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">Tu nombre y apellidos</Label>
          <Input
            type="text"
            placeholder="Nombre completo"
            onChange={(e) => onInputChange("fullName", e.target.value)}
            className="h-14 text-base bg-white text-gray-900"
          />
        </div>

        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">Tu email</Label>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => onInputChange("email", e.target.value)}
            className="h-14 text-base bg-white text-gray-900"
          />
        </div>

        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">Tu teléfono</Label>
          <Input
            type="tel"
            placeholder="Teléfono"
            onChange={(e) => onInputChange("phone", e.target.value)}
            className="h-14 text-base bg-white text-gray-900"
          />
        </div>

        <div className="flex items-start space-x-3 text-left">
          <Checkbox
            id="gdpr"
            className="mt-1"
            onCheckedChange={(checked) => onInputChange("gdprConsent", checked as boolean)}
          />
          <Label htmlFor="gdpr" className="text-sm leading-tight text-gray-900">
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
      </div>

      <Button 
        onClick={onSubmit} 
        className="w-full h-14 text-lg font-medium"
      >
        Enviar <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};