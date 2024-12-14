import companyLogo from "./images/oddity_logo.png";

const button = document.getElementById("happy_btn");
const image = document.querySelector(".main__logo");

button.addEventListener("click", () => {
  image.src = companyLogo;
  image.alt = "ODDITY logo";
});
