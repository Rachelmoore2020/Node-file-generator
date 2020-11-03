
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
        name: 'location',
        message: 'Where are you from?'
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?'
      },
      {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.'
      }
    ]);
  };


  // function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
  
const generateHTML = answers => {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>Creating html with node.js</title>
    </head>
    <body>
        
      <div class="jumbotron" id='app' >
          <h1 class="display-4" >${answers.name}</h1>
          <p class="lead">${answers.location}</p>
          <h3 class="my-4">${answers.hobby}<button type="button" class="btn btn-secondary">Contact Me</button></h3>
  
          <div class="github">${answers.github}</div>
          <hr>
          <div class="linkedIn">${answers.linkedin}</div>
          
        </div>
      
    </body>
  </html>`;
};


promptUser()
  .then(answers => {
    const html = generateHTML(answers);
    return writeFileAsync('index.html', html);
  })
  .then(() => {
    console.log('Successfully wrote to index.html');
  })
  .catch(err => console.log(err));

