"use strict";

$(document).ready(function(){ 

  const startGame = () => {
    // shows the timer and sets the length of game time in seconds
    let seconds = 300;
    // $('#timer').html(`${seconds}`);

    let matches = 0;
    
    console.log("game started");

    function countdown() {

      // this displays the initial time in minutes and seconds
      let justSeconds = seconds%60;
      // console.log(time);
      if ((justSeconds) < 10 && seconds >= 0) {
        justSeconds = "0" + justSeconds;
      }
      $("#timer").text(`${Math.floor(seconds/60)}:${justSeconds}`);
      // let seconds = $("#timer").text();
      // END INITIAL TIME DISPLAY

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
          // console.log($("#timer").text());

          // this part displays the time in minutes and seconds
          let time = seconds%60;
          // console.log(time);
          if ((time) < 10 && seconds >= 0) {
            time = "0" + time;
          }
          $("#timer").text(`${Math.floor(seconds/60)}:${time}`);
        }
      } 
      // Reset Button
    $(document.body).on("click", "#reset-button", function(event) {
      // clearInterval(ourTimer);
      // $("#popup").hide();
      // startGame();
      // brandNewGame();
        location.reload(true);
      });
    } // end of countdown function
    
    countdown();

    const shuffle = () => {
      console.log("shuffle");
      let list = $('ul');
      let count = $('ul li').length;
      for (let i = 1; i < count; i++) {
      let j = Math.floor(Math.random() * count);
      $('li', list).eq(j).appendTo(list);
      } 
    } // end of shuffle function
    shuffle();
    let showCards = [];
    // let clickedCard;
      
    // begin matching cards
    
    $(document.body).on("click", "li.card", function(event) {

      // flips the card over on click
      $(event.target).toggleClass("face-down show open");
      let clickedCard = $(event.target);
      let cardType = clickedCard[0].attributes.type;
      // if (showCards.length < 2) {
      showCards.push(clickedCard);
      // console.log(showCards);

      
      // compare once we click 2 cards
        if (showCards.length === 2) {
          const compare = () => {

            // if the attribute "disease" of the 2 cards are equal...
            if (showCards[0].attr("disease") === showCards[1].attr("disease")) {

            console.log("match");
            for (let i = 1; i >= 0; i--) {
              $(showCards[i]).addClass("blank");
            }
            $(".show").toggleClass("show face-down open");
            showCards = [];
            matches++;
            console.log(matches);
          } else { // if the attribute "disease" of the 2 cards are NOT equal...
            console.log("no match");
            $(".show").toggleClass("show face-down open");
            showCards = [];
          }
        } // end of compare function

      // after 3 seconds, run compare function
      setTimeout(compare, 3000);
      
      } // end of if (showCards.length === 2) 

    // } else {
    //   console.log("too long");
    //   $(".show").toggleClass("show face-down open");
      
    // }
    }); // end of click on card functionality

  } // end of startGame function


  const brandNewGame = () => {
    $(".blank").toggleClass("blank face-down")
    $(".show").toggleClass("show face-down")
    let matches = 0;
    $("#popup").html(`<p>You ARE patient zero.</p><button type="button" id="start-button">Plague</button>`)
    .show();
    $(document.body).on("click", "#start-button", function(event) {
      $("#popup").hide();
      startGame();
    }); 
  } // end of brandNewGame function

  //////////////////// Start of actual code that runs on load

  brandNewGame();

}); // end of program