#! /usr/bin/env node
import inquirer from "inquirer";

//currency conversion objects

let currencyConversion ={
    "PKR":{
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1,
},
    "GBP":{
        "USD": 1.26,
        "GBP": 1,
        "PKR": 350.76,
},
    "USD":{
        "GBP": 0.79,
        "USD": 1,
        "PKR": 277.54,
},
};

//propmt user for input

const answer:{
    from: "PKR" | "GBP" | "USD",
    to:  "PKR" | "GBP" | "USD",
    amount: number,
} = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "Please select your currency?",
    choices:["PKR", "GBP", "USD"],
},
    {
        type: "list",
        name: "to",
        message: "Please select your conversion rate",
        choices:["PKR", "GBP", "USD"]
    },
    {
        type: "number",
        name: "amount",
        message: " Please enter the amount you wish to convert",
    }
]);

//Destructing user input

const{from, to, amount} = answer;

//perfrom currency conversion

if (from && to && amount){
    let result = currencyConversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}else{
    console.log("Invalid conversion");
}
