const cheerio = require("cheerio")
const getContent = require("./js/getContent")

const mockData = require("./mock.js")

getContent().then(function (res) {
    // console.log(mockData);

    let $ = cheerio.load(mockData);
    // console.log(res);

    let selectItem = $(".lake-list-node");
    console.log($(selectItem).text());
    // let demo = $(selectItem[1]).find("td")
    // console.log(demo.length);

    // console.log($(demo[0]).find("p").text());


    // console.log(selectItem.root().html());
})