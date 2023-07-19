// Get the outer most slide container
const slide = document.querySelector(".slide");

// Get all the div.slide containers
// Creates a static NONDELIST which can be iterated over using the forEach() method
const slideImg = document.querySelectorAll(".slide img");

// Initialize a counter to keep track of the slide progression
// Use LET because the value will change
let counter = 0;

// Get the width of the slideImg container using one of the indices of the node and the DOMs clientWidth property.
// The clientWidth property returns the width of an element in pixels, but only includes padding and not border, margin or scrollbars. The clientWidth property is read-only - it can not be changed with JS.
const slideWidth = slideImg[0].clientWidth;

// Get the previous and next arrows
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");

// Define the indicators and get their data-* value
// Creates a NodeList
const indicators = document.querySelectorAll("[data-indicator]");

// Add event listeners for the next and previous arrows
nextArrow.addEventListener("click", () => {
  counter++;
  // Stop the slider from advancing past number of slides (5)
  // slideImg starts at index 0
  if (counter > slideImg.length - 1) {
    counter = slideImg.length - 1;
  } else if (counter < 0) {
    counter = 0;
  }

  // console.log(`Count ${counter} of ${slideImg.length}`);
  slide.style.transform = `translateX(-${slideWidth * counter}px)`;

  // Advance the indicators with for / of loop and nested conditional
  for (const indicator of indicators) {
    const indicatorCount = Number(indicator.dataset.indicator);
    console.log(` Indicator is
      ${indicatorCount}, counter is
      ${counter + 1}`);
    if (indicatorCount === counter + 1) {
      console.log(`Works here`);
      indicator.style.color = `red`;
    } else {
      console.log(`Not Yet`);
    }
  }
});

// Add event listeners for the arrows
prevArrow.addEventListener("click", () => {
  counter--;
  // Stop the slider from receding past slide one slideImg[0]
  if (counter < 0) {
    counter = 0;
  }
  console.log(counter);
  slide.style.transform = `translateX(-${slideWidth * counter}px)`;

  // Add colors to the indicators with for / of loop and nested conditional
  for (const indicator of indicators) {
    const indicatorCount = Number(indicator.dataset.indicator);

    if (indicatorCount === counter + 2) {
      console.log(`Works here`);
      indicator.style.color = `white`;
      indicators[0].style.color = `red`;
    } else {
      console.log(`Not Yet`);
    }
  }
});

// for (let indicator of indicators) {
//   console.log(indicator);
// }

// returns <div class="indicator" data-indicator="4">⬤</div> times 5

// for (let indicator of indicators) {
//   console.log(indicator.dataset.indicator);
// }

// returns the value of each indicator data-indicator attribute

// for (let indicator of indicators) {
//   let indicatorCount = indicator.dataset.indicator[counter];
//   console.log(indicatorCount, counter);
// }
