// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');

const ohwow = ["hi", "hi asda","Hiidsad"]
const JJJ = "Hey"

// TODO: Create an array of questions for user input

function hasWhiteSpace(s) {
  return /\s/g.test(s);
}
function Email(e) {
  return /^\S+@\S+\.\S+$/.test(e);

}

const questions =
[{name:"Title", type:"input", message:'Read me title',validate: (answer)=>{
if (answer==null || answer==hasWhiteSpace() ){return "Read me requires title input."}
else return true}},

{name:"Description", type:"input", message:'Read me description',validate: (answer)=>{
  if(answer==null || answer==hasWhiteSpace() ){return "Read me requires description input."}
  else return true}},

{name:"Installation", type:"input", message:"Read me installation",validate: (answer)=>{
  if (answer==null || answer==hasWhiteSpace() ){return "Read me requires installation input."}
  else return true}},

{name:"Usage", type:"list", message:"Read me usage",choices:["Custom","N/A"],validate: (answer)=>{
  if (answer==null || answer==hasWhiteSpace() ) {return "Read me requires usage input."}
  else return true}},

{name:"Usage2",type:"input",message:"usage Text",when: (answers) => answers.Usage === 'Custom',validate: (answer)=>{
  if (answer==null || answer==hasWhiteSpace() ) {return "Read me requires usage input."}
  else return true}},

{name:"License", type:"list", message:"Read me license ",choices:["Apache 2.0 License","MIT","Mozilla","IBM"],validate: (answer)=>{
  if (answer==null || answer==hasWhiteSpace() ){return "read me requires license."}
  else return true}},

{name:"Contributing", type:"input", message:"Read me contributing guidlines",validate: (answer)=>{
  if (answer==null || answer==hasWhiteSpace() ){return "read me requires contributing guidline input."}
  else return true}},

{name:"Tests", type:"input", message:"Read me tests",validate: (answer)=>{
  if (answer==null || answer==hasWhiteSpace() ){return "read me requires tests input."}
  else return true}},

{name:"Username", type:"input", message:"Github Username",validate: (answer)=>{
  if (answer==null || answer==hasWhiteSpace() ){return "read me requires github username."}
  else return true}},

{name:"Email", type:"input", message:"User Email Address",validate: (answer)=>{
  if (answer==null || answer==hasWhiteSpace() || answer == /^\S+@\S+\.\S+$/.test){return "read me requires email."}
  else return true}}
]


// TODO: Create a function to write README file

function writeToFile(filename,data) {

const FileSystem = require('fs');

var JJJ = "Was Supposed to apply pagegen.js templated readme.";

FileSystem.writeFile('README.md',JJJ, (err) =>{

if(err){console.error(err);
return;}

(console.log("Working"));  

});
}

// TODO: Create a function to initialize app
function init(){
const readmegenerate = require('./utils/pagegen.js'); 
inquirer.prompt(questions)
.then(answers => {
return readmegenerate(answers);
})

.then(data => {
return writeToFile();
})
}

// Function call to initialize app
init();