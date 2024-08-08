import { expect } from '@playwright/test';
import User from '../../api/plain-objects/User'
import constants from '../../constants/constants.json';
import { test } from '@playwright/test';
import UserController from '../../api/controller/api-user-controller'
test.describe('API Functional tests', () => {

    test('API-002: Retrieve specific User by ID', async ({ request }) => {
        const userAPI = new UserController(request)
        const user = await userAPI.getSpecificUser("2");
        expect(user.ok()).toBeTruthy();
    });

    test('API-004: Update User', async ({ request }) => {
        const userAPI = new UserController(request);
        const user = await userAPI.updateUser(new User(constants.userData.testName, constants.userData.testJob), "2");
        expect(user.ok()).toBeTruthy();
    });

    test('API-005: Delete User', async ({ request }) => {
        const userAPI = new UserController(request);
        const user = await userAPI.deleteUser("2");
        expect(user.ok()).toBeTruthy();
    });
});



