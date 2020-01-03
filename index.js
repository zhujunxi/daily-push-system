const cheerio = require("cheerio")
const getContent = require("./js/getContent")
const sendMail = require("./js/sendMail")

getContent().then(function (res) {
    // let $ = cheerio.load(res);
    // let selectItem = $(".lake-list-node")
    // let demo = $(selectItem[1]).find("td")
    // console.log($(demo[0]).find("p").text())

    sendMail(res)
})