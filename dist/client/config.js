"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientConfiguration = void 0;
class GlobalClientConfiguration {
}
class ClientConfiguration {
    constructor(app_key, app_secret, basePath) {
        this.app_key = app_key;
        this.app_secret = app_secret;
        this.basePath = basePath;
    }
    static createConfig() {
        const client = new ClientConfiguration();
        const configObject = {
            setAppKey(app_key) {
                client.app_key = app_key;
                return configObject;
            },
            setAppSecret(app_secret) {
                client.app_secret = app_secret;
                return configObject;
            },
            setBasePath(basePath) {
                client.basePath = basePath;
                return configObject;
            },
            build() {
                return client;
            },
        };
        return configObject;
    }
}
exports.ClientConfiguration = ClientConfiguration;
ClientConfiguration.globalConfig = GlobalClientConfiguration;
