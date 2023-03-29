document.addEventListener('DOMContentLoaded', function() {
    const fieldsets = document.querySelectorAll('form fieldset');
    for (let i = 0; i < fieldsets.length; i++) {
       const fieldset = fieldsets[i];
 
       // Check if the fieldset contains a submit button
       const hasSubmitButton = fieldset.querySelector('button[type="submit"]');
 
       if (!hasSubmitButton) {
          if (i > 0) {
             const prevButton = document.createElement('button');
             prevButton.type = 'button';
             prevButton.textContent = 'previous';
             prevButton.setAttribute('aria-label', 'previous');
             fieldset.appendChild(prevButton);
          }
    
          if (i < fieldsets.length - 1) {
             const nextButton = document.createElement('button');
             nextButton.type = 'button';
             nextButton.textContent = i === 0 ? 'Volgende' : 'next';
             nextButton.setAttribute('aria-label', 'next');
             fieldset.appendChild(nextButton);
          }
       }
    }
 });
 