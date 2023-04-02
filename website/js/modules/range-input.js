const slider = document.querySelector("#rating-ex-wafs");
const sliderValue = document.querySelector("#slider-value");

slider.oninput = function () {
  sliderValue.innerHTML = this.value;
  const valuePercentage = ((this.value - this.min) / (this.max - this.min)) * 100;
  sliderValue.style.left = `calc(${valuePercentage}% - ${valuePercentage * 0.2}px)`;
  slider.style.setProperty("--slider-fill", `${valuePercentage}%`);
};
