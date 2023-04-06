document.addEventListener('DOMContentLoaded', function() {
  const fieldsets = document.querySelectorAll('form fieldset');
  
  function showFieldset(index) {
    for (let i = 0; i < fieldsets.length; i++) {
      if (i === index) {
        fieldsets[i].classList.remove('hidden');
      } else {
        fieldsets[i].classList.add('hidden');
      }
    }
  }

  for (let i = 0; i < fieldsets.length; i++) {
    const fieldset = fieldsets[i];
    const nav = document.createElement('nav'); // Create a new nav element

    // Check if the fieldset contains a submit button
    const hasSubmitButton = fieldset.querySelector('button[type="submit"]');

    if (!hasSubmitButton) {
      if (i > 0) {
        const prevButton = document.createElement('button');
        prevButton.type = 'button';
        prevButton.textContent = 'vorige';
        prevButton.setAttribute('aria-label', 'vorige');
        prevButton.addEventListener('click', function() {
          showFieldset(i - 1);
        });
        nav.appendChild(prevButton); // Append the button to the nav element

        // Assign the ID based on the number of buttons in the nav
        prevButton.id = 'secondary';
      }

      if (i < fieldsets.length - 1) {
        const nextButton = document.createElement('button');
        nextButton.type = 'button';
        nextButton.textContent = i === 0 ? 'Volgende' : 'Volgende';
        nextButton.setAttribute('aria-label', 'Volgende');
        nextButton.addEventListener('click', function() {
          showFieldset(i + 1);
        });
        nav.appendChild(nextButton); // Append the button to the nav element

        // Assign the ID based on the number of buttons in the nav
        if (nav.children.length === 1) {
          nextButton.id = 'primary';
        } else {
          nextButton.id = 'primary';
          nav.querySelector('#secondary').id = 'secondary';
        }
      }

      fieldset.appendChild(nav); // Append the nav element to the fieldset
    }
  }
  
  showFieldset(0); // Show the first fieldset initially
});
