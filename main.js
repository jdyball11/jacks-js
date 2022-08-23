const rpc = ["rock", "paper", "scissors"];

const player = {
  // name: "Jack",
  jack: null
};

const computer = {
  // name: "AlphaGo",
  alphaGo: null
};


let rock = parseInt(document.querySelector('#rock').value);
let paper = parseInt(document.querySelector('#paper').value);
let scissors = parseInt(document.querySelector('#scissors').value);


function resultCall() {
  if (rock === 0) {
    player.jack = rpc[0];
  }
  else if (paper === 1) {
    player.jack = rpc[1];
  }
 else if (scissors === 2) {
    player.jack = rpc[2];

}
compareChoices()
}



let rockValue = document.getElementById('rock');
rockValue.addEventListener('click', resultCall);

let paperValue = document.getElementById('paper');
paperValue.addEventListener('click', resultCall);

let scissorValue = document.getElementById('scissors');
scissorValue.addEventListener('click', resultCall);


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

compareChoices()
