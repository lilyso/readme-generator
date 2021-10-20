// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  > ${data.summary}
  > Live demo [_here_](https://www.example.com).
  
  ## Table of Contents
  
  - [License](#licence)
  - [General Info](#general-information)
  - [Screenshots](#screenshots)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Contributing Guidelines](#contributing-guidelines)
  - [Acknowledgements](#acknowledgements)
  - [Questions](#questions)
  
  ## License
  
  ${badge}  [${licence}](${licenceUrl})

  ## General Information
  
  ${data.description}
  
  ## Screenshots
  
  ![Example screenshot](./img/screenshot.png)
  
  ## Setup
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## Contributing Guidelines
  
  ${data.contribute}

  ## Test Instructions
  
  ${data.test}
  
  ## Questions
  
  Created by [@${data.github}](${data.githubUrl}) - feel free to contact me at ${data.email}.
  
`;
}

module.exports = generateMarkdown;
