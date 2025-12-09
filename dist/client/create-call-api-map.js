"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCallApiMap = void 0;
const api_1 = require("../api");
const createCallApiMap = (basePath, interceptor) => {
    // @ts-ignore
    const callApiMap = {};
    for (const apiClientName in api_1.API_OBJECT) {
        if (Object.prototype.hasOwnProperty.call(api_1.API_OBJECT, apiClientName)) {
            const ApiClient = api_1.API_OBJECT[apiClientName];
            const apiClient = new ApiClient(basePath);
            if (interceptor)
                apiClient.addInterceptor(interceptor);
            //@ts-ignore
            callApiMap[apiClientName] = apiClient;
        }
    }
    return callApiMap;
};
exports.createCallApiMap = createCallApiMap;
