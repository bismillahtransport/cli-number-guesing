"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
async function main() {
    // 1) computer will generate a random number
    // 2) use input for guessing number
    // 3) compare user input with with computer generated number and show result
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const answer = await inquirer_1.default.prompt([
        {
            name: "userguessnumber",
            type: "number",
            message: "please guess a number between 1-6: ",
        },
    ]);
    if (answer.userguessnumber === randomNumber) {
        console.log("Congratulations! You guessed the right number.");
    }
    else {
        console.log("Sorry, you guessed the wrong number.");
    }
}
main();
