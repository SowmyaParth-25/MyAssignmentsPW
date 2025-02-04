import{chromium,firefox,test} from "playwright/test";

test('Red Bus and Flipkart in Edge and Firefox Browser Instances',async()=>{

//Launch Edge browser
const edgeBrowser=await chromium.launch({headless:false});

//Create a new browser context
const edgeContext=await edgeBrowser.newContext();

//Open a new Page within the browser context
const edgePage=await edgeContext.newPage();

//Load url
await edgePage.goto("https://www.redbus.in");

//get the url and title

const edgeUrl=await edgePage.url();
const edgeTitle=await edgePage.title();

console.log(`url is:${edgeUrl}`);
console.log(`title is:${edgeTitle}`);
///////////////////////////////////////////////////////////////////////////////

//Launch firefox browser
const firefoxBrowser=await firefox.launch({headless:false});

//Create a new browser context
const firefoxContext=await firefoxBrowser.newContext();

//Open a new Page within the browser context
const firefoxPage=await firefoxContext.newPage();

//Load url
await firefoxPage.goto("https://www.flipkart.com");

//get the url and title

const firefoxUrl=await firefoxPage.url();
const firefoxTitle=await firefoxPage.title();

console.log(`url is:${firefoxUrl}`);
console.log(`title is:${firefoxTitle}`);
})