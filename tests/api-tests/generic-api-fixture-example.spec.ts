import constants from '../../constants/constants.json';
import {test} from '../../api/fixture/user-api.fixture';

test.describe('API Functional tests', () => {

    test('API-001: Retrieve all Users', async ({ getUserList }) => {
        await getUserList()
    });

    test('API-003: Create User', async ({ createUser }) => {
        await createUser(constants.userData.testName, constants.userData.testJob);
    });

});



