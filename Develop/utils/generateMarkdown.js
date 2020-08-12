// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Name

  GitHub Username: ${data.name}

  ## Description

  ${data.description}

  What licenses should this project have?

  ${data.license}

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
  If you have any additional questions, feel free to reach out to me at ${data.email}
  GitHub Profile: github.com/${data.name}
`;
}

module.exports = generateMarkdown;
