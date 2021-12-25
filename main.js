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
