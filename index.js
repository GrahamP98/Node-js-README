// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What\'s your program called?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'What does your program do?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What\'s your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What\'s your github repository called?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'How do you use your program?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Who made the program? (seperate names with a comma)',
        name: 'Credits',
    },
    {
        type: 'rawlist',
        message: 'What License was this created with?',
        name: 'license',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD",
        ]
    }
];

inquirer.prompt(questions).then((answers) => {
    utils.generateMarkdown(answers);
})