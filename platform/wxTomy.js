const myTagConfig = require('../config/html');
let { tags, commonAttr } = myTagConfig;
let replace = ['replace'], del = ['delete'], none = ['none'], force = ['force'], cover = ['cover'];
function handleReplace (data, key, attrs) {
    let newKey = attrs[key].transform[0].key;
    data[newKey] = JSON.parse(JSON.stringify(data[key]));
    delete data[key];
}
function handleDel (data, key, attrs) {
    // console.log('data[key]========>', data[key])
    delete data[key];
    if (attrs[key].msg) {
        console.log(`${key}-->${attrs.msg.content}`);
    }
}
function handleForce (data, key, attrs) {
    if (attrs[key] == 'color') { // 有该属性就更新value
        data[key] = attrs[key].transform[0].value;
    } else { // 没有就加上
        let newKey = attrs['color'].transform[0].key;
        let value = attrs['color'].transform[0].value;
        data[newKey] = {
            type: "attributes",
            value
        }
    }
}
let transform;
function handleCover (data, key, attrs) {
    if (attrs[key] || ['bindgetuserinfo', 'bindgetphonenumber'].includes(key)) { // bindgetuserinfo bindgetphonenumber
        transform = attrs[key] ? attrs[key].transform : transform;
        transform.map(attr => {
            if (replace.includes(attr.action)) {
                if (attr.beforKey) { // bindgetuserinfo => onGetAuthorize 或 bindgetphonenumber => onGetAuthorize
                    // console.log('data[key]=========>', data[key])
                    data[attr.afterKey] = JSON.parse(JSON.stringify(data[key]));
                    delete data[key];
                }
            }
        });
    }
    else if (key === 'open-type') { // 替换open-type的值
        let K = data[key].value;
        transform = attrs[K].transform;
        if (!transform) return;
        transform.map(attr => {
            if (replace.includes(attr.action)) {
                if (attr.value) {
                    data[key].value = attr.value
                }
            } else if (cover.includes(attr.action)) { // 支付宝需要加上scope
                data[attr.afterKey] = {
                    type: "attributes",
                    value: attr.afterVal
                };
            }
        });
    }
}
function processProps (tree) {
    // console.log('tree========>', tree)
    let { type, props } = tree;
    let curTag = tags[type];
    if (curTag) {
        let { action, attrs } = curTag;
        // console.log('props========>', props)
        for (let prop in props) {
            if (props.hasOwnProperty(prop)) {
                // 公共属性
                if (commonAttr[prop] && replace.includes(commonAttr[prop].action)) {
                    handleReplace(props, prop, commonAttr);
                } else {
                    if (action) {
                        // 标签
                        if (curTag && !none.includes(action)) {
                            if (replace.includes(action)) { // 替换
                                handleReplace(props, prop, curTag);
                            } else if (del.includes(action)) { // 删除
                                handleDel(props, prop, curTag);
                            } else if (force.includes(action)) { // 没有加上默认值，有就更新
                                handleForce(props, prop, curTag);
                            }
                        }
                    }

                    // 属性
                    if (curTag && attrs) {
                        let attrAction;
                        if (attrs[prop]) {
                            attrAction = attrs[prop].action;
                            if (replace.includes(attrAction)) { // 替换
                                handleReplace(props, prop, attrs);
                            } else if (del.includes(attrAction)) { // 删除
                                handleDel(props, prop, attrs);
                            } else if (force.includes(attrAction)) { // 没有加上默认值，有就更新
                                handleForce(props, prop, attrs);
                            }
                        }
                        // 如果标签上没有改属性，checkbox和radio需要加上默认属性
                        if (['checkbox', 'radio'].includes(type)) {
                            handleForce(props, prop, attrs);
                        }
                        // button 中'open-type'说明有用户授权(用户基本信息或手机号授权)
                        if (['button'].includes(type) && props['open-type']) {
                            let bAttrs = attrs['open-type'].values;
                            handleCover(props, prop, bAttrs);
                        }
                    }
                }
            }
        }
    }
}
function processTags (tree) {
    let { props, children } = tree;
    if (props) {
        processProps(tree)
    }
    if (children && children.length) {
        children.map(m => {
            if (m.type != 'textContent') { // 如果当前标签不是文本就递归处理
                processTags(m)
            }
        })
    }

}
// 将wx转好的ast Dom树转成 蚂蚁的
function transformToMy (astDomTree) {
    astDomTree = JSON.parse(astDomTree);
    astDomTree.map(tree => {
        if (!['wxs', 'import'].includes(tree.type)) {
            processTags(tree);
        }

    })
    // console.log('astDomTree===========>', JSON.stringify(astDomTree))
    return JSON.stringify(astDomTree);
}

exports.transformToMy = transformToMy;