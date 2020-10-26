// function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.name}
 

## Description, Installation, Usage, Contributing, and Tests: 
      ${data.description}
  
## License
       ${data.license}
  
## Questions?
      
> ${data.github}
> ${data.email}
      
      
      `;
}

module.exports = generateMarkdown;
