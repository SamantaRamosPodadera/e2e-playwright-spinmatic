import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from 'playwright/test';


Given('I navigate to main page', async function () {

  await this.page.goto(this.URL); 
  
  
  



});

Given('I navigate to spinmatic homepage', async function () {
  await this.page.goto(this.URL); 
})

Given('I select games menu', async function ()  {
  await this.page.getByRole('link', { name: 'Games', exact: true }).click();
})

Given('I open plinky plinko game', async function ()  {
  await this.page.getByTitle('Plinky Plinko').click();
})

Then('I can play plinky plinko game', async function ()  {
  await this.page.getByRole('button', { name: 'Play now' }).click();
  const page1Promise = this.page.waitForEvent('popup');
  await this.page.getByRole('button', { name: 'Yes' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'PLAY Hold & Drop' }).click();
  
  await expect(page1.getByText('PL_TOTAL_WIN')).toBeVisible({timeout: 15000});
})


