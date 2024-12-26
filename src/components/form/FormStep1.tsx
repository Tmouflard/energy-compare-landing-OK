import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FormStep1Props {
  onInputChange: (field: string, value: string) => void;
  onNext: () => void;
}

export const FormStep1 = ({ onInputChange, onNext }: FormStep1Props) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">
            Seleccione el tipo de cliente:
          </Label>
          <RadioGroup
            onValueChange={(value) => onInputChange("clientType", value)}
            className="grid grid-cols-1 gap-3"
          >
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">A</div>
              <RadioGroupItem value="particular" id="particular" className="hidden" />
              <Label htmlFor="particular" className="flex-grow cursor-pointer text-gray-900">Particular</Label>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">B</div>
              <RadioGroupItem value="autonomo" id="autonomo" className="hidden" />
              <Label htmlFor="autonomo" className="flex-grow cursor-pointer text-gray-900">Autónomo / Pyme</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">¿Qué tipo de vivienda tienes?</Label>
          <RadioGroup
            onValueChange={(value) => onInputChange("houseType", value)}
            className="grid grid-cols-1 gap-3"
          >
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">A</div>
              <RadioGroupItem value="apartamento" id="apartamento" className="hidden" />
              <Label htmlFor="apartamento" className="flex-grow cursor-pointer text-gray-900">Apartamento o casa pequeña</Label>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">B</div>
              <RadioGroupItem value="casa" id="casa" className="hidden" />
              <Label htmlFor="casa" className="flex-grow cursor-pointer text-gray-900">Casa grande o chale</Label>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">C</div>
              <RadioGroupItem value="otro" id="otro" className="hidden" />
              <Label htmlFor="otro" className="flex-grow cursor-pointer text-gray-900">Otro tipo de vivienda</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <Button 
        onClick={onNext} 
        className="w-full h-14 text-lg font-medium"
      >
        Siguiente <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};