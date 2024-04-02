#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000;  // Dollar
let myPin = 1234;

console.log("\n");
console.log(chalk.green("================================================"));
console.log(chalk.red("*************WELCOME TO ATM MACHINE*************"));
console.log(chalk.green("================================================"));
console.log("\n");

// asking for pin
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: chalk.yellow("Enter Your PIN: "),
            type: "number"
        }
    ]
);
// checking the pin with myPin
if (pinAnswer.pin === myPin) {
    console.log(chalk.blue("Correct Pin Code, Logged In Sucessfully!!!\n"));

    // if pin correct, asked for operations that you want to perform
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: chalk.yellow("Select one Option:"),
                type: "list",
                choices:["Withdraw", "Check Balance", "Fast Cash"]

            }
        ]
    );

    // for Withdraw
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: chalk.green("Enter Your Amount: "),
                    type: "number"
                }
            ]
        );
        
        // amount greator than 10000 will show insufficient else allow for withdraw
        if (amountAns.amount > 10000) {
            console.log(chalk.red("Sorry! Insufficient Balance."))
        }
        else {
        myBalance -= amountAns.amount;
        console.log(chalk.blue(`Your Remaining Balance is: ${myBalance}`));
        }
    
    // for Check Balance
    } else if (operationAns.operation === "Check Balance") {
        console.log(chalk.blue(`Your Balance is: ${myBalance}`));
    
    // for Fast Cash with choices    1000, 2000, 5000, 10000
    } else if (operationAns.operation === "Fast Cash") {

        let fastCashAns = await inquirer.prompt(
            [
                {
                    name: "fastCash",
                    message: chalk.green("Select The Cash:"),
                    type: "list",
                    choices: [1000, 2000, 5000, 10000]
                }
            ]
        );
        
        // for 1000
        if (fastCashAns.fastCash === 1000) {
            myBalance -= fastCashAns.fastCash;
            console.log(chalk.red(`Your Remaining Balance is: ${myBalance}`))
        ;
        
        // for 2000
        } else if (fastCashAns.fastCash === 2000) {
            myBalance -= fastCashAns.fastCash;
            console.log(chalk.red(`Your Remaining Balance is: ${myBalance}`));
        
        // for 5000
        } else if (fastCashAns.fastCash === 5000) {
            myBalance -= fastCashAns.fastCash;
            console.log(chalk.red(`Your Remaining Balance is: ${myBalance}`));
        
        // for 10000
        }else if (fastCashAns.fastCash === 10000) {
            myBalance -= fastCashAns.fastCash;
            console.log(chalk.red(`Your Remaining Balance is: ${myBalance}`));
        }

    }
    
} 
// when the pin is incorrect
else {
    console.log(chalk.red("Incorrect Pin Number."));
}