const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//const renderHtml = require('i')
const employeeArr = [];

const questions = [{
        type: 'list',
        name: 'employee',
        message: 'Choose the role of the employee?',
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
        message: 'what is the office number for the manager?',
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

function generateHTML(employees) {
    let template = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Test</title>
</head>
<body>`
    
    for (i = 0; i < employees.length; i++) {
        if (employees[i].getRole() == "Manager") {
            template += `
            <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h1 class="card-title"> Manager: ${employees[i].name} </h1>
          <p>${employees[i].email}</p>
          <p>${employees[i].OfficeNumber}</p>
          <p>${employees[i].id}</p>
        </div>
      </div>
            `
        }
        if (employees[i].getRole() == "Engineer") {
            template += `
            <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h1 class="card-title"> Engineer: ${employees[i].name} </h1>
          <p>${employees[i].email}</p>
          <p>${employees[i].gitHub}</p>
          <p>${employees[i].id}</p>
        </div>
      </div>
            `
        }
        if (employees[i].getRole() == "Intern") {
            template += `
            <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h1 class="card-title">Intern: ${employees[i].name} </h1>
          <p>${employees[i].email}</p>
          <p>${employees[i].school}</p>
          <p>${employees[i].id}</p>
        </div>
      </div>
            `
        }
    }
    template += `<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    </body>
    </html>`

    return template
}

function init() {
    inquirer
        .prompt(questions)
        // .then data is answers that you type in in terminal
        .then((data) => {
            if (data.employee == "Manager") {
                const newManager = new Manager(data.employeeName, data.id, data.email, data.officeNumber)
                employeeArr.push(newManager);
                if (data.addMore) return init()
            }
            if (data.employee == "Intern") {
                const newIntern = new Intern(data.employeeName, data.id, data.email, data.school)
                employeeArr.push(newIntern);
                if (data.addMore) return init()
            }if (data.employee == "Engineer") {
                const newEngineer = new Engineer(data.employeeName, data.id, data.email, data.github)
                employeeArr.push(newEngineer);
                if (data.addMore) return init()
            }

            
            // then transfers over to Html 
            const htmlPageContent = generateHTML(employeeArr);
            writeToFile(htmlPageContent)
        });
}

// Function call to initialize 
init();