const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// electron clock script
let theme = document.querySelector("#theme");
function time() {
  let date = new Date();
  let hourr = date.getHours();
  let minut = date.getMinutes();
  let seco = date.getSeconds();

  if (hourr < 10) {
	hourr = "0" + hourr;
  }

  if (minut < 10) {
	minut = "0" + minut;
  }

  if (seco < 10) {
	seco = "0" + seco;
  }

  if (hourr > `${05}`)
	function lightMode() {
	  theme.href = "style.css"
	}
	lightMode();

  if (hourr > `${19}`)
	function darkMode() {
		theme.href = "darkMode.css"
	}
	darkMode();

}

time();
