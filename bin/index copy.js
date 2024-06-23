#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const figlet = require('figlet');

// const spinner = ora('下载中...').start();
// setTimeout(() => {
//     spinner.text = '稍等...';
//     spinner.color = 'red';
// }, 2000);

// setTimeout(() => {
//     spinner.succeed('下载成功');
// }, 4000);

// // console.log(chalk.red('我的cli'));

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'food',
//             message: '你吃什么',
//             default: '阿斯蒂芬',
//         },
//         {
//             type: 'confirm',
//             name: 'hot',
//             message: '厚乳',
//             default: false,
//         },
//     ])
//     .then((answers) => {
//         console.log(answers);
//     })
//     .catch((err) => {
//         if (err.isTtyError) {
//         } else {
//         }
//     });

// console.log(process.argv);
// program.name('mycli').usage('<command> [option]');

// program
//     .option('-d --debug', 'out extra debugging')
//     .option('-s --small', 'out extra debugging')
//     .option('-p --pizza-type<type>', 'out extra debugging');

// program
//     .command('clone <source> [destination]')
//     .description('克隆')
//     .action((source, destination) => {
//         console.log('克隆执行');
//         console.log(source, destination);
//     });

// program.parse(process.argv);

// const options = program.opts();
// console.log(options);
