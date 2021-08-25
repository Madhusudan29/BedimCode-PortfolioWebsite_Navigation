/*==================== SHOW MENU ====================*/
// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);

//   // Validate that variables exist
//   if (toggle && nav) {
//     toggle.addEventListener("click", () => {
//       // We add the show-menu class to the div tag with the nav__menu class
//       nav.classList.toggle("show-menu");
//     });
//   }
// };
// showMenu("nav-toggle", "nav-menu");

//
// MenuBar
// MenuBar
// Show Menu Y Constants
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
// Open Menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}
// Close Menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

//
// Remove Mobile Menu
// Remove Mobile Menu
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show__menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

//
// Accordian
// Accordian
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");
function toggleSkills() {
  let itemClass = this.parentElement.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
  console.log(itemClass);
}
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

//
// Active Link
// Active Link
const sections = document.querySelectorAll("section[id]");
console.log(sections);
// sections.forEach((i) => {
//   console.log(i);
// });
function scrollActive() {
  const scrollY = window.pageYOffset;
  // console.log("window.pageYOffset " + scrollY);
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    // console.log(current.id + " sectionHeight " + sectionHeight);
    const sectionTop = current.offsetTop - 30;
    // console.log(current.id + " sectionTop " + sectionTop);
    // console.log(current.id + " sectionTop " + current.offsetTop);
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
scrollActive();

//
// Elevation to Header
// Elevation to Header
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

//
// ScrollTop
// ScrollTop
// function scrollTop() {
//   const scrollTop = document.getElementById("scroll-top");
//   // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
//   if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
//   else scrollTop.classList.remove("show-scroll");
// }
// window.addEventListener("scroll", scrollTop);

//
// DarkTheme / LightTheme
// DarkTheme / LightTheme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";
const body = document.body;
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme:1");
const selectedIcon = localStorage.getItem("selected-icon:1");
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  body.classList.contains(darkTheme) ? "dark" : "light";
// Got Much Cofused Here While Switching The Theme because man has written converse in his logic
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-sun" : "uil-moon";
// We validate if the user previously choose a topic
if (selectedTheme) {
  body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  // Got Much Cofused Here While Switching The Theme because man has written converse in his logic
  themeButton.classList[selectedIcon === "uil-sun" ? "add" : "remove"](
    iconTheme
  );
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  body.classList.toggle(darkTheme); // White
  themeButton.classList.toggle(iconTheme); // Sun removed Now Moon
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme:1", getCurrentTheme());
  localStorage.setItem("selected-icon:1", getCurrentIcon());
});

//
// Always Button
// Always Button
// function myFunction() {
//   var elmnt = document.getElementById("content");
//   var myDIV = document.getElementById("myDIV");
//   var y = elmnt.scrollHeight;
//   var x = elmnt.scrollWidth;
//   myDIV.scrollTop = elmnt.scrollHeight
//   document.getElementById ("demo").innerHTML = "Height: " + y + "px<br>Width: " + x + "px";
// }
