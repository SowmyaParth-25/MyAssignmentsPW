import{chromium,firefox,test,expect} from "playwright/test";

test('Red Bus in Edge Instance',async({page})=>{

//Load url
await page.goto("https://www.redbus.in");

//Wait for 5 seconds 
console.log(`Wait for 5 seconds ${await page.waitForTimeout(5000)}`);

//get the url and title
//await expect(page).toHaveTitle('Booking Online')
const url=await page.url();
const title=await page.title();

console.log(`url is:${url}`);
console.log(`title is:${title}`);


})
///////////////////////////////////////////////////////////////////////////////

test('Flipkart in Firefox Browser Instances',async({page})=>{

//Load url
await page.goto("https://www.flipkart.com");

//Wait for 5 seconds 
console.log(`Wait for 5 seconds ${await page.waitForTimeout(5000)}`);

//get the url and title

const url=await page.url();
const title=await page.title();

console.log(`url is:${url}`);
console.log(`title is:${title}`);


})