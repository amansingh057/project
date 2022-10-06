const loginLink = "https://www.omegle.com/";
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

console.log("Before");
let page;
let browserWillLaunchPromise = puppeteer.launch({
  headless: false,
  args: ["--start-maximized"],
  defaultViewport: null,
});

browserWillLaunchPromise
  .then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
  })
  .then(function (newTab) {
    page = newTab;
    let websiteWillbeOpenedPromise = newTab.goto(loginLink);
    return websiteWillbeOpenedPromise;
  })
  .then(function () {
    let textClickPromise = page.click("#chattypetextcell", { delay: 50 });
    return textClickPromise;
  })
  .then(function () {
    let elements = page.$$("input[type=checkbox]");
    return elements
  }).then(function(totalchecks){
    console.log(''+totalchecks.length);
    // let check;
    for(let btn  of totalchecks){
      btn.click()
    }
    // totalchecks[1].click();
    // totalchecks[2].click();
  })

function waitAndClick(selector, cPage) {
  return new Promise(function (resolve, reject) {
    let waitForModalPromise = cPage.waitForSelector(selector);
    waitForModalPromise
      .then(function () {
        let clickModal = cPage.click(selector, { delay: 100 });
        return clickModal;
      })
      .then(function () {
        resolve();
      })
      .catch(function () {
        reject();
      });
  });
}
