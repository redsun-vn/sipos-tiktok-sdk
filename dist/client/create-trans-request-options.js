"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransRequestOptionsInterceptor = void 0;
const generate_sign_1 = require("../utils/generate-sign");
const config_1 = require("./config");
const createTransRequestOptionsInterceptor = (client) => async (option) => {
    const clientConfig = client.config;
    const app_key = (clientConfig === null || clientConfig === void 0 ? void 0 : clientConfig.app_key) || config_1.ClientConfiguration.globalConfig.app_key;
    const app_secret = (clientConfig === null || clientConfig === void 0 ? void 0 : clientConfig.app_secret) || config_1.ClientConfiguration.globalConfig.app_secret;
    const timestamp = Math.floor(Date.now() / 1000);
    if (!app_key) {
        throw new Error("app_key is required");
    }
    if (!app_secret) {
        throw new Error("app_secret is required");
    }
    option.qs = Object.assign({ timestamp,
        app_key }, option.qs);
    if (option.qs) {
        const newQs = {};
        for (const key in option.qs) {
            if (Object.prototype.hasOwnProperty.call(option.qs, key)) {
                const element = option.qs[key];
                if (Array.isArray(element)) {
                    newQs[key] = element.join(",");
                }
                else {
                    newQs[key] = element;
                }
            }
        }
        option.qs = newQs;
    }
    option.headers = Object.assign({ "Content-Type": "application/json", 'User-Agent': 'sdk_node/1.0.0' }, option.headers);
    option.qs["sign"] = (0, generate_sign_1.generateSign)(option, app_secret);
    return;
};
exports.createTransRequestOptionsInterceptor = createTransRequestOptionsInterceptor;
