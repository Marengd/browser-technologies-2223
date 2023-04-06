console.log('Navigation module loaded');

document.addEventListener("DOMContentLoaded", function() {
    const fieldsets = document.querySelectorAll("form#enquete fieldset");
    let currentIndex = 0;

    fieldsets.forEach((fieldset, index) => {
        fieldset.classList.add(index === 0 ? "visible" : "hidden");

        // Only create navContainer for fieldsets except the last one
        if (index < fieldsets.length - 1) {
            const navContainer = document.createElement("nav");
            fieldset.appendChild(navContainer);

            if (index > 0) {
                const secondaryButton = document.createElement("button");
                secondaryButton.id = "secondary";
                secondaryButton.innerHTML = "Previous";
                secondaryButton.addEventListener("click", () => {
                    fieldsets[currentIndex].classList.remove("visible");
                    fieldsets[currentIndex].classList.add("hidden");
                    currentIndex--;
                    fieldsets[currentIndex].classList.remove("hidden");
                    fieldsets[currentIndex].classList.add("visible");
                });
                navContainer.appendChild(secondaryButton);
            }

            if (index < fieldsets.length - 1) {
                const primaryButton = document.createElement("button");
                primaryButton.id = "primary";
                primaryButton.innerHTML = "Next";
                primaryButton.addEventListener("click", () => {
                    fieldsets[currentIndex].classList.remove("visible");
                    fieldsets[currentIndex].classList.add("hidden");
                    currentIndex++;
                    fieldsets[currentIndex].classList.remove("hidden");
                    fieldsets[currentIndex].classList.add("visible");
                });
                navContainer.appendChild(primaryButton);
            }
        }
    });
});
