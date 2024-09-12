# generic-playwright-demo
Repository to hold a template for all QA Team members to utilize in any new upcoming project

## Introduction
This project holds different types of playwright implementations and design patterns for us to create
any automation solution and divide appropriately our tests

For starters, the repository has the following structure:

```
api
|--controller
    |--- api-user-controller.ts
|--fixture
    |---user-api-fixture.ts
|--plain-objects
    |---User.ts

constants
    |---constants.json

e2e
    |---fixture
        |---practice-automation.fixture.ts
    |---page-objects
        |---form-fields.page.ts
        |---home.page.ts

tests
    |---api-tests
    |---e2e

```

### API and E2E folders

This project has been divided at the moment into two types of testing:

- API Testing
- End To End Testing

Each folder has a different implementation, giving you the developer the option of implement your automation solution using some ***fixtures*** or some ***Rest assured methods and assertions***

#### NPM Scripts
For us to run the automation solution we can use some custom NPM scripts on the terminal, each test script will perform different actions and execute a different set of specs

```
test:e2e - Run the e2e folder for the generic test spec

test:fixture - Run the e2e folder for the generic test spec with fixture

test:api - Run the api folder spec

test:api-fixture - Run the api folder spec with a fixture

test - Run all the test specs

reports - Run the reports for Playwright
```

