const axios = require("axios");

function generateUrl() {
    return "https://www.yuque.com/api/docs/" + "19m9w3" + "?book_id=408811"
}
module.exports = function getContent() {
    return new Promise(function (resolve, reject) {
        axios({
            method: "get",
            url: generateUrl()
        }).then(function (res) {
            let content = res.data.data.content
            resolve(decodeURIComponent(content))
        })
    })
}