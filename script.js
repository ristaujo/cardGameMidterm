"use strict";

$(document).ready(function(){ 

//cards class="disease (differentiated)", class for face down, overall id for card, 


//WHEN WINDOW LOADS, GAME STARTS
// window.onload = startGame();

//ALL CARDS ARE STORED IN AN ARRAY
// let card = document.getElementsByClassName("card");
// let cards = [...card];

// ON CLICKING A CARD IT WILL LOOP THROUGH ARRAY OF CARDS
// FUNCTIONS THAT FLIP CARDS
// let displayCard = function (){
//   this.classList.toggle("face-down");
//   this.classList.toggle("show");
//   this.classList.toggle("disable");
// }

//  $(document.body).on("click", "li.card", function(event) {
//    console.log(event.target);
//    $(event.target)
//     .toggleClass("face-down")
//  })

// Shuffles cards

const startGame = () => {
  console.log("game started");
  const shuffle = () => {
    let list = $('ul');
    let count = $('ul li').length;
  for (let i = 1; i < count; i++) {
    let j = Math.floor(Math.random() * count);
    $('li', list).eq(j).appendTo(list);
} console.log(`this is the list ${list}`);
  }
  // console.log("bye");
  shuffle();
  let matches = 0;
  let timer = 2;

    // game
    // console.log("hi");
    let showCards = [];
    let clickedCard;
  $(document.body).on("click", "li.card", function(event) {

    // flips the card over
    $(event.target).toggleClass("face-down show");

    clickedCard = $(event.target).attr("class");
    showCards.push(clickedCard);
    console.log(`card one ${clickedCard}`);
    console.log(showCards);

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

      // console.log($(event.target).attr("class"));
      
      // console.log(`card one ${cardOne}`);
      // console.log(`card two ${cardTwo}`);
      // if (cardOne === cardTwo) {
      //   //match
      //   // hide and play again
      //   // console.log("yay");
      //   matches++;
      // } else {
      //   // not match
      //   // flip back over
      //   console.log("boo");
      // }
      timer--;
   if (timer <= 0) {
    // lose
  } else if (matches.length === 8) {
    // win
  } 

}

startGame();


$(document.body).on("click", "#reset-button", function(event) {
  startGame();
});













//  for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("click", displayCard);
// }




/*
//START GAME FUNCTION, LOOPS THROUGH ARRAY OF CARDS AND ADDS THEM TO WINDOW
let deck = document.querySelector(".deck");
function startGame() {
  let shuffleCards = shuffle(cards);
  for(let i = 0; i < shuffledCards.length; i++){
    [].forEach.call(shuffledCards, function(item) {
      deck.appendChild(item);
    });
  }
}
 
// ON RESET, THE STARTGAME() SHOULD BE CALLED AGAIN
// FUNCTION TO HAVE INTRODUCTION OF GAME POP UP, THIS SHOULD ALSO WORK FOR RESET
//randomize cards
function shuffle(ourDeck) {
  let currentIndex = ourDeck.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = ourDeck(currentIndex);
    ourDeck(currentIndex) = ourDeck(randomIndex);
    ourDeck(randomIndex) = temporaryValue;
  }
  return array;
}
//Check for matches
function cardOpen() {
  openedCards.push(this);
  let len = openedCards.length;
  if(len === 2){
    moveCounter();
    if(openedCards[0].type === openedCards[1].type) {
      matched();
    } else  {
      unMatched();
    }
  };
  // CHECKING CARD MATCHES
  function matched() {
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards = [];
   }
  function noMatch() {
    openedCards[0].classList.add("nomatch");
    openedCards[1].classList.add("nomatch");
  }
}
*/



});