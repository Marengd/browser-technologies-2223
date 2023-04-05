class StepIndicator {
    constructor(olElement) {
      this.olElement = olElement;
      this.steps = olElement.querySelectorAll('li');
      this.initEvents();
    }
  
    initEvents() {
      this.steps.forEach((step, index) => {
        step.querySelector('a').addEventListener('click', (event) => {
          event.preventDefault();
          this.updateCurrentStep(index);
        });
      });
    }
  
    updateCurrentStep(index) {
      this.steps.forEach((step, idx) => {
        if (idx === index) {
          step.classList.add('current');
        } else {
          step.classList.remove('current');
        }
      });
    }
  }
   
   export default StepIndicator;