function generateMarkdown(data) {
    return `# ${data.title}
  ## Description
  ${data.Description}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
  ${data.License}
  ## Contributing
  ${data.Contributing}
  ## Tests
  ${data.Tests}
  ## Github
  ${data.Github}
  ## Email
  ${data.Email}
  `;
  }
  
  module.exports = generateMarkdown;