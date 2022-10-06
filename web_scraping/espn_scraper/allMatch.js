const request = require("request");
const cheerio = require("cheerio");
const scorecardObj = require("./scorecard");

function getMatchLink(url) {
  request(url, cb2);
  function cb2(error, response, html) {
    if (error) {
      console.log(error);
    } else {
      // console.log(html)
      extractAllMatchLink(html);
    }
  }
 
  function extractAllMatchLink(html) {
    let selTool = cheerio.load(html);
    let element = selTool('a[data-hover="Scorecard"]');
    // console.log(element.length)
    for (let i = 0; i < element.length; i++) {
      let elementLink = selTool(element[i]).attr("href");
      let fullLink = "https://www.espncricinfo.com/" + elementLink;
      // console.log(fullLink)
      scorecardObj.ps(fullLink);
    }
    // let elementLink= element.attr('href')
  }
}

module.exports = {
  getAllMatch: getMatchLink,
};
