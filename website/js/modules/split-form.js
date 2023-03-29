document.addEventListener("DOMContentLoaded", function() {
    const fieldsets = document.querySelectorAll("form fieldset");
    let currentFieldsetIndex = 0;

    // Add initial classes to the fieldsets
    fieldsets.forEach((fieldset, index) => {
       if (index === 0) {
          fieldset.classList.add("visible");
       } else {
          fieldset.classList.add("hidden");
       }
    });

    // Rest of the script
    fieldsets.forEach((fieldset, index) => {
       const nextButtons = fieldset.querySelectorAll("button[type='button']");
       nextButtons.forEach((button) => {
          button.addEventListener("click", function() {
             if (button.textContent.toLowerCase() === "volgende" || button.textContent.toLowerCase() === "next") {
                currentFieldsetIndex++;
             } else if (button.textContent.toLowerCase() === "previous") {
                currentFieldsetIndex--;
             }

             fieldsets.forEach((fs, idx) => {
                if (idx === currentFieldsetIndex) {
                   fs.classList.remove("hidden");
                   fs.classList.add("visible");
                } else {
                   fs.classList.remove("visible");
                   fs.classList.add("hidden");
                }
             });
          });
       });
    });
 });