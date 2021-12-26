// Targetting all classes and id
// from the HTML inside Javascript file

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName;

//storing the classes and id in variables
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

//Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validationEngine(username, 0, "Username cannot be blank");
  validationEngine(email, 1, "E-mail cannot be blank");
  validationEngine(password, 2, "Password cannot be blank");
});

/**
 *
 * id will target id's
 * serial will target classes [error class, success and failure icons]
 * message will print a message inside .error class
 */
let validationEngine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHtml = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHtml = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
