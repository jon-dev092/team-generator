const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('.//lib/Intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const injectHTML = require("./src/htmlCreator");

const employeeQuestions = async () => {
    const employeeArray = [];
  
    const askQuestions = async () => {
      const employeeInput = await inquirer.prompt([
        {
          name: 'name',
          message: 'What is your name?',
          type: 'input',
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log('Input your name!');
            }
          },
        },
        {
          name: 'id',
          message: 'What is your employee id?',
          type: 'input',
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log('Input your employee id!');
            }
          },
        },
        {
          name: 'email',
          message: 'What is your email?',
          type: 'input',
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log('Input your email!');
            }
          },
        },
        {
          type: 'list',
          name: 'role',
          choices: ['Engineer', 'Intern', 'Manager'],
        },
        {
          when: (input) => input.role === 'Engineer',
          name: 'github',
          type: 'input',
          message: 'What is your github username?',
        },
        {
          when: (input) => input.role === 'Intern',
          type: 'input',
          name: 'school',
          message: 'What school do you attend?',
        },
        {
          when: (input) => input.role === 'Manager',  
          type: 'input',
          name: 'officeNum',
          message: 'What is your office number?',
        },
        {
          type: "confirm",
          name: "more",
          message: "Would you like to add more team members?",
        }
      ]);
  
      const { name, id, email, role, github, school, officeNum, more} = employeeInput;
      let employee;
  
      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, github);
      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, school);
      } else if (role === 'Manager') {
        employee = new Manager(name, id, email, officeNum);
      }
  
      employeeArray.push(employee);

      if (more) {
         return askQuestions();
       }  else {
         return employeeArray;
       }

    };
  
    return askQuestions();
  };

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("File Written!")
        }
    })
};

employeeQuestions()
    .then(function(employeeArray){
        return injectHTML(employeeArray);
    })
    .then(function(writeHtml){
        return writeFile(writeHtml);
    })
    .catch(function(err){
        console.log(err);
    });