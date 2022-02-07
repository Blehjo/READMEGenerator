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
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
