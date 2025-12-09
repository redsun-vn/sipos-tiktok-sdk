import { API_OPERATION_TYPE_MAP } from "../api";
import { ClientConfiguration } from "./config";
export declare class TikTokShopNodeApiClient {
    readonly config?: ClientConfiguration;
    readonly api: API_OPERATION_TYPE_MAP;
    constructor({ config }: {
        config?: ClientConfiguration;
    });
}
