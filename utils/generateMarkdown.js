// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data === "MIT") {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (data === "GPL v2") {
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
  } else if (data === "Apache") {
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (data === "GPL v3") {
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (data === "BSD 3-clause") {
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else if (data === "LGPL v3") {
      badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]";
  } else if (data === "AGPL v3") {
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
  } else {
      badge = "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data === "MIT") {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (data === "GPL v2") {
      badge = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (data === "Apache") {
      badge = "([![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0))"
  } else if (data === "GPL v3") {
      badge = "(https://www.gnu.org/licenses/agpl-3.0)"
  } else if (data === "BSD 3-clause") {
      badge = "(https://opensource.org/licenses/BSD-3-Clause)"
  } else if (data === "GNU LGPL v3") {
      badge = "(https://www.gnu.org/licenses/lgpl-3.0)"
  } else if (data === "GNU AGPL v3") {
      badge = "(https://www.gnu.org/licenses/agpl-3.0)"
  } else {
      badge = ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Generate Table of Contents conditionally based on data
  let tableOfContents = `## Table of Contents`;
  
  if (data.installation !== '') { tableOfContents += `
  * [Installation](#installation)` };
  
  if (data.usage !== '') { tableOfContents += `
  * [Usage](#usage)` };
  
  if (data.contributing !== '') { tableOfContents += `
  * [Contributing](#contributing)` };
  
  if (data.tests !== '') { tableOfContents += `
  * [Tests](#tests)` };
  
  
  // Generate markdown for the top required portions of the README
  let draftMarkdown = 
  `# ${data.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.username}/${data.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${data.description}
  `
  
  // Add Table of Contents to markdown
  draftMarkdown += tableOfContents;
  
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  
  
  // Optional Installation section
  if (data.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${data.installation}`
  };
  
  
  // Optional Usage section
  if (data.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${data.usage}`
  };
  
  
  // Optional Contributing section
  if (data.contributing !== '') {
  
  draftMarkdown +=
      
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${data.contributing}`
  };
  
  
  // Optional Tests section
  if (data.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${data.tests}`
  };
  
  
  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  `;
  
  
  // Questions / About Developer section
  let draftDev = 
  `
  ---
  
  ## Questions?
  
  
  For any questions, please contact me with the information below:
  
  `;
  
  // If GitHub email is not null, add to Developer section
  if (data.email !== null) {
  
  draftDev +=
  `
  Email: ${data.email}
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
