const { parserHTML } = require('./parser');
const { getFile, getContent } = require('../utils/index');
const { createElm } = require('./createElm');
const { transformToMy } = require('../platform/wxTomy');

async function compileToHtml () {
    let wxHtml = await getFile('./page/button/button.wxml');
    let astTree = parserHTML(wxHtml);
    let platformHtml = transformToMy(astTree)
    let htmlStr = createElm(platformHtml);
    console.log('htmlStr===========>',htmlStr)
    return htmlStr;
}
compileToHtml()

// module.compileToHtml = compileToHtml