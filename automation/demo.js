const puppeteer = require('puppeteer')

console.log('Before')

let browserWillLaunchPromise = puppeteer.launch({
    headless:false,// This will false the default setting to open browser
    args:['--start-maximized'],
    defaultViewport:null
}) // Launch and return the promise to open the browser.

browserWillLaunchPromise.then(function(browserInstance){
    // console.log('Browser Opened')
    let newTabPromise = browserInstance.newPage()   // newpage() method will new page
    return newTabPromise 
}).then(function(newTab){
    let websiteWillBeOpenedPromise = newTab.goto('https://pepcoding.com/')
    return websiteWillBeOpenedPromise
}).then(function(){
    console.log('site Opened')
})

console.log('After')