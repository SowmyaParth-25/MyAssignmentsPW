//Assignment: Edit a Lead
import {test,expect} from "playwright/test";

test('Test to edit a Lead',async({page})=>{

 //Load the url   
await page.goto("http://leaftaps.com/opentaps/control/main");

//Enter the username and password
await page.locator("#username").fill("Demosalesmanager");

await page.locator("#password").fill("crmsfa");

//Click the Login button
await page.locator(".decorativeSubmit").click();

//explicit timeout
await page.waitForTimeout(5000);

//Click CRM/SFA
await page.locator("//a[contains(text(),'CRM')]").click();

//Click Leads
await page.locator("//a[text()='Leads']").click();

//explicit timeout
await page.waitForTimeout(5000);

//Click Find Leads
await page.locator("//a[text()='Find Leads']").click();

//Enter the first name
await page.locator("(//input[@name='firstName'])[3]").fill("James");

//Click Find Leads button
await page.locator("//button[text()='Find Leads']").click();

//Click the first resulting lead Id
await page.locator("//a[text()='11537']").click();

//Click Edit
await page.locator("//a[text()='Edit']").click();

const companyName="Test leaf New Version";
const firstName="James";
const departmentName="HR";
const description="Welcome to Test leaf from the HR Team";

//Wait for input field to be visible
const companyNameInput=await page.locator("#updateLeadForm_companyName");

await companyNameInput.waitFor({state:'visible'});

//Edit Company
await companyNameInput.fill(companyName);

//Edit Annual Revenue 
await page.locator("#updateLeadForm_firstName").fill(firstName);

// Edit Department
await page.locator("#updateLeadForm_departmentName").fill(departmentName);

// Enter Description
await page.locator("#updateLeadForm_description").fill(description);

//Click Update
await page.locator("(//input[@type='submit'])[1]").click();

//Verify Assertions 
const isCompanyPresent=await page.isVisible(`text=${companyName}`);

if(isCompanyPresent){
    console.log(`Company is present with value:${companyName}`);
}else{
    console.log(`Company not provided`);
}


})
//Assignment: Edit a Lead 2
test('Edit a Lead Part 2',async({page})=>{

//Load the url   
await page.goto("http://leaftaps.com/opentaps/control/main");

//Enter the username and password
await page.locator("#username").fill("Demosalesmanager");

await page.locator("#password").fill("crmsfa");

//Click the Login button
await page.locator(".decorativeSubmit").click();

//Click CRM/SFA
await page.locator("//a[contains(text(),'CRM')]").click();

//Click Leads link
await page.locator("//a[text()='Leads']").click();

//explicit timeout
await page.waitForTimeout(5000);

//Click on Create Lead
await page.locator("//a[text()='Create Lead']").click();

await page.waitForTimeout(5000);

//Fill the lead details
const companyName ="Maruti Suzuki";
const firstName ="Selena";
const lastName = "user90";

await page.locator("#createLeadForm_companyName").fill(companyName);

await page.locator("#createLeadForm_firstName").fill(firstName);

await page.locator("#createLeadForm_lastName").fill(lastName);

//Submit lead/Create lead
await page.locator("[name='submitButton']").click();

//Add an explicit wait for page to load
await page.waitForTimeout(5000);

//Click Edit
await page.locator("(//a[@class='subMenuButton'])[3]").click();

//Change company name
const companyNameInput=await page.locator("#updateLeadForm_companyName");
await companyNameInput.waitFor({state:'visible'});
await companyNameInput.fill(companyName);

//Click Update
await page.locator("[value='Update']").click();


})