import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import configs from "../../configs";

// This is a sampole of munaually implementing api calls via axios
// This APIs will be auto gen via Swagger Code Gen to sync Backend to Client, in case of implementing Swagger
export class SampleApis {
    protected basePath = configs.baseURL;

    getSomething(id): AxiosPromise {
        const localVarPath = this.basePath + "/getme?something={id}"
            .replace("{" + "id" + "}", String(id));
        const requestOptions: AxiosRequestConfig = {
            method: "get",
            url: localVarPath
        };
        return axios(requestOptions);
    }
}
