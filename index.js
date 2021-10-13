const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const teamArray = [];
const Intern = require('./lib/Intern');
const generateHTML = require('./dist/generateHTML');
const fs = require('fs');

function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Who would you like to add?',
        choices: ['Add a manager', 'Add an engineer', 'Add an intern', 'Build a team']
    })
    .then(function(answers) {
        const choice = answers.action;
        if (choice === "Add a manager") {
            addManager();
        } else if (choice === "Add an engineer") {
            addEngineer();
        } else if (choice === "Add an intern") {
            addIntern();
        } else {
            buildTeam();
        }
    })
}

function addManager () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the mananger's name?",
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the manager's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
        }])
        .then(function(answers) {
            const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);
            teamArray.push(manager);
            mainMenu();
        })
}

function addEngineer () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the engineer's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
        }])
        .then(function(answers) {
            const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github);
            teamArray.push(engineer);
            mainMenu();
        })
}

function addIntern () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the intern's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "Where did the intern attend school?",
        }])
        .then(function(answers) {
            const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
            teamArray.push(intern);
            console.log(teamArray);
            mainMenu();
        })
};

function buildTeam() {
    fs.writeFileSync('./dist/index.html', generateHTML(teamArray))
}

mainMenu();