const document = require('html-element').document;

// 外层最大Dom容器
const containerDom = document.createElement('container');
let zIndex = 0; // 如果zIndex不为0，说明该节点还有children
let vnodeMap = new Map();
let vnodeList = [];

// import wxs
function handleOther ({ type, props }) {
    let ele = document.createElement(type);
    if (props) handleAttrs(ele, props);
    vnodeList.push(ele);
    // containerDom.appendChild(ele);
}
// 标签
function handleTag (tree) {
    let { type, props, children, parent, flagType, parentId, selfId } = tree;
    let ele = document.createElement(type);
    if (props) handleAttrs(ele, props);
    if (parent == null && flagType) { // 当前元素最外层的父级
        vnodeMap.set(selfId, ele);
        vnodeList.push(vnodeMap.get(selfId))
    } else {
        vnodeMap.set(selfId, ele);
    }

    if (children && children.length) {
        zIndex++;
        if (vnodeMap.get(parentId)) vnodeMap.get(parentId).appendChild(ele);
        children.map(m => {
            // console.log('children=========>', children)
            if (m.type == 'textContent') {
                zIndex = 0;
                let textNode = document.createTextNode(m.value);
                vnodeMap.get(m.parentId).appendChild(textNode);
                // vnodeMap.get(m.parentId).innerHTML = m.value;
            } else { // 当前类型不为文本并且有children
                // 递归处理
                handleTag(m)
            }
        })
    } else {
        if (vnodeMap.get(parentId)) vnodeMap.get(parentId).appendChild(ele);
    }
}
// 属性 
function handleAttrs (tag, attrs) {
    Object.keys(attrs).forEach(attr => {
        tag.setAttribute(attr, attrs[attr].value)
    })
}
function createElm (astTree) {
    // console.log('astTree=========>', astTree)
    astTree = JSON.parse(astTree)
    astTree.map(tree => {
        if (['wxs', 'import'].includes(tree.type)) {
            handleOther(tree);
        } else {
            handleTag(tree);
        }
    })
    // 将创建好的dom传入到最大容器中
    vnodeList.forEach(domObj => {
        containerDom.appendChild(domObj)
    })
    let result = containerDom.innerHTML.replace(/\&amp\;\&amp\;/g, '&&').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/a:else=""/g, 'a:else').replace(/;:;/g, ';').replace(/&quot;/g, '').replace(/=""/g, '');
    vnodeMap = null;
    return result;
}
module.exports = {
    createElm
}