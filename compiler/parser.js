const htmlparser = require("htmlparser2");
const stringify = require('json-stringify-safe');
const { rString } = require("../utils");

function createText (text) {
    return {
        value: text,
        parent: null,
        type: 'textContent' // 代表文本
    };
}

function processProps (obj = {}) {
    let props = {};
    Object.keys(obj)
        .forEach(function (prop) {
            let val = obj[prop];
            props[prop] = {
                type: 'attributes', // 代表属性
                value: val // [val]
            };
        });

    return Object.keys(props).length ? props : null;
}

function parserHTML (code) {
    let ast = [];
    let zIndex = 0; // 记录当前标签是否有children
    let currentNode = null;
    let preTagIsText = false;
    let preTextNode = null;
    let preTag = null; // 上一个标签
    let isSingleLabel = false; // 是否单标签 <checkbox />选中

    var parser = new htmlparser.Parser({
        onopentag: function (name, attrs) {
            let node = {
                props: processProps(attrs),
                type: name,
                children: [],
                parent: null,
                parentId: rString(),
                selfId: rString()
            };

            let _fn = 'push';
            // 如果是 wxs 和 import <import src="xx/xx/xx.wxml" /> 或 <wxs module="xxx" src="xx/xx/xx.wxs"></wxs>
            if (name === 'wxs' || name === 'import') {
                _fn = 'unshift';
            }

            // 如果 zIndex 为0，说明当前标签里面所有的内容都已经获取到(包含所有 children)或者当前标签没有 children
            if (zIndex === 0) {
                ast[_fn](node);
                currentNode = node;
            } else {
                node.parent = currentNode;
                node.parentId = currentNode.selfId;
                currentNode.children[_fn](node);
                currentNode = node;
            }
            zIndex++;
            preTagIsText = false;
            isSingleLabel = false;
        },
        ontext: function (text) {
            text = text.trim();
            if (text) {
                if (preTagIsText) {
                    preTextNode.value += text;
                    return false;
                }

                let node = createText(text);
                if (zIndex === 0) {
                    ast.push(node);
                } else {
                    if(isSingleLabel){
                        node.parent = currentNode;
                        node.parentId = preTag.selfId; // 如果是单标签且有文本，那么该文本的parentId是上一个标签的selfId
                        currentNode.children.push(node);
                    }else{
                        node.parent = currentNode;
                        node.parentId = currentNode.selfId;
                        currentNode.children.push(node);
                    }
                }
                preTextNode = node;
                preTagIsText = true;
            }
        },
        onclosetag: function (name) {
            zIndex--;
            preTag = JSON.parse(stringify(currentNode));
            isSingleLabel = true;
            currentNode = currentNode.parent;
        }
    }, {
        decodeEntities: false,
        xmlMode: true
    });
    parser.write(code);
    parser.end();
    handleAst(ast);
    return stringify(ast, null, 2);
}
function handleAst (ast) {
    ast.map((m, index) => {
        if (m.parent == null) {
            // m.flagType = new Array(1).fill(10000 + index)
            m.flagType = 10000 + index
            return m;
        }
    })
}
module.exports = {
    parserHTML
};
