import configs from "../../configs";

// Here are enums of availble jsons
export const enum jsonTypes {
    GET_SOMETHING = "GET_CARD_BRAND",
}

/**
 * This method will return the json data based on their types above
 * @param {jsonTypes} type The type of the JSON file to retrieve
 * @returns {Promise<any>} Promise
 */
export function getJson(type: jsonTypes): Promise<any> {
    let data: any;
    switch (type) {
        case jsonTypes.GET_SOMETHING:
            if (process.env.NODE_ENV !== "production") { data = require("./jsons/sample.json"); }
            return new Promise((resolve, reject) => { simulateData(resolve, data, 200, configs.delay); });
    }
}

function simulateData(resolve: any, data: any, status: number, timeout: number): any {
    return setTimeout(() => { resolve({ status: status, data: data }); }, timeout);
}
