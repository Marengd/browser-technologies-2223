const FORM_DATA_KEY = 'form-data';

export function saveFormData(formData) {
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
  console.log('Form data saved:', formData);
}

export function getSavedFormData() {
  const savedData = localStorage.getItem(FORM_DATA_KEY);
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
}

export function clearFormData() {
  localStorage.removeItem(FORM_DATA_KEY);
}
