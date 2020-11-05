const fs = require('fs')
const clc = require('cli-color');
const { exit } = require('process');
const puppeteer = require('puppeteer');
const args = process.argv;
const url = args[2];


async function getPageInfo(url) {
    const browser = await puppeteer.launch();
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
    await page.click('#lang-select')
    // 选择JavaScript
    await page.click('div[data-cypress=LanguageSelector-JavaScript]')

    const { questionTitle, code } = await page.evaluate(() => {
        const titleDom = document.querySelector('h4[data-cypress=QuestionTitle]')
        const codeDom = document.querySelectorAll('.view-line')
        let codeString = ''

        for (let line of codeDom) {
            codeString += `${line.textContent}\n`
        }

        return {
            questionTitle: titleDom.textContent,
            code: codeString,
        }
    });
    const funcReg = /var\s(.*)\s=\sfunction/
    const index = questionTitle.split('.')[0]
    const funcMatch = code.match(funcReg)
    let funcName = ''
    if (funcMatch.length = 2) {
        funcName = funcMatch[1]
    }
    const fileName = `${index}_${funcName}.js`


    await browser.close();
    return {
        fileName,
        questionTitle,
        code,
    }
}

// main
(async () => {
    let pageInfo = {}
    try {
        pageInfo = await getPageInfo(url)
    } catch (e) {
        console.error(clc.bgRed('[Call error]'), clc.red('request leetcode.com faild:', e.message))
        exit()
    }


    // 判断是否存在文件
    const path = "lib/" + pageInfo.fileName
    if (await fs.existsSync(path)) {
        console.error(clc.bgRed('[Call error]'), clc.red('create file is exist'))
        exit()
    } else {
        // 创建文件
        const codeData = `// ${pageInfo.questionTitle}. \n` + `// ${url}\n\n` + `${pageInfo.code}`
        try {
            await fs.writeFileSync(path, codeData)
            console.log(clc.green(`create ${pageInfo.fileName} file success!\nproblem url: ${url}`))
        } catch (e) {
            console.error(clc.bgRed('[write file error]'), clc.red(e.message))
        }

    }

})()

