import HomeScreen from '../pageobjects/synergy/home.screen'
import { Key } from 'webdriverio'

describe('Synergy-RN Demo', () => {
    it('This is my first mobile test', async () => {
        //POM
        await browser.keys([Key.ArrowLeft])
        await browser.keys([Key.ArrowLeft])
        await browser.keys([Key.ArrowDown])
        await driver.pause(3000)
        await driver.keys([Key.ArrowDown])
        await HomeScreen.selectSports()
        await driver.pause(3000)
    })
})
