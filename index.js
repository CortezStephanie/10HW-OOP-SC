const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const employeeArr = [];

const questions = [
    {
        type: 'list',
        name: 'employee',
        message: 'Chose the role of the employee?',
        choices: ["Manager", "Intern", "Engineer"],
        //validate: isValid
    },
    {
        type: 'input',
        message: 'what is the name of the employee?',
        name: 'employeeName',
        //validate: isValid,
    },
    {
        type: 'input',
        message: 'what is the ID for the employee?',
        name: 'id',
        //validate: isValid,
    },
    {
        type: 'input',
        message: 'what is the email for the employee?',
        name: 'email',
        //validate: isValid,
    },
    {
        type: 'input',
        message: 'what is the office numver for the manager?',
        name: 'officeNumber',
        //validate: isValid,
        when: (answer) => answer.employee === "Manager"
    },
    {
        type: 'input',
        message: 'what is the github for the engineer?',
        name: 'github',
        //validate: isValid,
        when: (answer) => answer.employee === "Engineer"
    },
    {
        type: 'input',
        message: 'what school did you attend?',
        name: 'school',
        //validate: isValid,
        when: (answer) => answer.employee === "Intern",
    },
    {
        type: 'confirm',
        message: 'Add a member or quit?',
        // choices:["Add member","Quit"],
        name: 'addMore',
        //validate: isValid,
        
    },

]

function writeToFile(data) {
    fs.writeFile("index.html", data, (err) => {
        err ? console.log(err) : console.log('Congradulations, you have successfully created a index.html for your project!');
    })
}

function generateHTML (employees){
    let template =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>
<body>`
    for(i=0; i< employees.length; i++){
        if(employees[i].getRole() == "Manager"){
            template +=`<h1> Manager: ${employees[i].name} </h1>
            `
        }
    }
template += `</body>
</html>`

    return template
}

function init() {
    inquirer
        .prompt(questions)
        // .then data is answers that you type in in terminal
        .then((data) => {
            if(data.employee == "Manager"){
                const newManager = new Manager(data.employeeName, data.id, data.email, data.officeNumber)
                employeeArr.push(newManager);
                if(data.addMore) return init()
            }

            console.log(employeeArr)
            // then transfers over to Html 
            const htmlPageContent = generateHTML(employeeArr);
            writeToFile(htmlPageContent)   
        });
}
// Function call to initialize 
init();