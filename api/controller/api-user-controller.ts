import { APIRequestContext, expect } from "@playwright/test";
import User from "../plain-objects/User";
import dotenv from "dotenv"

dotenv.config()

/**
 * ? CONTROLLER: File to allocate al business logic for the API operations and therefore being utilized on test scripts/fixtures
 */
class UserController {
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async setupHeaders(): Promise<{ [key: string]: string; }> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        return headers;
    }

    async getUserList(): Promise<void> {
        console.log(process.env.API_BASE_URL);
        const users = await this.request.get(`${process.env.API_BASE_URL}/users`,
            {
                headers: await this.setupHeaders()
            }
        );
        expect(users.ok()).toBeTruthy();    
    }
    
    async getSpecificUser(userId: string): Promise<any> {
        const user = await this.request.get(`${process.env.API_BASE_URL}/users/${userId}`,
            {
                headers: await this.setupHeaders()
            }
        );
        return user;
    }
    
    async createUser(user: User): Promise<void> {
        const userCreated = await this.request.post(`${process.env.API_BASE_URL}/user`, {
            data: user,
            headers: await this.setupHeaders()
        });
        expect(userCreated.ok()).toBeTruthy();    
    }

    async updateUser(user: User, userId: string): Promise<any> {
        const userCreated = await this.request.patch(`${process.env.API_BASE_URL}/user/${userId}`, {
            data: user,
            headers: await this.setupHeaders()
        });
        return userCreated;
    }

    async deleteUser(userId: string): Promise<any> {
        const user = await this.request.delete(`${process.env.API_BASE_URL}/users/${userId}`,
            {
                headers: await this.setupHeaders()
            }
        );
        return user;
    }


}

export default UserController;