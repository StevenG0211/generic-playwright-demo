import { test as base } from '@playwright/test'
import UserController from '../controller/api-user-controller'
import User from '../plain-objects/User';


type APIFunctionCreation = {
    getUserList: () => Promise<void>;
    createUser: (name:string,job:string) => Promise<void>;
}

const test = base.extend<APIFunctionCreation>({
    getUserList: async ({ request }, use) => {
        const userAPIContext = new UserController(request);

        const getUserListAction = async () => {
            await userAPIContext.getUserList()
        };
        use(getUserListAction)
    },

    createUser: async ({ request }, use) => {
        const userAPIContext = new UserController(request);

        const createUserAction = async (name:string,job:string) => {
            await userAPIContext.createUser(new User(name, job));
        }
        use(createUserAction);
    }
});

export { test };