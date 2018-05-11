"use strict";

$(document).ready(function(){ 




const startGame = () => {

  console.log("game started");
  $(".blank").toggleClass("blank face-down");
  $(".show").toggleClass("show face-down");

  function countdown() {

    let seconds = 90;
    let ourTimer = setInterval( () => {
      startTime()
    }, 1000);

    const startTime = () => {
      if (seconds == 0) {
        clearInterval(ourTimer);
        console.log("timer done");
        // $("#timer").text("Oh no!");
        // $("#popup").html(`<p>You could not save the world.</p>`)
        // .show();
      } else {
        seconds--;
        console.log(seconds);
        $("#timer").html(seconds);
      }
    }
  } 
  
  countdown();

  const shuffle = () => {
    console.log("shuffle");
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
    let matchCards = 0;
  // begin matching cards
  $(document.body).on("click", "li.card", function(event) {

    // flips the card over
    $(event.target).toggleClass("face-down show").delay(500);
    clickedCard = $(event.target).attr("class");
    showCards.push(clickedCard);
    // compare once we click 2 cards
    if (showCards.length === 2) {
      if (showCards[0] === showCards[1]) {
        console.log("match");
        $(".show").toggleClass("show blank");
        showCards = [];
        matchCards++;
        if (matchCards === 8) {
          console.log("you won!");
          $("#timer").hide();
          $("#timer").text("Yay!");
          $("#popup").html(`<p>You saved the world.</p>`)
          .show();
          // clearInterval(ourTimer);
        } else if ($("#timer").text === 0) {
          $("#timer").text("Oh no!");
          $("#popup").html(`<p>You could not save the world.</p>`)
          .show();

        }
        console.log(matchCards);
      } else {
        $(".show").toggleClass("show face-down");
        showCards = [];
      }
    } // end of compare 2 cards


  });

} // end of start game

 

////////////////////START OF BRAND NEW GAME
const brandNewGame = () => {
  $('#timer').html(`90`);
  $("#popup").html(`<p>You ARE patient zero.</p><button type="button" id="start-button">Plague</button>`)
$(document.body).on("click", "#start-button", function(event) 
{
  $("#popup").hide();
  startGame()
}); 
   // reset button
   $(document.body).on("click", "#reset-button", function(event) {
    brandNewGame();
  });

}



brandNewGame();

  // startGame();


});