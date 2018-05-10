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

 $(document.body).on("click", "li.card", function(event) {
   console.log(event.target);
   $(event.target)
    .toggleClass("face-down")
    .toggleClass("show")
    // .css("background-image", "url(https://slack-imgs.com/?c=1&url=http%3A%2F%2Fgjsmsvirtualzoo.pbworks.com%2Ff%2F1417702731%2Fkoala%2520%2520bear.jpg)");
 })


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