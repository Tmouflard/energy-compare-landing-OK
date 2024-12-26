import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight } from "lucide-react";

interface FormStep2Props {
  onInputChange: (field: string, value: string) => void;
  onNext: () => void;
}

export const FormStep2 = ({ onInputChange, onNext }: FormStep2Props) => {
  const handleValueChange = (value: string) => {
    onInputChange("houseType", value);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">¿Qué tipo de vivienda tienes?</Label>
          <RadioGroup
            onValueChange={handleValueChange}
            className="grid grid-cols-1 gap-3"
          >
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">A</div>
              <RadioGroupItem value="apartamento" id="apartamento" />
              <span className="flex-grow cursor-pointer text-gray-900">Apartamento o casa pequeña</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">B</div>
              <RadioGroupItem value="casa" id="casa" />
              <span className="flex-grow cursor-pointer text-gray-900">Casa grande o chale</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">C</div>
              <RadioGroupItem value="otro" id="otro" />
              <span className="flex-grow cursor-pointer text-gray-900">Otro tipo de vivienda</span>
            </label>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};