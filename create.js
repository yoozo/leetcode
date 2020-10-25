const fs = require('fs')
const clc = require('cli-color');
const { exit } = require('process');
const args = process.argv;

function toLine(name) {
    return name.replace(/([A-Z])/g, "-$1").toLowerCase();
}

// main
(async () => {
    // args[2] 创建的文件名
    const createFile = args[2]
    if (createFile) {
        const path = `lib/${createFile}.js`
        const problem = createFile.split('_')

        if (problem.length !== 2) {
            console.error(clc.bgRed('[Call error]'), clc.red('create file give name field'))
            exit()
        }

        // 判断是否存在文件
        if (await fs.existsSync(path)) {
            console.error(clc.bgRed('[Call error]'), clc.red('create file is exist'))
            exit()
        } else {
            // 创建文件
            const url = `https://leetcode-cn.com/problems/${toLine(problem[1])}/`
            const codeData = `// ${problem[0]}. \n` + `// ${url}\n`
            try {
                await fs.writeFileSync(path, codeData)
                console.log(clc.green(`create ${createFile} file success!\nproblem url: ${url}`))
            } catch (e) {
                console.error(clc.bgRed('[write file error]'), clc.red(e.message))
            }

        }
    } else {
        console.error(clc.bgRed('[Parameter error]'), clc.red('not input create file'))
        exit()
    }
})()