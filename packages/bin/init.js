#!/usr/bin/env node
const fs = require("fs");
const file = 'package.json';

fs.access(file, fs.constants.F_OK, (err) => {
 if (err) {
  alert('未找到package.json，别闹!')
 } else {
  fs.readFile(file, 'utf8', (err, data) => {
   if (err) throw err;
   let scripts = JSON.parse(data)['scripts']
   scripts['FCS'] = 'node_modules/.bin/FConsole'
   let datas = Object.assign(JSON.parse(data), { scripts })
   fs.writeFile(file, JSON.stringify(datas), (err) => {
    console.warn(err)
   })
  })
 }
});