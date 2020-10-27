// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
## Table of Content: 
#### (Link to Github Repo) [https://github.com/${data.github}/${data.name}]
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Credits](#credits)


## Link to Github Repo
https://github.com/${data.github}/${data.name}

## Link to the Deployed Application
 ${data.deployed}

## Description
 ${data.description}
 
## Installation 
 ${data.instalation}

## Usage
 ${data.usage}

## Contributing
 ${data.contributing}

## Tests
 ${data.tests}

## License
       ${data.license}
  
## Questions
For any questions you can find me on Github or through my E-mail:
      
> GitHub: https://github.com/${data.github}

> E-mail: ${data.email}
      
### Credits
© ${data.year} ${data.yName}.      
      `;
}

module.exports = generateMarkdown;
