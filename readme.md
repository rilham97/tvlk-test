# Car Rental Automation Tests

This project contains automated tests for a car rental service website. The tests are written using Selenium WebDriver for browser automation, Mocha as the test framework, and Chai for assertions. These tests automate the process of selecting a car rental product, choosing pick-up and drop-off locations and times, and proceeding through the booking process.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the tests, ensure you have Node.js installed on your machine. You can download Node.js from https://nodejs.org/.

This project also requires a Selenium WebDriver compatible browser driver. For Chrome, you can download the ChromeDriver from https://sites.google.com/a/chromium.org/chromedriver/. Make sure it's placed in a directory included in your system's PATH, or specify its location in your test configuration.

### Installing

First, clone the repository to your local machine:

```git clone <repository-url>```

Navigate to the project directory:

```cd path/to/project```

Install the required Node.js packages:

```npm install```

### Running the Tests

To run the automated tests, execute the following command in the terminal:

```npx mocha 'test/carRentalTest.js'```

This command will start the Mocha test runner and execute the tests defined in test/carRentalTest.js.

## Built With

- Selenium WebDriver - The browser automation framework used
- Mocha - The JavaScript test framework
- Chai - The assertion library

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- Ilham Raamdhan - Initial work - YourGitHub

See also the list of contributors who participated in this project.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details