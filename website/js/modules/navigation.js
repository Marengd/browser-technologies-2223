console.log('Navigation module loaded');

document.addEventListener("DOMContentLoaded", function() {
    const fieldsets = document.querySelectorAll("form#enquete fieldset");
    let currentIndex = 0;

    function navigateToFieldset(index) {
        if (index < 0 || index >= fieldsets.length) return;

        fieldsets[currentIndex].classList.remove("visible");
        fieldsets[currentIndex].classList.add("hidden");
        currentIndex = index;
        fieldsets[currentIndex].classList.remove("hidden");
        fieldsets[currentIndex].classList.add("visible");
    }

    fieldsets.forEach((fieldset, index) => {
        fieldset.classList.add(index === 0 ? "visible" : "hidden");

        if (index < fieldsets.length - 1) {
            const navContainer = document.createElement("nav");
            fieldset.appendChild(navContainer);

            if (index > 0) {
                const secondaryButton = document.createElement("button");
                secondaryButton.id = "secondary";
                secondaryButton.innerHTML = "Previous";
                secondaryButton.addEventListener("click", () => {
                    navigateToFieldset(currentIndex - 1);
                });
                navContainer.appendChild(secondaryButton);
            }

            if (index < fieldsets.length - 1) {
                const primaryButton = document.createElement("button");
                primaryButton.id = "primary";
                primaryButton.innerHTML = "Next";
                primaryButton.addEventListener("click", () => {
                    navigateToFieldset(currentIndex + 1);
                });
                navContainer.appendChild(primaryButton);
            }
        }
    });
});
