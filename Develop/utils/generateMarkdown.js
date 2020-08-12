// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Name

  GitHub Username: ${data.name}

  Email Address: ${data.email}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run: 

  ${data.dependencies}

  ## Usage

  ${data.useRepo}

  ## Contributing

  ${data.contributeRepo}

  ## Tests

  Run ${data.tests} to run tests

  ## Questions

  What licenses should this project have?

  ${data.license}

`;
}

module.exports = generateMarkdown;
