import { type Page, type Locator } from "@playwright/test";

/**
 * * Important to remember that all Page Objects should be declared with as a Class Object
 */
class HomePage{

    /**
     * ! Important: define all the properties that you are going to utilize, from the Page Context to Locators
     */
    readonly page: Page
    readonly formFields: Locator

    /**
     * ! Define all locators within the constructor method
     * @param page The page context to initialize all Page Object
     */
    constructor(page:Page){
        this.page = page
        this.formFields = this.page.getByText("Form Fields")
    }

    //Define all your web action methods below the constructor

    async openURL(url:string):Promise<void>{
        await this.page.goto(url);
        
    }

    async clickOnFormFieldsButton():Promise<void>{
        await this.formFields.click();
    }


}

export default HomePage;