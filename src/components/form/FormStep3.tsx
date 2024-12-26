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
    onNext(); // Appel automatique de onNext après la sélection
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
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">A</div>
              <RadioGroupItem value="gana" id="gana" className="hidden" />
              <Label htmlFor="gana" className="flex-grow cursor-pointer text-gray-900">Gana Energia</Label>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">B</div>
              <RadioGroupItem value="repsol" id="repsol" className="hidden" />
              <Label htmlFor="repsol" className="flex-grow cursor-pointer text-gray-900">Repsol</Label>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">C</div>
              <RadioGroupItem value="iberdrola" id="iberdrola" className="hidden" />
              <Label htmlFor="iberdrola" className="flex-grow cursor-pointer text-gray-900">Iberdrola</Label>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">D</div>
              <RadioGroupItem value="eniplenitude" id="eniplenitude" className="hidden" />
              <Label htmlFor="eniplenitude" className="flex-grow cursor-pointer text-gray-900">Eniplenitude</Label>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">E</div>
              <RadioGroupItem value="endesa" id="endesa" className="hidden" />
              <Label htmlFor="endesa" className="flex-grow cursor-pointer text-gray-900">Endesa</Label>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-lg font-medium text-gray-900">F</div>
              <RadioGroupItem value="otro" id="otro-company" className="hidden" />
              <Label htmlFor="otro-company" className="flex-grow cursor-pointer text-gray-900">Otro/No lo sé</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};