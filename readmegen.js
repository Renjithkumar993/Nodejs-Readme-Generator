
const fs = require("fs")


const readmeWrite = ()=>{
fs.readFile("readme.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const objects = data.split('\n');
      const userData = JSON.parse(objects[0]);
 
const readme = `
![${userData.license}](https://img.shields.io/badge/License-${userData.license}-Green)

# ${userData.titleName}

## Description

${userData.description}

## Table of Contents

- [Installation](#installation) 
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${userData.installation}

## Usage

${userData.usage}

![](./${userData.filepath})


## License

"This application is licensed under" ${userData.licenseForrender}.
---

## How to Contribute

${userData.contribute}

## Tests

${userData.tests}

## Additional Questions

If you have any questions or concerns regarding the project, please feel free to reach out to me. Here are the ways you can contact me:

Email: ${userData.emailaddress}

GitHub: https://github.com/${userData.githubusername}

I will do my best to respond to your inquiries in a timely manner. Thank you for your interest in the project!

`
fs.writeFile("README.md", readme, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${userData.titleName} Readme generated successfully!`);
    }
  });
}
});
};


module.exports = readmeWrite;
