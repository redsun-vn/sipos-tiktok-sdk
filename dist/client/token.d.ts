import { ClientConfiguration } from "./config";
import localVarRequest from "request";
export type AccessTokenProps = {
    access_token: string;
    refresh_token?: string;
    config?: ClientConfiguration;
};
export declare enum UserType {
    Seller = 0,
    Creator = 1
}
export type BaseResponse<T> = {
    /**
     * The success or failure status code returned in API response.
     */
    code?: number;
    data?: T;
    /**
     * The success or failure messages returned in API response. Reasons of failure will be described in the message.
     */
    message?: string;
    /**
     * Request log.
     */
    requestId?: string;
};
export type TokenResponse = {
    /**
     * @description User access token needed to make calls to TikTok Shop Open API endpoints
     */
    access_token: string;
    /**
     * @description Expiration timestamp for access token, with default expiration time set to seven days. The Unix timestamp represents the date and time the access token will expire.
     */
    access_token_expire_in?: number;
    /**
     * @description A token to refresh the access token
     */
    refresh_token: string;
    /**
     * @description Expiration timestamp for refresh token. The Unix timestamp represents the date and time the refresh token will expire.
     */
    refresh_token_expire_in?: number;
    /**
     * @description The ID to help you identify a TikTok Shop seller in your platform
     */
    open_id?: string;
    /**
     * @description The name of the seller you are authorizing for your app
     */
    seller_name?: string;
    /**
     * @description The region where the seller is based
     */
    seller_base_region?: string;
    /**
     * @description Type of user, with possible values:
     * @enum 0 Seller
     * @enum 1 Creator
     */
    user_type?: UserType;
    /**
     * @description ID to track the API request
     */
    request_id?: string;
};
declare class AccessToken {
    access_token: string;
    refresh_token?: string;
    config?: ClientConfiguration;
    constructor({ access_token, refresh_token, config }: AccessTokenProps);
    refreshToken(props: {
        refresh_token?: string;
        auto_filled?: boolean;
    }): Promise<{
        response: localVarRequest.Response;
        body: BaseResponse<TokenResponse>;
    }>;
    getAccessToken(props: {
        auth_code: string;
        auto_filled?: boolean;
    }): Promise<{
        response: localVarRequest.Response;
        body: BaseResponse<TokenResponse>;
    }>;
}
declare class AccessTokenBuilder {
    static build(access_token: string, refresh_token?: string, config?: ClientConfiguration): AccessToken;
}
declare class AccessTokenTool {
    static refreshToken(refresh_token: string, app_key?: string, app_secret?: string): Promise<{
        response: localVarRequest.Response;
        body: BaseResponse<TokenResponse>;
    }>;
    static getAccessToken(auth_code: string, app_key?: string, app_secret?: string): Promise<{
        response: localVarRequest.Response;
        body: BaseResponse<TokenResponse>;
    }>;
}
export { AccessTokenBuilder, AccessTokenTool, AccessToken };
