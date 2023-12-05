import HomeScreen from '../pageobjects/synergy/home.screen'
import { Key } from 'webdriverio'

describe('Synergy-RN Demo', () => {
    it('This is my first mobile test', async () => {
        //POM
        await driver.pause(3000)
        await driver.keys([Key.ArrowLeft])
        await HomeScreen.selectHome()
        await HomeScreen.selectMovies()
        await HomeScreen.selectSeries()
        await HomeScreen.selectSettings()
        await driver.pause(3000)
    })
})
