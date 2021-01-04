const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`; // 标签名 
const qnameCapture = `((?:${ncname}\\:)?${ncname})`; //  用来获取的标签名的 match后的索引为1的
const startTagOpen = new RegExp(`^<${qnameCapture}`); // 匹配开始标签的 
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`); // 匹配闭合标签的
//           aa  =   "  xxx "  | '  xxxx '  | xxx
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/; // a=b  a="b"  a='b'
const startTagClose = /^\s*(\/?)>/; //     />   <view/>
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g; // {{aaaaa}}

var htmlparser = require("stricter-htmlparser2");

function createAstElement (tagName, attrs) {
    return {
        tag: tagName,
        type: 1, // 1-标签 3-文本
        children: [],
        parent: null,
        attrs
    }
}
let root = null;
let stack = [];
function start (tagName, attrs) {
    let parent = stack[stack.length - 1];
    let element = createAstElement(tagName, attributes);
    if (!root) {
        root = element;
    }
    if(parent){
        element.parent = parent;// 当放入栈中时 记录父亲是谁
        parent.children.push(element)
    }
    stack.push(element);
}
function end (tagName) {
    let last = stack.pop();
    if (last.tag !== tagName) {
        throw new Error('标签有误');
    }
}
function chars (text) {
    text = text.replace(/\s/g, "");
    let parent = stack[stack.length - 1];
    if (text) {
        parent.children.push({
            type: 3,
            text
        })
    }
}

function parserHTML (html) {
    // console.log(html)
    // 删除
    function advance (len) {
        return html.substring(len);
    }
    // 解析标签
    function parseStartTag() {
        const start = html.match(startTagOpen);
        if (start) {
            const match = {
                tagName: start[1],
                attrs: []
            }
            advance(start[0].length);
            let end;
            // 如果没有遇到标签结尾就不停的解析
            let attr;

            while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
                match.attrs.push({ name: attr[1], value: attr[3] || attr[4] || attr[5] })
                advance(attr[0].length)
            }
            if (end) {
                advance(end[0].length);
            }
            return match;
        }
        return false; // 不是开始标签
    }
    
    while(html){
        let textEnd = html.indexOf('<'); // 当前解析的开头  
        if (textEnd == 0) {
            const startTagMatch = parseStartTag(html); // 解析开始标签
            if (startTagMatch) {
                start(startTagMatch.tagName, startTagMatch.attrs)
                continue;
            }
            const endTagMatch = html.match(endTag);
            if (endTagMatch) {
                end(endTagMatch[1]);
                advance(endTagMatch[0].length);
                continue;
            }
        }
        let text; // //  </view>
        if (textEnd > 0) {
            text = html.substring(0, textEnd)
        }
        if (text) {
            chars(text);
            advance(text.length);
        }
    }
    return root;






    var parser = new htmlparser.Parser({
        onopentag: function(name, attribs){
            console.log('name========>',name)
            console.log('attribs========>',attribs)
            // if(name === "script" && attribs.type === "text/javascript"){
            //     console.log("JS! Hooray!");
            // }
        },
        ontext: function(text){
            console.log("-->", text);
        },
        onclosetag: function(tagname){
            if(tagname === "script"){
                // console.log("That's it?!");
            }
        }
    }, {decodeEntities: true});
    // parser.write("Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>");
    parser.write(html);
    parser.end();

}
module.exports = {
    parserHTML
}