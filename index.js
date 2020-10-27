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
        name: "yName",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "description",
        message: "Description: "
    },
    {
        type: "input",
        name: "instalation",
        message: "Installation: "
    },
    {
        type: "input",
        name: "usage",
        message: "Usage: "
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributing: "
    },
    {
        type: "input",
        name: "tests",
        message: "Tests: "
    },
    {   type: "list",
        name: "license",
        message: "A list License:",
        choices: ["None", "Academic Free License v3.0", "Apache license 2.0",
                  "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause Simplified license",
                  "BSD 3-clause New or Revised license", "BSD 3-clause Clear license", "Creative Commons license family",
                  "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "GNU Affero General Public License v3.0",
                  "MIT", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0",
                  "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"
                  ],
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
    },
    {
        type: "input",
        name: "deployed",
        message: "Link to the deployed Application: "
    },
    {
        type: "input",
        name: "year",
        message: "Year"
    },
];

function getData() {
    return inquirer.prompt(questions)
};

// WITHOUT USING ASYNC AND AWAIT
//   getData()
//   .then(function(answers) {
//     const README = generateREADME(answers);

//     return writeFileAsync("README.md", README);
//   })
//   .then(function() {
//     console.log("Successfully wrote to README.md file");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });


// function to initialize program
 async function init() {
try {
    const answers = await getData();
    const README = generateREADME(answers);

    await writeFileAsync("README.md", README);
    console.log("Successfully wrote to README.md file");
} catch (err) {
    console.log(err);
}
}

// function call to initialize program
init();
