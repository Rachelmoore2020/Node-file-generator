
const inquirer = require('inquirer');
var fs = require('fs');
var util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'What is your Project Name?'
      },
      {
        type: 'input',
        name: 'desc',
        message: 'Please write a short description of your project'
      },
      {
        type: 'input',
        name: 'license',
        message: 'What type of license should your project have?'
        // choices: 'MIT, APACHE 2.0, GPL 3.0 BSD 3, NONE'
      },
      {
        type: 'input',
        name: 'depend',
        message: 'What command should be run to install dependencies?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?'
        
      },
      {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?'
      },
      {
        type: 'input',
        name: 'contrib',
        message: 'What does the user need to know about contributing to the repo?'
      }
    ]);
  };


  // function to generate markdown for README

module.exports = generateMarkdown;
  
const generateMarkdown(data) => {
  return `# ${data.title}

 `;
 }

//   <!doctype >
//   <html lang="en">
//     <head>
//       <!-- Required meta tags -->
//       <meta charset="utf-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
//       <!-- Bootstrap CSS -->
//       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
//       <link rel="stylesheet" href="style.css">
//       <title>Creating html with node.js</title>
//     </head>
//     <body>
        
//       <div class="jumbotron" id='app' >
//           <h1 class="display-4" >${answers.name}</h1>
//           <p class="lead">${answers.location}</p>
//           <h3 class="my-4">${answers.hobby}<button type="button" class="btn btn-secondary">Contact Me</button></h3>
  
//           <div class="github">${answers.github}</div>
//           <hr>
//           <div class="linkedIn">${answers.linkedin}</div>
          
//         </div>
      
//     </body>
//   </html>`;
// };


// promptUser()
//   .then(data => {
//     const html = generateHTML(answers);
//     return writeFileAsync('index.html', html);
//   })
//   .then(() => {
//     console.log('Successfully wrote to index.html');
//   })
//   .catch(err => console.log(err));

