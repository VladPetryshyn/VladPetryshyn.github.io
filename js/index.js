function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

window.onload = ibg;

const button = document.querySelector(".nav-button");
const navbar = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const about = document.querySelector(".about-me");
const wrapper = document.querySelector("main.wrapper");
const headerItems = document.querySelectorAll(".header__item");

const toggleMenuVisibility = () => {
  header.classList.toggle("header_nav-active");
  button.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

button.onclick = toggleMenuVisibility

window.addEventListener("scroll", () => {
  if (window.scrollY >= about.offsetTop - 60) {
    header.classList.add("header_scrolled")
  } else {
    header.classList.remove("header_scrolled")
  }
});

headerItems.forEach((e) => {
  e.onclick = toggleMenuVisibility
})
