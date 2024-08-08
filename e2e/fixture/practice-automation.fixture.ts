import { test, type Page } from "@playwright/test";
import HomePage from "../page-objects/home.page";
import FormFieldsPage from "../page-objects/form-fields.page";

type PracticeAutomationType = {
    page: Page;
    homePage: HomePage;
    formFieldsPage: FormFieldsPage
    setupPracticeAutomationPageFunction: (pageUrl: string) => Promise<void>;
    enterbasicUserInformationFunction: (name: string, password: string) => Promise<void>;
    selectColorsAndDrinkOptionsFunction: (drinkOption: number, colorOption: number) => Promise<void>;
    enterDropDownOptionFunction: (dropdownOption: string) => Promise<void>;
    typeOnMessageAreaFunction: (message: string) => Promise<void>;
};

const practiceAutomationFixture = test.extend<PracticeAutomationType>({
    setupPracticeAutomationPageFunction: async ({ page }, use) => {
        const setupPracticeAutomationPage = async (pageUrl: string) => {
            const homePage = new HomePage(page);
            await homePage.openURL(pageUrl)
            await homePage.clickOnFormFieldsButton()
        }
        await use(setupPracticeAutomationPage);
    },
    enterbasicUserInformationFunction: async ({ page }, use) => {
        const enterUserBasicInformation = async (name: string, password: string) => {
            const formFieldsPage = new FormFieldsPage(page);
            await formFieldsPage.typeOnNameInput(name);
            await formFieldsPage.typeOnPasswordInput(password);
        };
        await use(enterUserBasicInformation);
    },
    selectColorsAndDrinkOptionsFunction: async ({ page }, use) => {
        const selectColorsAndDrinkOptions = async (drinkOption: number, colorOption: number) => {
            const formFieldsPage = new FormFieldsPage(page);
            await formFieldsPage.selectFavoriteDrink(drinkOption);
            await formFieldsPage.selectFavoriteColor(colorOption);
        };
        await use(selectColorsAndDrinkOptions);
    },
    enterDropDownOptionFunction: async ({ page }, use) => {
        const enterDropDownOption = async (dropdownOption: string) => {
            const formFieldsPage = new FormFieldsPage(page);
            await formFieldsPage.selectAutomationDropdownOption(dropdownOption);
        };
        await use(enterDropDownOption);
    },
    typeOnMessageAreaFunction: async ({ page }, use) => {
        const typeOnMessageArea = async (message: string) => {
            const formFieldsPage = new FormFieldsPage(page);
            await formFieldsPage.typeOnMessageTextArea(message)
        };
        await use(typeOnMessageArea)
    }

});

export { practiceAutomationFixture };
