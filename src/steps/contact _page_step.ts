import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from 'playwright/test';


Given('I navigate to spinmatic homepage', async function()  {
    await this.page.goto(this.URL);
  })

Given('I select Contact menu', async function()  {
  if (process.env.VIEWPORT === 'mobile') {
    await this.page.click('.hamburger');
  } 
    await this.page.getByRole('link', { name: 'Contact', exact: true }).click();
})

When('I fill out email with {string}', async function (email: string) {
    await this.page.locator('#email').click();
    await this.page.locator('#email').fill(email);
  })

  When('I fill out name with {string}', async function(name: string) {
    await this.page.getByLabel('Name').click();
  await this.page.getByLabel('Name').fill(name);
})

When('I press send mensage', async function() {
    await this.page.getByRole('button', { name: 'Send message' }).click();
  })

Then('the input name is mark as invalid', async function() {
    
    await expect(this.page.locator("#name:invalid")).toBeVisible();
})

Then('the input email is mark as invalid',async function () {
    await expect(this.page.locator("#email:invalid")).toBeVisible();
})







