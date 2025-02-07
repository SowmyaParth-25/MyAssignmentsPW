//Assignment: 3 Create a new Account

import{test,expect} from "@playwright/test";
test('Assignment:Create a new Account in Salesforce App',async({page})=>{

    //Load the Salesforce url
    await page.goto("https://login.salesforce.com/");

    //Enter username using getByLabel
    await page.getByLabel('Username').fill("sowp-2525@testleaf.com");
    
    //Enter password using getByLabel
    await page.getByLabel('Password').fill("Sunshine@15");

    //Click the login button
    await page.locator("#Login").click();

    //remind later
    try{
   const remindMeLaterLink=await page.locator("//a[text()='Remind Me Later']");
   if(await remindMeLaterLink.isVisible()){
    await remindMeLaterLink.click();
   }else{
    console.log("'Remind Me Later' link not found or already dismissed.")
   }
   }catch(error){
    console.log('No "Remind Me Later" pop-up found or another issue.');
   }

    
    //get the url and title of the page
   console.log(`The url of the page is :${await page.url()}`);
   console.log(`The title of the page is : ${await page.title()}`);
   expect(page.url()).toContain('force');

    //Click App Launcher using the class locator
    await page.locator(".slds-icon-waffle").waitFor({ state: 'visible', timeout: 60000 });
    await page.locator(".slds-icon-waffle").click();
    await page.waitForTimeout(5000);


    //Click View All using getByText 
    await page.getByText('View All').click();

    // Wait for spinner to disappear before clicking "Service"
    await page.locator('lightning-spinner').waitFor({ state: 'hidden' });

    //Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder

    await page.getByPlaceholder('Search apps or items...').fill("Service");

    //Click Service using index based XPath
    await page.locator("(//mark[text()='Service'])[1]").click();

    //Click Accounts using attribute based CSS selector
    await page.locator("a[title='Accounts']").click();

    //Click New using getByRole
    await page.getByRole('button',{name:'New'}).click();


    //Enter Account name using attribute based CSS selector
    await page.locator("input[name='Name']").fill("Sowmya");


    //Click Save button using XPath
    await page.locator("//button[text()='Save']").click();

    //Verify the toast message displayed
    await expect(page.getByRole('alert')).toBeVisible();


})