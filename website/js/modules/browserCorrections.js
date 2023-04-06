document.addEventListener("DOMContentLoaded", function() {
   // Get all radio inputs with the specified conditions
   var radioInputs = document.querySelectorAll('input[type="radio"]');
 
   function updateCheckedLabel() {
     radioInputs.forEach(function(input) {
       var label = input.closest("label");
       if (input.checked) {
         label.classList.add("checked-label");
       } else {
         label.classList.remove("checked-label");
       }
     });
   }
 
   // Initialize the checked labels
   updateCheckedLabel();
 
   // Attach a change event listener to update the checked-label class
   document.addEventListener("change", function(event) {
     if (event.target.matches('input[type="radio"]')) {
       updateCheckedLabel();
     }
   });
 });
 