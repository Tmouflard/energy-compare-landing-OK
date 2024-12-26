import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FormStep2Props {
  onInputChange: (field: string, value: string) => void;
  onNext: () => void;
}

export const FormStep2 = ({ onInputChange, onNext }: FormStep2Props) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">¿Cuál es tu compañía actual?</Label>
          <RadioGroup
            onValueChange={(value) => onInputChange("currentCompany", value)}
            className="grid grid-cols-1 gap-3"
          >
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="iberdrola" id="iberdrola" />
              <Label htmlFor="iberdrola" className="cursor-pointer text-gray-900">Iberdrola</Label>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="endesa" id="endesa" />
              <Label htmlFor="endesa" className="cursor-pointer text-gray-900">Endesa</Label>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="naturgy" id="naturgy" />
              <Label htmlFor="naturgy" className="cursor-pointer text-gray-900">Naturgy</Label>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-primary cursor-pointer">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other" className="cursor-pointer text-gray-900">Otra</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">¿Cuál es el monto de tu factura mensual actual?</Label>
          <Input
            type="number"
            placeholder="€/mes"
            onChange={(e) => onInputChange("monthlyBill", e.target.value)}
            className="h-14 text-base bg-white text-gray-900"
          />
        </div>

        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">Tu código postal</Label>
          <Input
            type="text"
            placeholder="Código postal"
            onChange={(e) => onInputChange("postalCode", e.target.value)}
            className="h-14 text-base bg-white text-gray-900"
          />
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