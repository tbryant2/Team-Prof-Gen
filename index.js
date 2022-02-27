const inquirer = require("inquirer");
const fs = require("fs");

const { createRequire } = require("module");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let team = []

function runInquirer() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to add another team member?",
            default: "false",
            name:"AddEmployee"
        },
        {
            type: "input",
            message: "What is your name?",
            name: "name", 
            when: (answers) => answers.AddEmployee === true
        },
        {
            type: "list",
            message: "What is your title?",
            choices: ["Manager", "Engineer", "Intern", "None"],
            name: "title", 
            when: (answers) => answers.AddEmployee === true
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "id",
            when: (answers) => answers.AddEmployee === true
        }, {
            type: "input",
            message: "What is your email?",
            name: "email",
            when: (answers) => answers.AddEmployee === true
        }, {
            type: "input", 
            name: "github",
            message: "github handle", 
            when: (answers) => answers.AddEmployee === true && answers.title === "Engineer"
        }, {
            type: "input", 
            name: "school", 
            message: "What school did you attend?", 
            when: (answers) => answers.AddEmployee === true && answers.title === "Intern"
        }, {
            type: "input", 
            name: "officenumber", 
            message: "What is your Office Number?", 
            when: (answers) => answers.AddEmployee === true && answers.title === "Manager"
        }])
        .then(function ({ AddEmployee, name, title, id, github, email, school, officenumber }) {
            if(AddEmployee) {
                if (title === "Manager") {
                    const newManager = new Manager(name, id, email, title, officenumber)
                    console.log(newManager)
                    team.push(newManager)
                    runInquirer()
                } else if (title === "Engineer") {
                    const newEngineer = new Engineer(name, id, email, title, github)
                    console.log(newEngineer)
                    team.push(newEngineer)
                    runInquirer()
                } else if (title === "Intern") {
                    const newIntern = new Intern(name, id, email, title, school)
                    console.log(newIntern)
                    team.push(newIntern)
                    runInquirer()
                } 
            }
             else {
                createHtml()
            }
        })
};

// function runInquirerManager(name, title, id, email) {
//     inquirer.prompt([{
//         type: "input",
//         message: "What is your office number?",
//         name: "officeNumber"
//     }])
//         .then(function (officeNum) {
//             // const officeNumber = officeNum
//             const officeNumber = Object.values(officeNum)[0]
//             const newManager = new Manager(name, id, email, officeNumber, title,)
//             console.log(newManager)
//             team.push(newManager)
//             runInquirer()
//         })
// };

// function runInquirerEngineer(name, id, github, title) {
//     inquirer.prompt([{
//         type: "input",
//         message: "What is your github?",
//         name: "github"
//     }])
//         .then(function (ghub) {
//             const github = Object.values(ghub)[0]
//             const newEngineer = new Engineer(name, id, email, github, title)
//             console.log(newEngineer)
//             team.push(newEngineer)
//             runInquirer()
//         })
// };

// function runInquirerIntern(name, id, email, school, title) {
//     inquirer.prompt([{
//         type: "input",
//         message: "What school do you attend?",
//         name: "school"
//     }])
//         .then(function (uni) {
//             const school = Object.values(uni)[0]
//             const newIntern = new Intern(name, id, email, school, title)
//             console.log(newIntern)
//             team.push(newIntern)
//             runInquirer()
//         })
// };

function createHtml(){ 
    const html = buildHtml()
    fs.writeFile('output.html', html, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}; 

function buildHtml() {
    let employees = ""
    for(var i=0; i<team.length; i++){
        var employee = team[i]
        if(employee.getRole()==="Manager"){
            employees += buildManager(employee)
        }
        if(employee.getRole()==="Engineer"){
            employees += buildEngineer(employee)
        }
        if(employee.getRole()==="Intern"){
            employees += buildIntern(employee)
        }
    }

    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Document</title>
        
        <style>
                .row {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
        
                .card {
                    padding: 15px;
                    border-radius: 6px;
                    background-color: white;
                    color: lightskyblue;
                    margin: 15px;
                }
        
                .text {
                    padding: 15px;
                    border-radius: 6px;
                    background-color: lightskyblue;
                    color: black;
                    margin: 15px;
                }
        
                .col {
                    flex: 1;
                    text-align: center;
                }
        </style>
    </head>
    
    <body>
        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
            <span class="navbar-brand mb-0 h1">
                <h1>My Team</h1>
            </span>
        </nav>
    
    
        <div class="row">
                ${employees}
        </div>
    </body>
    </html>` 
    return html;
}

function buildManager(manager) {
    const managerSection = `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
    <div class="col card-header">
        <h4>${manager.name}</h4>
    </div>

    <div class="col card-header">
        <h4>Manager</h4>
    </div>

    <ul class="list-group list-group-flush text">
        <li class="list-group-item">ID:${manager.id}</li>
        <li class="list-group-item">Email:${manager.email}</li>
        <li class="list-group-item">Office Number:${manager.officeNumber}</li>
    </ul>
</div>`
return managerSection;
}

function buildEngineer(engineer) {
    const engineerSection = `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
    <div class="col card-header">
        <h4>${engineer.name}</h4>
    </div>

    <div class="col card-header">
        <h4>Engineer</h4>
    </div>

    <ul class="list-group list-group-flush text" >
        <li class="list-group-item">ID: ${engineer.id} </li>
        <li class="list-group-item">Email: ${engineer.email} </li>
        <li class="list-group-item">GitHub: ${engineer.github} </li>
    </ul>
</div>`
return engineerSection;
}

function buildIntern(intern) {
    const internSection = `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
    <div class="col card-header">
        <h4>${intern.name}</h4>
    </div>

    <div class="col card-header">
        <h4>Intern</h4>
    </div>

    <ul class="list-group list-group-flush text">
        <li class="list-group-item">ID: ${intern.id} </li>
        <li class="list-group-item">Email: ${intern.email} </li>
        <li class="list-group-item">School: ${intern.school} </li>
    </ul>
</div>`
return internSection
}

runInquirer();