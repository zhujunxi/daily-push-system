const fs = require("fs")
const axios = require("axios");

function generateUrl() {
    return "https://www.yuque.com/api/docs/" + "hlxlii" + "?book_id=408811"
}
module.exports = function getContent() {
    return new Promise(function (resolve, reject) {
        axios({
            method: "get",
            url: generateUrl()
        }).then(function (res) {

            let content = res.data.data.content
            fs.writeFile('res.txt', content, function (err) {
                if (err) {
                    throw err
                }
            })
            resolve(decodeURIComponent(content))
        }).catch(function (err) {
            reject(err)
        })
    })
}