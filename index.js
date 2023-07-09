let player = {
    name: "Ethan",
    chips: 100
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let card = Math.floor(Math.random()*13+1)
    if (card > 10) return 10
    else if (card === 1) return 11
    else return card
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if(player.chips > 0){
        cardsEl.textContent = "Cards: "
        for(let i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + " "
        }
        sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack!"
            hasBlackJack = true
            player.chips += 10
        } else {
            message = "You're out of the game!"
            isAlive = false
            player.chips -= 10
        }
        messageEl.textContent = message
        playerEl.textContent = player.name + ": $" + player.chips
    }
    else{
        messageEl.textContent = "You Lost! You have no more money left!"
        playerEl.textContent = player.name + ": $" + player.chips
    }
}