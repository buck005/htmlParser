const path = require('path');
const fs = require('fs');

const getFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, { encoding: 'utf8' }, function (err, data) {
            if (err) {
                reject(err)
            } else if (data) {
                resolve(data.toString());
            }
        });
    })
}

const getContent = async (rs) => {
    let buffers = [], nread = 0;
    return new Promise((resolve, reject) => {
        try {
            rs.on("data", chuck => {
                buffers.push(chuck);
                nread += chuck.length;
            }).on("end", () => {
                let buffer = null, pos = 0;
                switch (buffers.length) {
                    case 0:
                        buffer = new Buffer.alloc(0);
                        break;
                    case 1:
                        buffer = buffers[0];
                        break;
                    default:
                        buffer = new Buffer.alloc(nread);
                        buffers.forEach(chunk => {
                            chunk.copy(buffer, pos);
                            pos += chunk.length;
                        });
                        break;
                }
                const data = buffer.toString();
                resolve(JSON.parse(data));
            });
        } catch (err) {
            reject(err);
        }

    });
};
function isType (type) {
    return function (content) {
        let str = Object.prototype.toString.call(content).replace(/\[object\s|\]/g, '');
        return type === str;
    }
}
const utils = {};
const type = ['Number', 'String', 'Object', 'Array', 'Function', 'Boolean', 'Null', 'Undefined', 'Date', 'RegExp', 'JSON'];
type.forEach(item => {
    utils[('is' + item)] = isType(item);
});

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
const rString = () => {
    return randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
};

module.exports = {
    getContent,
    getFile,
    utils,
    rString
}