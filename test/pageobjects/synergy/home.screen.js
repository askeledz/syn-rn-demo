import MainMenu from "./main.menu";

class HomeScreen extends MainMenu{
    async selectSports () {
        await super.sportsBtn.click()
    }
}

//module.exports = new LeftSideMenu()
export default new HomeScreen();