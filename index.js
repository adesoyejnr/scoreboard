// HOME TEAM

let homeScore = document.getElementById("home-score");
let homeCount = 0

function homeOnePressed() {
homeCount += 1
homeScore.textContent = homeCount
}

function homeTwoPressed() {
homeCount += 2
homeScore.textContent = homeCount
}

function homeThreePressed() {
    homeCount += 3
    homeScore.textContent = homeCount    
}
// HOME TEAM



// GUEST TEAM
let guestScore = document.getElementById("guest-score")
let guestCount = 0

function guestOnePressed() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestTwoPressed() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guestThreePressed() {
    guestCount += 3
    guestScore.textContent = guestCount
}
// GUEST TEAM


// NEW GAME 
let newGameCount = 0

function newGame() {
    homeScore.textContent = 0
    homeCount = 0

    guestScore.textContent = 0
    guestCount = 0
}
// NEW GAME 


// COUNTDOWN

function newGameTimer() {
// Set the date we're counting down to
var countDownDate = new Date("Oct 17, 2022 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="count-down"
  document.getElementById("count-down").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count-down").innerHTML = "GAME OVER";
  }
}, 1000);
}
