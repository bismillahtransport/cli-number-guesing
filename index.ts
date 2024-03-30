#!  /usr/bin/env

import inquirer from "inquirer";

// 1) computer will generate a random number  done
// 2) use input for guesing number  done
// 3) compare user input with with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userguessnumber",
    type: "number",
    message: "please guess a number between 1-6: ",
  },
]);
if (answer.userguessnumber === randomNumber) {
  console.log("Congragulations! you guess a right number:");
} else {
  console.log("you guess wrong number:");
}
