import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from 'playwright/test';


Given('I navigate to main page', async function () {

  await this.page.goto(this.URL); 
  
  
  



});

Given('I open Contact', async function () {
    await this.page.goto('https://spinmatic.com/');
})
Given('I select Contact menu', async function()  {
    await this.page.getByRole('link', { name: 'Contact', exact: true }).click();
})

Then('I can leave the name field blank', async function()  {
    await this.page.locator('#email').click();
    await this.page.locator('#email').fill('samrp');
    await this.page.locator('#email').press('Alt+@');
    await this.page.locator('#email').fill('samrpgmail.com');
})

Then('I can fill out Contact', async function()  {
    await this.page.getByText('Message', { exact: true }).click();
    await this.page.getByLabel('Message').fill('message');
    await this.page.getByLabel('I have read and accept the').check();
})

Then('I can see message {string}', async function() {
    await this.page.getByRole('button', { name: 'Send message' }).click();
    await this.page.locator('div').filter({ hasText: /^Name$/ }).nth(1).click();
})
