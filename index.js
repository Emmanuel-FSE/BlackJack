let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""


let messageX = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomNumber(){
    let randomN = Math.floor(Math.random() * 13) +1
    if(randomN > 10){
        return 10
    } else if(randomN === 1){
        return 11
    } else{
        return randomN
    }
}

function startGame(){
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
   messageX.textContent = message
   sumEl.textContent = "Sum: " + sum
   cardsEl.textContent = "Cards: "
   for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
   }
   
}


function newCard(){
    let card = getRandomNumber()
    sum += card
    cards.push(card)  
    renderGame()
}
