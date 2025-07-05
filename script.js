const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleText = document.getElementById("toggle-text");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const html = document.documentElement;

// change image mode
function toggleImageMode(img, isLight) {
  if (isLight) img.src = img.src.replace("light", "dark");
  else img.src = img.src.replace("dark", "light");
}

// change style to darktheme
function darkMode() {
  // change nav background
  nav.style.background = "rgb(0 0 0 / 50%)";

  // change text, icon
  toggleText.textContent = "Dark Mode";
  toggleIcon.children[0].classList.replace("fa-sun", "fa-moon");

  // change images
  toggleImageMode(image1, true);
  toggleImageMode(image2, true);
  toggleImageMode(image3, true);

  // change p font color
  textBox.style.background = "#898989";
}

// bring custome styles back to light
function lightMode() {
  // change nav background
  nav.style.background = "rgb(255 255 255 / 50%)";

  // change text, icon
  toggleText.innerText = "Light Mode";
  toggleIcon.children[0].classList.replace("fa-moon", "fa-sun");

  // change images
  toggleImageMode(image1, false);
  toggleImageMode(image2, false);
  toggleImageMode(image3, false);

  // change p font color
  textBox.style.background = "#7F7F7F";
}
// switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    // enable dark theme in html
    html.setAttribute("data-theme", "dark");

    // change styling to dark
    darkMode();

    // save it theme local storage
    localStorage.setItem("theme", "dark");
  } else {
    html.setAttribute("data-theme", "light");
    lightMode();

    // save it theme local storage
    localStorage.setItem("theme", "light");
  }
}

// event listener
toggleSwitch.addEventListener("change", switchTheme);

// on load
const initialTheme = localStorage.getItem("theme");
if (initialTheme == "dark") {
  toggleSwitch.checked = true;
  toggleSwitch.dispatchEvent(new Event("change"));
} else {
  toggleSwitch.checked = false;
  toggleSwitch.dispatchEvent(new Event("change"));
}
