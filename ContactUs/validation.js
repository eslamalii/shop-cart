let id = (id) => document.getElementById(id);

let form = id("form"),
  fullname = id("fullName"),
  email = id("email"),
  password = id("password"),
  message = id("message"),
  errorMsg = id("errorMsg");

form.addEventListener("submit", (e) => {
  //   e.preventDefault();

  errorMsg.innerText = "";
  checkvalidation(fullname, e, "- Enter the full name <br>");
  checkvalidation(email, e, "- Invaild Email <br> ");
  checkvalidation(phone, e, "- Invaild Phone Number <br> ");
  checkvalidation(message, e, "- Message must be 120 chars at least  <br>");
});

let checkvalidation = (id, e, message) => {
  if (id.value.trim() === "") {
    errorMsg.innerHTML += message;
    e.preventDefault();
  }
};
