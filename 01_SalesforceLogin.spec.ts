import{chromium,test} from "@playwright/test";
test('log in to Salesforce using Playwright with TypeScript',async({page})=>{

  /*  //Launch Chromium browser in non headless mode
    const broswer= await chromium.launch();

    //Create a new browser context
    const context=await broswer.newContext();

    //Open a new page within the browser context
    const page=await context.newPage(); */

    //Load the Salesforce url
    await page.goto("https://login.salesforce.com/");

    //Enter the username
    await page.locator("//input[@id='username']").fill("sowmya-hz3g@testleaf.com");
    
    //Enter the password
    await page.locator("//input[@id='password']").fill("connect25");

    //Click the login button

    await page.locator("//input[@id='Login']").click();

    //Wait for 10 seconds 
    console.log(`Wait for 10 seconds ${await page.waitForTimeout(10000)}`);
    
    //get the url and title of the page
   console.log(`The url of the page is :${await page.url()}`);
   console.log(`The title of the page is : ${await page.title()}`);

   //Close the browser
   await page.close();

   







})

