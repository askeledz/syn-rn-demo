export default class MainMenu {
    /* constructor() {
        this.title = 'My Page'
    } */

    get searchBtn() {
        return $('[content-desc="Search"]')
    }

    get liveBtn() {
        return $('[content-desc="Live"]')
    }

    get homeBtn() {
        return $('[content-desc="Home"]')
    }

    get moviesBtn() {
        return $('[content-desc="Movies"]')
    }


    get seriesBtn() {
        return $('[content-desc="Series"]')
    }

    get settingsBtn() {
        return $('[content-desc="Settings"]')
    }



}