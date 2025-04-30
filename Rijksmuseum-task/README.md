# Rijksmuseum-task

## Before installing cypress make sure that:

Node.js is installed (v 20 or higher), link:"https://nodejs.org/en/";

Git is installed, link:"https://git-scm.com/downloads";

Clone this repository;

## Installing dependencies

   First of all, in order to run these tests you need to install dependencies. You can
   do it by using npm:
```bash
npm install
```

## Environment set up
  
   Before test cases execution, please, create  the '.env' file on the root level and set the api key parameter as in the '.env.example' file.

## Run tests

   Now, you can run the cypress tests in the headed mode with this command: 
```bash
npm run cypress:open
```

   And, you can run the cypress tests in the headless mode with this command: 
```bash
npm run cypress:run
```

The report will be automatically generated after the tests execution in headless mode within this directory: cypress/reports/mochawesome