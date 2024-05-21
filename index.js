#! /usr/bin/env node
import inquirer from "inquirer";
//1) Compiler will generate a random number- Done
//2) User input for guessing number-done
//3) Compare user input with compiler generated number and show result
const randomNumber = Math.floor(Math.random() * 11);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number 1-10: ",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("You guessed correct number");
}
else {
    console.log("You guessed wrong number");
}
console.log("Number guessed by user:", answers.userGuessNumber);
console.log("Number: ", randomNumber);
