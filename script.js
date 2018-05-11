"use strict";

$(document).ready(function(){ 




const startGame = () => {
  $('#timer').show();
  $('#timer').html(`20`);
  // $(".blank").toggleClass("blank face-down")
  // $(".show").toggleClass("show face-down")

  let matches = 0;
  
  console.log("game started");

  function countdown() {

    let seconds = $("#timer").text();
    let ourTimer = setInterval( () => {
      startTime()
    }, 1000);

    const startTime = () => {
      // console.log(matches);
      
      if (seconds == 0 && matches != 2) {
        clearInterval(ourTimer);
        console.log("timer done");
        $("#timer").text("Oh no!");
        $("#popup").html(`<p>You could not save the world.</p>`)
        .show();
      } else if (matches === 2) {
        console.log("you win!")
        $("#popup").html(`<p>You saved the world.</p>`)
        .show();
        clearInterval(ourTimer);
      } else {
        seconds--;
        // console.log(seconds);
        // console.log($("#timer").text());
        $("#timer").html(seconds);
      }
    }
       // reset button
   $(document.body).on("click", "#reset-button", function(event) {
    clearInterval(ourTimer);
    // $("#popup").hide();
    // startGame();
    brandNewGame();
  });
  } 
  
  countdown();

  const shuffle = () => {
    console.log("shuffle");
    let list = $('ul');
    let count = $('ul li').length;
  for (let i = 1; i < count; i++) {
    let j = Math.floor(Math.random() * count);
    $('li', list).eq(j).appendTo(list);
} 
  }
  shuffle();
  let timer = 2;

    let showCards = [];
    let clickedCard;
    
  // begin matching cards
  $(document.body).on("click", "li.card", function(event) {

    // flips the card over
    $(event.target).toggleClass("face-down show").delay(500);
    clickedCard = $(event.target).attr("class");
    showCards.push(clickedCard);
    // compare once we click 2 cards
    if (showCards.length === 2) {
      console.log(showCards);
      
      if (showCards[0] === showCards[1]) {
        console.log("match");
        $(".show").toggleClass("show blank");
        showCards = [];
        matches++;
        // if (matches === 2) {
        //   console.log("you won!");
        //   $("#timer").hide();
        //   $("#timer").text("Yay!");
        //   $("#popup").html(`<p>You saved the world.</p>`)
        //   .show();
        // } 
        console.log(matches);
      } else {
        $(".show").toggleClass("show face-down");
        showCards = [];
      }
    } // end of compare 2 cards


  });

} // end of start game

 

////////////////////START OF BRAND NEW GAME
const brandNewGame = () => {
  $(".blank").toggleClass("blank face-down")
  $(".show").toggleClass("show face-down")
  let matches = 0;
  // $('#timer').show();
  // $('#timer').html(`20`);
  $("#popup").html(`<p>You ARE patient zero.</p><button type="button" id="start-button">Plague</button>`)
  .show();
$(document.body).on("click", "#start-button", function(event) 
{
  $("#popup").hide();
  startGame()
}); 
  //  // reset button
  //  $(document.body).on("click", "#reset-button", function(event) {
  //   brandNewGame();
  // });

}



brandNewGame();

  // startGame();


});