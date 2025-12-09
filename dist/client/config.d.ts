declare class GlobalClientConfiguration {
    static app_key?: string;
    static app_secret?: string;
    static basePath?: string;
}
declare class ClientConfiguration {
    app_key?: string;
    app_secret?: string;
    basePath?: string;
    static globalConfig: typeof GlobalClientConfiguration;
    constructor(app_key?: string, app_secret?: string, basePath?: string);
    static createConfig(): {
        setAppKey(app_key: string): any;
        setAppSecret(app_secret: string): any;
        setBasePath(basePath: string): any;
        build(): ClientConfiguration;
    };
}
export { ClientConfiguration };
