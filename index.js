let bars = document.getElementById("bars");

function nav() {
  // console.log("logged");
  // let cross=document.getElementsByClassName('cross');
  if (bars.classList.contains("hidden")) {
    bars.classList.add("flex");
    bars.classList.remove("hidden");
  } else {
    bars.classList.remove("flex");
    bars.classList.add("hidden");
  }
}

let faq = document.getElementsByClassName("faq");
let ans = document.getElementsByClassName("answer");
function open() {
  if (ans.classList.contains("hidden")) {
    ans.classList.add("flex");
    ans.classList.remove("hidden");
  }
}
// testinggg
curretnSlide = 1;
slider = document.getElementById("slider");
totalSlides = slider.childElementCount;
console.log(totalSlides);
function next() {
  if (curretnSlide < totalSlides) {
    curretnSlide++;
    showSlide();
  }
}
function prev() {
  if (curretnSlide > 1) {
    curretnSlide--;
  }

  showSlide();
}
function showSlide() {
  slides = document.getElementById("slider").getElementsByTagName("li");
  for (let index = 0; index < totalSlides; index++) {
    const element = slides[index];
    if (curretnSlide === index + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}
