#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const figlet = require('figlet');
const fs = require('fs-extra');
const path = require('path');
const gitClone = require('git-clone');

// 首行提示
program.name('mycli').usage('<command> [options]');

// 版本号
program.version(`v${require('../package.json').version}`);

// 创建项目的命令
program
    .command('create <app-name>')
    .description('创建一个新项目')
    .action(async function (name) {
        // 创建项目的逻辑
        console.log(name);
        // 将创建一个名字为name的文件夹
        // 1判断有没有名字为name的文件夹
        const targetPath = path.join(process.cwd(), name);

        if (fs.existsSync(targetPath)) {
            const awsaner = await inquirer.prompt([
                {
                    type: 'comfirm',
                    message: '是否要覆盖之前的文件夹？',
                    default: false,
                    name: 'overwrite',
                },
            ]);
            if (awsaner.overwrite) {
                fs.remove(targetPath);
                console.log('删除成功');
            } else {
                // 直接返回新名字
                return;
            }
        }
        // 2.新建项目
        const res = await inquirer.prompt([
            {
                type: 'list',
                message: '选择什么框架去新建项目?',
                name: 'type',
                choices: [
                    { name: 'vue', value: 'vue' },
                    { name: 'react', value: 'react' },
                ],
            },
            {
                type: 'list',
                message: '是否要用ts?',
                name: 'ts',
                choices: [
                    { name: '是', value: true },
                    { name: '否', value: false },
                ],
            },
        ]);

        const spinner = ora('下载中').start();

        const url = 'https://github.com/vajsp/bigFileUpLoad.git';
        const url2 = 'git@github.com:vajsp/bigFileUpLoad.git';

        gitClone(url2, name, { checkout: 'main' }, function (err) {
            if (err) {
                console.log('下载失败');
                console.log(err);
                spinner.fail('下载失败');
            } else {
                // 删除。git
                fs.remove(path.join(targetPath, '.git'));

                console.log('下载成功');
                spinner.succeed('下载成功');
                console.log(chalk.greenBright('成功'));
                console.log(chalk.greenBright('\n成功'));
            }
        });
    });

// 给help信息添加提示
program.on('--help', function () {
    console.log(
        figlet.textSync('OK', {
            font: 'Ghost',
            width: 80,
        })
    );
});

program.parse(process.argv);
