let button = document.getElementById("123");

console.log(button);


function showMessageOnClick() {
  console.log("Button works");
}

button.addEventListener("click", showMessageOnClick);