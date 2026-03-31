
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#mainWrapper {
  width: 100%;
  height: 100%;
}

header {
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  align-items: center;
  border: solid;
}

#logo {
  font-size: 2.4rem;
  font-weight: 800;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

header button {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 7px 21px;
  border: solid;
  border-radius: 10px;
  cursor: pointer;
}

.heroSection {
  width: 100%;
  height: 88%;
  display: flex;
}

.heroSection .leftHeroSection {
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heroSection .leftHeroSection form {
  width: 70%;
  height: 50%;
  border: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  border-radius: 30px 20px;
}

.heroSection .leftHeroSection form input {
  width: 80%;
  height: 40px;
  padding: 4px 0px 4px 6px;
  outline: none;
  border: 1px solid;
  border-radius: 4px;
}

.heroSection .leftHeroSection form button {
  padding: 7px 21px;
  border: solid;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  cursor: pointer;
}

.heroSection .rightHeroSection {
  width: 55%;
  height: 100%;
  padding: 20px;
}

.heroSection .rightHeroSection h1 {
  text-align: center;
  border-bottom: 2px solid;
  padding: 4px 0px;
  margin-bottom: 20px;
}

.heroSection .rightHeroSection .userDataContainer {
  width: 100%;
  min-height: 50%;
  max-height: 80%;
  border: solid;
}

.heroSection .rightHeroSection .toggleRHSBtn {
  border-radius: 20px;
  border: solid;
  padding: 6px 20px;
  cursor: pointer;
}


/* ! ---------- toggle heroSection --------------- */

.toggleRHS {
  width: 100% !important;
}

.toggleLHS {
  display: none !important;
}

.darkTheme {
  background-color: black !important;
  color: white !important;
}

/*  ! -------- from --------- */

.userDataContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: scroll;
  padding: 10px;
}

.userDetailsContainer {
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  border: solid;
  border-radius: 15px;
}
style.css
Displaying style.css.