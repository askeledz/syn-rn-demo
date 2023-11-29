import MainMenu from "./main.menu";

class HomeScreen extends MainMenu{
    async selectSearch () {
        await super.searchBtn.click()
    }
    async selectLive () {
        await super.liveBtn.click()
    }
    async selectHome () {
        await super.homeBtn.click()
    }
    async selectMovies () {
        await super.moviesBtn.click()
    }
    async selectSeries () {
        await super.seriesBtn.click()
    }
    async selectSettings () {
        await super.settingsBtn.click()
    }
}

//module.exports = new LeftSideMenu()
export default new HomeScreen();