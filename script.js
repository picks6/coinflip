// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");
var coin = 'coin'
var timeLeft = 5

function flipCoin(){
  var timeInterval = setInterval(function () {
    timeLeft--;
    mainEl.textContent = coin + " " + timeLeft + " seconds til next flip";
    
    if(timeLeft % 5 === 0) {
      a = Math.random()
      console.log(a);
      if (a <= .5){
        coin = 'heads'
      } else coin = 'tails'};
      console.log(timeLeft)
      clearInterval(timeInterval);
      displayMessage()}, 1000)
}
function displayMessage(){
  mainEl.textContent = coin
  flipCoin()
}