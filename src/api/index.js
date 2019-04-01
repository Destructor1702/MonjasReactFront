const apiURL = "https://mongas.norman404.dev";

class Api {
    constructor(baseUrl) {
        this.apiURL = baseUrl;
    }

    buildRequestUrl = (urlString, params) => {
        return new URL(`${this.apiURL}${urlString}/${Object.keys(params).map(key => params[key]).join("/")}`);
    };

    // --------------------------------------- functions  ---------------------------------------

    getTeamList = async () => {
        const params = {};
        const config = {method: 'GET'};
        const request = await fetch(this.buildRequestUrl('/user', params).toString(), config);
        if (request.status > 399) {
            throw new Error(request.status.toString());
        }
        return request.json();
    };

    getCategories = async () => {
        const params = {};
        const config = {method: 'GET'};
        const request = await fetch(this.buildRequestUrl('/categoria', params).toString(), config);
        if (request.status > 399) {
            throw new Error(request.status.toString());
        }
        return request.json();
    };

    getEventInfo = async (uuid = {}) => {
        const params = uuid;
        const config = {method: 'GET'};
        const request = await fetch(this.buildRequestUrl('/evento', params).toString(), config);
        if (request.status > 399) {
            throw new Error(request.status.toString());
        }
        return request.json();
    };

    getGameInfo = async (game = {}) => {
        const params = game;
        const config = {method: 'GET'};
        const request = await fetch(this.buildRequestUrl('/juego', params).toString(), config);
        if (request.status > 399) {
            throw new Error(request.status.toString());
        }
        return request.json();
    };

}


export default new Api(apiURL);