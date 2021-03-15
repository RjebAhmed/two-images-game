const image = document.querySelectorAll("img");
const Button = document.querySelectorAll("button");
const result = document.querySelector(".result");
const Body = document.querySelector("body");
const gameContainer = document.querySelector(".gameContainer");
const trys = document.querySelector(".try");
const chances = document.querySelector(".chances");

var mynum = 0;
var list = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];
var arr = [];
var counter = 0;
var loseCounter = 0;
//
remp();
console.log(arr);

for (let i = 0; i < image.length; i++) {
  var stock;
  Button[i].addEventListener("click", function () {
    var audio = new Audio("click.mp3");
    audio.play();
    if (mynum == 0) {
      image[i].style.display = "inline";
      mynum++;
      stock = i;
      return;
    }

    if (mynum == 1 && i != stock) {
      loseCounter++;
      console.log(loseCounter);

      if (loseCounter < 14) {
        if (loseCounter == 1 || loseCounter == 11) {
          trys.querySelector(".span2").style.left = "120px";
        } else {
          if (loseCounter > 9) {
            trys.querySelector(".span2").style.left = "20px";
          } else {
            trys.querySelector(".span2").style.left = "60px";
          }
        }

        trys.querySelector(".span2").innerText = loseCounter;
      } else {
        trys.querySelector(".span2").innerText = loseCounter;
        trys.querySelector(".span2").style.color = "rgba(255, 0, 0, 0.479)";
      }

      image[i].style.display = "inline";

      if (arr[i] == arr[stock]) {
        Button[i].style.backgroundColor = "rgba(205, 233, 233, 0.767)";
        Button[stock].style.backgroundColor = "rgba(205, 233, 233, 0.767)";
        console.log("asba");
        counter++;

        if (counter == 8) {
          setTimeout(function () {
            win();
          }, 700);
        }
        console.log(counter);
      } else {
        setTimeout(function () {
          image[i].style.display = "none";
          image[stock].style.display = "none";
        }, 700);
      }
      if (loseCounter == 17) {
        setTimeout(function () {
          lose();
        }, 700);
      }

      mynum--;
    }
  });
}
Button[16].addEventListener("click", playAgain);
// fuuuuuuuuunctionssssssssssssssss
function playAgain() {
  trys.style.display = "block";
  chances.style.display = "block";

  trys.querySelector(".span2").innerText = "0";
  trys.querySelector(".span2").style.color = "rgba(240, 248, 255, 0.438)";
  trys.style.display = "block";
  chances.style.display = "block";
  result.style.display = "none";
  Body.style.backgroundColor = "rgb(28, 180, 180)";
  gameContainer.style.opacity = "1";
  for (let i = 0; i < 16; i++) {
    Button[i].style.backgroundColor = "rgba(205, 233, 233, 0.54)";
    image[i].src = "";
  }
  list = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];
  arr = [];
  remp();
  console.log(image);
  counter = 0;
  loseCounter = 0;
}
//win
function win() {
  var audio = new Audio("celeb.mp3");
  audio.play();
  trys.style.display = "none";
  chances.style.display = "none";

  result.style.display = "block";
  Body.style.backgroundColor = "rgb(42, 158, 158)";
  gameContainer.style.opacity = "0.1";
  result.querySelector("h1").innerText = "Congratulations";
  Button[16].innerText = "play again";
}
function lose() {
  var audio = new Audio("lose.mp3");
  audio.play();
  trys.style.display = "none";
  chances.style.display = "none";

  result.style.display = "block";
  Body.style.backgroundColor = "rgb(42, 158, 158)";
  gameContainer.style.opacity = "0.1";
  result.querySelector("h1").innerText = "sorry..you lose";
  Button[16].innerText = "try again";
}
//remp
function remp() {
  for (let i = 0; i < 16; i++) {
    var nam = Math.floor(Math.random() * 8);

    while (!list.includes(nam)) {
      nam = Math.floor(Math.random() * 8);
    }

    image[i].src = "images/img" + nam.toString() + ".png";
    image[i].style.display = "none";
    arr[i] = nam;
    deletee(nam, list);
  }
}
//delete
function deletee(num, arr) {
  for (var k = 0; k < 16; k++) {
    if (arr[k] === num) {
      arr.splice(k, 1);
      break;
    }
  }
}
