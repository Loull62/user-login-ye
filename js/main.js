// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

let users = loadUsers();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  console.log('Sign Up Btn Clicked');
  let userInp = document.getElementById("signUser").value;
  let passInp = document.getElementById("signPass").value;
  let passCfm = document.getElementById("signCfm").value;
  // for (let i = 0; i < users.length; i++) {
    if (passInp === passCfm) {
      console.log("User Saved");
      users.push(newUser(userInp, passInp))
      saveUser();
    } else {
      console.log("Pass no match");
    }
  }
// }

function newUser(username, password) {
  return {
    name: username,
    pass: password
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
  let userAtmp = document.getElementById("logUser").value;
  let passAtmp = document.getElementById("logPass").value;
  for (let i = 0; i < users.length; i++) {
    if (userAtmp === users[i].name && passAtmp === users[i].pass) {
      console.log("ye");
    } else {
      console.log("no");
    }
  }
}

function saveUser() {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
  let usersStr = localStorage.getItem("users");
  return JSON.parse(usersStr) ?? [];
}