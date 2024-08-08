import { type Page, type Locator } from "@playwright/test"


class FormFieldsPage {

    readonly page: Page
    readonly nameInput: Locator
    readonly passwordInput: Locator
    readonly automationDropdownElement: Locator
    readonly emailInput: Locator
    readonly messageInput: Locator

    constructor(page: Page) {
        this.page = page
        this.nameInput = this.page.getByTestId("name-input")
        this.passwordInput = this.page.locator("input[type='password']")
        this.automationDropdownElement = this.page.getByTestId("automation")
        this.emailInput = this.page.getByTestId("email")
        this.messageInput = this.page.getByTestId("message")
    }

    async typeOnNameInput(name: string): Promise<void> {
        await this.nameInput.fill(name);
    }

    async typeOnPasswordInput(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async selectFavoriteDrink(drinkOption: number): Promise<void> {
        await this.page.getByTestId(`drink${drinkOption}`).check();
    }

    async selectFavoriteColor(colorOption: number): Promise<void> {
        await this.page.getByTestId(`color${colorOption}`).check();
    }

    async selectAutomationDropdownOption(option: string): Promise<void> {
        await this.automationDropdownElement.selectOption(option);
    }

    async typeOnMessageTextArea(message: string): Promise<void> {
        await this.messageInput.fill(message);
    }


}

export default FormFieldsPage