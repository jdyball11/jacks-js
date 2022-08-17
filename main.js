const rpc = ["rock", "paper", "scissors"];

const player = {
  // name: "Jack",
  jack: null
};

const computer = {
  // name: "AlphaGo",
  alphaGo: null
};


function computerChooses() {
  let getRandom = Math.floor(Math.random() * rpc.length);
  computer.alphaGo = rpc[getRandom];
}
computerChooses()




function compareChoices() {
  computerChooses();
if (player.jack === computer.alphaGo) {
  getResult("Players have tied.");
} 
else if (computer.alphaGo === rpc[0]) {
  if (player.jack === rpc[1]) {
    getResult("The player wins! The computer chose " + computer.alphaGo + " and the player chose " + player.jack)
  }
  else {
    getResult("The computer wins! The player chose " + player.jack + " and the computer chose " + computer.alphaGo)
  }
}
else if (computer.alphaGo === rpc[1]) {
  if (player.jack === rpc[0]) {
    getResult("The computer wins! The player chose " + player.jack+ " and the computer chose " + computer.alphaGo)
  }
  else {
    getResult("The player wins! The computer chose " + computer.alphaGo + " and the player chose " + player.jack)
  }
}
  
else if (computer.alphaGo === rpc[2]) {
  if (player.jack === rpc[0]) {
    getResult("The player wins! The computer chose " + computer.alphaGo + " and the player chose " + player.jack)
  }
  else {
    getResult("The computer wins! The player chose " + player.jack + " and the computer chose " + computer.alphaGo)
  }
 }
}

function getResult(result) {
  const push = document.createElement('p');
    push.innerText = result;
  const grab = document.querySelector('body');
    grab.append(push);
}

compareChoices();



// let playerChoice = player.jack;
  
document.querySelector('.paper').addEventListener('click', function(e) {
  if(e.target.value = 1) {
    console.log(player[0] = rpc[1]);
  }
})
 document.querySelector('.scissors').addEventListener('click', function(e) {
 
   if(e.target.value = 2) {
 
    playerChoice = rpc[2];
  }
})

const rockR = document.querySelector('.rock').value

function bestGame(result) {
  if(parseInt(result) = 1) {
    console.log(player[0] = rpc[1]);
  }
}
