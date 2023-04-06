console.log('Form Validation module loaded');

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("personal-details-name");
  const studentNumberInput = document.getElementById("personal-details-student-number");
  const emailInput = document.getElementById("personal-details-email");
  const dateInputs = document.querySelectorAll('label[for^="course-start-date"] input, label[for^="course-end-date"] input');

  function validateName(input) {
    const regex = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]+)?$/;
    return regex.test(input.value);
  }

  function validateStudentNumber(input) {
    const regex = /^[56]\d{8}$/;
    return regex.test(input.value);
  }

  function validateEmail(input) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(input.value);
  }

  function validateInput(input, validationFunction) {
    const checkmark = input.parentNode.querySelector(".checkmark");
    const errorMessage = input.parentNode.parentNode.querySelector(".error-message");

    if (validationFunction(input)) {
      checkmark.classList.add("show");
      errorMessage.classList.remove("show");
    } else {
      checkmark.classList.remove("show");
      errorMessage.classList.add("show");
    }
  }

  nameInput.addEventListener("input", () => {
    validateInput(nameInput, validateName);
  });

  studentNumberInput.addEventListener("input", () => {
    validateInput(studentNumberInput, validateStudentNumber);
  });

  emailInput.addEventListener("input", () => {
    validateInput(emailInput, validateEmail);
  });

  dateInputs.forEach((input) => {
    const errorMessage = input.parentElement.querySelector(".error-message");

    input.addEventListener("input", () => {
      // Format the input value if it matches the pattern: 24102000
      const formattedValue = input.value.replace(/^(\d{2})(\d{2})(\d{4})$/, "$1-$2-$3");
      if (formattedValue !== input.value) {
        input.value = formattedValue;
      }

      // Validate the input value against the pattern: dd-mm-yyyy
      const isValid = /^\d{2}-\d{2}-\d{4}$/.test(input.value);

      if (isValid) {
        errorMessage.classList.remove("show");
        input.classList.add("valid");
      } else {
        errorMessage.classList.add("show");
        input.classList.remove("valid");
      }
    });
  });
});
