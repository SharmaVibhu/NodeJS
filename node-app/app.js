const validator = require('validator')
const n = require('./notes')
const chalk = require('chalk')


console.log(validator.isEmail('vibhu@motivity'))
console.log(chalk.red('Success!'))