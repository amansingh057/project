// node flipkartcart.js --url=https://www.flipkart.com/ --config=config.json

let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");

let args = minimist(process.argv);
let configJSON = fs.readFileSync(args.config,"utf-8");
let configJSO = JSON.parse(configJSON);

async function run()
{
    let browser  = await puppeteer.launch({
        headless: false,
        args: [
            '--start-maximized'
        ],
        defaultviewport: null
    });

    let pages = await browser.pages();
    let page = pages[0];
    await page.setViewport({ width: 1366, height: 768});
    let login = args.url+'/login';
    await page.goto(args.url);
    await page.waitFor(1000);
    
    await page.goto(login);
    
    await page.waitForSelector("input[class='_2IX_2- VJZDxU']");
    await page.type("input[class='_2IX_2- VJZDxU']",configJSO.userid,{delay:20});
    await page.waitForSelector("input[type='password']");
    await page.type("input[type='password']",configJSO.password,{delay:20});

    await page.click("button[class='_2KpZ6l _2HKlqd _3AWRsL']");
    let i=0;

    while(configJSO.item[i]!=null)
    {

    await page.waitFor(2000);
    await page.waitForSelector("input[type='text']");
    await page.type("input[type='text']",configJSO.item[i],{delay:20});
    await page.click("button[class='L0Z3Pu']");

    await page.waitFor(2000);
    await page.waitForSelector("a[target='_blank']");
    await page.click("a[target='_blank']");
    await page.waitFor(2000);
    await page.close();
    pages = await browser.pages();
    page = pages[0];
    await page.setViewport({ width: 1366, height: 768});
    await page.waitFor(1000);
    await page.waitForSelector("button[class='_2KpZ6l _2U9uOA _3v1-ww']");
    await page.click("button[class='_2KpZ6l _2U9uOA _3v1-ww']");
    await page.waitFor(1000);
    await page.waitForSelector("img[width='75']");
    await page.click("img[width='75']");
        i++;
        
    }

    await page.waitForSelector("a[class='_3SkBxJ']");
    await page.click("a[class='_3SkBxJ']");

    await page.waitFor(2000);

    await page.waitForSelector("input[class='cfnctZ']");
    await page.type("input[class='cfnctZ']",configJSO.pincode,{delay:20});

    await page.waitFor(2000);

    await page.waitForSelector("span[class='UgLoKg']");
    await page.click("span[class='UgLoKg']");

    await page.waitFor(2000);
    
    await page.waitForSelector("button[class='_2KpZ6l _2ObVJD _3AWRsL']");
    await page.click("button[class='_2KpZ6l _2ObVJD _3AWRsL']");
    
    
}

run();