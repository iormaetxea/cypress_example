const cucumber = require('cypress-cucumber-preprocessor').default;
const cucumberHtmlReporter = require('cucumber-html-reporter');


module.exports = (on, config) => {
    on('file:preprocessor', cucumber());
    // Clean reports folder before each test run
    on('after:run', (results) => {
        const options = {
          theme: 'bootstrap',
          jsonDir: 'cypress/reports/cucumber-json',
          output: 'cypress/reports/cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
        };
        cucumberHtmlReporter.generate(options);
    });
};