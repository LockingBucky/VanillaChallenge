const backgrounds = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const bgImage = document.createElement("img");

bgImage.src = `background/${chosenImage}`;
document.body.appendChild(bgImage);