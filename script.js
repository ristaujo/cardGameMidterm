"use strict";

$(document).ready(function(){ 


  const startGame = () => {
    // shows the timer and sets the length of game time in seconds
    let seconds = 120;
    let matches = 0;
    
    //Function for timer
    function countdown() {

      // this displays the initial time in minutes and seconds
      let justSeconds = seconds%60;
      if ((justSeconds) < 10 && seconds >= 0) {
        justSeconds = "0" + justSeconds;
      }
      $("#timer").text(`${Math.floor(seconds/60)}:${justSeconds}`);
      // END INITIAL TIME DISPLAY

      let ourTimer = setInterval( () => {
        startTime()
      }, 1000);

      const startTime = () => {
        
        if (seconds == 0 && matches != 2) {
          clearInterval(ourTimer);
          $("#timer").text("Oh no!");
          $("#popup").html(`<p>You could not save the world, <br/> press reset to try again...</p>`)
          .show();
        } else if (matches === 8) {
          $("#popup").html(`<p>You saved the world. <br/> Press reset to play again.</p>`)
          .show();
          clearInterval(ourTimer);
        } else {
          seconds--;
          // this part displays the time in minutes and seconds
          let time = seconds%60;

          if ((time) < 10 && seconds >= 0) {
            time = "0" + time;
          }
          $("#timer").text(`${Math.floor(seconds/60)}:${time}`);
        }
      } 
      // Reset Button
    $(document.body).on("click", "#reset-button", function(event) {
        location.reload(true);
      });
    } // end of countdown function
    
    countdown();

    const shuffle = () => {
      let list = $('ul');
      let count = $('ul li').length;

      for (let i = 1; i < count; i++) {
      let j = Math.floor(Math.random() * count);
      $('li', list).eq(j).appendTo(list); //item at random number's index is appended to 'list'
      } 
    } // end of shuffle function
    shuffle();
    let showCards = [];
    let clickedCard;
      
    // begin matching cards
    $(document.body).on("click", "li.card", function(event) {

      // flips the card over on click
      $(event.target).toggleClass("face-down show open");
      clickedCard = $(event.target).attr("class");
      showCards.push(clickedCard);
      // compare once we click 2 cards
      if (showCards.length === 2) {
        
        const compare = () => {
          if (showCards[0] === showCards[1]) {
          $(".show").toggleClass("show blank open");
          showCards = [];
          matches++;
        } else {  
          $(".show").toggleClass("show face-down open");
          showCards = [];
        }
    } // end of compare function

      // after 3 seconds, run compare function
      setTimeout(compare, 3000);
      } // end of compare 2 cards
    }); // end of click on card functionality

  } // end of startGame function

  //Generates start game popup and initializes game
  const brandNewGame = () => {
    $(".blank").toggleClass("blank face-down")
    $(".show").toggleClass("show face-down")
    let matches = 0;
    $("#popup").html(`<p>You ARE patient zero. <br/>
    You have 2 minutes to match all 8 diseases...the fate of humankind is in your hands. <br/> Are you ready?
    </p><button type="button" id="start-button">Plague</button>`)
    .show();
    $(document.body).on("click", "#start-button", function(event) {
      $("#popup").hide();
      startGame();
    }); 
  } // end of brandNewGame function

  //////////////////// Start of actual code that runs on load

  brandNewGame();

}); // end of program