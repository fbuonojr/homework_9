// function to generate markdown for README
function generateMarkdown(data) {
  var badge = ""
  for(var i = 0; i < data.license.length; i++){
  if(data.license[i] === "Apache"){
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
 }
  
 for(var i = 0; i < data.license.length; i++){
  if (data.license[i] === "MIT"){
    badge = badge + "\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
}
for(var i = 0; i < data.license.length; i++){
  if (data.license[i] === "ISC"){
    badge = badge + "\n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
}
  return `# ${data.title}

  ## Description

  ${data.description}

  What licenses should this project have?

  ${data.license}

  ${badge}

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
