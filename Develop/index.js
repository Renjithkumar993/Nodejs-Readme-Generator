
console.log("******************************************")
console.log("Create README file answering few promts")
console.log("******************************************")

const fs = require("fs");
const inquirer = require("inquirer")

const TreePrompt = require('inquirer-tree-prompt');
const path = require('path');


inquirer.registerPrompt('tree', TreePrompt);
const readmeWrite = require("./readmegen");
const prependFile = require('prepend-file');


const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt')
inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)

const PressToContinuePrompt = require('inquirer-press-to-continue');
const { KeyDescriptor } = require('inquirer-press-to-continue');

inquirer.registerPrompt('press-to-continue', PressToContinuePrompt);



inquirer.prompt([

    {
        name: 'key',
        type: 'press-to-continue',
        enter: true,
        pressToContinueMessage: 'Press enter to continue...',
    },
    {
        type: "Input",
        message: `\nEnter your project title`,
        name: "titileName"

    },
    {
        type: "input",
        message: `Description for your project\nProvide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n`,
        name: "description"
    },
    {
        type: "input",
        message: `Installation\nWhat are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n`,
        name: "installation"
    }, {
        type: "input",
        message: `Provide instructions and examples for use.\n`,
        name: "usage"
    },  
    {
        type: "input",
        message: `If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do here.\n`,
        name: "contribute"
    },
    {
        type: "input",
        message: `provide examples on how to run test on your application here\n`,
        name: "tests"
    },


    {
        type: "input",
        message: `Please provide your email address\n`,
        name: "emailaddress"
    }
    ,
    {
        type: "input",
        message: `Please provide your github username\n`,
        name: "githubusername"
    },
    {
        type: 'tree',
        name: 'license',
        message: 'Choose the license?',
        tree: [
            { value: "Apache License 2.0" },
            { value: "MIT" },
            { value: "GNU GPLv3" },
            { value: "GNU GPLv2" },
            { value: "ISC License" },
        ],
    },
    {
        type: 'file-tree-selection',
        message: 'choose screeshots or gif for usage section',
        name: "filepath",

    },

])

    .then((response) => {
        const userData = {
            titleName: response.titileName,
            description: response.description,
            installation: response.installation,
            usage: response.usage,
            filepath: path.basename(response.filepath),
            contribute: response.contribute,
            tests: response.tests,
            license: response.license.replace(" ", "_"),
            emailaddress: response.emailaddress,
            githubusername: response.githubusername,

        };


        const fileName = 'readme.txt';
        const fileData = JSON.stringify(userData);


        prependFile(fileName, `${fileData}\n`)

        console.log(`Data saved to ${fileName} successfully and will be creating readmefile soon....`);
        setTimeout(() => {
            readmeWrite();
        }, "1500");


    }
    );
