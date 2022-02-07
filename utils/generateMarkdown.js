// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === "MIT") {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (data.license === "GPL v2") {
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
  } else if (data.license === "Apache") {
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (data.license === "GPL v3") {
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (data.license === "BSD 3-clause") {
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else if (data.license === "LGPL v3") {
      badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]";
  } else if (data.license === "AGPL v3") {
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
  } else {
      badge = "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === "MIT") {
      badge = "(https://opensource.org/licenses/MIT)"
  } else if (data.license === "GPL v2") {
      badge = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (data.license === "Apache") {
      badge = "(https://opensource.org/licenses/Apache-2.0)"
  } else if (data.license === "GPL v3") {
      badge = "(https://www.gnu.org/licenses/agpl-3.0)"
  } else if (data.license === "BSD 3-clause") {
      badge = "(https://opensource.org/licenses/BSD-3-Clause)"
  } else if (data.license === "GNU LGPL v3") {
      badge = "(https://www.gnu.org/licenses/lgpl-3.0)"
  } else if (data.license === "GNU AGPL v3") {
      badge = "(https://www.gnu.org/licenses/agpl-3.0)"
  } else {
      badge = ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkDown(data) {
  // Generate Table of Contents conditionally based on userResponses
  let tableOfContents = `## Table of Contents`;
  
  if (userResponses.installation !== '') { tableOfContents += `
  * [Installation](#installation)` };
  
  if (userResponses.usage !== '') { tableOfContents += `
  * [Usage](#usage)` };
  
  if (userResponses.contributing !== '') { tableOfContents += `
  * [Contributing](#contributing)` };
  
  if (userResponses.tests !== '') { tableOfContents += `
  * [Tests](#tests)` };
  
  
  // Generate markdown for the top required portions of the README
  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${userResponses.description}
  `
  
  // Add Table of Contents to markdown
  draftMarkdown += tableOfContents;
  
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  
  
  // Optional Installation section
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.installation}`
  };
  
  
  // Optional Usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  
  // Optional Contributing section
  if (userResponses.contributing !== '') {
  
  draftMarkdown +=
      
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userResponses.contributing}`
  };
  
  
  // Optional Tests section
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };
  
  
  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;
  
  
  // Questions / About Developer section
  let draftDev = 
  `
  ---
  
  ## Questions?
  
  
  For any questions, please contact me with the information below:
  
  `;
  
  // If GitHub email is not null, add to Developer section
  if (userResponses.email !== null) {
  
  draftDev +=
  `
  Email: ${userResponses.email}
  `};
  
  // Add developer section to markdown
  draftMarkdown += draftDev;
  
  // Return markdown
  return draftMarkdown;
}


// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = generateMarkdown;
