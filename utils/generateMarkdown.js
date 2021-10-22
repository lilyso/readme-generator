// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let renderBadge = license;
  let output;
  switch (renderBadge) {
    case "MIT":
      output = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "APACHE":
      output = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;
    case "GPL":
      output = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case "LGPL":
      output = "https://img.shields.io/badge/License-LGPL%20v3-blue.svg";
      break;
    case "MOZILLA":
      output = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
      break;
    default:
      return "";
  }
  return output;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // let getLink = license;
  var output;
  switch (license) {
    case "MIT":
      output = "https://opensource.org/licenses/MIT";
      break;
    case "APACHE":
      output = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL":
      output = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "LGPL":
      output = "https://www.gnu.org/licenses/lgpl-3.0";
      break;
    case "MOZILLA":
      output = "https://opensource.org/licenses/MPL-2.0";
      break;
    default:
      return "";
  }
  return output;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under the ${license} License - see the LICENSE.md file for details.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
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

  [![${data.license}](${badge})](${licenseLink})

  ${licenseSection}
 
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
