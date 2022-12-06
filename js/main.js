// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

let users = loadUsers();
saveUser();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let userInp = document.getElementById("signUser").value;
  let passInp = document.getElementById("signPass").value;
  let passCfm = document.getElementById("signCfm").value;
  if (passInp === passCfm) {
    let found = userFound(userInp);
    if (found === 1) {
      alert("User Added");
      users.push(newUser(userInp, passInp));
      saveUser();
    } else if (found === -1) {
      alert("User Already Exists");
    }
  } else {
    alert("Passwords Do Not Match");
  }
}

function newUser(username, password) {
  return {
    name: username,
    pass: password
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let userAtmp = document.getElementById("logUser").value;
  let passAtmp = document.getElementById("logPass").value;

  for (let i = 0; i < users.length; i++) {
    if (passFound(passAtmp, userAtmp) === -1) {
      alert("Sign in Successful");
      break;
    } else {
      alert("Sign in Unsuccessful");
      break;
    }
  }
}

function passFound(passTest, userTest) {
  for (let i = 0; i < users.length; i++) {
    if (passTest === users[i].pass && userTest === users[i].name) {
      return -1;
    }
  }
  return 1;
}

function userFound(userTest) {
  for (let i = 0; i < users.length; i++) {
    if (userTest === users[i].name) {
      return -1;
    }
  }
  return 1;
}

function saveUser() {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
  let usersStr = localStorage.getItem("users");
  return JSON.parse(usersStr) ?? [];
}