#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { welcome } from "./welcome.js";
// client class
class Client {
    name;
    constructor(cliname) {
        this.name = cliname;
    }
}
;
// clients dir class
class ClientsDir {
    clients = [];
    addClient(obj) {
        this.clients.push(obj);
    }
}
;
// welcome func
await welcome();
// using class to store data
const clientDirectory = new ClientsDir();
// program func
const startProgram = async (clientDirectory) => {
    // do-while loop
    do {
        console.log(`${chalk.bgBlue(`\nHello and Welcome to our Client Directory Service\n`)}`);
        // user prompt
        const ans = await inquirer.prompt([
            {
                name: "user",
                type: "list",
                choices: ["Register", "Login"],
                message: `${chalk.red("Please choose options below: ")}`,
            }
        ]);
        // conditions on user prompt
        if (ans.user == "Register") {
            const reg = await inquirer.prompt([
                {
                    name: "client",
                    type: "input",
                    message: `${chalk.red("Please enter your name: ")}`,
                }
            ]);
            // checking validity of client data
            const client = clientDirectory.clients.find((val) => val.name == reg.client);
            //  implying conditions using validation
            if (!client) {
                const clientName = new Client(reg.client);
                clientDirectory.addClient(clientName);
                console.log(`${chalk.green.bold(`Hello ${reg.client}, You are Registered Now!!!\n`)}`);
                console.log(`${chalk.yellow.bold(`List of Clients:`)}`);
                console.log(clientDirectory);
            }
            else if (client) {
                console.log(chalk.green.bold(`Hello ${reg.client}, You're already Regitered, Please Login\n`));
                console.log(`${chalk.yellow.bold(`List of Clients:`)}`);
                console.log(clientDirectory);
                process.exit();
            }
        }
        else if (ans.user == "Login") {
            // user prompt
            const log = await inquirer.prompt([
                {
                    name: "client",
                    type: "input",
                    message: `${chalk.red("Please enter your name: ")}`,
                }
            ]);
            // checking validity of client data
            const client = clientDirectory.clients.find((val) => val.name == log.client);
            //  implying conditions using validation
            if (client) {
                console.log(`${chalk.green.bold(`Hello ${log.client}!!!\n`)}`);
                console.log(`${chalk.yellow.bold(`List of Clients:`)}`);
                console.log(clientDirectory);
                process.exit();
            }
            else if (!client) {
                console.log(chalk.cyan.bold(`Please ${log.client}, Register Yourself First.\n`));
                console.log(`${chalk.yellow.bold(`List of Clients:`)}`);
                console.log(clientDirectory);
            }
        }
    } while (true);
};
startProgram(clientDirectory);
