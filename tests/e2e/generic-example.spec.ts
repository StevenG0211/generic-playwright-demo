import { test } from '@playwright/test';
import HomePage from '../../e2e/page-objects/home.page';
import FormFieldsPage from '../../e2e/page-objects/form-fields.page';

/**
 * ? Information: This is how a test is defined, it needs the Test High Order function and the callback
 * Inside the callback you can define all the test interaction
 */
test('AUT-001: Generic Automation Test Script', async ({ page }) => {
  // Creating a New page object passing down the Page context for the Page Model to utilize in on its methods
  const homePage = new HomePage(page);
  const formsPage = new FormFieldsPage(page);
  // ? Utilizing the Page objects as implementation for our test scripts
  await homePage.openURL('/');
  await homePage.clickOnFormFieldsButton();
  await formsPage.typeOnNameInput("Test");
  await formsPage.typeOnPasswordInput("Test");
  await formsPage.selectFavoriteDrink(1);
  await formsPage.selectFavoriteColor(2);
  await formsPage.selectAutomationDropdownOption("Yes");
  await formsPage.typeOnMessageTextArea("Test message");
});