/// <reference types="node" />
export * from './analyticsV202405Api';
import { AnalyticsV202405Api, AnalyticsV202405ApiOperationTypes } from './analyticsV202405Api';
export * from './analyticsV202406Api';
import { AnalyticsV202406Api, AnalyticsV202406ApiOperationTypes } from './analyticsV202406Api';
export * from './analyticsV202409Api';
import { AnalyticsV202409Api, AnalyticsV202409ApiOperationTypes } from './analyticsV202409Api';
export * from './analyticsV202508Api';
import { AnalyticsV202508Api, AnalyticsV202508ApiOperationTypes } from './analyticsV202508Api';
export * from './authorizationV202309Api';
import { AuthorizationV202309Api, AuthorizationV202309ApiOperationTypes } from './authorizationV202309Api';
export * from './authorizationV202312Api';
import { AuthorizationV202312Api, AuthorizationV202312ApiOperationTypes } from './authorizationV202312Api';
export * from './authorizationV202401Api';
import { AuthorizationV202401Api, AuthorizationV202401ApiOperationTypes } from './authorizationV202401Api';
export * from './authorizationV202403Api';
import { AuthorizationV202403Api, AuthorizationV202403ApiOperationTypes } from './authorizationV202403Api';
export * from './customerServiceV202309Api';
import { CustomerServiceV202309Api, CustomerServiceV202309ApiOperationTypes } from './customerServiceV202309Api';
export * from './customerServiceV202407Api';
import { CustomerServiceV202407Api, CustomerServiceV202407ApiOperationTypes } from './customerServiceV202407Api';
export * from './dataReconciliationV202309Api';
import { DataReconciliationV202309Api, DataReconciliationV202309ApiOperationTypes } from './dataReconciliationV202309Api';
export * from './dataReconciliationV202310Api';
import { DataReconciliationV202310Api, DataReconciliationV202310ApiOperationTypes } from './dataReconciliationV202310Api';
export * from './dataReconciliationV202401Api';
import { DataReconciliationV202401Api, DataReconciliationV202401ApiOperationTypes } from './dataReconciliationV202401Api';
export * from './eventV202309Api';
import { EventV202309Api, EventV202309ApiOperationTypes } from './eventV202309Api';
export * from './financeV202309Api';
import { FinanceV202309Api, FinanceV202309ApiOperationTypes } from './financeV202309Api';
export * from './financeV202501Api';
import { FinanceV202501Api, FinanceV202501ApiOperationTypes } from './financeV202501Api';
export * from './financeV202507Api';
import { FinanceV202507Api, FinanceV202507ApiOperationTypes } from './financeV202507Api';
export * from './fulfillmentV202309Api';
import { FulfillmentV202309Api, FulfillmentV202309ApiOperationTypes } from './fulfillmentV202309Api';
export * from './fulfillmentV202407Api';
import { FulfillmentV202407Api, FulfillmentV202407ApiOperationTypes } from './fulfillmentV202407Api';
export * from './fulfillmentV202502Api';
import { FulfillmentV202502Api, FulfillmentV202502ApiOperationTypes } from './fulfillmentV202502Api';
export * from './fulfillmentV202508Api';
import { FulfillmentV202508Api, FulfillmentV202508ApiOperationTypes } from './fulfillmentV202508Api';
export * from './fulfillmentV202510Api';
import { FulfillmentV202510Api, FulfillmentV202510ApiOperationTypes } from './fulfillmentV202510Api';
export * from './logisticsV202309Api';
import { LogisticsV202309Api, LogisticsV202309ApiOperationTypes } from './logisticsV202309Api';
export * from './logisticsV202510Api';
import { LogisticsV202510Api, LogisticsV202510ApiOperationTypes } from './logisticsV202510Api';
export * from './orderV202309Api';
import { OrderV202309Api, OrderV202309ApiOperationTypes } from './orderV202309Api';
export * from './orderV202407Api';
import { OrderV202407Api, OrderV202407ApiOperationTypes } from './orderV202407Api';
export * from './orderV202507Api';
import { OrderV202507Api, OrderV202507ApiOperationTypes } from './orderV202507Api';
export * from './productV202309Api';
import { ProductV202309Api, ProductV202309ApiOperationTypes } from './productV202309Api';
export * from './productV202312Api';
import { ProductV202312Api, ProductV202312ApiOperationTypes } from './productV202312Api';
export * from './productV202401Api';
import { ProductV202401Api, ProductV202401ApiOperationTypes } from './productV202401Api';
export * from './productV202404Api';
import { ProductV202404Api, ProductV202404ApiOperationTypes } from './productV202404Api';
export * from './productV202405Api';
import { ProductV202405Api, ProductV202405ApiOperationTypes } from './productV202405Api';
export * from './productV202407Api';
import { ProductV202407Api, ProductV202407ApiOperationTypes } from './productV202407Api';
export * from './productV202409Api';
import { ProductV202409Api, ProductV202409ApiOperationTypes } from './productV202409Api';
export * from './productV202411Api';
import { ProductV202411Api, ProductV202411ApiOperationTypes } from './productV202411Api';
export * from './productV202501Api';
import { ProductV202501Api, ProductV202501ApiOperationTypes } from './productV202501Api';
export * from './productV202502Api';
import { ProductV202502Api, ProductV202502ApiOperationTypes } from './productV202502Api';
export * from './productV202505Api';
import { ProductV202505Api, ProductV202505ApiOperationTypes } from './productV202505Api';
export * from './productV202506Api';
import { ProductV202506Api, ProductV202506ApiOperationTypes } from './productV202506Api';
export * from './productV202507Api';
import { ProductV202507Api, ProductV202507ApiOperationTypes } from './productV202507Api';
export * from './productV202509Api';
import { ProductV202509Api, ProductV202509ApiOperationTypes } from './productV202509Api';
export * from './promotionV202309Api';
import { PromotionV202309Api, PromotionV202309ApiOperationTypes } from './promotionV202309Api';
export * from './promotionV202406Api';
import { PromotionV202406Api, PromotionV202406ApiOperationTypes } from './promotionV202406Api';
export * from './returnRefundV202309Api';
import { ReturnRefundV202309Api, ReturnRefundV202309ApiOperationTypes } from './returnRefundV202309Api';
export * from './sellerV202309Api';
import { SellerV202309Api, SellerV202309ApiOperationTypes } from './sellerV202309Api';
export * from './supplyChainV202309Api';
import { SupplyChainV202309Api, SupplyChainV202309ApiOperationTypes } from './supplyChainV202309Api';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export { RequestFile } from '../model/models';
export declare const APIS: (typeof AnalyticsV202405Api | typeof AnalyticsV202406Api | typeof AnalyticsV202409Api | typeof AnalyticsV202508Api | typeof AuthorizationV202309Api | typeof AuthorizationV202312Api | typeof AuthorizationV202401Api | typeof AuthorizationV202403Api | typeof CustomerServiceV202309Api | typeof CustomerServiceV202407Api | typeof DataReconciliationV202309Api | typeof DataReconciliationV202310Api | typeof DataReconciliationV202401Api | typeof EventV202309Api | typeof FinanceV202309Api | typeof FinanceV202501Api | typeof FinanceV202507Api | typeof FulfillmentV202309Api | typeof FulfillmentV202407Api | typeof FulfillmentV202502Api | typeof FulfillmentV202508Api | typeof FulfillmentV202510Api | typeof LogisticsV202309Api | typeof LogisticsV202510Api | typeof OrderV202309Api | typeof OrderV202407Api | typeof OrderV202507Api | typeof ProductV202309Api | typeof ProductV202312Api | typeof ProductV202401Api | typeof ProductV202404Api | typeof ProductV202405Api | typeof ProductV202407Api | typeof ProductV202409Api | typeof ProductV202411Api | typeof ProductV202501Api | typeof ProductV202502Api | typeof ProductV202505Api | typeof ProductV202506Api | typeof ProductV202507Api | typeof ProductV202509Api | typeof PromotionV202309Api | typeof PromotionV202406Api | typeof ReturnRefundV202309Api | typeof SellerV202309Api | typeof SupplyChainV202309Api)[];
export declare enum API_ENUM {
    AnalyticsV202405Api = "AnalyticsV202405Api",
    AnalyticsV202406Api = "AnalyticsV202406Api",
    AnalyticsV202409Api = "AnalyticsV202409Api",
    AnalyticsV202508Api = "AnalyticsV202508Api",
    AuthorizationV202309Api = "AuthorizationV202309Api",
    AuthorizationV202312Api = "AuthorizationV202312Api",
    AuthorizationV202401Api = "AuthorizationV202401Api",
    AuthorizationV202403Api = "AuthorizationV202403Api",
    CustomerServiceV202309Api = "CustomerServiceV202309Api",
    CustomerServiceV202407Api = "CustomerServiceV202407Api",
    DataReconciliationV202309Api = "DataReconciliationV202309Api",
    DataReconciliationV202310Api = "DataReconciliationV202310Api",
    DataReconciliationV202401Api = "DataReconciliationV202401Api",
    EventV202309Api = "EventV202309Api",
    FinanceV202309Api = "FinanceV202309Api",
    FinanceV202501Api = "FinanceV202501Api",
    FinanceV202507Api = "FinanceV202507Api",
    FulfillmentV202309Api = "FulfillmentV202309Api",
    FulfillmentV202407Api = "FulfillmentV202407Api",
    FulfillmentV202502Api = "FulfillmentV202502Api",
    FulfillmentV202508Api = "FulfillmentV202508Api",
    FulfillmentV202510Api = "FulfillmentV202510Api",
    LogisticsV202309Api = "LogisticsV202309Api",
    LogisticsV202510Api = "LogisticsV202510Api",
    OrderV202309Api = "OrderV202309Api",
    OrderV202407Api = "OrderV202407Api",
    OrderV202507Api = "OrderV202507Api",
    ProductV202309Api = "ProductV202309Api",
    ProductV202312Api = "ProductV202312Api",
    ProductV202401Api = "ProductV202401Api",
    ProductV202404Api = "ProductV202404Api",
    ProductV202405Api = "ProductV202405Api",
    ProductV202407Api = "ProductV202407Api",
    ProductV202409Api = "ProductV202409Api",
    ProductV202411Api = "ProductV202411Api",
    ProductV202501Api = "ProductV202501Api",
    ProductV202502Api = "ProductV202502Api",
    ProductV202505Api = "ProductV202505Api",
    ProductV202506Api = "ProductV202506Api",
    ProductV202507Api = "ProductV202507Api",
    ProductV202509Api = "ProductV202509Api",
    PromotionV202309Api = "PromotionV202309Api",
    PromotionV202406Api = "PromotionV202406Api",
    ReturnRefundV202309Api = "ReturnRefundV202309Api",
    SellerV202309Api = "SellerV202309Api",
    SupplyChainV202309Api = "SupplyChainV202309Api"
}
export declare const API_OBJECT: {
    readonly AnalyticsV202405Api: typeof AnalyticsV202405Api;
    readonly AnalyticsV202406Api: typeof AnalyticsV202406Api;
    readonly AnalyticsV202409Api: typeof AnalyticsV202409Api;
    readonly AnalyticsV202508Api: typeof AnalyticsV202508Api;
    readonly AuthorizationV202309Api: typeof AuthorizationV202309Api;
    readonly AuthorizationV202312Api: typeof AuthorizationV202312Api;
    readonly AuthorizationV202401Api: typeof AuthorizationV202401Api;
    readonly AuthorizationV202403Api: typeof AuthorizationV202403Api;
    readonly CustomerServiceV202309Api: typeof CustomerServiceV202309Api;
    readonly CustomerServiceV202407Api: typeof CustomerServiceV202407Api;
    readonly DataReconciliationV202309Api: typeof DataReconciliationV202309Api;
    readonly DataReconciliationV202310Api: typeof DataReconciliationV202310Api;
    readonly DataReconciliationV202401Api: typeof DataReconciliationV202401Api;
    readonly EventV202309Api: typeof EventV202309Api;
    readonly FinanceV202309Api: typeof FinanceV202309Api;
    readonly FinanceV202501Api: typeof FinanceV202501Api;
    readonly FinanceV202507Api: typeof FinanceV202507Api;
    readonly FulfillmentV202309Api: typeof FulfillmentV202309Api;
    readonly FulfillmentV202407Api: typeof FulfillmentV202407Api;
    readonly FulfillmentV202502Api: typeof FulfillmentV202502Api;
    readonly FulfillmentV202508Api: typeof FulfillmentV202508Api;
    readonly FulfillmentV202510Api: typeof FulfillmentV202510Api;
    readonly LogisticsV202309Api: typeof LogisticsV202309Api;
    readonly LogisticsV202510Api: typeof LogisticsV202510Api;
    readonly OrderV202309Api: typeof OrderV202309Api;
    readonly OrderV202407Api: typeof OrderV202407Api;
    readonly OrderV202507Api: typeof OrderV202507Api;
    readonly ProductV202309Api: typeof ProductV202309Api;
    readonly ProductV202312Api: typeof ProductV202312Api;
    readonly ProductV202401Api: typeof ProductV202401Api;
    readonly ProductV202404Api: typeof ProductV202404Api;
    readonly ProductV202405Api: typeof ProductV202405Api;
    readonly ProductV202407Api: typeof ProductV202407Api;
    readonly ProductV202409Api: typeof ProductV202409Api;
    readonly ProductV202411Api: typeof ProductV202411Api;
    readonly ProductV202501Api: typeof ProductV202501Api;
    readonly ProductV202502Api: typeof ProductV202502Api;
    readonly ProductV202505Api: typeof ProductV202505Api;
    readonly ProductV202506Api: typeof ProductV202506Api;
    readonly ProductV202507Api: typeof ProductV202507Api;
    readonly ProductV202509Api: typeof ProductV202509Api;
    readonly PromotionV202309Api: typeof PromotionV202309Api;
    readonly PromotionV202406Api: typeof PromotionV202406Api;
    readonly ReturnRefundV202309Api: typeof ReturnRefundV202309Api;
    readonly SellerV202309Api: typeof SellerV202309Api;
    readonly SupplyChainV202309Api: typeof SupplyChainV202309Api;
};
export declare const API_OPERATION_NAME_MAP: {
    readonly AnalyticsV202405Api: {
        readonly ShopPerformanceGet: "ShopPerformanceGet";
        readonly ShopProductsPerformanceGet: "ShopProductsPerformanceGet";
        readonly ShopProductsProductIdPerformanceGet: "ShopProductsProductIdPerformanceGet";
    };
    readonly AnalyticsV202406Api: {
        readonly ShopSkusPerformanceGet: "ShopSkusPerformanceGet";
        readonly ShopSkusSkuIdPerformanceGet: "ShopSkusSkuIdPerformanceGet";
    };
    readonly AnalyticsV202409Api: {
        readonly ShopVideosOverviewPerformanceGet: "ShopVideosOverviewPerformanceGet";
        readonly ShopVideosPerformanceGet: "ShopVideosPerformanceGet";
        readonly ShopVideosVideoIdPerformanceGet: "ShopVideosVideoIdPerformanceGet";
        readonly ShopVideosVideoIdProductsPerformanceGet: "ShopVideosVideoIdProductsPerformanceGet";
    };
    readonly AnalyticsV202508Api: {
        readonly ShopLivesOverviewPerformanceGet: "ShopLivesOverviewPerformanceGet";
        readonly ShopLivesPerformanceGet: "ShopLivesPerformanceGet";
    };
    readonly AuthorizationV202309Api: {
        readonly ShopsGet: "ShopsGet";
    };
    readonly AuthorizationV202312Api: {
        readonly WidgetTokenGet: "WidgetTokenGet";
    };
    readonly AuthorizationV202401Api: {
        readonly WidgetTokenGet: "WidgetTokenGet";
    };
    readonly AuthorizationV202403Api: {
        readonly ShopsDelete: "ShopsDelete";
    };
    readonly CustomerServiceV202309Api: {
        readonly AgentsSettingsGet: "AgentsSettingsGet";
        readonly AgentsSettingsPut: "AgentsSettingsPut";
        readonly ConversationsConversationIdMessagesGet: "ConversationsConversationIdMessagesGet";
        readonly ConversationsConversationIdMessagesPost: "ConversationsConversationIdMessagesPost";
        readonly ConversationsConversationIdMessagesReadPost: "ConversationsConversationIdMessagesReadPost";
        readonly ConversationsGet: "ConversationsGet";
        readonly ConversationsPost: "ConversationsPost";
        readonly ImagesUploadPost: "ImagesUploadPost";
    };
    readonly CustomerServiceV202407Api: {
        readonly PerformanceGet: "PerformanceGet";
    };
    readonly DataReconciliationV202309Api: {
        readonly OrdersSyncPost: "OrdersSyncPost";
    };
    readonly DataReconciliationV202310Api: {
        readonly OrdersImportPost: "OrdersImportPost";
    };
    readonly DataReconciliationV202401Api: {
        readonly OrdersImportPost: "OrdersImportPost";
    };
    readonly EventV202309Api: {
        readonly WebhooksDelete: "WebhooksDelete";
        readonly WebhooksGet: "WebhooksGet";
        readonly WebhooksPut: "WebhooksPut";
    };
    readonly FinanceV202309Api: {
        readonly OrdersOrderIdStatementTransactionsGet: "OrdersOrderIdStatementTransactionsGet";
        readonly PaymentsGet: "PaymentsGet";
        readonly StatementsGet: "StatementsGet";
        readonly StatementsStatementIdStatementTransactionsGet: "StatementsStatementIdStatementTransactionsGet";
        readonly WithdrawalsGet: "WithdrawalsGet";
    };
    readonly FinanceV202501Api: {
        readonly OrdersOrderIdStatementTransactionsGet: "OrdersOrderIdStatementTransactionsGet";
        readonly StatementsStatementIdStatementTransactionsGet: "StatementsStatementIdStatementTransactionsGet";
    };
    readonly FinanceV202507Api: {
        readonly OrdersUnsettledGet: "OrdersUnsettledGet";
    };
    readonly FulfillmentV202309Api: {
        readonly CombinablePackagesSearchGet: "CombinablePackagesSearchGet";
        readonly FilesUploadPost: "FilesUploadPost";
        readonly ImagesUploadPost: "ImagesUploadPost";
        readonly OrdersOrderIdHandoverTimeSlotsGet: "OrdersOrderIdHandoverTimeSlotsGet";
        readonly OrdersOrderIdPackagesPost: "OrdersOrderIdPackagesPost";
        readonly OrdersOrderIdShippingInfoUpdatePost: "OrdersOrderIdShippingInfoUpdatePost";
        readonly OrdersOrderIdShippingServicesQueryPost: "OrdersOrderIdShippingServicesQueryPost";
        readonly OrdersOrderIdSplitPost: "OrdersOrderIdSplitPost";
        readonly OrdersOrderIdTrackingGet: "OrdersOrderIdTrackingGet";
        readonly OrdersSplitAttributesGet: "OrdersSplitAttributesGet";
        readonly PackagesCombinePost: "PackagesCombinePost";
        readonly PackagesDeliverPost: "PackagesDeliverPost";
        readonly PackagesPackageIdGet: "PackagesPackageIdGet";
        readonly PackagesPackageIdHandoverTimeSlotsGet: "PackagesPackageIdHandoverTimeSlotsGet";
        readonly PackagesPackageIdShipPost: "PackagesPackageIdShipPost";
        readonly PackagesPackageIdShippingDocumentsGet: "PackagesPackageIdShippingDocumentsGet";
        readonly PackagesPackageIdShippingInfoUpdatePost: "PackagesPackageIdShippingInfoUpdatePost";
        readonly PackagesPackageIdUncombinePost: "PackagesPackageIdUncombinePost";
        readonly PackagesPost: "PackagesPost";
        readonly PackagesSchedulePost: "PackagesSchedulePost";
        readonly PackagesSearchPost: "PackagesSearchPost";
        readonly PackagesShipPost: "PackagesShipPost";
    };
    readonly FulfillmentV202407Api: {
        readonly BundlesPost: "BundlesPost";
    };
    readonly FulfillmentV202502Api: {
        readonly InvoiceUploadPost: "InvoiceUploadPost";
    };
    readonly FulfillmentV202508Api: {
        readonly TtsTrackingValidationGet: "TtsTrackingValidationGet";
    };
    readonly FulfillmentV202510Api: {
        readonly FirstMileBundlePost: "FirstMileBundlePost";
    };
    readonly LogisticsV202309Api: {
        readonly DeliveryOptionsDeliveryOptionIdShippingProvidersGet: "DeliveryOptionsDeliveryOptionIdShippingProvidersGet";
        readonly GlobalWarehousesGet: "GlobalWarehousesGet";
        readonly WarehousesGet: "WarehousesGet";
        readonly WarehousesWarehouseIdDeliveryOptionsGet: "WarehousesWarehouseIdDeliveryOptionsGet";
    };
    readonly LogisticsV202510Api: {
        readonly SellerTemplatesGet: "SellerTemplatesGet";
    };
    readonly OrderV202309Api: {
        readonly OrdersGet: "OrdersGet";
        readonly OrdersSearchPost: "OrdersSearchPost";
    };
    readonly OrderV202407Api: {
        readonly OrdersOrderIdPriceDetailGet: "OrdersOrderIdPriceDetailGet";
    };
    readonly OrderV202507Api: {
        readonly OrdersGet: "OrdersGet";
    };
    readonly ProductV202309Api: {
        readonly BrandsGet: "BrandsGet";
        readonly BrandsPost: "BrandsPost";
        readonly CategoriesCategoryIdAttributesGet: "CategoriesCategoryIdAttributesGet";
        readonly CategoriesCategoryIdGlobalAttributesGet: "CategoriesCategoryIdGlobalAttributesGet";
        readonly CategoriesCategoryIdGlobalRulesGet: "CategoriesCategoryIdGlobalRulesGet";
        readonly CategoriesCategoryIdRulesGet: "CategoriesCategoryIdRulesGet";
        readonly CategoriesGet: "CategoriesGet";
        readonly CategoriesRecommendPost: "CategoriesRecommendPost";
        readonly FilesUploadPost: "FilesUploadPost";
        readonly GlobalCategoriesGet: "GlobalCategoriesGet";
        readonly GlobalCategoriesRecommendPost: "GlobalCategoriesRecommendPost";
        readonly GlobalProductsDelete: "GlobalProductsDelete";
        readonly GlobalProductsGlobalProductIdGet: "GlobalProductsGlobalProductIdGet";
        readonly GlobalProductsGlobalProductIdInventoryUpdatePost: "GlobalProductsGlobalProductIdInventoryUpdatePost";
        readonly GlobalProductsGlobalProductIdPublishPost: "GlobalProductsGlobalProductIdPublishPost";
        readonly GlobalProductsGlobalProductIdPut: "GlobalProductsGlobalProductIdPut";
        readonly GlobalProductsPost: "GlobalProductsPost";
        readonly GlobalProductsSearchPost: "GlobalProductsSearchPost";
        readonly ImagesUploadPost: "ImagesUploadPost";
        readonly InventorySearchPost: "InventorySearchPost";
        readonly PrerequisitesGet: "PrerequisitesGet";
        readonly ProductsActivatePost: "ProductsActivatePost";
        readonly ProductsDeactivatePost: "ProductsDeactivatePost";
        readonly ProductsDelete: "ProductsDelete";
        readonly ProductsListingCheckPost: "ProductsListingCheckPost";
        readonly ProductsPost: "ProductsPost";
        readonly ProductsProductIdGet: "ProductsProductIdGet";
        readonly ProductsProductIdInventoryUpdatePost: "ProductsProductIdInventoryUpdatePost";
        readonly ProductsProductIdPartialEditPost: "ProductsProductIdPartialEditPost";
        readonly ProductsProductIdPricesUpdatePost: "ProductsProductIdPricesUpdatePost";
        readonly ProductsProductIdPut: "ProductsProductIdPut";
        readonly ProductsRecoverPost: "ProductsRecoverPost";
        readonly ProductsSearchPost: "ProductsSearchPost";
    };
    readonly ProductV202312Api: {
        readonly GlobalProductsSearchPost: "GlobalProductsSearchPost";
        readonly PrerequisitesGet: "PrerequisitesGet";
        readonly ProductsSearchPost: "ProductsSearchPost";
    };
    readonly ProductV202401Api: {
        readonly ListingSchemasGet: "ListingSchemasGet";
    };
    readonly ProductV202404Api: {
        readonly ImagesOptimizePost: "ImagesOptimizePost";
    };
    readonly ProductV202405Api: {
        readonly ProductsDiagnosesGet: "ProductsDiagnosesGet";
        readonly ProductsSeoWordsGet: "ProductsSeoWordsGet";
        readonly ProductsSuggestionsGet: "ProductsSuggestionsGet";
    };
    readonly ProductV202407Api: {
        readonly ListingSchemasGet: "ListingSchemasGet";
        readonly ProductsCategoryUpgradeTaskPost: "ProductsCategoryUpgradeTaskPost";
        readonly SizechartsSearchPost: "SizechartsSearchPost";
    };
    readonly ProductV202409Api: {
        readonly ComplianceManufacturersManufacturerIdPartialEditPost: "ComplianceManufacturersManufacturerIdPartialEditPost";
        readonly ComplianceManufacturersPost: "ComplianceManufacturersPost";
        readonly ComplianceManufacturersSearchPost: "ComplianceManufacturersSearchPost";
        readonly ComplianceResponsiblePersonsPost: "ComplianceResponsiblePersonsPost";
        readonly ComplianceResponsiblePersonsResponsiblePersonIdPartialEditPost: "ComplianceResponsiblePersonsResponsiblePersonIdPartialEditPost";
        readonly ComplianceResponsiblePersonsSearchPost: "ComplianceResponsiblePersonsSearchPost";
    };
    readonly ProductV202411Api: {
        readonly ProductsDiagnoseOptimizePost: "ProductsDiagnoseOptimizePost";
    };
    readonly ProductV202501Api: {
        readonly ComplianceManufacturersSearchPost: "ComplianceManufacturersSearchPost";
        readonly ComplianceResponsiblePersonsSearchPost: "ComplianceResponsiblePersonsSearchPost";
    };
    readonly ProductV202502Api: {
        readonly ProductsSearchPost: "ProductsSearchPost";
    };
    readonly ProductV202505Api: {
        readonly ImagesTranslationTasksPost: "ImagesTranslationTasksPost";
    };
    readonly ProductV202506Api: {
        readonly ImagesTranslationTasksGet: "ImagesTranslationTasksGet";
    };
    readonly ProductV202507Api: {
        readonly GlobalListingRulesGet: "GlobalListingRulesGet";
        readonly ProductsProductIdGlobalReplicatePost: "ProductsProductIdGlobalReplicatePost";
        readonly ProductsProductIdReplicatedProductsGet: "ProductsProductIdReplicatedProductsGet";
    };
    readonly ProductV202509Api: {
        readonly GlobalProductsGlobalProductIdPartialEditPut: "GlobalProductsGlobalProductIdPartialEditPut";
        readonly ProductsProductIdPartialEditPost: "ProductsProductIdPartialEditPost";
        readonly ProductsProductIdPut: "ProductsProductIdPut";
    };
    readonly PromotionV202309Api: {
        readonly ActivitiesActivityIdDeactivatePost: "ActivitiesActivityIdDeactivatePost";
        readonly ActivitiesActivityIdGet: "ActivitiesActivityIdGet";
        readonly ActivitiesActivityIdProductsDelete: "ActivitiesActivityIdProductsDelete";
        readonly ActivitiesActivityIdProductsPut: "ActivitiesActivityIdProductsPut";
        readonly ActivitiesActivityIdPut: "ActivitiesActivityIdPut";
        readonly ActivitiesPost: "ActivitiesPost";
        readonly ActivitiesSearchPost: "ActivitiesSearchPost";
    };
    readonly PromotionV202406Api: {
        readonly CouponsCouponIdGet: "CouponsCouponIdGet";
        readonly CouponsSearchPost: "CouponsSearchPost";
    };
    readonly ReturnRefundV202309Api: {
        readonly CancellationsCancelIdApprovePost: "CancellationsCancelIdApprovePost";
        readonly CancellationsCancelIdRejectPost: "CancellationsCancelIdRejectPost";
        readonly CancellationsPost: "CancellationsPost";
        readonly CancellationsSearchPost: "CancellationsSearchPost";
        readonly OrdersOrderIdAftersaleEligibilityGet: "OrdersOrderIdAftersaleEligibilityGet";
        readonly RefundsCalculatePost: "RefundsCalculatePost";
        readonly RejectReasonsGet: "RejectReasonsGet";
        readonly ReturnsPost: "ReturnsPost";
        readonly ReturnsReturnIdApprovePost: "ReturnsReturnIdApprovePost";
        readonly ReturnsReturnIdRecordsGet: "ReturnsReturnIdRecordsGet";
        readonly ReturnsReturnIdRejectPost: "ReturnsReturnIdRejectPost";
        readonly ReturnsSearchPost: "ReturnsSearchPost";
    };
    readonly SellerV202309Api: {
        readonly PermissionsGet: "PermissionsGet";
        readonly ShopsGet: "ShopsGet";
    };
    readonly SupplyChainV202309Api: {
        readonly PackagesSyncPost: "PackagesSyncPost";
    };
};
export type API_OPERATION_TYPE_MAP = {
    AnalyticsV202405Api: AnalyticsV202405ApiOperationTypes;
    AnalyticsV202406Api: AnalyticsV202406ApiOperationTypes;
    AnalyticsV202409Api: AnalyticsV202409ApiOperationTypes;
    AnalyticsV202508Api: AnalyticsV202508ApiOperationTypes;
    AuthorizationV202309Api: AuthorizationV202309ApiOperationTypes;
    AuthorizationV202312Api: AuthorizationV202312ApiOperationTypes;
    AuthorizationV202401Api: AuthorizationV202401ApiOperationTypes;
    AuthorizationV202403Api: AuthorizationV202403ApiOperationTypes;
    CustomerServiceV202309Api: CustomerServiceV202309ApiOperationTypes;
    CustomerServiceV202407Api: CustomerServiceV202407ApiOperationTypes;
    DataReconciliationV202309Api: DataReconciliationV202309ApiOperationTypes;
    DataReconciliationV202310Api: DataReconciliationV202310ApiOperationTypes;
    DataReconciliationV202401Api: DataReconciliationV202401ApiOperationTypes;
    EventV202309Api: EventV202309ApiOperationTypes;
    FinanceV202309Api: FinanceV202309ApiOperationTypes;
    FinanceV202501Api: FinanceV202501ApiOperationTypes;
    FinanceV202507Api: FinanceV202507ApiOperationTypes;
    FulfillmentV202309Api: FulfillmentV202309ApiOperationTypes;
    FulfillmentV202407Api: FulfillmentV202407ApiOperationTypes;
    FulfillmentV202502Api: FulfillmentV202502ApiOperationTypes;
    FulfillmentV202508Api: FulfillmentV202508ApiOperationTypes;
    FulfillmentV202510Api: FulfillmentV202510ApiOperationTypes;
    LogisticsV202309Api: LogisticsV202309ApiOperationTypes;
    LogisticsV202510Api: LogisticsV202510ApiOperationTypes;
    OrderV202309Api: OrderV202309ApiOperationTypes;
    OrderV202407Api: OrderV202407ApiOperationTypes;
    OrderV202507Api: OrderV202507ApiOperationTypes;
    ProductV202309Api: ProductV202309ApiOperationTypes;
    ProductV202312Api: ProductV202312ApiOperationTypes;
    ProductV202401Api: ProductV202401ApiOperationTypes;
    ProductV202404Api: ProductV202404ApiOperationTypes;
    ProductV202405Api: ProductV202405ApiOperationTypes;
    ProductV202407Api: ProductV202407ApiOperationTypes;
    ProductV202409Api: ProductV202409ApiOperationTypes;
    ProductV202411Api: ProductV202411ApiOperationTypes;
    ProductV202501Api: ProductV202501ApiOperationTypes;
    ProductV202502Api: ProductV202502ApiOperationTypes;
    ProductV202505Api: ProductV202505ApiOperationTypes;
    ProductV202506Api: ProductV202506ApiOperationTypes;
    ProductV202507Api: ProductV202507ApiOperationTypes;
    ProductV202509Api: ProductV202509ApiOperationTypes;
    PromotionV202309Api: PromotionV202309ApiOperationTypes;
    PromotionV202406Api: PromotionV202406ApiOperationTypes;
    ReturnRefundV202309Api: ReturnRefundV202309ApiOperationTypes;
    SellerV202309Api: SellerV202309ApiOperationTypes;
    SupplyChainV202309Api: SupplyChainV202309ApiOperationTypes;
};
