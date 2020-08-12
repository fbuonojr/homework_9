const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
        {
            type: "input",
            name: "name",
            message: "What is your GitHub name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of the project?"
        },
        {
            type: "input",
            name: "license",
            message: "What licenses should your project have?"
        },
        {
            type: "input",
            name: "dependencies",
            message: "What command should be run to install your dependencies?"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "useRepo",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "contributeRepo",
            message: "What does the user need to know about contributing to the repo?"
        }
];

// function to write README file
// function writeToFile(fileName, data) {
//         fs.writeFile(fileName, data, function(err){
//             if(err){
//                 return console.log("line 63 error " + err);
//             }
//         });
// }

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init()
.then(function(answers){
    const md = generateMarkdown(answers);

    return writeFileAsync("createdReadMe.md", md);
})
.then(function(){
    console.log("Successfully wrote read me!");
})
.catch(function(err){
    console.log(err);
})
