import { practiceAutomationFixture as test } from "../../e2e/fixture/practice-automation.fixture";

test('AUT-002: Generic test example with Fixtures - Go to Forms Page', async ({
    setupPracticeAutomationPageFunction,
    enterbasicUserInformationFunction,
    selectColorsAndDrinkOptionsFunction,
    enterDropDownOptionFunction,
    typeOnMessageAreaFunction }) => {

    await setupPracticeAutomationPageFunction("/");
    await enterbasicUserInformationFunction("Test", "Password");
    await selectColorsAndDrinkOptionsFunction(1, 2);
    await enterDropDownOptionFunction("Yes");
    await typeOnMessageAreaFunction("Test message");
})
