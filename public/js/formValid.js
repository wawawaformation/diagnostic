/**
 * Valide les champs obligigatoire
 */


document.getElementById('contactForm').addEventListener('submit', function(event) {
    var form = event.target;
    var isValid = true;
    var requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error'); 
            field.nextElementSibling.textContent = 'Ce champ est obligatoire'; 
        } else {
            field.classList.remove('error');
            field.nextElementSibling.textContent = ''; 
        }
    });

    if (!isValid) {
        event.preventDefault();
    }
});

