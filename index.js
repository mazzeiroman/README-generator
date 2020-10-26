const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateREADME = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Description, Installation, Usage, Contributing, and Tests: "
    },
    {   type: 'list',
        name: 'license',
        message: 'A list License:',
        choices: ['Item 1', 'Item 2', 'Item 3'],
        default: 2
    },
    {
        type: "input",
        name: "github",
        message: "Github: "
    },
    {
        type: "input",
        name: "email",
        message: "Email: "
    }
];

function getData() {
    return inquirer.prompt(questions)
};

// function generateHTML(answers) {
//     return `# ${answers.name}
 

// ## Description, Installation, Usage, Contributing, and Tests: 
//     ${answers.description}

// ## License
//      ${answers.license}

// ## Questions?
    
// > ${answers.github}
// > ${answers.email}
    
    
//     `;
//   }
  getData()
  .then(function(answers) {
    const README = generateREADME(answers);

    return writeFileAsync("README.md", README);
  })
  .then(function() {
    console.log("Successfully wrote to README.md file");
  })
  .catch(function(err) {
    console.log(err);
  });



// function to write README file
// function writeToFile(fileName, data) {

// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
