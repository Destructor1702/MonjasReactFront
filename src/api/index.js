const apiURL = "https://api-sda.asd.net";

class Api {
    constructor(baseUrl) {
        this.apiURL = baseUrl;
    }


    exmple = async (entry) => {
        const params = {entry};
        const config = {method: 'GET'};
        const request = await fetch(this.buildRequestUrl('/funcName', params).toString(), config);
        if (request.status > 399) {
            throw new Error(request.status.toString());
        }
        return request.json();
    };

}


export default new Api(apiURL);