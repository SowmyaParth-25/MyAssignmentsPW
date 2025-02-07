
//Assignment: 1 Create a Lead
import {test,expect} from "playwright/test";

test('Test to create a Lead',async({page})=>{

 //Load the url   
await page.goto("http://leaftaps.com/opentaps/control/main");

//Enter the username and password
await page.locator("#username").fill("Demosalesmanager");

await page.locator("#password").fill("crmsfa");

//Click the Login button
await page.locator(".decorativeSubmit").click();

//Click CRM/SFA
await page.locator("//a[contains(text(),'CRM')]").click();
await page.waitForTimeout(5000);
//Click Leads
await page.locator("//a[text()='Leads']").click();

//Click Create Lead
await page.locator("//a[text()='Create Lead']").click();

await page.waitForTimeout(5000);

//Fill the lead details
const companyName ="Testleaf";
const firstName ="Jack";
const lastName = "user78";
const salutation="Hey/Hi";
const title="QA";
const annualRevenue="8 lakhs per annum";
const department="R&D/IT";
const phone="9988776543";

await page.locator("#createLeadForm_companyName").fill(companyName);

await page.locator("#createLeadForm_firstName").fill(firstName);

await page.locator("#createLeadForm_lastName").fill(lastName);

await page.locator("#createLeadForm_personalTitle").fill(salutation);

await page.locator("#createLeadForm_generalProfTitle").fill(title);

await page.locator("#createLeadForm_annualRevenue").fill(annualRevenue);

await page.locator("#createLeadForm_departmentName").fill(department);

await page.locator("#createLeadForm_primaryPhoneNumber").fill(phone);


//Locate the dropdown by value
await page.selectOption("#createLeadForm_dataSourceId",{value:"LEAD_PR"}); 

//Submit lead
await page.locator("[name='submitButton']").click();

//Add an explicit wait for page to load
await page.waitForTimeout(5000);

const statusLocator=await page.locator("#viewLead_statusId_sp");

await statusLocator.waitFor({state:'visible'});

//Get the value of the Status field
const getStatus=await statusLocator.textContent();

//Verify the company name, first name, last name
const isCompanyPresent=await page.isVisible(`text=${companyName}`);
const isFNamePresent=await page.isVisible(`text=${firstName}`);
const isLNamePresent=await page.isVisible(`text=${lastName}`);
const isStatusPresent=await page.isVisible(`text=${getStatus}`);

//Verify value present or not
console.log(isCompanyPresent);
console.log(isFNamePresent);
console.log(isFNamePresent);
console.log(isStatusPresent);

if(isCompanyPresent){
    console.log(`Company is Present with values:${companyName}`);
}else{
    console.log(`Company is Not Present`);
}
if(isFNamePresent){
    console.log(`Firstname is Present with values:${firstName}`);
}else{
    console.log(`Firstname is Not Present`);
}
if(isLNamePresent){
    console.log(`Lastname is Present with values:${lastName}`);
}else{
    console.log(`Lastname is Not Present`);
}
if(isStatusPresent){
    console.log(`Lead status is:${getStatus}`);
}else{
    console.log(`Lead status not available`);
}



})
