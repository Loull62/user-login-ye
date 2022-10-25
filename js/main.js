// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

let users = loadUsers();
saveUser();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  console.log('Sign Up Btn Clicked');
  let userInp = document.getElementById("signUser").value;
  let passInp = document.getElementById("signPass").value;
  let passCfm = document.getElementById("signCfm").value;
  if (passInp === passCfm) {
    let found = userFound(userInp);
    console.log(found);
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
    if (userAtmp === users[i].name && passAtmp === users[i].pass) {
      alert("Sign in Successful");
      break;
    } else {
      alert("Sign in Unsuccessful");
    }
  }
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

// 2201