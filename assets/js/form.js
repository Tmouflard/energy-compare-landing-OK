jQuery(document).ready(function($) {
    let currentStep = 1;
    const form = document.getElementById('energyForm');
    const steps = document.querySelectorAll('.form-step');
    const indicators = document.querySelectorAll('.step-indicator');
    const stepLines = document.querySelectorAll('.step-line');

    // Fonction pour mettre à jour les indicateurs de progression
    function updateProgressBar(step) {
        indicators.forEach((indicator, index) => {
            if (index + 1 < step) {
                indicator.classList.add('completed');
                indicator.classList.remove('active');
            } else if (index + 1 === step) {
                indicator.classList.add('active');
                indicator.classList.remove('completed');
            } else {
                indicator.classList.remove('active', 'completed');
            }
        });

        stepLines.forEach((line, index) => {
            if (index + 1 < step) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        });
    }

    // Fonction pour afficher l'étape suivante
    function showStep(step) {
        steps.forEach(s => s.classList.remove('active'));
        const currentStepElement = document.querySelector(`[data-step="${step}"]`);
        if (currentStepElement) {
            currentStepElement.classList.add('active');
            updateProgressBar(step);
        }
    }

    // Gestionnaire pour les boutons radio
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (currentStep < 5) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    // Validation du numéro de téléphone espagnol
    function validateSpanishPhone(phone) {
        const spanishPhoneRegex = /^\+34[0-9]{9}$/;
        return spanishPhoneRegex.test(phone);
    }

    // Validation du code postal espagnol
    function validateSpanishPostalCode(postalCode) {
        const spanishPostalCodeRegex = /^(?:0[1-9]|[1-4][0-9]|5[0-2])[0-9]{3}$/;
        return spanishPostalCodeRegex.test(postalCode);
    }

    // Gestionnaire de soumission du formulaire
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const phone = formData.get('phone');
        const postalCode = formData.get('postalCode');

        // Validation du téléphone
        if (!validateSpanishPhone(phone)) {
            alert('Por favor, introduzca un número de teléfono español válido (+34XXXXXXXXX)');
            return;
        }

        // Validation du code postal
        if (!validateSpanishPostalCode(postalCode)) {
            alert('Por favor, introduzca un código postal español válido (5 dígitos)');
            return;
        }

        // Préparation des données pour Leadbyte
        const leadbyteData = new FormData();
        leadbyteData.append('returnjson', 'yes');
        leadbyteData.append('campid', 'GAZELEC-ESPAGNE');
        leadbyteData.append('typeform', formData.get('houseType'));
        leadbyteData.append('particulier', formData.get('clientType'));
        leadbyteData.append('fournisseur_actuel', formData.get('currentCompany'));
        leadbyteData.append('postcode', formData.get('postalCode'));
        leadbyteData.append('towncity', formData.get('city'));

        const fullName = formData.get('fullName');
        const [firstname = "", lastname = ""] = fullName.split(" ");
        leadbyteData.append('firstname', firstname);
        leadbyteData.append('lastname', lastname);

        leadbyteData.append('email', formData.get('email'));
        leadbyteData.append('phone1', formData.get('phone'));
        leadbyteData.append('source', window.location.href);
        leadbyteData.append('type_energie', 'electricite');
        leadbyteData.append('objectif_recherche', 'economiser');
        leadbyteData.append('b2b', 'no');

        try {
            const response = await fetch('https://leadstudio.leadbyte.co.uk/api/submit.php', {
                method: 'POST',
                body: leadbyteData
            });

            if (response.ok) {
                window.location.href = 'https://tucomparadorenergetico.com/energia-gracias-1/';
            } else {
                alert('Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.');
        }
    });
});