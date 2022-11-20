#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const args = process.argv;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.karaoke("CLI Calculator App 🤯\n");

  await sleep();
  rainbowTitle.stop();
  console.log(`
      ${chalk.magentaBright("HOW TO USE")}
      Enter numbers 
      select operation ${chalk.bold("× ÷ ±")} 
      I will ${chalk.green("Evaluate it")}
    `);
}
let digit1: number;
let digit2: number;
let operator: string = "";

async function askNumber() {
  const input = await inquirer.prompt({
    name: "digit1",
    type: "number",
    message: "🡺 enter first number:",
  });
  digit1 = input.digit1;

  //
  const input2 = await inquirer.prompt({
    name: "digit2",
    type: "number",
    message: "🡺 enter second number:",
  });
  digit2 = input2.digit2;
}
async function handleOperation() {
  // "÷", "×", "+", "-"
  const input3 = await inquirer.prompt({
    name: "operations",
    type: "list",
    message: "select operation",
    choices: ["(÷) Divide", "(×) Multiply", "(+) Add", "(-) Subtract"],
  });
  operator = input3.operations;
  operator = input3.operations;
}
const handleAnswer = async (operator: string) => {
  let total;
  if (operator === "(÷) Divide") {
    total = digit1 / digit2;
  } else if (operator === "(×) Multiply") {
    total = digit1 * digit2;
  } else if (operator === "(+) Add") {
    total = digit1 + digit2;
  } else if (operator === "(-) Subtract") {
    total = digit1 - digit2;
  }
  console.log(chalk.blue(total));
};
async function awaitAnswers() {
  await welcome();
  await askNumber();
  await handleOperation();
  await handleAnswer(operator);
}
console.clear();
awaitAnswers();
