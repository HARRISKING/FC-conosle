const fs = require("fs");
module.exports = function fetchProgramName() {
  let dirArr = fs.readdirSync('./')
  let targetArr = []
  dirArr.map(item => {
    const stat = fs.lstatSync(item);
    if (stat.isDirectory()) {
      targetArr.push({
        name: item,
        value: item
      })
    }
  })

  return targetArr
}