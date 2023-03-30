// split-form.js
import StepIndicator from './step-indicator.js';

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
          currentFieldsetIndex++;
        } else if (button.textContent.toLowerCase() === 'previous') {
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
});
