const inquirer = require('inquirer');
const fs = require('fs');
const { repeat } = require('rxjs');

const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const addHtml = require('./src/addHtml');


const team = [];

// Questions for inputting information for Managers
async function begin() {
    const info = await inquirer.prompt([
        {
            type: 'input'
            name: 'managerName'
            message: 'What is the name of the manager?'
        },
        {
            type: 'input'
            name: 'managerEmail'
            message: 'That is the email for the manager.'
        },
        {
            type: 'number'
            name: 'managerID'
            message: 'What is the ID number the manager.'
        },
        {
            type: 'input'
            name: 'managerPhone'
            message: 'What is the phone number for the manager.'
        };
    ]);

    const manager = new manager(
        answer.managerName,
        answer.managerEmail,
        answer.managerID,
        answer.managerPhone
    );

    team.push(manager);
};

// Questions for inputting information for adding a new employee
async function newEmployee() {
    const info = await inquirer.prompt([
    {
        type: 'list'
        name: 'addEmployee'
        message: 'Would you like to add a new Engineer or Intern to the team?'
        choices: [
            'Add New Engineer',
            'Add New Intern',
        ]
    }
    ]);

    if(answer.addEmployee === 'Add New Engineer') {
        await newEngineer();
    } else if (answer.addEmployee === 'Add New Intern') {
        await newIntern();
    };
};

// Questions for inputting information and adding engineer
async function newEngineer() {
    const data = await inquirer.prompt([
        {
            type: 'input'
            name: 'engineerName'
            message: 'What is the name of the engineer?'
        },
        {
            type: 'number'
            name: 'engineerID'
            message: 'What is the ID number for the engineer?'
        },
        {
            type: 'input'
            name: 'engineerEmail'
            message: 'What is the email for the engineer?'
        },
        {
            type: 'input'
            name: 'engineerGitHub'
            message: 'What is the GitHub URL for the engineer?'
        };
    ]);

    const engineer = new engineer(
        answer.engineerName,
        answer.engineerID,
        answer.engineerEmail,
        answer.engineerGitHub
    );

    team.push(engineer);
    repeat();
};


// Questions for inputting information and adding intern
async function newIntern() {
    const data = await inquirer.prompt([
        {
            type: 'input'
            name: 'internName'
            message: 'What is the name of the intern?'
        },
        {
            type: 'number'
            name: 'internID'
            message: 'What is the ID number for the intern?'
        },
        {
            type: 'input'
            name: 'internEmail'
            message: 'What is the email of the intern?'
        },
        {
            type: 'input'
            name: 'internSchool'
            message: 'What is the name of the School that the intern attends?'
        };
    ]);

    const intern = new intern(
        answer.internName,
        answer.internID,
        answer.internEmail,
        answer.internSchool
    );
    
    team.push(intern);
    repeat()
};

// Ask user if they want to create a new employee. If they don't, generate html file. If they do, repeat steps to create new employee
async function repeat() {
    const data = await inquirer.prompt([
        {
            type: 'list'
            name: 'addNew'
            message: 'Would you like to add a new employee?'
            choices: [
                'yes',
                'no'
            ]
        };
    ]);

    if (answer.repeat === 'no') {
        const html = addHtml(team);
        fs.writeFile('./dist/index.html', html, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('File successfully uploaded!');
        });
    } else {
        newEmployee();
    };
};

begin();