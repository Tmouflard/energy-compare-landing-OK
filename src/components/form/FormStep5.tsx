import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormStep5Props {
  onInputChange: (field: string, value: string | boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const FormStep5 = ({ onInputChange, onSubmit }: FormStep5Props) => {
  const [phoneError, setPhoneError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");

  const validateSpanishPhone = (phone: string) => {
    const spanishPhoneRegex = /^\+34[0-9]{9}$/;
    
    if (!phone.startsWith('+34')) {
      setPhoneError("El número debe comenzar con +34");
      return false;
    }
    
    if (!spanishPhoneRegex.test(phone)) {
      setPhoneError("Introduzca un número de teléfono español válido (+34XXXXXXXXX)");
      return false;
    }
    
    setPhoneError("");
    return true;
  };

  const validateSpanishPostalCode = (postalCode: string) => {
    // Le code postal espagnol doit avoir 5 chiffres et commencer par 01-52
    const spanishPostalCodeRegex = /^(?:0[1-9]|[1-4][0-9]|5[0-2])[0-9]{3}$/;
    
    if (!spanishPostalCodeRegex.test(postalCode)) {
      setPostalCodeError("Introduzca un código postal español válido (5 dígitos)");
      return false;
    }
    
    setPostalCodeError("");
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    if (validateSpanishPhone(phone)) {
      onInputChange("phone", phone);
    }
  };

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const postalCode = e.target.value;
    if (validateSpanishPostalCode(postalCode)) {
      onInputChange("postalCode", postalCode);
    }
  };

  const handleSubmitWithValidation = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneInput = document.querySelector('input[type="tel"]') as HTMLInputElement;
    const postalCodeInput = document.querySelector('input[name="postalCode"]') as HTMLInputElement;
    
    const isPhoneValid = validateSpanishPhone(phoneInput.value);
    const isPostalCodeValid = validateSpanishPostalCode(postalCodeInput.value);
    
    if (!isPhoneValid) {
      toast.error("Por favor, introduzca un número de teléfono español válido");
      return;
    }

    if (!isPostalCodeValid) {
      toast.error("Por favor, introduzca un código postal español válido");
      return;
    }
    
    onSubmit(e);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">Información de contacto</Label>
          
          <div className="space-y-4">
            <div>
              <Label className="text-sm text-gray-600 mb-2 block">Tu código postal</Label>
              <Input
                type="text"
                name="postalCode"
                placeholder="Código postal"
                onChange={handlePostalCodeChange}
                className="h-14 text-base bg-white text-gray-900"
              />
              {postalCodeError && (
                <p className="text-red-500 text-sm mt-1">{postalCodeError}</p>
              )}
            </div>

            <div>
              <Label className="text-sm text-gray-600 mb-2 block">Tu ciudad</Label>
              <Input
                type="text"
                placeholder="Ciudad"
                onChange={(e) => onInputChange("city", e.target.value)}
                className="h-14 text-base bg-white text-gray-900"
              />
            </div>

            <div>
              <Label className="text-sm text-gray-600 mb-2 block">Tu nombre y apellidos</Label>
              <Input
                type="text"
                placeholder="Nombre completo"
                onChange={(e) => onInputChange("fullName", e.target.value)}
                className="h-14 text-base bg-white text-gray-900"
              />
            </div>

            <div>
              <Label className="text-sm text-gray-600 mb-2 block">Tu email</Label>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => onInputChange("email", e.target.value)}
                className="h-14 text-base bg-white text-gray-900"
              />
            </div>

            <div>
              <Label className="text-sm text-gray-600 mb-2 block">Tu teléfono</Label>
              <Input
                type="tel"
                placeholder="+34XXXXXXXXX"
                onChange={handlePhoneChange}
                className="h-14 text-base bg-white text-gray-900"
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>
          </div>
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
        type="submit"
        onClick={handleSubmitWithValidation} 
        className="w-full h-14 text-lg font-medium"
      >
        Enviar <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};
