const fs = require('fs');
const clc = require('cli-color');
const puppeteer = require('puppeteer');
const { exit } = require('process');
const args = process.argv;
const url = args[2];

// main
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1366, height: 768 }
    });
    const page = await browser.newPage();
    await page.goto(url);

    // 点击呼出登录框
    await page.click('#lang-select')
    // 删除登录框
    await page.evaluate(() => {
        let element = document.querySelector('.modal-container');
        element.parentNode.removeChild(element);
        console.log("success remove class modal-container")
    });
    // 点击呼出语言选择框
    await page.click('#lang-select', {
        // delay: 1000
    })
    // 选择JavaScript
    await page.click('div[data-cypress=LanguageSelector-JavaScript]', {
        // delay: 500
    })

    console.log((await page.$('h4[data-cypress=QuestionTitle]')).text())



})()