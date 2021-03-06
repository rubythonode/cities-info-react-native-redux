class ImagesLoader {
    constructor() {
        //INIT PROPS
        this.weatherIcons = {};
        //Load Images
        this.loadWeatherIcons();
    }

    loadWeatherIcons(){
        const icon1 = require('../assets/images/weatherIcons/1.png');
        const icon2 = require('../assets/images/weatherIcons/2.png');
        const icon3 = require('../assets/images/weatherIcons/3.png');
        const icon4 = require('../assets/images/weatherIcons/4.png');
        const icon5 = require('../assets/images/weatherIcons/5.png');
        const icon6 = require('../assets/images/weatherIcons/6.png');
        const icon7 = require('../assets/images/weatherIcons/7.png');
        const icon8 = require('../assets/images/weatherIcons/8.png');
        const icon11 = require('../assets/images/weatherIcons/11.png');
        const icon12 = require('../assets/images/weatherIcons/12.png');
        const icon13 = require('../assets/images/weatherIcons/13.png');
        const icon14 = require('../assets/images/weatherIcons/14.png');
        const icon15 = require('../assets/images/weatherIcons/15.png');
        const icon16 = require('../assets/images/weatherIcons/16.png');
        const icon17 = require('../assets/images/weatherIcons/17.png');
        const icon18 = require('../assets/images/weatherIcons/18.png');
        const icon19 = require('../assets/images/weatherIcons/19.png');
        const icon20 = require('../assets/images/weatherIcons/20.png');
        const icon21 = require('../assets/images/weatherIcons/21.png');
        const icon22 = require('../assets/images/weatherIcons/22.png');
        const icon23 = require('../assets/images/weatherIcons/23.png');
        const icon24 = require('../assets/images/weatherIcons/24.png');
        const icon25 = require('../assets/images/weatherIcons/25.png');
        const icon26 = require('../assets/images/weatherIcons/26.png');
        const icon29 = require('../assets/images/weatherIcons/29.png');
        const icon30 = require('../assets/images/weatherIcons/30.png');
        const icon31 = require('../assets/images/weatherIcons/31.png');
        const icon32 = require('../assets/images/weatherIcons/32.png');
        const icon33 = require('../assets/images/weatherIcons/33.png');
        const icon34 = require('../assets/images/weatherIcons/34.png');
        const icon35 = require('../assets/images/weatherIcons/35.png');
        const icon36 = require('../assets/images/weatherIcons/36.png');
        const icon37 = require('../assets/images/weatherIcons/37.png');
        const icon38 = require('../assets/images/weatherIcons/38.png');
        const icon39 = require('../assets/images/weatherIcons/39.png');
        const icon40 = require('../assets/images/weatherIcons/40.png');
        const icon41 = require('../assets/images/weatherIcons/41.png');
        const icon42 = require('../assets/images/weatherIcons/42.png');
        const icon43 = require('../assets/images/weatherIcons/43.png');
        const icon44 = require('../assets/images/weatherIcons/44.png');

        this.weatherIcons = {
            icon1,
            icon2,
            icon3,
            icon4,
            icon5,
            icon6,
            icon7,
            icon8,
            icon11,
            icon12,
            icon13,
            icon14,
            icon15,
            icon16,
            icon17,
            icon18,
            icon19,
            icon20,
            icon21,
            icon22,
            icon23,
            icon24,
            icon25,
            icon26,
            icon29,
            icon30,
            icon31,
            icon32,
            icon33,
            icon34,
            icon35,
            icon36,
            icon37,
            icon38,
            icon39,
            icon40,
            icon41,
            icon42,
            icon43,
            icon44,
        }
    }
}

export default new ImagesLoader();
