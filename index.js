const inquirer = require("inquirer");
var fs = require("fs");
var util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
        type: "input",
        name: "gitname",
        message: "What is your Git Hub profile address?",
      },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "projectName",
      message: "What is your Project Name?",
    },
    {
      type: "input",
      name: "desc",
      message: "Please write a short description of your project",
    },
    {
      type: "input",
      name: "user",
      message: "What is the User Story?",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What type of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
    },
    {
      type: "input",
      name: "depend",
      message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "builders",
        message: "Who contributed to the Project?",
      },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "repo",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contrib",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ]);
};

// function to generate markdown for README

const generateMarkdown = answers =>  {
  return `

  # ${answers.projectName}

  ![Licernse](https://img.shields.io/badge/License-${answers.license}-blue.svg "License Badge")
  


    # Table of Contents

    * [Description](#-description:)
    * [User Story](#-user-story:)
    * [Installation](#what-command-should-be-run-to-install-dependencies?)
    * [Usage](#repo)
    * [Contributors](#builders)
    * [Contributing](#contrib)
    * [Testing](#test)
    * [License](#license)
    

## Description:
    ${answers.desc}

## User Story:
    ${answers.user}

## What command should be run to install dependencies?
    ${answers.depend}

## What does the user need to know about using the repo?
    ${answers.repo}

## Contributors to this Project:
    ${answers.builders}

## What does the user need to know about contributing to this repo?
    ${answers.contrib}

## What command should be run to run tests?
    ${answers.test}

## What license is the application covered under?
    ${answers.license}

## Questions:
For questions about Node File Generator, visit my GitHub page:
    ${answers.gitname}
  
  ## You may also contact me via email at:
  ${answers.email}
  
  ## License:
  Click on the link to find information about the license
  [License](https://opensource.org/licenses/${answers.license})
`;
}

// function to initialize program

promptUser()
  .then((answers) => {
    const readMe = generateMarkdown(answers);

    return writeFileAsync("README.md", readMe);
  })
  .then(() => {
    console.log("Successfully wrote to README.md");
  })
  .catch((err) => console.log(err));



//   function call to initialize program
//   init();

