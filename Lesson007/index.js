let myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    changeButtonColor(myButton, getRandomColor());
});

function changeButtonColor(button, rgb) {
    button.style.backgroundColor = rgb;
}


function getRandomColor() {
    // return randomly RGB color
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    var message = `Цвет кнопки изменен: ${randomColor}`;
    console.log(message);
    alert(message);
    
    return randomColor;
}

