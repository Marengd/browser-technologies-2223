class StepIndicator {
   constructor(olElement) {
     this.olElement = olElement;
     this.steps = olElement.querySelectorAll('li');
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
 