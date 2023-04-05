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

export function isValidEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
}

function validateInput(input, isValid) {
  const errorMessage = input.parentElement.nextElementSibling;
  const checkmark = input.nextElementSibling;

  if (isValid) {
    errorMessage.style.display = "none";
    checkmark.style.display = "inline";
  } else {
    errorMessage.style.display = "block";
    checkmark.style.display = "none";
  }
}




function formatDateInput(input) {
  const inputWithoutDashes = input.value.replace(/-/g, '');
  if (/^\d{8}$/.test(inputWithoutDashes)) {
    const formattedDate = inputWithoutDashes.replace(/(\d{2})(\d{2})(\d{4})/, '$1-$2-$3');
    input.value = formattedDate;
  }
}

function isValidDate(dateString) {
  const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
  const match = dateString.match(dateRegex);

  if (match === null) {
    return false;
  }

  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const year = parseInt(match[3], 10);

  if (month < 1 || month > 12) {
    return false;
  }

  const lastDayOfMonth = new Date(year, month, 0).getDate();
  return day > 0 && day <= lastDayOfMonth;
}



document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('personal-details-name');
  const studentNumberInput = document.getElementById('personal-details-student-number');
  const emailInput = document.getElementById('personal-details-email');

  nameInput.addEventListener("input", function () {
    const isValid = /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(this.value);
    validateInput(this, isValid);
  });

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

    const isValid = /^[56]\d{8}$/.test(studentNumberInput.value);
    validateInput(studentNumberInput, isValid);
  });

  emailInput.addEventListener("input", function () {
    const isValid = isValidEmail(this.value);
    validateInput(this, isValid);
  });


  const startDateInput = document.getElementById('course-start-date');
  const endDateInput = document.getElementById('course-end-date');

  startDateInput.addEventListener("input", function () {
    formatDateInput(this);
    const isValid = isValidDate(this.value);
    validateInput(this, isValid);
  });

  endDateInput.addEventListener("input", function () {
    formatDateInput(this);
    const isValid = isValidDate(this.value);
    validateInput(this, isValid);
  });
});

