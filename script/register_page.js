document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit-button').addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;
        const firstname = document.getElementById('firstname').value;
        const phone = document.getElementById('phone').value;
        const adress = document.getElementById('address').value;
        const cp = document.getElementById('cp').value;
        const city = document.getElementById('city').value;
        const dob = document.getElementById('dob').value;
        const key = document.getElementById('key').value;

        const data = {
            email,
            password,
            name,
            firstname,
            phone,
            adress,
            cp,
            city,
            dob,
            key
        };

        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        fetch('https://hermann-coaching.ddns.net:3050/register ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            return response.json();
        })
        .then(data => {
            if (data.register_result) {
                alert("Votre compte a été créé avec succès.");
                window.location.href = "./register_success.html";

            } else {
                data.errors.forEach(error => {
                    const errorMessage = document.getElementById(`${error.field}-error`);
                    if (errorMessage) {
                        errorMessage.textContent = error.message;
                    }
                });
            }
        })
        .catch(error => {
            console.error('Erreur :', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        });
    });
});