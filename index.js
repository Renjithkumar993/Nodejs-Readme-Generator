console.log("****************************************")
console.log("Create README file answering few promts")
console.log("******************************************")

const fs = require("fs");
const inquirer = require("inquirer")

const TreePrompt = require('inquirer-tree-prompt');

inquirer.registerPrompt('tree', TreePrompt);

const readmeWrite = require("./readmegen");
const prependFile = require('prepend-file');



inquirer.prompt([{

    type: "Input",
    message: "Enter your project title",
    name: "titileName"

},
{
    type: "input",
    message: `Description for your project\nProvide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    - What was your motivation?
    - Why did you build this project?
    - What problem does it solve?
    - What did you learn?\n`,
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
}
    , {
    type: 'tree',
    name: 'license',
    message: 'Choose the license?',
    tree: [

        { value: "Apache License 2.0" },
        { value: "MIT" },
        { value: "GNU GPLv3" },
        { value: "GNU GPLv2" },
        { value: "ISC License" },

    ]
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

])
    .then((response) => {

        const userData = {
            titleName: response.titileName,
            description: response.description,
            installation: response.installation,
            usage: response.usage,
            license: response.license.replace(/\s+/g, ''),
            licenseForrender : response.license,
            emailaddress: response.emailaddress,
            githubusername: response.githubusername,
            
        };

        const fileName = 'readme.txt';
        const fileData = JSON.stringify(userData);
        

    prependFile(fileName,`${fileData}\n`)
 
        console.log(`Data saved to ${fileName} successfully and will be creating readmefile soon....`);
        setTimeout(() => {
            readmeWrite();
        }, "1500");

    })
  
