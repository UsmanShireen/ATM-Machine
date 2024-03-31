#! /usr/bin/env node 
import inquirer from "inquirer";
let balance = 50000;
let pin = 7443;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pincode",
        type: "number"
    }
]);
if (pinAnswer.pin === pin) {
    console.log("correct pin code");
    let opr = await inquirer.prompt([
        {
            name: "operations",
            message: "select one operation",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);
    if (opr.operations === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter amount you want to withdraw",
                type: "number"
            }]);
        if (amountAns.amount < balance) {
            balance -= amountAns.amount;
            console.log("Now your balance is " + balance);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (opr.operations === "check balance") {
        console.log("Your current balance is " + balance);
    }
    else if (opr.operations === "fastcash") {
        let fast = await inquirer.prompt([{
                name: "fast_opt",
                message: "How much money you want to withdraw",
                type: "list",
                choices: ["1000", "5000", "8000", "10000"]
            }]);
        if (fast.fast_opt === "1000") {
            balance -= fast.fast_opt;
            console.log(`your remaining balance is ${balance}`);
        }
        if (fast.fast_opt === "5000") {
            balance -= fast.fast_opt;
            console.log(`Your remaining balance is ${balance}`);
        }
        if (fast.fast_opt === "8000") {
            balance -= fast.fast_opt;
            console.log(`Your remaining balance is ${balance}`);
        }
        if (fast.fast_opt === "10000") {
            balance -= fast.fast_opt;
            console.log(`Your remaining balance is ${balance}`);
        }
    }
}
else {
    console.log("pin code is invalid");
}
