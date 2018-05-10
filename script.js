"use strict";

$(document).ready(function(){ 


const startGame = () => {
  $("#popup").append(`<p>You ARE patient zero.</p>`)
  console.log("game started");

  function countdown() {
    seconds = document.getElementById('timer').innerHTML;
    seconds = parseInt(seconds, 10);
 
  // If seconds equal 1, display sad message  
    if (seconds == 1) {
      timerEl = document.getElementById('timer');
      timerEl.innerHTML = "Oh no!";
      console.log("fail");
      $("#popup").append(`<p>You could not save the world.</p>`)
      return;
    }
  // targeting timer div, seconds decrement
    seconds--;
    timerEl = document.getElementById('timer');
    timerEl.innerHTML = seconds;
    timeout = setTimeout(countdown, 1000);
  } 

  countdown();

  const shuffle = () => {
    let list = $('ul');
    let count = $('ul li').length;
  for (let i = 1; i < count; i++) {
    let j = Math.floor(Math.random() * count);
    $('li', list).eq(j).appendTo(list);
} console.log(`this is the list ${list}`);
  }
  shuffle();
  let matches = 0;
  let timer = 2;

    let showCards = [];
    let clickedCard;
  $(document.body).on("click", "li.card", function(event) {

    // flips the card over
    $(event.target).toggleClass("face-down show");
    clickedCard = $(event.target).attr("class");
    showCards.push(clickedCard);
    // compare once we click 2 cards
    if (showCards.length === 2) {
      console.log("okay");
      if (showCards[0] === showCards[1]) {
        console.log("yay");
        $(".show").toggleClass("show blank");
        showCards = [];
      } else {
        $(".show").toggleClass("show face-down");
        showCards = [];
      }
    }
  });

}



 // reset button
$(document.body).on("click", "#reset-button", function(event) {
  startGame();
});

// Round 1 countdown

let seconds;
let timerEl;
let timeout;
 

  startGame();


});