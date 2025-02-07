//Assignment: 3 Create Individuals
import test, { expect } from "@playwright/test";
test('Salesforce-Create Individuals',async({page})=>{

    await page.goto("https://login.salesforce.com/");

    await page.locator("#username").fill("sowp-2525@testleaf.com");

    await page.locator("#password").fill("Sunshine@15");

    await page.locator("#Login").click();

    try{
    const remindMeLaterLink=await page.locator("//a[text()='Remind Me Later']");
    if(await remindMeLaterLink.isVisible()){
        await remindMeLaterLink.click();
    }else{
        console.log("'Remind Me Later' link not found or already dismissed.")
    }}
    catch(error){
        console.log('No "Remind Me Later" pop-up found or another issue.');
    }

    //Click on toggle menu button from the left corner
    await page.getByRole("button", { name: "App Launcher" }).click();


    //Click view All 
    await page.locator("//button[text()='View All']").click();

    //click Individuals from App Launcher
    await page.locator("//p[text()='Individuals']").click();

    //Click on 'New' Button
    await page.locator("//div[@title='New']").click();

    //Enter last Name
    const individual="Satyajit";
    await page.getByPlaceholder('Last Name').fill(individual);

    //Click on Save
    await page.locator("(//span[text()='Save'])[2]").click();

    console.log(`title is:${await page.title()}`);
    console.log(`title is:${await page.url()}`);
    await expect(page.url()).toContain("testleaf");
    await expect(page.title()).toContain(`${individual}`);

  
   //await getIndStatus.waitFor({state:'visible'});
   await expect(page.getByText(`Individual ${individual} was created.`)).toBeVisible();

   
//Verify the status 
// const getIndStatus=await page.locator("//a[@title='JasminTestleaf']");
//    const individualStatus=await getIndStatus.textContent();

//    const isIndividualCreated=await page.isVisible(`test=${getIndStatus}`);
//    console.log(isIndividualCreated)
//    if(isIndividualCreated){
//     console.log(`Individual status is: ${getIndStatus}`);
//    }else{
//     console.log("Individual not created!!");
//    }
   await page.pause()
})