import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/login';
//const { default: test } = require("node:test");


test('login test',async({page})=>{

const Login=new LoginPage(page);
await Login.goToLoginPage();
await Login.login('test209','Pass@123');
//login done

//     await page.goto('https://www.mspzvx.com/in/');
//   await page.getByRole('link', { name: 'Login' }).click();
//   await page.locator('input[name="username"]').click();
//   await page.locator('input[name="username"]').fill('test209');
//   await page.locator('input[name="password"]').click();
//   await page.locator('input[name="password"]').fill('Pass@123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByLabel('Sportbook').click();
//   await page.locator('iframe[name="game-launcher-by-url"]').contentFrame().getByPlaceholder('Search League/Event...').click();
//   await page.locator('iframe[name="game-launcher-by-url"]').contentFrame().getByPlaceholder('Search League/Event...').fill('tennis');
//   await page.locator('iframe[name="game-launcher-by-url"]').contentFrame().getByText('There are no search results.').click();



})