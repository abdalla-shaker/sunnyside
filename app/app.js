const header = document.getElementById("header");
const burgerBtn = document.getElementById("burger-button");

burgerBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});
