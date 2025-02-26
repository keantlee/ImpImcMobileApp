const API_LOCAL_ACCESS  = ``; // input here your computer IP or backend IP with Port
const API_DEV_ACCESS    = ``;
const API_PROD_ACCESS   = ``;

const Config = {
    /** 
     *  Note: Before building the Application. You need to choose whether Built it for Development or Production..
     *  [0] => Local Environment (e.g: APP_MODE:0)
     *  [1] => Development Environments (e.g: APP_MODE:1)
     *  [2] => Production Environments (e.g: APP_MODE:2)
    */
    APP_MODE:0,
    LOCAL:{
        API_HOST: `${API_LOCAL_ACCESS}`,
        API_ACCESS_POINT: `${API_LOCAL_ACCESS}`,
    },
    DEVELOPMENT:{
        API_HOST: `${API_DEV_ACCESS}`,
        API_ACCESS_POINT: `${API_DEV_ACCESS}`,
    },
    PRODUCTION:{
        API_HOST: `${API_PROD_ACCESS}`,
        API_ACCESS_POINT: `${API_PROD_ACCESS}`,
    }
};

export default function getBaseUrl() {
    let config = {
        apihost:'',
        accesspoint:'',
    };

    switch (Config.APP_MODE) {
        case 0:
            config = {
                ...config,
                apihost: Config.LOCAL.API_HOST,
                accesspoint: Config.LOCAL.API_ACCESS_POINT,
            };
            return config;
        case 1:
            config = {
                ...config,
                apihost: Config.DEVELOPMENT.API_HOST,
                accesspoint: Config.DEVELOPMENT.API_ACCESS_POINT,
            };
            return config;
        case 2:
            config = {
                ...config,
                apihost: Config.DEVELOPMENT.API_HOST,
                accesspoint: Config.DEVELOPMENT.API_ACCESS_POINT,
            };
            return config;
        default:
          return console.warn('Error on application connection configuration!');
    }
}

