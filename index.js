#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
while (true) {
    const pinAnswer = await inquirer.prompt([
        {
            type: "number",
            name: "pin",
            message: "enter your pin",
        },
    ]);
    if (pinAnswer.pin === myPin) {
        console.log("correct pin code");
        console.log(`your current balance is : ${myBalance}`);
        let choice = await inquirer.prompt([
            {
                type: "list",
                name: "chooseOption",
                message: "choose an options",
                choices: ["fast cash", "widthdrawal", "check balance", "exit"],
            },
        ]);
        if (choice.chooseOption === "fast cash") {
            let fc = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "choose an options",
                    choices: [2000, 4000, 6000],
                },
            ]);
            if (fc.fastCash === 2000) {
                myBalance -= 2000;
                console.log(`your remaining balance is : ${myBalance}`);
            }
            else if (fc.fastCash === 4000) {
                myBalance -= 4000;
                console.log(`your remaining balance is : ${myBalance}`);
            }
            else if (fc.fastCash === 6000) {
                myBalance -= 6000;
                console.log(`your remaining balance is : ${myBalance}`);
            }
        }
        else if (choice.chooseOption === "widthdrawal") {
            let amount = await inquirer.prompt([
                {
                    type: "number",
                    name: "money",
                    message: "enter the amount you want to widthdrawal",
                },
            ]);
            if (amount.money <= myBalance) {
                console.log(`you widthdraw amount ${amount.money} successfully`);
                let balance = myBalance - amount.money;
                console.log(`your remaining balance is : ${balance}`);
            }
            else {
                console.log("not enough money");
            }
        }
        else if (choice.chooseOption === "check balance") {
            console.log(`your balance is : ${myBalance}`);
        }
        else if (choice.chooseOption === "exit") {
            break;
        }
    }
    else {
        console.log("incorrect pin code");
    }
}
