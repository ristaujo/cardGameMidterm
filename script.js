//cards class="disease (differentiated)", class for face down, overall id for card, 


//WHEN WINDOW LOADS, GAME STARTS
window.onload = startGame();



//ALL CARDS ARE STORED IN AN ARRAY
let card = document.getElementsByClassName("card");
let cards = [...card];

// ON CLICKING A CARD IT WILL LOOP THROUGH ARRAY OF CARDS

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", displayCard);
}


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


// DISPLAY 2 INSTANCES OF EACH CARD ON DISPLAY - DISPLAYCARD FUNCTION


// ON RESET, THE STARTGAME() SHOULD BE CALLED AGAIN


// FUNCTION TO HAVE INTRODUCTION OF GAME POP UP, THIS SHOULD ALSO WORK FOR RESET



// FUNCTIONS THAT FLIP CARDS - WE SHOULD DO THIS IN HTML/CSS
let displayCard = function (){
  this.classList.toggle("face-down");
  this.classList.toggle("show");
  this.classList.toggle("disable");
}








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


// CONGRATS POP UP FOR WHEN ALL CARDS MATCH



}




