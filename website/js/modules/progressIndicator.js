console.log('Progress Indicator module loaded');

document.addEventListener("DOMContentLoaded", function () {
    const fieldsets = document.querySelectorAll("form#enquete fieldset");
    const progressItems = document.querySelectorAll("main > section > nav ol li a");
    let currentIndex = 0;

    function updateProgressIndicator() {
        progressItems.forEach((item, index) => {
            item.classList.toggle("current", index === currentIndex);
        });
    }

    function navigateToFieldset(index) {
        if (index < 0 || index >= fieldsets.length) return;

        fieldsets[currentIndex].classList.remove("visible");
        fieldsets[currentIndex].classList.add("hidden");
        currentIndex = index;
        fieldsets[currentIndex].classList.remove("hidden");
        fieldsets[currentIndex].classList.add("visible");

        updateProgressIndicator();
    }

    fieldsets.forEach((fieldset, index) => {
        fieldset.classList.add(index === 0 ? "visible" : "hidden");
    });

    progressItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            navigateToFieldset(index);
        });
    });

    updateProgressIndicator();
});
