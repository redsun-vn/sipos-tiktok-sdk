"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokShopNodeApiClient = void 0;
const create_api_instance_1 = require("./create-api-instance");
class TikTokShopNodeApiClient {
    constructor({ config }) {
        this.config = config;
        const { api } = (0, create_api_instance_1.createApiInstance)(this);
        this.api = api;
    }
}
exports.TikTokShopNodeApiClient = TikTokShopNodeApiClient;
