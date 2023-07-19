const btn = document.getElementById("btn");
function passwordGen() {
  const length = 10;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}
function handleClick() {
  const password = passwordGen();
  document.getElementById("pass").value = password;
}
document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copy");
  const passwordInput = document.getElementById("pass");
  copyButton.addEventListener("click", function () {
    passwordInput.select();
    document.execCommand("copy");
    copyButton.classList.add("copied");
    copyButton.setAttribute("title", "Copied!");
    setTimeout(function () {
      copyButton.classList.remove("copied");
      copyButton.setAttribute("title", "");
    }, 2000);
  });
});
btn.addEventListener("click", handleClick);
