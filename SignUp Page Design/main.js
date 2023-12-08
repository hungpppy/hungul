const formCheckLabel = document.querySelector(".form-check-label");
formCheckLabel.addEventListener("click", () => {
  const formCheckInput = document.querySelector(".form-check-input");
  formCheckInput.checked = !formCheckInput.checked;
});
const passInputs = document.querySelectorAll(".passInput");
const passIcons = document.querySelectorAll(".passIcon");
passIcons.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("fa-eye-slash");
    item.classList.toggle("fa-eye");
    if (passInputs[index].type == "password") {
      passInputs[index].type = "text";
    } else {
      passInputs[index].type = "password";
    }
  });
});
