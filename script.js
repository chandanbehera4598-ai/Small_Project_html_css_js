
let themeBtn = document.querySelector(".theme");
let mainWrapper = document.querySelector("#mainWrapper");

function toggleTheme() {
  if (themeBtn.innerHTML == "Dark") {
    themeBtn.innerHTML = "light";
    mainWrapper.classList.toggle("darkTheme");
  } else {
    mainWrapper.classList.toggle("darkTheme");
    themeBtn.innerHTML = "Dark";
  }
}

themeBtn.addEventListener("click", toggleTheme);

// ! -------------- hero section ----------

let toggleRHSBtn = document.querySelector(".toggleRHSBtn");
let LHS = document.querySelector(".leftHeroSection");
let RHS = document.querySelector(".rightHeroSection");

function toggleRHSFun() {
  LHS.classList.toggle("toggleLHS");
  RHS.classList.toggle("toggleRHS");

  if (RHS.classList.contains("toggleRHS")) {
    toggleRHSBtn.innerHTML = "normal size";
  } else {
    toggleRHSBtn.innerHTML = "full screen";
  }
}

toggleRHSBtn.addEventListener("click", toggleRHSFun);

// ! ------------- form ----------------------

let form = document.querySelector("form");
let userName = document.querySelector(".userName");
let password = document.querySelector(".password");
let userDataContainer = document.querySelector(".userDataContainer");

let userDetails = {
  userName: "",
  password: "",
};

let userData = [];

// ? event : it is the event object
// ?  event.preventDefault() : it prevent the default behavior of the form , such as whenever u submit the form , page will refresh , i don't want that, that's we are using  event.preventDefault()

function handleForm(event) {
  // * web page will not refresh - after using : event.preventDefault()
  event.preventDefault();

  //  validation : if user pass empty string or no values then nothing will happen
  if (userName.value.trim() == "" && password.value.trim() == "") {
    alert("enter the values properly");
    return;
  }

  userDetails.userName = userName.value;
  userDetails.password = password.value;
  userData.push(userDetails);

  if (userData.length > 0) {
    // create the element for username and password
    let usernameElement = document.createElement("p");
    let passwordElement = document.createElement("p");

    // create a container that holds the username and password
    let userDetailsContainer = document.createElement("section");

    //  add the css class
    userDetailsContainer.classList.add("userDetailsContainer");

    //  add the text in the username and password element
    usernameElement.innerHTML = userDetails.userName;
    passwordElement.innerHTML = userDetails.password;

    // add the username and password in the user details container
    userDetailsContainer.append(usernameElement, passwordElement);

    // add the username and password container in the main userData container
    userDataContainer.append(userDetailsContainer);
  }

  //  make the input fields blank again,
  userName.value = "";
  password.value = "";
}

form.addEventListener("submit", handleForm);
