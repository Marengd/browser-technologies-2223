export function allRequiredFieldsFilled(fieldset) {
    const requiredFields = fieldset.querySelectorAll('input[required]');
    let allFieldsFilled = true;
  
    requiredFields.forEach((field) => {
      if (
        (field.type === 'text' && field.value.trim() === '') ||
        (field.type === 'radio' && !document.querySelector(`input[name=${field.name}]:checked`))
      ) {
        allFieldsFilled = false;
      }
    });
  
    return allFieldsFilled;
  }
  
  // Email

export function isValidEmail(email) {
    // A more comprehensive email validation regular expression
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;
  
    return emailRegex.test(email);
  }
  

  // Student Number
  document.addEventListener('DOMContentLoaded', function () {
    const studentNumberInput = document.getElementById('personal-details-student-number');
  
    if (studentNumberInput) {
      studentNumberInput.addEventListener('input', function () {
        // Remove any non-digit characters
        studentNumberInput.value = studentNumberInput.value.replace(/\D/g, '');
  
        // Limit the input to 9 characters
        if (studentNumberInput.value.length > 9) {
          studentNumberInput.value = studentNumberInput.value.slice(0, 9);
        }
  
        // If the input starts with a digit other than 5 or 6, remove it
        if (studentNumberInput.value.length > 0 && !/^[56]/.test(studentNumberInput.value)) {
          studentNumberInput.value = studentNumberInput.value.slice(1);
        }
      });
    }
  });