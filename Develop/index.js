// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'Enter the project title',
        name:'projectTitle'
    },
    {
        type:'input',
        message:'Enter the description',
        name:'description'
    },
    {
        type:'input',
        message:'Enter the installation instructions',
        name:'installationInstructions'
    },
    {
        type:'input',
        message:'Enter the usage information',
        name:'usageInformation'
    },
    {
        type:'input',
        message:'Enter the contribution guidelines',
        name:'contributionGuidelines'
    },
    {
        type:'input',
        message:'Enter the test instructions',
        name:'testInstructions'
    },
    {
        type:'rawlist',
        message:'choose one licesen',
        name:'license',
        choices:['Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense']
    },
    {
        type:'input',
        message:'Enter username',
        name:'username'
    },
    {
        type:'input',
        message:'Enter email',
        name:'email'
    },
];

// Create a function to write README file
function writeToFile(fileName, {projectTitle,description,installationInstructions,usageInformation,contributionGuidelines,testInstructions,license,username,email}) {
    //remove space in the licence for the badge
    licensebadge = license.replace(/ /g, "");
// readme content
    var readmeContent = 
    `
![badmath](https://img.shields.io/badge/license-${licensebadge}-success)
# ${projectTitle}   
## Description

${description}
    
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#Tests)
- [Questions](#questions)

    
## Installation 
    
${installationInstructions}
    
## Usage
    
${usageInformation}
     
## License

${license}
    
## Contributing
    
${contributionGuidelines}
    
## Tests
\`\`\`md    
${testInstructions}
\`\`\`
## Questions

${username}

${email}
`
 //write file   
    fs.writeFile(fileName,readmeContent, (err)=>
        err ? console.log(err) : console.log('Successfully created README.md'))
    
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answer)=>{
            writeToFile('README.md',answer)
        })

}

// Function call to initialize app
init();







