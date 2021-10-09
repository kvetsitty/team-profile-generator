const inquirer = require('inquirer');

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

mainMenu();