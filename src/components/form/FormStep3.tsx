import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight } from "lucide-react";

interface FormStep3Props {
  onInputChange: (field: string, value: string) => void;
  onNext: () => void;
}

export const FormStep3 = ({ onInputChange, onNext }: FormStep3Props) => {
  const handleValueChange = (value: string) => {
    onInputChange("currentCompany", value);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-left">
          <Label className="text-lg font-medium text-gray-900 mb-3 block">¿Cuál es tu compañía actual?</Label>
          <RadioGroup
            onValueChange={handleValueChange}
            className="grid grid-cols-1 gap-3"
          >
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">A</div>
              <RadioGroupItem value="gana" id="gana" />
              <span className="flex-grow cursor-pointer text-gray-900">Gana Energia</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">B</div>
              <RadioGroupItem value="repsol" id="repsol" />
              <span className="flex-grow cursor-pointer text-gray-900">Repsol</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">C</div>
              <RadioGroupItem value="iberdrola" id="iberdrola" />
              <span className="flex-grow cursor-pointer text-gray-900">Iberdrola</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">D</div>
              <RadioGroupItem value="eniplenitude" id="eniplenitude" />
              <span className="flex-grow cursor-pointer text-gray-900">Eniplenitude</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">E</div>
              <RadioGroupItem value="endesa" id="endesa" />
              <span className="flex-grow cursor-pointer text-gray-900">Endesa</span>
            </label>
            <label className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">F</div>
              <RadioGroupItem value="otro" id="otro-company" />
              <span className="flex-grow cursor-pointer text-gray-900">Otro/No lo sé</span>
            </label>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};