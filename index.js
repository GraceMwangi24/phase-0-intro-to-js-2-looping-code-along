// Code your solutions in this file
// index.js

// Function to create thank you cards
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Function to count down from a number and log each count
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
 
