import axios from "axios";
import configs from "../configs";
import { getJson, jsonTypes } from "./mocks/mockService";

const getDataCall = async () => {
    const requestURL = configs.domain + "data";
    if (configs.type === "LOCAL") {
        return getJson(jsonTypes.SAMPLE);
    } else {
        return axios.get(requestURL);
    }
};

class CommonApis {
    static getData(): Promise<any> {
        return getDataCall();
    }
}

export default CommonApis;
