// Challenge 1: Your age in days

function ageInDays(){
    var birthYear = prompt('What is your birth year?');
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-results').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator
function generateCat(){
    var image = document.createElement('img')
    var div = document.getElementById('flex-cat-gen')
    image.src = "https://cdn2.thecatapi.com/images/MTUwNTk4NQ.gif"
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = yourChoice.id;
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
}
// Test it out