var prompt = require('prompt');

prompt.start();

console.log("Player 1, your turn...")

prompt.get(['turn'], (err, result) => {
  console.log("you put: ", result.turn)
})
