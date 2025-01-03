import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight } from "lucide-react";

interface FormStep4Props {
  onInputChange: (field: string, value: string) => void;
  onNext: () => void;
}

export const FormStep4 = ({ onInputChange, onNext }: FormStep4Props) => {
  const handleValueChange = (value: string) => {
    onInputChange("monthlyBill", value);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">¿Cuál es el monto de tu factura mensual actual?</Label>
          <RadioGroup
            onValueChange={handleValueChange}
            className="grid grid-cols-1 gap-3"
          >
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">A</div>
              <RadioGroupItem value="menos-50" id="menos-50" />
              <span className="flex-grow cursor-pointer text-gray-900">Menos de 50 € al mes</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">B</div>
              <RadioGroupItem value="50-100" id="50-100" />
              <span className="flex-grow cursor-pointer text-gray-900">Entre 50 € y 100 € al mes</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">C</div>
              <RadioGroupItem value="100-150" id="100-150" />
              <span className="flex-grow cursor-pointer text-gray-900">Entre 100 € y 150 € al mes</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">D</div>
              <RadioGroupItem value="mas-150" id="mas-150" />
              <span className="flex-grow cursor-pointer text-gray-900">Más de 150 € al mes</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">E</div>
              <RadioGroupItem value="no-se" id="no-se" />
              <span className="flex-grow cursor-pointer text-gray-900">No lo sé</span>
            </label>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};