import { When,Then,Given } from "@cucumber/cucumber";
import { expect } from "playwright/test";

When('I select Game menu', async function()  {
  if (process.env.VIEWPORT === 'mobile') {
    await this.page.click('.hamburger');
  } 
    await this.page.getByRole('link', { name: 'Games', exact: true }).click();
  })

Then('I should see the title Game', async function()  {
    await expect(this.page.getByRole('heading')).toContainText('Games');
})

When('I press Plata o Plomo Deluxe', async function()  {
    await this.page.getByTitle('Plata o plomo Deluxe').click();
})

When('I press PLAY NOW', async function() {
    await this.page.getByRole('button', { name: 'Play now' }).click();
})

Then('I should see {string}', async function(message: string) {
 await expect(this.page.getByRole('dialog')).toContainText(message);
  })

Then('I press "NO"', async function() {
    await this.page.getByRole('button', { name: 'No', exact: true }).click();
})

Then('I should see the title Plata o Plomo Deluxe', async function()  {
  await expect(this.page.locator('h1')).toContainText('Plata o plomo Deluxe');
})

Then('I press "YES"', async function()  {
  await this.page.getByRole('button', { name: 'Yes', exact: true }).click();
})


