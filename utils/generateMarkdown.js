// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
## Table of Content: 
### (Link to Github Repo) [https://github.com/${data.github}/${data.name}#link-to-github-repo]
###  (Description, Installation, Usage, Contributing, and Tests) [https://github.com/${data.github}/${data.name}#description-installation-usage-contributing-and-tests]
### (License) [https://github.com/${data.github}/${data.name}#license]
### (Contact) [https://github.com/${data.github}/${data.name}#contact]
### (Credits)[https://github.com/${data.github}/${data.name}#credits]

## Link to Github Repo
https://github.com/${data.github}/${data.name}

## Description, Installation, Usage, Contributing, and Tests
${data.description}
  
## License
       ${data.license}
  
## Contact
      
> Github: ${data.github}
> E-mail: ${data.email}
      
### Credits
© ${data.year} ${data.yName}.      
      `;
}

module.exports = generateMarkdown;
