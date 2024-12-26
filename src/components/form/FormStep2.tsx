import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
          <Select onValueChange={(value) => onInputChange("currentCompany", value)}>
            <SelectTrigger className="w-full h-14 text-base bg-white text-gray-900">
              <SelectValue placeholder="Selecciona tu compañía" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="iberdrola" className="text-gray-900">Iberdrola</SelectItem>
              <SelectItem value="endesa" className="text-gray-900">Endesa</SelectItem>
              <SelectItem value="naturgy" className="text-gray-900">Naturgy</SelectItem>
              <SelectItem value="other" className="text-gray-900">Otra</SelectItem>
            </SelectContent>
          </Select>
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