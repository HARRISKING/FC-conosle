#!/usr/bin/env node
const path = require("path");
const inquirer = require('inquirer');
const fetchProgramName = require('../utils/fetchName');
const fileDisplay = require('../utils/fileMap');

let filePath

const question = async function () {
 let choicesArr = fetchProgramName()

 const setting = await inquirer.prompt([
  {
   type: 'list',
   name: 'selectProject',
   message: '请选择要操作的项目：',
   choices: choicesArr
  }
 ])
 filePath = path.join(setting.selectProject)
 
 fileDisplay(filePath);
}

question()