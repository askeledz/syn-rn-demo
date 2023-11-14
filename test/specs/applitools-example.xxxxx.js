import { Eyes } from '@applitools/eyes-webdriverio';
import HomeScreen from '../pageobjects/synergy/home.screen'
import { Key } from 'webdriverio'

// Test control inputs to read once and share for all tests
let eyes;
let applitoolsApiKey;
var viewportSize_landscape = { width: 1280, height: 720 }

describe('Synergy-RN Demo', () => {
    it('this is my first mobile test', async () => {
        //Visual testing
        eyes = new Eyes();
        // export APPLITOOLS_API_KEY=MjOrMnxcnwGjx8NyYMHbLj0FBJf9qonDTdiooFSPaxA110
        // applitoolsApiKey = process.env.APPLITOOLS_API_KEY;
        applitoolsApiKey = '0buyNEdVPI9AK7HtNUGw5J3rC107G52ghYdoT9aw6K42E110'
        eyes.setApiKey(applitoolsApiKey);

        // Start the test.
        await eyes.open(driver, "syn-rn-demo", "Appium webdriver.io test!", viewportSize_landscape);

        // Visual checkpoint #1.
        await eyes.checkWindow("Hello!");
        //POM
        await browser.keys([Key.ArrowLeft])
        await browser.keys([Key.ArrowLeft])
        await browser.keys([Key.ArrowDown])
        await driver.pause(3000)
        await driver.keys([Key.ArrowDown])
        await HomeScreen.selectSports()
        await driver.pause(3000)

        // Visual checkpoint #1.
        await eyes.checkWindow("Click!");
        // End visual UI testing. Validate visual correctness.
        await eyes.close();
    })
})
