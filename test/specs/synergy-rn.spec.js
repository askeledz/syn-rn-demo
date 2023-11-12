import { Eyes } from '@applitools/eyes-webdriverio';
import HomeScreen from '../pageobjects/synergy/home.screen'

// Test control inputs to read once and share for all tests
let eyes;
let applitoolsApiKey;
var viewportSize_landscape = { width: 1280, height: 720 }

describe('Sample test', () => {
    it('this is my first mobile test', async () => {
        //Visual testing
        eyes = new Eyes();
        // export APPLITOOLS_API_KEY=MjOrMnxcnwGjx8NyYMHbLj0FBJf9qonDTdiooFSPaxA110
        // applitoolsApiKey = process.env.APPLITOOLS_API_KEY;
        applitoolsApiKey = 'MjOrMnxcnwGjx8NyYMHbLj0FBJf9qonDTdiooFSPaxA110'
        eyes.setApiKey(applitoolsApiKey);

        // Start the test.
        await eyes.open(driver, "syn-rn-demo", "Appium webdriver.io test!", viewportSize_landscape);

        // Visual checkpoint #1.
        await eyes.checkWindow("Hello!");
        //POM
        await HomeScreen.selectSports()

        // Visual checkpoint #1.
        await eyes.checkWindow("Click!");
        // End visual UI testing. Validate visual correctness.
        await eyes.close();
    })
})
