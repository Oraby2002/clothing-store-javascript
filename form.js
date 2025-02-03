const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");
const msg_error = document.getElementById("msg_error");
msg_error.style.textAlign = "center";
msg_error.style.marginTop = "10px";
msg_error.style.color = "red";
const rex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rex_pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
registerBtn.addEventListener("click", function () {
  if (name.value !== "" && email.value !== "" && password.value !== "") {
    if (rex_email.test(email.value)) {
      if (rex_pass.test(password.value)) {
        alert("Registration successful!");
        window.location.href = "landing_page.html";
      } else {
        msg_error.innerHTML =
          "Invalid password format. Password must contain at least 8 characters, including letters and numbers.";
      }
    } else {
      msg_error.innerHTML = "Invalid email format";
    }
  } else {
    msg_error.innerHTML = "Please enter frist  name, email, and password.";
  }
});
