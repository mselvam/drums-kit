
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  document.querySelector("." + event.key).classList.add("pressed");
});

document.addEventListener("keyup", function (event1) {
  document.querySelector("." + event1.key).classList.remove("pressed");
});

function makeSound(key) {
  switch (key) {
    case "e":
      var E = new Audio("sounds/E.mp3");
      E.play();
      break;

    case "a":
      var A = new Audio("sounds/A.mp3");
      A.play();
      break;

    case "s":
      var S = new Audio("sounds/S.mp3");
      S.play();
      break;

    case "d":
      var D = new Audio("sounds/D.mp3");
      D.play();
      break;

    case "j":
      var J = new Audio("sounds/J.mp3");
      J.play();
      break;

    case "k":
      var K = new Audio("sounds/K.mp3");
      K.play();
      break;

    case "l":
      var L = new Audio("sounds/L.mp3");
      L.play();
      break;

    default:
    //
  }
}
