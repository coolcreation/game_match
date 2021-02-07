//  Jeff Bohn    2/6/2021    Memory Game Tutorial for Lab 16   https://www.youtube.com/watch?v=lhNdUVh3qCc&feature=emb_logo/

"use strict"


document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [                // construct an array of the game pieces/images
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'red',
        img: 'images/red.png'
      },
      {
        name: 'blue',
        img: 'images/blue.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'red',
        img: 'images/red.png'
      },
      {
        name: 'blue',
        img: 'images/blue.png'
      },
    ]
  
    cardArray.sort(() => 0.5 - Math.random())   //  randomize the cards at the start of the game
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result') // this new variable is assigned to <span id="result">, being using by ".textContent" below to display score
    let cardsChosen = []   // empty array, to be filled
    let cardsChosenId = []
    let cardsWon = []
    var numTries = 0;  // ADDED FOR NUMBER OF TRIES

    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {     // loop over card array 
        const card = document.createElement('img')     // for each card we create an image element, named "card"
        card.setAttribute('src', 'images/blankCopy.jpg')   // for each card - set Attribute, linking it to the image
        card.setAttribute('data-id', i)                // for each card - give it a data-id which goes from 0-11
        card.addEventListener('click', flipCard)       // listen for: if a card has been clicked on, and invoke a flipCard function (down below)
        grid.appendChild(card)                         // put image elements into the grid
      }
    }

      // check for matches   ( second of 2 things we need to make the game work, coded second )
    function checkForMatch() {
      const cards = document.querySelectorAll('img')  // pickout all the images that we created in our first function using querySelectorAll, re-naming the images "cards"
      const optionOneId = cardsChosenId[0]  // we have 2 values in our cardsChosen array, as well as our cardsChosenId array
      const optionTwoId = cardsChosenId[1]  // assign the first card [0], and assign the second card [1] as well

      if(optionOneId == optionTwoId) {                  // check to see if user clicks on the same card twice
        cards[optionOneId].setAttribute('src', 'images/blankCopy.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blankCopy.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {// check if both cards match, do the following lines of code:
        //alert('You found a match')                                    // send alert
        cards[optionOneId].setAttribute('src', 'images/white.png')    // assign first card square to white
        cards[optionTwoId].setAttribute('src', 'images/white.png')    // assign second card square to white
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)                                    // .push first and second cards into cardsWon array
      } else {                                   // if cards do not match do the following:
        cards[optionOneId].setAttribute('src', 'images/blankCopy.jpg')    // set the optionOneId (cardsChosenId[0]) to standard gameboard background image
        cards[optionTwoId].setAttribute('src', 'images/blankCopy.jpg')    // set the optionTwoId (cardsChosenId[1]) to standard gameboard background image
        //alert('Sorry, try again')                                     // send alert
      }
      cardsChosen = []           // after player turn (regardless of outcome), reset the array
      cardsChosenId = []         // reset the array
      resultDisplay.textContent = cardsWon.length  // we are collecting cardsWon points - How many times have we stored something in our cardsOne array?
      if  (cardsWon.length === cardArray.length/2) {  // 1 point for each match, giving 12 total points  (then divide by 2)
        resultDisplay.textContent = " You have found them all in " + numTries + " tries!"  // convert it to score to display to the user
      }
    }
  
     // flip your card    ( first of 2 things we need to make the game work, coded first )
    function flipCard() {
      let cardId = this.getAttribute('data-id')     // setting "cardId" variable to the data-id attribute
      cardsChosen.push(cardArray[cardId].name)      // push the cards from cardArray based on cardId (if the cardId is 4 then this will match the 5th card in array) 
      cardsChosenId.push(cardId)     // push cardId into cardsChosenId empty array variable up top          // Once we locate the card we will get it's .name
      this.setAttribute('src', cardArray[cardId].img)  // because flipcard is already in a function up top, and already have a card picked, setAttribute assigns an image to the cards square based on the ID it holds
      
      if (cardsChosen.length === 2) {    // we only want 2 cards in the cardChosen array 
        setTimeout(checkForMatch, 500)  // so it doesn't happen too quickly, check for a match after 500ms
        numTries++;  // ADDED FOR NUMBER OF TRIES ITTERATION
      }
    }
  
    createBoard()  
  })






















































































































































/*let again = "y";

do{

// get investment amount - loop until user enters a number
let investment = 0;
do {
    investment = parseFloat(prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) );

// get interest rate - loop until user enters a number
let rate = 0;
do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while ( isNaN(rate) );

// get number of years - loop until user enters a number
let years = 0;
do {
    years = parseInt(prompt("Enter number of years", 10));
}
while ( isNaN(years) );

document.write(`<h4>Investment amount = ${investment} Interest rate = ${rate} Years = ${years}</h4>`);
// calulate future value
let futureValue = investment;
for (let i = 1; i <= years; i++ ) {
    const interest = futureValue * rate / 100;
    futureValue = futureValue + interest;
    document.write(`<p>Years = ${i} Interest = ${interest.toFixed(2)} Value = ${futureValue.toFixed(2)}</p>`);
}

again = prompt("Repeat entries? (y/n)", "y");
}

while (again === "y");


// display the results
document.write(html);
*/