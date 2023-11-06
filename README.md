# CYPRESS PROJECT EXAMPLE

This project contains end-to-end tests for the Demoblaze Exercises using Cypress and Cypress integrated with Cucumber.

## How it is Organized

The repository is organized as follows:

- The `e2e` folder contains the tests for each exercise:
    - `cypress`: Contains tests written using Cypress.
    - `cucumber`: Contains BDD tests written in Cypress with Cucumber, utilizing the `cypress-cucumber-preprocessor` plugin.
        - `features`: Contains feature files, written in Gherkin, with the test scenarios.
        - `features/step_definitions`: Contains the code for the steps defined in the Gherkin scenarios.

- The `reports` folder: Stores the execution reports.

- The `cypress.env.json` file: Contains environment-specific data such as names, card numbers, URLs, etc.

- The `cypress.config.js` file: Sets the options for the test execution. It includes:
    - `cypress.config.js.cypress`: Configuration for the test execution using Cypress.
    - `cypress.config.js.cucumber`: Configuration for the test execution using Cypress with Cucumber.

- The `package.json` file: Contains the scripts defined for test execution:
    - `test:cypress`: Runs the Cypress test specs.
    - `test:cucumber`: Runs the Cypress with Cucumber test specs.
    - `test:report`: Generates the reports for the plain Cypress execution.

Make sure to follow this folder structure and naming conventions to maintain consistency in the project organization.

## Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Setup

1. Clone the repository:
   `git clone https://github.com/iormaetxea/cypress_example.git`

2. Install the dependencies:
    `npm install`

## Test Execution

### Cypress Tests
To run all Cypress tests, use the following command:  
`npm run test:cypress`

To run a specific Cypress test file, use the --spec option:  
`cp cypress.config.js.cypress cypress.config.js`  
`npx cypress run --spec <path/to/spec/file>`

### Cypress HTML Report
To generate an HTML report for the Cypress test execution, use the following command:  
`npm run test:report`

This command will generate an HTML report named cypress_report.html and store it in the ***`reports/`*** directory.

### Cypress with Cucumber Tests
To run all Cypress+Cucumber tests and generate an HTML report, use the following command:  
`npm run test:cucumber`

This command will execute all Cypress+Cucumber tests and generate an HTML report named cucumber_report.html in the ***`reports/`*** directory.

To run a specific Cucumber feature file, use the --spec option:  
`cp cypress.config.js.cucumber cypress.config.js`  
`npx cypress run --spec <path/to/feature/file>`

### Cypress Test Runner
To open the Cypress Test Runner with Cypress+Cucumber tests, run the following command:  
`npm run cucumber:open`

This command will launch the Cypress Test Runner for the specified tests. Test specifications and also features can interactively be run and debugged using the Cypress Test Runner interface.

### Browser Selection

By default, Cypress will use the Electron browser for test execution. It is possible to use a different browser, specifying it in the Cypress configuration file (cypress.config.js). 

To run the tests from the command line in a specific browser, use the --browser option followed by the browser name. For example, to run the tests in Chrome:
Supported browser options are:

- electron (default)
- chrome
- firefox
