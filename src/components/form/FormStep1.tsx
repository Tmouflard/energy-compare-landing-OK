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
          <Label className="text-lg font-medium text-gray-900 mb-3 block">¿Qué tipo de energía te interesa?</Label>
          <RadioGroup
            onValueChange={(value) => onInputChange("energyType", value)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="luz" id="luz" />
              <Label htmlFor="luz" className="cursor-pointer text-gray-900">Luz</Label>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="gas" id="gas" />
              <Label htmlFor="gas" className="cursor-pointer text-gray-900">Gas</Label>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="both" id="both" />
              <Label htmlFor="both" className="cursor-pointer text-gray-900">Ambos</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">Seleccione el tipo de cliente</Label>
          <RadioGroup
            onValueChange={(value) => onInputChange("clientType", value)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="particular" id="particular" />
              <Label htmlFor="particular" className="cursor-pointer text-gray-900">Particular</Label>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="empresa" id="empresa" />
              <Label htmlFor="empresa" className="cursor-pointer text-gray-900">Empresa</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">¿Qué tipo de vivienda tienes?</Label>
          <RadioGroup
            onValueChange={(value) => onInputChange("houseType", value)}
            className="grid grid-cols-1 gap-3"
          >
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="piso" id="piso" />
              <Label htmlFor="piso" className="cursor-pointer text-gray-900">Piso</Label>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="casa" id="casa" />
              <Label htmlFor="casa" className="cursor-pointer text-gray-900">Casa</Label>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="chalet" id="chalet" />
              <Label htmlFor="chalet" className="cursor-pointer text-gray-900">Chalet</Label>
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