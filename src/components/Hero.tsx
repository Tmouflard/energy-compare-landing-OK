import { useState, useCallback } from "react";
import { FormStep1 } from "./form/FormStep1";
import { FormStep2 } from "./form/FormStep2";
import { FormStep3 } from "./form/FormStep3";
import { FormStep4 } from "./form/FormStep4";
import { FormStep5 } from "./form/FormStep5";
import { toast } from "sonner";

export const Hero = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clientType: "",
    houseType: "",
    currentCompany: "",
    monthlyBill: "",
    postalCode: "",
    city: "",
    fullName: "",
    email: "",
    phone: "",
    gdprConsent: false
  });

  const handleInputChange = useCallback((field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleNext = useCallback(() => {
    setStep(prev => prev + 1);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = new FormData();
    
    form.append('returnjson', 'yes');
    form.append('campid', 'GAZELEC-ESPAGNE');
    
    form.append('typeform', formData.houseType);
    form.append('particulier', formData.clientType);
    form.append('fournisseur_actuel', formData.currentCompany);
    form.append('postcode', formData.postalCode);
    form.append('towncity', formData.city);
    
    const [firstname = "", lastname = ""] = formData.fullName.split(" ");
    form.append('firstname', firstname);
    form.append('lastname', lastname);
    
    form.append('email', formData.email);
    form.append('phone1', formData.phone);
    
    form.append('source', window.location.href);
    form.append('type_energie', 'electricite');
    form.append('objectif_recherche', 'economiser');
    form.append('b2b', 'no');
    
    try {
      const response = await fetch('https://leadstudio.leadbyte.co.uk/api/submit.php', {
        method: 'POST',
        body: form
      });
      
      toast.success("Formulaire envoyé avec succès !");
      
      setFormData({
        clientType: "",
        houseType: "",
        currentCompany: "",
        monthlyBill: "",
        postalCode: "",
        city: "",
        fullName: "",
        email: "",
        phone: "",
        gdprConsent: false
      });
      setStep(1);
      
      window.location.href = 'https://tucomparadorenergetico.com/energia-gracias-1/';
      
    } catch (error) {
      console.error('Error:', error);
      toast.error("Une erreur est survenue lors de l'envoi du formulaire.");
    }
  }, [formData]);

  return (
    <section className="bg-gradient-to-br from-primary to-secondary min-h-[600px] flex items-center text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Encuentra la tarifa de luz más barata
            </h1>
            <p className="text-xl mb-8 animate-fade-in opacity-90">
              Compara las mejores tarifas de luz y ahorra en tu factura
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 animate-fade-in">
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className={`flex items-center ${num !== 5 ? 'flex-1' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                      ${step >= num ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}
                  >
                    {num}
                  </div>
                  {num !== 5 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > num ? 'bg-primary' : 'bg-gray-100'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <FormStep1 
                  onInputChange={handleInputChange}
                  onNext={handleNext}
                />
              )}
              {step === 2 && (
                <FormStep2
                  onInputChange={handleInputChange}
                  onNext={handleNext}
                />
              )}
              {step === 3 && (
                <FormStep3
                  onInputChange={handleInputChange}
                  onNext={handleNext}
                />
              )}
              {step === 4 && (
                <FormStep4
                  onInputChange={handleInputChange}
                  onNext={handleNext}
                />
              )}
              {step === 5 && (
                <FormStep5
                  onInputChange={handleInputChange}
                  onSubmit={handleSubmit}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};