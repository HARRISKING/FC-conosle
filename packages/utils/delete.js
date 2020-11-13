const fs = require("fs");

/**
 * 删除文件中所有的console
 * @param {*} fileTarget 需要处理的文件路径 
 */

module.exports = function startFucking(fileTarget) {
 const context = fs.readFileSync(fileTarget, 'utf-8');
 var newValue = context.replace(/console.log\(.*?\)/g, '');
 fs.writeFileSync(fileTarget, newValue, 'utf-8')
}