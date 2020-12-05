// array of questions for user
var inquirer = require ("inquirer")
var fs = require ("fs")
var generateMarkdown = require("./utils/generateMarkdown");

const questions = [
        {
            type: "input",
            message: "What is the title of your project?",
            name: "Title"
        },
        {
            type: "input",
            message: "Describe your project",
            name: "Description"
        },
        {
            type: "input",
            message: "Write installation instructions",
            name: "Instructions"
        },
        {
            type: "input",
            message: "Write usage information",
            name: "Information"
        },
        {
            type: "input",
            message: "What are the contribution guidelines",
            name: "Guidelines"
        },
        {
            type: "input",
            message: "Write test instructions",
            name: "TestInstructions"
        },
        {
            type: "input",
            message: "What's your gitHub username?",
            name: "GitHub"
        },
        {
            type: "input",
            message: "Enter your email",
            name: "Email"
        },
        
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (error) {
        if (error) throw error;
        console.log("success");
    })
}

// function to initialize program
function init() {
    inquirer.prompt (questions)
    .then (function (response){
        console.log (response)

        writeToFile("readMe.md", generateMarkdown(response))
    })
}

// function call to initialize program
init();
