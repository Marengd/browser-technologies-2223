console.log('Local Storage module loaded');

function saveFormData(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[type="text"], input[type="radio"]:checked');
  
    inputs.forEach((input) => {
      localStorage.setItem(input.name, input.value);
    });
  }
  
  function loadFormData(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[type="text"], input[type="radio"]');
  
    inputs.forEach((input) => {
      const savedValue = localStorage.getItem(input.name);
  
      if (savedValue) {
        if (input.type === 'radio') {
          input.checked = input.value === savedValue;
        } else {
          input.value = savedValue;
        }
      }
    });
  }

  function attachEventListeners(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[type="text"], input[type="radio"]');
  
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        saveFormData(formId);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const formId = 'enquete';
    loadFormData(formId);
    attachEventListeners(formId);
  });
  