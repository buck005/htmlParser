const document = require('html-element').document;

// 外层最大Dom容器
const containerDom = document.createElement('container');
function test(){
    let tag = document.createElement('view')
    for(let i = 0; i< 10;i++){
        let el = document.createElement('text');
        el.setAttribute('advertisementList',1212321312)
        for(let j = 0;j<3;j ++){
            let aa = document.createElement('a-test')
            el.appendChild(aa);
        }

        tag.appendChild(el);
        tag.textContent = "aaaaaaaaaaaaaaa"
        console.log('tag innerHTML ======>',tag.innerHTML)
        console.log('tag outerHTML ======>',tag.outerHTML)
        console.log('tag textContent ======>',tag.textContent)
    }
    containerDom.appendChild(tag)
    // console.log(containerDom.innerHTML)
}
test()