const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// array of questions for user
const questions = [
    [
        {
            type: "input",
            name: "github",
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
            name: "food",
            message: "What is your favorite food?"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username"
        },
        {
            type: "input",
            name: "linkedin",
            message: "Enter your LinkedIn URL."
        }
    ]
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
