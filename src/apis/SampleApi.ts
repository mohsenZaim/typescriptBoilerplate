import configs from "../configs";
import { getJson, jsonTypes } from "./offline/mockSimulator";
import { SampleApis } from "./online/apis";

const getSomethingCall = (id: number) => {
    console.log("API getSomething with id : ", id);
    if (configs.type === "LOCAL") {
        return getJson(jsonTypes.GET_SOMETHING);
    } else {
        const sampleApis = new SampleApis();
        return sampleApis.getSomething(id);
    }
};

class SampleApi {
    static getSomething(id: number): Promise<any> {
        return getSomethingCall(id);
    }
}

export default SampleApi;
