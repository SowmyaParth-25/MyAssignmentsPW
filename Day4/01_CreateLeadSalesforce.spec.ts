//Assignment: 1 Create Lead

import{test,expect} from "@playwright/test";
test('Assignment: 1 Create Lead in Salesforce App',async({page})=>{

    //Load the Salesforce url
    await page.goto("https://login.salesforce.com/");

    //Enter the username
    await page.locator("#username").fill("sowp-2525@testleaf.com");
    
    //Enter the password
    await page.locator("#password").fill("Sunshine@15");

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
   await expect(page).toHaveTitle('Lightning Experience');

    //Click on toggle menu button from the left corner
    await page.locator("//div[@class='slds-icon-waffle']").waitFor({ state: 'visible', timeout: 60000 });
    await page.locator("//div[@class='slds-icon-waffle']").click();
    await page.waitForTimeout(5000);

    //Click view All 
    await page.locator("//button[text()='View All']").click();

    //and click Sales from App Launcher
    await page.locator("//p[text()='Sales']").click();

    //Click on Leads tab
    await page.locator("(//span[text()='Leads'])[1]").click();
    
    //Click on New
    await page.locator("//div[text()='New']").click();
    
    //Select Salutation dropdown
    await page.getByRole('combobox',{name:'Salutation'}).click();

    await page.getByRole('option',{name:'Mrs.'}).click();
    
    //Enter the Last Name
    await page.locator("//input[@placeholder='Last Name']").fill("testLeaf User1510");

    //Enter the Company Name
    await page.locator("//input[@name='Company']").fill("Testleaf");

    //Click Save and Verify Leads name created
    await page.locator("(//button[text()='Save'])[2]").click();

    const fisrtLead=await page.locator("[data-recordid='00Qak00000ESsAHEA1']");
    
    await fisrtLead.waitFor({state:'visible'});

    //Get the value of the leadCreated field
    const leadCreated =await fisrtLead.textContent();


   //Verify the Lead name
   const isLeadPresent=await page.isVisible(`text=${leadCreated}`);

   //Lead name present or not
   console.log(isLeadPresent)

    if(isLeadPresent){
        console.log(`Lead successfully created with value:${leadCreated}`);
    }else{
        console.log("Failed to create lead!!");
    }

 

})

