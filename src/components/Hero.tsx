import { useState } from "react";
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Création d'un FormData pour l'envoi
    const formDataToSend = new FormData();
    formDataToSend.append('returnjson', 'yes');
    formDataToSend.append('campid', 'PIPELINE-ITE');
    
    // Mapping des champs du formulaire
    formDataToSend.append('habitation', formData.houseType);
    formDataToSend.append('proprietaire', formData.clientType);
    formDataToSend.append('chauffage', formData.currentCompany);
    formDataToSend.append('postcode', formData.postalCode);
    formDataToSend.append('city', formData.city);
    
    // Séparation du nom complet en prénom et nom
    const [firstname = "", lastname = ""] = formData.fullName.split(" ");
    formDataToSend.append('firstname', firstname);
    formDataToSend.append('lastname', lastname);
    
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone1', formData.phone);
    formDataToSend.append('consentContact', formData.gdprConsent ? 'yes' : 'no');
    
    try {
      const response = await fetch('https://leadstudio.leadbyte.co.uk/api/submit.php', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      toast.success("Formulaire envoyé avec succès !");
      
      // Reset form
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
      
      // Redirection après succès
      setTimeout(() => {
        window.location.href = 'https://web.france-aides-energies.com/merci-rac/';
      }, 500);
      
    } catch (error) {
      console.error('Error:', error);
      toast.error("Une erreur est survenue lors de l'envoi du formulaire.");
    }
  };

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
```