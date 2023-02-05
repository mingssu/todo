const bgElement = document.querySelector("#main");
const chosenImage = Math.floor(Math.random() * 8 + 1);
bgElement.style = `background-image:url("./img/${chosenImage}.jpg");`;