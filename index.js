
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
      var E = new Audio("music/E.mp3");
      E.play();
      break;

    case "a":
      var A = new Audio("music/A.mp3");
      A.play();
      break;

    case "s":
      var S = new Audio("music/S.mp3");
      S.play();
      break;

    case "d":
      var D = new Audio("music/D.mp3");
      D.play();
      break;

    case "j":
      var J = new Audio("music/J.mp3");
      J.play();
      break;

    case "k":
      var K = new Audio("music/K.mp3");
      K.play();
      break;

    case "l":
      var L = new Audio("music/L.mp3");
      L.play();
      break;

    default:
    //
  }
}
