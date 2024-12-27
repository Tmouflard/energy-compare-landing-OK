jQuery(document).ready(function($) {
    const form = document.getElementById('energyForm');

    // Validation du code postal français
    function validateFrenchPostalCode(postalCode) {
        const frenchPostalCodeRegex = /^[0-9]{5}$/;
        return frenchPostalCodeRegex.test(postalCode);
    }

    // Validation du numéro de téléphone français
    function validateFrenchPhone(phone) {
        const frenchPhoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        return frenchPhoneRegex.test(phone);
    }

    // Gestionnaire de soumission du formulaire
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const phone = formData.get('phone');
        const postalCode = formData.get('postalCode');

        // Validation du téléphone
        if (!validateFrenchPhone(phone)) {
            alert('Veuillez entrer un numéro de téléphone français valide');
            return;
        }

        // Validation du code postal
        if (!validateFrenchPostalCode(postalCode)) {
            alert('Veuillez entrer un code postal français valide');
            return;
        }

        try {
            const response = await fetch('votre-endpoint-api', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                window.location.href = '/merci';
            } else {
                alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    });
});