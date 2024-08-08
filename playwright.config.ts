import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    /**
     * ! Defining a base URL for all tests to utilize
     */
    baseURL: 'https://practice-automation.com',
    /**
     * ! Defining a custom testID for easier element location
     */
    testIdAttribute: "data-cy",
    
    launchOptions: {
      /**
       * ! Arguments for the workers to utilize when launched
       */
      args: ["--start-maximized"],
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],

});
