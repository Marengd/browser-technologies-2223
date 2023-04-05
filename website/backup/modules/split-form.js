import { allRequiredFieldsFilled, isValidEmail } from './formValidation.js';
import StepIndicator from './step-indicator.js';
import { saveFormData, getSavedFormData, clearFormData } from './formStateStorage.js';

function showFieldset(fieldsets, index) {
  fieldsets.forEach((fs, idx) => {
    if (idx === index) {
      fs.classList.remove('hidden');
      fs.classList.add('visible');
    } else {
      fs.classList.remove('visible');
      fs.classList.add('hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const fieldsets = document.querySelectorAll('form fieldset');
  const stepIndicatorElement = document.querySelector('ol');
  const stepIndicator = new StepIndicator(stepIndicatorElement);
  let currentFieldsetIndex = 0;

  // Update the initial step indicator
  stepIndicator.updateCurrentStep(currentFieldsetIndex);

  // Add initial classes to the fieldsets
  fieldsets.forEach((fieldset, index) => {
    if (index === 0) {
      fieldset.classList.add('visible');
    } else {
      fieldset.classList.add('hidden');
    }
  });

  // Rest of the script
  fieldsets.forEach((fieldset, index) => {
    const nextButtons = fieldset.querySelectorAll("button[type='button']");
    nextButtons.forEach((button) => {
      button.addEventListener('click', function () {
        if (
          button.textContent.toLowerCase() === 'volgende' ||
          button.textContent.toLowerCase() === 'next'
        ) {
          const emailField = fieldset.querySelector('#personal-details-email');
          if (emailField && !isValidEmail(emailField.value)) {
            alert('Please enter a valid email address.');
            return;
          }

          if (!allRequiredFieldsFilled(fieldset)) {
            alert('Please fill in all required fields before proceeding.');
            return;
          }

          // Save form data to localStorage before proceeding
          const formData = new FormData(document.querySelector('form'));
          const formDataObject = {};

          // Save non-radio inputs
          for (const [key, value] of formData.entries()) {
            formDataObject[key] = value;
          }

          // Save radio inputs
          const radioInputs = document.querySelectorAll('input[type="radio"]');
          radioInputs.forEach((radio) => {
            if (radio.checked) {
              formDataObject[radio.name] = radio.value;
            }
          });

          saveFormData(formDataObject);

          currentFieldsetIndex++;
        } else if (
          button.textContent.toLowerCase() === 'previous' ||
          button.textContent.toLowerCase() === 'vorige'
          ) {
          currentFieldsetIndex--;
        }

        showFieldset(fieldsets, currentFieldsetIndex);
        stepIndicator.updateCurrentStep(currentFieldsetIndex);
      });
    });
  });

  // Update the step indicator when the anchor in the step indicator is clicked
  stepIndicator.olElement.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A') {
      const fieldsetId = target.getAttribute('href').substr(1);
      const fieldsetIndex = Array.from(fieldsets).findIndex(
        (fs) => fs.id === fieldsetId
      );
      if (fieldsetIndex > -1) {
        currentFieldsetIndex = fieldsetIndex;
        showFieldset(fieldsets, currentFieldsetIndex);
        stepIndicator.updateCurrentStep(currentFieldsetIndex);
      }
    }
  });
  
    // Restore saved form data when the page loads
    const savedFormData = getSavedFormData();
    if (savedFormData) {
      const form = document.querySelector('form');
      Object.entries(savedFormData).forEach(([key, value]) => {
        const input = form.querySelector(`[name="${key}"]`);
        if (input && input.type !== 'radio') {
          input.value = value;
        } else if (input && input.type === 'radio') {
          const radioInput = form.querySelector(`input[name="${key}"][value="${value}"]`);
          if (radioInput) {
            radioInput.checked = true;
          }
        }
      });
    }
  });

  // Clear form data from localStorage when the form is submitted
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    clearFormData();
  });

