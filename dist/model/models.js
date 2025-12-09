"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./analytics/V202405/GetShopPerformanceResponse"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseData"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformance"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervals"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgOrderValue"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgProductPageVisitorBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsBuyerBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmv"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductImpressionBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductPageViewBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsRefunds"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervals"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsAvgOrderValue"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsAvgProductPageVisitorBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsBuyerBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsGmv"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsGmvBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsProductImpressionBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsProductPageViewBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsRefunds"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceListResponse"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceListResponseData"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceListResponseDataProducts"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceListResponseDataProductsGmv"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponse"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseData"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformance"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervals"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsAvgPageVisitorBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsClickThroughRateBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmv"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsImpressionBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsPageViewBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsUnitSoldBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervals"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsAvgPageVisitorBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsClickThroughRateBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsGmv"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsGmvBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsImpressionBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsPageViewBreakdowns"), exports);
__exportStar(require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsUnitSoldBreakdowns"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceListResponse"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceListResponseData"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceListResponseDataSkus"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceListResponseDataSkusGmv"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponse"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponseData"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformance"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceComparisonIntervals"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmv"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdown"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsUnitsSoldBreakdown"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceIntervals"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceIntervalsGmv"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceIntervalsGmvBreakdown"), exports);
__exportStar(require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceIntervalsUnitsSoldBreakdown"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceDetailsResponse"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseData"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataEngagementData"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataPerformance"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervals"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervalsGmv"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataPerformanceIntervals"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataPerformanceIntervalsGmv"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceListResponse"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceListResponseData"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceListResponseDataVideos"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceListResponseDataVideosGmv"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceListResponseDataVideosProducts"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceOverviewResponse"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseData"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseDataPerformance"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervals"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseDataPerformanceIntervals"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseDataPerformanceIntervalsGmv"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoProductPerformanceListResponse"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoProductPerformanceListResponseData"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoProductPerformanceListResponseDataProducts"), exports);
__exportStar(require("./analytics/V202409/GetShopVideoProductPerformanceListResponseDataProductsGmv"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceListResponse"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceListResponseData"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessions"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessionsInteractionPerformance"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance24hLiveGmv"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceAvgPrice"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceGmv"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponse"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseData"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseDataPerformance"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervals"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervals"), exports);
__exportStar(require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervalsGmv"), exports);
__exportStar(require("./authorization/V202309/GetAuthorizedShopsResponse"), exports);
__exportStar(require("./authorization/V202309/GetAuthorizedShopsResponseData"), exports);
__exportStar(require("./authorization/V202309/GetAuthorizedShopsResponseDataShops"), exports);
__exportStar(require("./authorization/V202312/GetWidgetTokenResponse"), exports);
__exportStar(require("./authorization/V202312/GetWidgetTokenResponseData"), exports);
__exportStar(require("./authorization/V202312/GetWidgetTokenResponseDataWidgetToken"), exports);
__exportStar(require("./authorization/V202401/GetWidgetTokenResponse"), exports);
__exportStar(require("./authorization/V202401/GetWidgetTokenResponseData"), exports);
__exportStar(require("./authorization/V202401/GetWidgetTokenResponseDataWidgetToken"), exports);
__exportStar(require("./authorization/V202403/DeauthorizeShopResponse"), exports);
__exportStar(require("./customerService/V202309/CreateConversationRequestBody"), exports);
__exportStar(require("./customerService/V202309/CreateConversationResponse"), exports);
__exportStar(require("./customerService/V202309/CreateConversationResponseData"), exports);
__exportStar(require("./customerService/V202309/GetAgentSettingsResponse"), exports);
__exportStar(require("./customerService/V202309/GetAgentSettingsResponseData"), exports);
__exportStar(require("./customerService/V202309/GetConversationMessagesResponse"), exports);
__exportStar(require("./customerService/V202309/GetConversationMessagesResponseData"), exports);
__exportStar(require("./customerService/V202309/GetConversationMessagesResponseDataMessages"), exports);
__exportStar(require("./customerService/V202309/GetConversationMessagesResponseDataMessagesSender"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponse"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponseData"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponseDataConversations"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponseDataConversationsLatestMessage"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponseDataConversationsLatestMessageSender"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponseDataConversationsParticipants"), exports);
__exportStar(require("./customerService/V202309/ReadMessageResponse"), exports);
__exportStar(require("./customerService/V202309/SendMessageRequestBody"), exports);
__exportStar(require("./customerService/V202309/SendMessageResponse"), exports);
__exportStar(require("./customerService/V202309/SendMessageResponseData"), exports);
__exportStar(require("./customerService/V202309/UpdateAgentSettingsRequestBody"), exports);
__exportStar(require("./customerService/V202309/UpdateAgentSettingsResponse"), exports);
__exportStar(require("./customerService/V202309/UploadBuyerMessagesImageResponse"), exports);
__exportStar(require("./customerService/V202309/UploadBuyerMessagesImageResponseData"), exports);
__exportStar(require("./customerService/V202407/GetCustomerServicePerformanceResponse"), exports);
__exportStar(require("./customerService/V202407/GetCustomerServicePerformanceResponseData"), exports);
__exportStar(require("./customerService/V202407/GetCustomerServicePerformanceResponseDataPerformance"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBody"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBodyOrders"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBodyOrdersPackages"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeResponse"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseData"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrors"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrorsDetail"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBody"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBodyOrders"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponse"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseData"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrors"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrorsDetail"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBody"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBodyOrders"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponse"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseData"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrors"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrorsDetail"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors"), exports);
__exportStar(require("./event/V202309/DeleteShopWebhookRequestBody"), exports);
__exportStar(require("./event/V202309/DeleteShopWebhookResponse"), exports);
__exportStar(require("./event/V202309/GetShopWebhooksResponse"), exports);
__exportStar(require("./event/V202309/GetShopWebhooksResponseData"), exports);
__exportStar(require("./event/V202309/GetShopWebhooksResponseDataWebhooks"), exports);
__exportStar(require("./event/V202309/UpdateShopWebhookRequestBody"), exports);
__exportStar(require("./event/V202309/UpdateShopWebhookResponse"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponse"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseData"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseDataPayments"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseDataPaymentsAmount"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseDataPaymentsReserveAmount"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseDataPaymentsSettlementAmount"), exports);
__exportStar(require("./finance/V202309/GetStatementsResponse"), exports);
__exportStar(require("./finance/V202309/GetStatementsResponseData"), exports);
__exportStar(require("./finance/V202309/GetStatementsResponseDataStatements"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyOrderResponse"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyOrderResponseData"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyOrderResponseDataStatementTransactions"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyStatementResponse"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyStatementResponseData"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyStatementResponseDataStatementTransactions"), exports);
__exportStar(require("./finance/V202309/GetWithdrawalsResponse"), exports);
__exportStar(require("./finance/V202309/GetWithdrawalsResponseData"), exports);
__exportStar(require("./finance/V202309/GetWithdrawalsResponseDataWithdrawals"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponse"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseData"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactions"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponse"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseData"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTotalSettlementBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactions"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent"), exports);
__exportStar(require("./finance/V202507/GetUnsettledTransactionsResponse"), exports);
__exportStar(require("./finance/V202507/GetUnsettledTransactionsResponseData"), exports);
__exportStar(require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactions"), exports);
__exportStar(require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown"), exports);
__exportStar(require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownFee"), exports);
__exportStar(require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax"), exports);
__exportStar(require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown"), exports);
__exportStar(require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown"), exports);
__exportStar(require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdownSupplementaryComponent"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackages"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackagesPickupSlot"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackagesSelfShipment"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesResponse"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesResponseData"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesResponseDataErrorsDetail"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageRequestBodyCombinablePackages"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageResponse"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageResponseData"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageResponseDataErrorsDetail"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageResponseDataPackages"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesRequestBodyDimension"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesRequestBodyWeight"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesResponse"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesResponseData"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesResponseDataDimension"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesResponseDataShippingServiceInfo"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesResponseDataWeight"), exports);
__exportStar(require("./fulfillment/V202309/FulfillmentUploadDeliveryFileResponse"), exports);
__exportStar(require("./fulfillment/V202309/FulfillmentUploadDeliveryFileResponseData"), exports);
__exportStar(require("./fulfillment/V202309/FulfillmentUploadDeliveryImageResponse"), exports);
__exportStar(require("./fulfillment/V202309/FulfillmentUploadDeliveryImageResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceRequestBodyDimension"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceRequestBodyWeight"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataDimension"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataShippingServices"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataWeight"), exports);
__exportStar(require("./fulfillment/V202309/GetHandoverTimeslotsResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetHandoverTimeslotsResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetHandoverTimeslotsResponseDataPickupSlots"), exports);
__exportStar(require("./fulfillment/V202309/GetOrderSplitAttributesResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetOrderSplitAttributesResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetOrderSplitAttributesResponseDataSplitAttributes"), exports);
__exportStar(require("./fulfillment/V202309/GetOrderSplitAttributesResponseDataSplitAttributesMustSplitReasons"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataDimension"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataInsurance"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataOrders"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataOrdersSkus"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataPickupSlot"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataRecipientAddress"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataSenderAddress"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataWeight"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponseDataPickupSlots"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageShippingDocumentResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageShippingDocumentResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetTrackingResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetTrackingResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetTrackingResponseDataTracking"), exports);
__exportStar(require("./fulfillment/V202309/MarkPackageAsShippedRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/MarkPackageAsShippedResponse"), exports);
__exportStar(require("./fulfillment/V202309/MarkPackageAsShippedResponseData"), exports);
__exportStar(require("./fulfillment/V202309/MarkPackageAsShippedResponseDataWarning"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverRequestBodyPickupSlot"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverResponse"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverResponseData"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverResponseDataDimension"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverResponseDataWeight"), exports);
__exportStar(require("./fulfillment/V202309/SearchCombinablePackagesResponse"), exports);
__exportStar(require("./fulfillment/V202309/SearchCombinablePackagesResponseData"), exports);
__exportStar(require("./fulfillment/V202309/SearchCombinablePackagesResponseDataCombinablePackages"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageResponse"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageResponseData"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageResponseDataPackages"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageResponseDataPackagesOrders"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageResponseDataPackagesOrdersSkus"), exports);
__exportStar(require("./fulfillment/V202309/ShipPackageRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/ShipPackageRequestBodyPickupSlot"), exports);
__exportStar(require("./fulfillment/V202309/ShipPackageRequestBodySelfShipment"), exports);
__exportStar(require("./fulfillment/V202309/ShipPackageResponse"), exports);
__exportStar(require("./fulfillment/V202309/SplitOrdersRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/SplitOrdersRequestBodySplittableGroups"), exports);
__exportStar(require("./fulfillment/V202309/SplitOrdersResponse"), exports);
__exportStar(require("./fulfillment/V202309/SplitOrdersResponseData"), exports);
__exportStar(require("./fulfillment/V202309/SplitOrdersResponseDataPackages"), exports);
__exportStar(require("./fulfillment/V202309/UncombinePackagesRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/UncombinePackagesResponse"), exports);
__exportStar(require("./fulfillment/V202309/UncombinePackagesResponseData"), exports);
__exportStar(require("./fulfillment/V202309/UncombinePackagesResponseDataPackages"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusRequestBodyPackages"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponse"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseData"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseDataErrorsDetail"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageShippingInfoRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageShippingInfoResponse"), exports);
__exportStar(require("./fulfillment/V202309/UpdateShippingInfoRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/UpdateShippingInfoResponse"), exports);
__exportStar(require("./fulfillment/V202407/CreateFirstMileBundleRequestBody"), exports);
__exportStar(require("./fulfillment/V202407/CreateFirstMileBundleResponse"), exports);
__exportStar(require("./fulfillment/V202407/CreateFirstMileBundleResponseData"), exports);
__exportStar(require("./fulfillment/V202407/CreateFirstMileBundleResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202407/CreateFirstMileBundleResponseDataErrorsDetail"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceRequestBody"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceRequestBodyInvoices"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceResponse"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceResponseData"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceResponseDataErrorsDetail"), exports);
__exportStar(require("./fulfillment/V202508/TTSTrackingValidationResponse"), exports);
__exportStar(require("./fulfillment/V202508/TTSTrackingValidationResponseData"), exports);
__exportStar(require("./fulfillment/V202510/CreateFirstMileBundleV2RequestBody"), exports);
__exportStar(require("./fulfillment/V202510/CreateFirstMileBundleV2Response"), exports);
__exportStar(require("./fulfillment/V202510/CreateFirstMileBundleV2ResponseData"), exports);
__exportStar(require("./fulfillment/V202510/CreateFirstMileBundleV2ResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202510/CreateFirstMileBundleV2ResponseDataErrorsDetail"), exports);
__exportStar(require("./logistics/V202309/GetGlobalSellerWarehouseResponse"), exports);
__exportStar(require("./logistics/V202309/GetGlobalSellerWarehouseResponseData"), exports);
__exportStar(require("./logistics/V202309/GetGlobalSellerWarehouseResponseDataGlobalWarehouses"), exports);
__exportStar(require("./logistics/V202309/GetShippingProvidersResponse"), exports);
__exportStar(require("./logistics/V202309/GetShippingProvidersResponseData"), exports);
__exportStar(require("./logistics/V202309/GetShippingProvidersResponseDataShippingProviders"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseDeliveryOptionsResponse"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseData"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptions"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseListResponse"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseListResponseData"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseListResponseDataWarehouses"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseListResponseDataWarehousesAddress"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseListResponseDataWarehousesAddressGeolocation"), exports);
__exportStar(require("./logistics/V202510/GetAvailableShippingTemplateRequestBody"), exports);
__exportStar(require("./logistics/V202510/GetAvailableShippingTemplateRequestBodyProductAttribute"), exports);
__exportStar(require("./logistics/V202510/GetAvailableShippingTemplateRequestBodyProductAttributeDimension"), exports);
__exportStar(require("./logistics/V202510/GetAvailableShippingTemplateRequestBodyProductAttributeWeight"), exports);
__exportStar(require("./logistics/V202510/GetAvailableShippingTemplateResponse"), exports);
__exportStar(require("./logistics/V202510/GetAvailableShippingTemplateResponseData"), exports);
__exportStar(require("./logistics/V202510/GetAvailableShippingTemplateResponseDataTemplates"), exports);
__exportStar(require("./logistics/V202510/GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReason"), exports);
__exportStar(require("./logistics/V202510/GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReasonFilterReason"), exports);
__exportStar(require("./logistics/V202510/GetAvailableShippingTemplateResponseDataTemplatesTemplate"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponse"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseData"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrders"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersHandlingDuration"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersLineItems"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersLineItemsItemTax"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersPackages"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersPayment"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddress"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo"), exports);
__exportStar(require("./order/V202309/GetOrderListRequestBody"), exports);
__exportStar(require("./order/V202309/GetOrderListResponse"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseData"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrders"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersHandlingDuration"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersLineItems"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersLineItemsCombinedListingSkus"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersLineItemsItemTax"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersPackages"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersPayment"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddress"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddressDistrictInfo"), exports);
__exportStar(require("./order/V202407/GetPriceDetailResponse"), exports);
__exportStar(require("./order/V202407/GetPriceDetailResponseData"), exports);
__exportStar(require("./order/V202407/GetPriceDetailResponseDataLineItems"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponse"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseData"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseDataOrders"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseDataOrdersHandlingDuration"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseDataOrdersLineItems"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseDataOrdersLineItemsItemTax"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseDataOrdersPackages"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseDataOrdersPayment"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseDataOrdersRecipientAddress"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences"), exports);
__exportStar(require("./order/V202507/GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo"), exports);
__exportStar(require("./product/V202309/ActivateProductRequestBody"), exports);
__exportStar(require("./product/V202309/ActivateProductResponse"), exports);
__exportStar(require("./product/V202309/ActivateProductResponseData"), exports);
__exportStar(require("./product/V202309/ActivateProductResponseDataErrors"), exports);
__exportStar(require("./product/V202309/ActivateProductResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/ActivateProductResponseDataErrorsDetailExtraErrors"), exports);
__exportStar(require("./product/V202309/CheckListingPrerequisitesResponse"), exports);
__exportStar(require("./product/V202309/CheckListingPrerequisitesResponseData"), exports);
__exportStar(require("./product/V202309/CheckListingPrerequisitesResponseDataShop"), exports);
__exportStar(require("./product/V202309/CheckListingPrerequisitesResponseDataShopGne"), exports);
__exportStar(require("./product/V202309/CheckListingPrerequisitesResponseDataShopLogistics"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBody"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkus"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusCombinedSkus"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusFees"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusPreSale"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponse"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseData"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnoses"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnosesDiagnosisResults"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestions"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsImages"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsSeoWords"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataFailReasons"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataListingQuality"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataWarnings"), exports);
__exportStar(require("./product/V202309/CreateCustomBrandsRequestBody"), exports);
__exportStar(require("./product/V202309/CreateCustomBrandsResponse"), exports);
__exportStar(require("./product/V202309/CreateCustomBrandsResponseData"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBody"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyManufacturer"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkus"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductResponse"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductResponseData"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductResponseDataGlobalSkus"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductResponseDataGlobalSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBody"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkus"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusCombinedSkus"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusFees"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusPreSale"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/CreateProductResponse"), exports);
__exportStar(require("./product/V202309/CreateProductResponseData"), exports);
__exportStar(require("./product/V202309/CreateProductResponseDataSkus"), exports);
__exportStar(require("./product/V202309/CreateProductResponseDataSkusFees"), exports);
__exportStar(require("./product/V202309/CreateProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/CreateProductResponseDataWarnings"), exports);
__exportStar(require("./product/V202309/DeactivateProductsRequestBody"), exports);
__exportStar(require("./product/V202309/DeactivateProductsResponse"), exports);
__exportStar(require("./product/V202309/DeactivateProductsResponseData"), exports);
__exportStar(require("./product/V202309/DeactivateProductsResponseDataErrors"), exports);
__exportStar(require("./product/V202309/DeactivateProductsResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/DeleteGlobalProductsRequestBody"), exports);
__exportStar(require("./product/V202309/DeleteGlobalProductsResponse"), exports);
__exportStar(require("./product/V202309/DeleteGlobalProductsResponseData"), exports);
__exportStar(require("./product/V202309/DeleteGlobalProductsResponseDataErrors"), exports);
__exportStar(require("./product/V202309/DeleteGlobalProductsResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/DeleteProductsRequestBody"), exports);
__exportStar(require("./product/V202309/DeleteProductsResponse"), exports);
__exportStar(require("./product/V202309/DeleteProductsResponseData"), exports);
__exportStar(require("./product/V202309/DeleteProductsResponseDataErrors"), exports);
__exportStar(require("./product/V202309/DeleteProductsResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBody"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyManufacturer"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkus"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusSalePrices"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponse"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponseData"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponseDataGlobalSkus"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponseDataGlobalSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponseDataPublishResults"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponseDataPublishResultsFailReasons"), exports);
__exportStar(require("./product/V202309/EditProductRequestBody"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyReplicatedProducts"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyReplicatedProductsSkus"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyReplicatedProductsSkusInventory"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyReplicatedProductsSkusPrice"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkus"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusCombinedSkus"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusFees"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusPreSale"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySubscribeInfoEdit"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySubscribeInfoEditDiscountDetails"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/EditProductResponse"), exports);
__exportStar(require("./product/V202309/EditProductResponseData"), exports);
__exportStar(require("./product/V202309/EditProductResponseDataAudit"), exports);
__exportStar(require("./product/V202309/EditProductResponseDataSkus"), exports);
__exportStar(require("./product/V202309/EditProductResponseDataSkusFees"), exports);
__exportStar(require("./product/V202309/EditProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/EditProductResponseDataWarnings"), exports);
__exportStar(require("./product/V202309/GetAttributesResponse"), exports);
__exportStar(require("./product/V202309/GetAttributesResponseData"), exports);
__exportStar(require("./product/V202309/GetAttributesResponseDataAttributes"), exports);
__exportStar(require("./product/V202309/GetAttributesResponseDataAttributesRequirementConditions"), exports);
__exportStar(require("./product/V202309/GetAttributesResponseDataAttributesValues"), exports);
__exportStar(require("./product/V202309/GetBrandsResponse"), exports);
__exportStar(require("./product/V202309/GetBrandsResponseData"), exports);
__exportStar(require("./product/V202309/GetBrandsResponseDataBrands"), exports);
__exportStar(require("./product/V202309/GetCategoriesResponse"), exports);
__exportStar(require("./product/V202309/GetCategoriesResponseData"), exports);
__exportStar(require("./product/V202309/GetCategoriesResponseDataCategories"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponse"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseData"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataCod"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataEpr"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataFees"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataManufacturer"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataPackageDimension"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataProductCertifications"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataProductCertificationsExpirationDate"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataProductCertificationsRequirementConditions"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataResponsiblePerson"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataSizeChart"), exports);
__exportStar(require("./product/V202309/GetGlobalAttributesResponse"), exports);
__exportStar(require("./product/V202309/GetGlobalAttributesResponseData"), exports);
__exportStar(require("./product/V202309/GetGlobalAttributesResponseDataAttributes"), exports);
__exportStar(require("./product/V202309/GetGlobalAttributesResponseDataAttributesRequirementConditions"), exports);
__exportStar(require("./product/V202309/GetGlobalAttributesResponseDataAttributesValues"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoriesResponse"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoriesResponseData"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoriesResponseDataCategories"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponse"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseData"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseDataManufacturer"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseDataProductCertifications"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseDataResponsiblePerson"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseDataSizeChart"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponse"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseData"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataBrand"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataCategory"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataCertifications"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataCertificationsFiles"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataCertificationsImages"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataMainImages"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataManufacturer"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataPackageDimensions"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataPackageWeight"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataProductAttributes"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataProductAttributesValues"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataProducts"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataProductsSkuMappings"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSizeChart"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSizeChartImage"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSizeChartTemplate"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkus"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkusInventory"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkusPrice"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataVideo"), exports);
__exportStar(require("./product/V202309/GetProductResponse"), exports);
__exportStar(require("./product/V202309/GetProductResponseData"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataAudit"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataAuditFailedReasons"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataBrand"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataCategoryChains"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataCertifications"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataCertificationsFiles"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataCertificationsImages"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataDeliveryOptions"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataGlobalProductAssociation"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataGlobalProductAssociationSkuMappings"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataIntegratedPlatformStatuses"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataMainImages"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataPackageDimensions"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataPackageWeight"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataPrescriptionRequirement"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataProductAttributes"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataProductAttributesValues"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataProductFamilies"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataProductFamiliesProducts"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataRecommendedCategories"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSizeChart"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSizeChartImage"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSizeChartTemplate"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkus"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusCombinedSkus"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusCombinedSkusBrand"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusCombinedSkusCategories"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusCombinedSkusInventory"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusCombinedSkusPrice"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusCombinedSkusProductMainImage"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusCombinedSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusCombinedSkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusCombinedSkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusFees"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusGlobalListingPolicy"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusGlobalListingPolicyReplicateSource"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusInventory"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusListPrice"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusPreSale"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusPrice"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusStatusInfo"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSubscribeInfo"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSubscribeInfoSubscribeDiscountDetails"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSubscribeInfoSubscribePromotionConfig"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataVideo"), exports);
__exportStar(require("./product/V202309/InventorySearchRequestBody"), exports);
__exportStar(require("./product/V202309/InventorySearchResponse"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseData"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventory"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkus"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkusWarehouseInventory"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBody"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyReplicatedProducts"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyReplicatedProductsSkus"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyReplicatedProductsSkusInventory"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyReplicatedProductsSkusPrice"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkus"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusFees"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusPreSale"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySubscribeInfoEdit"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySubscribeInfoEditDiscountDetails"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponse"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseData"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseDataAudit"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseDataReplicatedProducts"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseDataReplicatedProductsSkus"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseDataSkus"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseDataSkusFees"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBody"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBodyPublishTarget"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkus"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkusFees"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkusInventory"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkusPrice"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponse"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseData"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseDataProducts"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseDataProductsSkus"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseDataProductsSkusSaleAttributes"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseDataPublishResult"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseDataPublishResultFailReasons"), exports);
__exportStar(require("./product/V202309/RecommendCategoryRequestBody"), exports);
__exportStar(require("./product/V202309/RecommendCategoryRequestBodyImages"), exports);
__exportStar(require("./product/V202309/RecommendCategoryResponse"), exports);
__exportStar(require("./product/V202309/RecommendCategoryResponseData"), exports);
__exportStar(require("./product/V202309/RecommendCategoryResponseDataCategories"), exports);
__exportStar(require("./product/V202309/RecommendGlobalCategoriesRequestBody"), exports);
__exportStar(require("./product/V202309/RecommendGlobalCategoriesRequestBodyImages"), exports);
__exportStar(require("./product/V202309/RecommendGlobalCategoriesResponse"), exports);
__exportStar(require("./product/V202309/RecommendGlobalCategoriesResponseData"), exports);
__exportStar(require("./product/V202309/RecommendGlobalCategoriesResponseDataCategories"), exports);
__exportStar(require("./product/V202309/RecoverProductsRequestBody"), exports);
__exportStar(require("./product/V202309/RecoverProductsResponse"), exports);
__exportStar(require("./product/V202309/RecoverProductsResponseData"), exports);
__exportStar(require("./product/V202309/RecoverProductsResponseDataErrors"), exports);
__exportStar(require("./product/V202309/RecoverProductsResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/SearchGlobalProductsRequestBody"), exports);
__exportStar(require("./product/V202309/SearchGlobalProductsResponse"), exports);
__exportStar(require("./product/V202309/SearchGlobalProductsResponseData"), exports);
__exportStar(require("./product/V202309/SearchGlobalProductsResponseDataGlobalProducts"), exports);
__exportStar(require("./product/V202309/SearchGlobalProductsResponseDataGlobalProductsSkus"), exports);
__exportStar(require("./product/V202309/SearchProductsRequestBody"), exports);
__exportStar(require("./product/V202309/SearchProductsResponse"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseData"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProducts"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProductsRecommendedCategories"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProductsSkus"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProductsSkusFees"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProductsSkusInventory"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProductsSkusPrice"), exports);
__exportStar(require("./product/V202309/UpdateGlobalInventoryRequestBody"), exports);
__exportStar(require("./product/V202309/UpdateGlobalInventoryRequestBodyGlobalSkus"), exports);
__exportStar(require("./product/V202309/UpdateGlobalInventoryRequestBodyGlobalSkusInventory"), exports);
__exportStar(require("./product/V202309/UpdateGlobalInventoryResponse"), exports);
__exportStar(require("./product/V202309/UpdateInventoryRequestBody"), exports);
__exportStar(require("./product/V202309/UpdateInventoryRequestBodySkus"), exports);
__exportStar(require("./product/V202309/UpdateInventoryRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/UpdateInventoryResponse"), exports);
__exportStar(require("./product/V202309/UpdateInventoryResponseData"), exports);
__exportStar(require("./product/V202309/UpdateInventoryResponseDataErrors"), exports);
__exportStar(require("./product/V202309/UpdateInventoryResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/UpdateInventoryResponseDataErrorsDetailExtraErrors"), exports);
__exportStar(require("./product/V202309/UpdatePriceRequestBody"), exports);
__exportStar(require("./product/V202309/UpdatePriceRequestBodySkus"), exports);
__exportStar(require("./product/V202309/UpdatePriceRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/UpdatePriceRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202309/UpdatePriceRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/UpdatePriceResponse"), exports);
__exportStar(require("./product/V202309/UploadProductFileResponse"), exports);
__exportStar(require("./product/V202309/UploadProductFileResponseData"), exports);
__exportStar(require("./product/V202309/UploadProductImageResponse"), exports);
__exportStar(require("./product/V202309/UploadProductImageResponseData"), exports);
__exportStar(require("./product/V202312/CheckListingPrerequisitesResponse"), exports);
__exportStar(require("./product/V202312/CheckListingPrerequisitesResponseData"), exports);
__exportStar(require("./product/V202312/CheckListingPrerequisitesResponseDataCheckResults"), exports);
__exportStar(require("./product/V202312/SearchGlobalProductsRequestBody"), exports);
__exportStar(require("./product/V202312/SearchGlobalProductsResponse"), exports);
__exportStar(require("./product/V202312/SearchGlobalProductsResponseData"), exports);
__exportStar(require("./product/V202312/SearchGlobalProductsResponseDataGlobalProducts"), exports);
__exportStar(require("./product/V202312/SearchGlobalProductsResponseDataGlobalProductsSkus"), exports);
__exportStar(require("./product/V202312/SearchProductsRequestBody"), exports);
__exportStar(require("./product/V202312/SearchProductsResponse"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseData"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProducts"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsAudit"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsIntegratedPlatformStatuses"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsRecommendedCategories"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkus"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkusExternalListPrices"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkusFees"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkusInventory"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkusListPrice"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkusPrice"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponse"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseData"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataErrors"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemas"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFileds"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValues"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsOptions"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsRules"), exports);
__exportStar(require("./product/V202404/OptimizedImagesRequestBody"), exports);
__exportStar(require("./product/V202404/OptimizedImagesRequestBodyImages"), exports);
__exportStar(require("./product/V202404/OptimizedImagesResponse"), exports);
__exportStar(require("./product/V202404/OptimizedImagesResponseData"), exports);
__exportStar(require("./product/V202404/OptimizedImagesResponseDataImages"), exports);
__exportStar(require("./product/V202405/GetProductsSEOWordsResponse"), exports);
__exportStar(require("./product/V202405/GetProductsSEOWordsResponseData"), exports);
__exportStar(require("./product/V202405/GetProductsSEOWordsResponseDataProducts"), exports);
__exportStar(require("./product/V202405/GetProductsSEOWordsResponseDataProductsSeoWords"), exports);
__exportStar(require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponse"), exports);
__exportStar(require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseData"), exports);
__exportStar(require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProducts"), exports);
__exportStar(require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions"), exports);
__exportStar(require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponse"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseData"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProducts"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnoses"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsListingQuality"), exports);
__exportStar(require("./product/V202407/CreateCategoryUpgradeTaskResponse"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponse"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseData"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataErrors"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemas"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFields"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValues"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsOptions"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsRules"), exports);
__exportStar(require("./product/V202407/SearchSizeChartsRequestBody"), exports);
__exportStar(require("./product/V202407/SearchSizeChartsResponse"), exports);
__exportStar(require("./product/V202407/SearchSizeChartsResponseData"), exports);
__exportStar(require("./product/V202407/SearchSizeChartsResponseDataSizeChart"), exports);
__exportStar(require("./product/V202407/SearchSizeChartsResponseDataSizeChartImages"), exports);
__exportStar(require("./product/V202409/CreateManufacturerRequestBody"), exports);
__exportStar(require("./product/V202409/CreateManufacturerRequestBodyPhoneNumber"), exports);
__exportStar(require("./product/V202409/CreateManufacturerResponse"), exports);
__exportStar(require("./product/V202409/CreateManufacturerResponseData"), exports);
__exportStar(require("./product/V202409/CreateResponsiblePersonRequestBody"), exports);
__exportStar(require("./product/V202409/CreateResponsiblePersonRequestBodyAddress"), exports);
__exportStar(require("./product/V202409/CreateResponsiblePersonRequestBodyPhoneNumber"), exports);
__exportStar(require("./product/V202409/CreateResponsiblePersonResponse"), exports);
__exportStar(require("./product/V202409/CreateResponsiblePersonResponseData"), exports);
__exportStar(require("./product/V202409/PartialEditManufacturerRequestBody"), exports);
__exportStar(require("./product/V202409/PartialEditManufacturerRequestBodyPhoneNumber"), exports);
__exportStar(require("./product/V202409/PartialEditManufacturerResponse"), exports);
__exportStar(require("./product/V202409/PartialEditResponsiblePersonRequestBody"), exports);
__exportStar(require("./product/V202409/PartialEditResponsiblePersonRequestBodyAddress"), exports);
__exportStar(require("./product/V202409/PartialEditResponsiblePersonRequestBodyPhoneNumber"), exports);
__exportStar(require("./product/V202409/PartialEditResponsiblePersonResponse"), exports);
__exportStar(require("./product/V202409/SearchManufacturersRequestBody"), exports);
__exportStar(require("./product/V202409/SearchManufacturersResponse"), exports);
__exportStar(require("./product/V202409/SearchManufacturersResponseData"), exports);
__exportStar(require("./product/V202409/SearchManufacturersResponseDataManufacturers"), exports);
__exportStar(require("./product/V202409/SearchManufacturersResponseDataManufacturersPhoneNumber"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsRequestBody"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsResponse"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsResponseData"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersons"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersonsAddress"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductRequestBody"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductResponse"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductResponseData"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnoses"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnosesDiagnosisResults"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnosesSuggestion"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionImages"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSeoWords"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSmartTexts"), exports);
__exportStar(require("./product/V202411/DiagnoseandOptimizeProductResponseDataListingQuality"), exports);
__exportStar(require("./product/V202501/SearchManufacturersRequestBody"), exports);
__exportStar(require("./product/V202501/SearchManufacturersResponse"), exports);
__exportStar(require("./product/V202501/SearchManufacturersResponseData"), exports);
__exportStar(require("./product/V202501/SearchManufacturersResponseDataManufacturers"), exports);
__exportStar(require("./product/V202501/SearchManufacturersResponseDataManufacturersRegionalProfiles"), exports);
__exportStar(require("./product/V202501/SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsRequestBody"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponse"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponseData"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersons"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber"), exports);
__exportStar(require("./product/V202502/SearchProductsRequestBody"), exports);
__exportStar(require("./product/V202502/SearchProductsResponse"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseData"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProducts"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsAudit"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsIntegratedPlatformStatuses"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsProductFamilies"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsProductFamiliesProducts"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsRecommendedCategories"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkus"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusExternalListPrices"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusFees"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusInventory"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusListPrice"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusPreSale"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusPrice"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusStatusInfo"), exports);
__exportStar(require("./product/V202505/CreateImageTranslationTasksRequestBody"), exports);
__exportStar(require("./product/V202505/CreateImageTranslationTasksRequestBodyImages"), exports);
__exportStar(require("./product/V202505/CreateImageTranslationTasksResponse"), exports);
__exportStar(require("./product/V202505/CreateImageTranslationTasksResponseData"), exports);
__exportStar(require("./product/V202505/CreateImageTranslationTasksResponseDataTranslationTasks"), exports);
__exportStar(require("./product/V202506/GetImageTranslationTasksResponse"), exports);
__exportStar(require("./product/V202506/GetImageTranslationTasksResponseData"), exports);
__exportStar(require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasks"), exports);
__exportStar(require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasksOriginalImage"), exports);
__exportStar(require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage"), exports);
__exportStar(require("./product/V202507/GetGlobalListingRulesResponse"), exports);
__exportStar(require("./product/V202507/GetGlobalListingRulesResponseData"), exports);
__exportStar(require("./product/V202507/GetGlobalListingRulesResponseDataInventoryRules"), exports);
__exportStar(require("./product/V202507/GetGlobalListingRulesResponseDataInventoryRulesAssociatedWarehouses"), exports);
__exportStar(require("./product/V202507/GetGlobalReplicatedProductsResponse"), exports);
__exportStar(require("./product/V202507/GetGlobalReplicatedProductsResponseData"), exports);
__exportStar(require("./product/V202507/GetGlobalReplicatedProductsResponseDataReplicatedProducts"), exports);
__exportStar(require("./product/V202507/ReplicateProductRequestBody"), exports);
__exportStar(require("./product/V202507/ReplicateProductRequestBodyReplicateTarget"), exports);
__exportStar(require("./product/V202507/ReplicateProductRequestBodyReplicateTargetSkus"), exports);
__exportStar(require("./product/V202507/ReplicateProductRequestBodyReplicateTargetSkusInventory"), exports);
__exportStar(require("./product/V202507/ReplicateProductRequestBodyReplicateTargetSkusPrice"), exports);
__exportStar(require("./product/V202507/ReplicateProductResponse"), exports);
__exportStar(require("./product/V202507/ReplicateProductResponseData"), exports);
__exportStar(require("./product/V202507/ReplicateProductResponseDataErrors"), exports);
__exportStar(require("./product/V202507/ReplicateProductResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202509/EditProductRequestBody"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyReplicatedProducts"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyReplicatedProductsSkus"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyReplicatedProductsSkusInventory"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyReplicatedProductsSkusPrice"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkus"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusCombinedSkus"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusFees"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusPreSale"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySubscribeInfoEdit"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodySubscribeInfoEditDiscountDetails"), exports);
__exportStar(require("./product/V202509/EditProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202509/EditProductResponse"), exports);
__exportStar(require("./product/V202509/EditProductResponseData"), exports);
__exportStar(require("./product/V202509/EditProductResponseDataAudit"), exports);
__exportStar(require("./product/V202509/EditProductResponseDataSkus"), exports);
__exportStar(require("./product/V202509/EditProductResponseDataSkusFees"), exports);
__exportStar(require("./product/V202509/EditProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202509/EditProductResponseDataWarnings"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBody"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodyManufacturer"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodySkus"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodySkusSalePrices"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductResponse"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductResponseData"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductResponseDataGlobalSkus"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductResponseDataGlobalSkusSalesAttributes"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductResponseDataPublishResults"), exports);
__exportStar(require("./product/V202509/PartialEditGlobalProductResponseDataPublishResultsFailReasons"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBody"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyReplicatedProducts"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyReplicatedProductsSkus"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyReplicatedProductsSkusInventory"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyReplicatedProductsSkusPrice"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkus"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusFees"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusPreSale"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySubscribeInfoEdit"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodySubscribeInfoEditDiscountDetails"), exports);
__exportStar(require("./product/V202509/PartialEditProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202509/PartialEditProductResponse"), exports);
__exportStar(require("./product/V202509/PartialEditProductResponseData"), exports);
__exportStar(require("./product/V202509/PartialEditProductResponseDataAudit"), exports);
__exportStar(require("./product/V202509/PartialEditProductResponseDataSkus"), exports);
__exportStar(require("./product/V202509/PartialEditProductResponseDataSkusFees"), exports);
__exportStar(require("./product/V202509/PartialEditProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBody"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscount"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountBmsmDiscount"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountBmsmDiscountDetails"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountGiftDiscount"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountGiftDiscountGiftInfos"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountShippingDiscount"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountShippingDiscountAreaScope"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyParticipationLimit"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyTargetUserInfo"), exports);
__exportStar(require("./promotion/V202309/CreateActivityResponse"), exports);
__exportStar(require("./promotion/V202309/CreateActivityResponseData"), exports);
__exportStar(require("./promotion/V202309/DeactivateActivityResponse"), exports);
__exportStar(require("./promotion/V202309/DeactivateActivityResponseData"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponse"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseData"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscount"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountBmsmDiscount"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountBmsmDiscountDetails"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountGiftDiscount"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountGiftDiscountGiftInfos"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountGiftDiscountGiftInfosGiftDetails"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountShippingDiscount"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountShippingDiscountAreaScope"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataParticipationLimit"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataProducts"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataProductsActivityPrice"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataProductsSkus"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataProductsSkusActivityPrice"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataTargetUserInfo"), exports);
__exportStar(require("./promotion/V202309/RemoveActivityProductRequestBody"), exports);
__exportStar(require("./promotion/V202309/RemoveActivityProductResponse"), exports);
__exportStar(require("./promotion/V202309/RemoveActivityProductResponseData"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesRequestBody"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponse"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseData"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivities"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscount"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountGiftDiscount"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfosGiftDetails"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountShippingDiscount"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesParticipationLimit"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityProductRequestBody"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityProductRequestBodyProducts"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityProductRequestBodyProductsSkus"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityProductResponse"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityProductResponseData"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBody"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscount"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountBmsmDiscount"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountBmsmDiscountDetails"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountGiftDiscount"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountShippingDiscount"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountShippingDiscountAreaScope"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyParticipationLimit"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyTargetUserInfo"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityResponse"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityResponseData"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponse"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseData"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCoupon"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponClaimDuration"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponDiscount"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponDiscountMaxDiscount"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponDiscountReductionAmount"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponLiveTasks"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponRedemptionDuration"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponThreshold"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponThresholdMinSpend"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponUsageLimits"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponUsageStats"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsRequestBody"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponse"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseData"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCoupons"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsClaimDuration"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscount"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscountMaxDiscount"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscountReductionAmount"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsRedemptionDuration"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsThreshold"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsThresholdMinSpend"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsUsageLimits"), exports);
__exportStar(require("./returnRefund/V202309/ApproveCancellationResponse"), exports);
__exportStar(require("./returnRefund/V202309/ApproveReturnRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/ApproveReturnRequestBodyPartialRefund"), exports);
__exportStar(require("./returnRefund/V202309/ApproveReturnResponse"), exports);
__exportStar(require("./returnRefund/V202309/CalculateRefundRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/CalculateRefundRequestBodySkus"), exports);
__exportStar(require("./returnRefund/V202309/CalculateRefundResponse"), exports);
__exportStar(require("./returnRefund/V202309/CalculateRefundResponseData"), exports);
__exportStar(require("./returnRefund/V202309/CalculateRefundResponseDataOrderRefundAmount"), exports);
__exportStar(require("./returnRefund/V202309/CancelOrderRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/CancelOrderRequestBodySkus"), exports);
__exportStar(require("./returnRefund/V202309/CancelOrderResponse"), exports);
__exportStar(require("./returnRefund/V202309/CancelOrderResponseData"), exports);
__exportStar(require("./returnRefund/V202309/CreateReturnRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/CreateReturnRequestBodySkus"), exports);
__exportStar(require("./returnRefund/V202309/CreateReturnResponse"), exports);
__exportStar(require("./returnRefund/V202309/CreateReturnResponseData"), exports);
__exportStar(require("./returnRefund/V202309/GetAftersaleEligibilityResponse"), exports);
__exportStar(require("./returnRefund/V202309/GetAftersaleEligibilityResponseData"), exports);
__exportStar(require("./returnRefund/V202309/GetAftersaleEligibilityResponseDataSkuEligibility"), exports);
__exportStar(require("./returnRefund/V202309/GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility"), exports);
__exportStar(require("./returnRefund/V202309/GetRejectReasonsResponse"), exports);
__exportStar(require("./returnRefund/V202309/GetRejectReasonsResponseData"), exports);
__exportStar(require("./returnRefund/V202309/GetRejectReasonsResponseDataReasons"), exports);
__exportStar(require("./returnRefund/V202309/GetReturnRecordsResponse"), exports);
__exportStar(require("./returnRefund/V202309/GetReturnRecordsResponseData"), exports);
__exportStar(require("./returnRefund/V202309/GetReturnRecordsResponseDataRecords"), exports);
__exportStar(require("./returnRefund/V202309/GetReturnRecordsResponseDataRecordsImages"), exports);
__exportStar(require("./returnRefund/V202309/GetReturnRecordsResponseDataRecordsVideos"), exports);
__exportStar(require("./returnRefund/V202309/RejectCancellationRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/RejectCancellationRequestBodyImages"), exports);
__exportStar(require("./returnRefund/V202309/RejectCancellationResponse"), exports);
__exportStar(require("./returnRefund/V202309/RejectReturnRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/RejectReturnRequestBodyImages"), exports);
__exportStar(require("./returnRefund/V202309/RejectReturnResponse"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponse"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseData"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellations"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItems"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsRefundAmount"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsSellerNextActionResponse"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponse"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseData"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrders"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersDiscountAmount"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersPartialRefund"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersRefundAmount"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItems"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersSellerNextActionResponse"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersShippingFeeAmount"), exports);
__exportStar(require("./seller/V202309/GetActiveShopsResponse"), exports);
__exportStar(require("./seller/V202309/GetActiveShopsResponseData"), exports);
__exportStar(require("./seller/V202309/GetActiveShopsResponseDataShops"), exports);
__exportStar(require("./seller/V202309/GetSellerPermissionsResponse"), exports);
__exportStar(require("./seller/V202309/GetSellerPermissionsResponseData"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentRequestBody"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackages"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesDimension"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesSkus"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesWeight"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentResponse"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentResponseData"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentResponseDataErrors"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentResponseDataErrorsDetail"), exports);
const GetShopPerformanceResponse_1 = require("./analytics/V202405/GetShopPerformanceResponse");
const GetShopPerformanceResponseData_1 = require("./analytics/V202405/GetShopPerformanceResponseData");
const GetShopPerformanceResponseDataPerformance_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformance");
const GetShopPerformanceResponseDataPerformanceComparisonIntervals_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervals");
const GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgOrderValue_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgOrderValue");
const GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgProductPageVisitorBreakdowns_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgProductPageVisitorBreakdowns");
const GetShopPerformanceResponseDataPerformanceComparisonIntervalsBuyerBreakdowns_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsBuyerBreakdowns");
const GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmv_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmv");
const GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns");
const GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductImpressionBreakdowns_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductImpressionBreakdowns");
const GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductPageViewBreakdowns_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductPageViewBreakdowns");
const GetShopPerformanceResponseDataPerformanceComparisonIntervalsRefunds_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceComparisonIntervalsRefunds");
const GetShopPerformanceResponseDataPerformanceIntervals_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervals");
const GetShopPerformanceResponseDataPerformanceIntervalsAvgOrderValue_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsAvgOrderValue");
const GetShopPerformanceResponseDataPerformanceIntervalsAvgProductPageVisitorBreakdowns_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsAvgProductPageVisitorBreakdowns");
const GetShopPerformanceResponseDataPerformanceIntervalsBuyerBreakdowns_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsBuyerBreakdowns");
const GetShopPerformanceResponseDataPerformanceIntervalsGmv_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsGmv");
const GetShopPerformanceResponseDataPerformanceIntervalsGmvBreakdowns_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsGmvBreakdowns");
const GetShopPerformanceResponseDataPerformanceIntervalsProductImpressionBreakdowns_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsProductImpressionBreakdowns");
const GetShopPerformanceResponseDataPerformanceIntervalsProductPageViewBreakdowns_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsProductPageViewBreakdowns");
const GetShopPerformanceResponseDataPerformanceIntervalsRefunds_1 = require("./analytics/V202405/GetShopPerformanceResponseDataPerformanceIntervalsRefunds");
const GetShopProductPerformanceListResponse_1 = require("./analytics/V202405/GetShopProductPerformanceListResponse");
const GetShopProductPerformanceListResponseData_1 = require("./analytics/V202405/GetShopProductPerformanceListResponseData");
const GetShopProductPerformanceListResponseDataProducts_1 = require("./analytics/V202405/GetShopProductPerformanceListResponseDataProducts");
const GetShopProductPerformanceListResponseDataProductsGmv_1 = require("./analytics/V202405/GetShopProductPerformanceListResponseDataProductsGmv");
const GetShopProductPerformanceResponse_1 = require("./analytics/V202405/GetShopProductPerformanceResponse");
const GetShopProductPerformanceResponseData_1 = require("./analytics/V202405/GetShopProductPerformanceResponseData");
const GetShopProductPerformanceResponseDataPerformance_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformance");
const GetShopProductPerformanceResponseDataPerformanceComparisonIntervals_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervals");
const GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsAvgPageVisitorBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsAvgPageVisitorBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsClickThroughRateBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsClickThroughRateBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmv_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmv");
const GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsImpressionBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsImpressionBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsPageViewBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsPageViewBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsUnitSoldBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsUnitSoldBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceIntervals_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervals");
const GetShopProductPerformanceResponseDataPerformanceIntervalsAvgPageVisitorBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsAvgPageVisitorBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceIntervalsClickThroughRateBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsClickThroughRateBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceIntervalsGmv_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsGmv");
const GetShopProductPerformanceResponseDataPerformanceIntervalsGmvBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsGmvBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceIntervalsImpressionBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsImpressionBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceIntervalsPageViewBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsPageViewBreakdowns");
const GetShopProductPerformanceResponseDataPerformanceIntervalsUnitSoldBreakdowns_1 = require("./analytics/V202405/GetShopProductPerformanceResponseDataPerformanceIntervalsUnitSoldBreakdowns");
const GetShopSKUPerformanceListResponse_1 = require("./analytics/V202406/GetShopSKUPerformanceListResponse");
const GetShopSKUPerformanceListResponseData_1 = require("./analytics/V202406/GetShopSKUPerformanceListResponseData");
const GetShopSKUPerformanceListResponseDataSkus_1 = require("./analytics/V202406/GetShopSKUPerformanceListResponseDataSkus");
const GetShopSKUPerformanceListResponseDataSkusGmv_1 = require("./analytics/V202406/GetShopSKUPerformanceListResponseDataSkusGmv");
const GetShopSKUPerformanceResponse_1 = require("./analytics/V202406/GetShopSKUPerformanceResponse");
const GetShopSKUPerformanceResponseData_1 = require("./analytics/V202406/GetShopSKUPerformanceResponseData");
const GetShopSKUPerformanceResponseDataPerformance_1 = require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformance");
const GetShopSKUPerformanceResponseDataPerformanceComparisonIntervals_1 = require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceComparisonIntervals");
const GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmv_1 = require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmv");
const GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdown_1 = require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdown");
const GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsUnitsSoldBreakdown_1 = require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsUnitsSoldBreakdown");
const GetShopSKUPerformanceResponseDataPerformanceIntervals_1 = require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceIntervals");
const GetShopSKUPerformanceResponseDataPerformanceIntervalsGmv_1 = require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceIntervalsGmv");
const GetShopSKUPerformanceResponseDataPerformanceIntervalsGmvBreakdown_1 = require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceIntervalsGmvBreakdown");
const GetShopSKUPerformanceResponseDataPerformanceIntervalsUnitsSoldBreakdown_1 = require("./analytics/V202406/GetShopSKUPerformanceResponseDataPerformanceIntervalsUnitsSoldBreakdown");
const GetShopVideoPerformanceDetailsResponse_1 = require("./analytics/V202409/GetShopVideoPerformanceDetailsResponse");
const GetShopVideoPerformanceDetailsResponseData_1 = require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseData");
const GetShopVideoPerformanceDetailsResponseDataEngagementData_1 = require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataEngagementData");
const GetShopVideoPerformanceDetailsResponseDataPerformance_1 = require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataPerformance");
const GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervals_1 = require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervals");
const GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervalsGmv_1 = require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervalsGmv");
const GetShopVideoPerformanceDetailsResponseDataPerformanceIntervals_1 = require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataPerformanceIntervals");
const GetShopVideoPerformanceDetailsResponseDataPerformanceIntervalsGmv_1 = require("./analytics/V202409/GetShopVideoPerformanceDetailsResponseDataPerformanceIntervalsGmv");
const GetShopVideoPerformanceListResponse_1 = require("./analytics/V202409/GetShopVideoPerformanceListResponse");
const GetShopVideoPerformanceListResponseData_1 = require("./analytics/V202409/GetShopVideoPerformanceListResponseData");
const GetShopVideoPerformanceListResponseDataVideos_1 = require("./analytics/V202409/GetShopVideoPerformanceListResponseDataVideos");
const GetShopVideoPerformanceListResponseDataVideosGmv_1 = require("./analytics/V202409/GetShopVideoPerformanceListResponseDataVideosGmv");
const GetShopVideoPerformanceListResponseDataVideosProducts_1 = require("./analytics/V202409/GetShopVideoPerformanceListResponseDataVideosProducts");
const GetShopVideoPerformanceOverviewResponse_1 = require("./analytics/V202409/GetShopVideoPerformanceOverviewResponse");
const GetShopVideoPerformanceOverviewResponseData_1 = require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseData");
const GetShopVideoPerformanceOverviewResponseDataPerformance_1 = require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseDataPerformance");
const GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervals_1 = require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervals");
const GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv_1 = require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv");
const GetShopVideoPerformanceOverviewResponseDataPerformanceIntervals_1 = require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseDataPerformanceIntervals");
const GetShopVideoPerformanceOverviewResponseDataPerformanceIntervalsGmv_1 = require("./analytics/V202409/GetShopVideoPerformanceOverviewResponseDataPerformanceIntervalsGmv");
const GetShopVideoProductPerformanceListResponse_1 = require("./analytics/V202409/GetShopVideoProductPerformanceListResponse");
const GetShopVideoProductPerformanceListResponseData_1 = require("./analytics/V202409/GetShopVideoProductPerformanceListResponseData");
const GetShopVideoProductPerformanceListResponseDataProducts_1 = require("./analytics/V202409/GetShopVideoProductPerformanceListResponseDataProducts");
const GetShopVideoProductPerformanceListResponseDataProductsGmv_1 = require("./analytics/V202409/GetShopVideoProductPerformanceListResponseDataProductsGmv");
const GetShopLIVEPerformanceListResponse_1 = require("./analytics/V202508/GetShopLIVEPerformanceListResponse");
const GetShopLIVEPerformanceListResponseData_1 = require("./analytics/V202508/GetShopLIVEPerformanceListResponseData");
const GetShopLIVEPerformanceListResponseDataLiveStreamSessions_1 = require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessions");
const GetShopLIVEPerformanceListResponseDataLiveStreamSessionsInteractionPerformance_1 = require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessionsInteractionPerformance");
const GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance_1 = require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance");
const GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance24hLiveGmv_1 = require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance24hLiveGmv");
const GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceAvgPrice_1 = require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceAvgPrice");
const GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceGmv_1 = require("./analytics/V202508/GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceGmv");
const GetShopLIVEPerformanceOverviewResponse_1 = require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponse");
const GetShopLIVEPerformanceOverviewResponseData_1 = require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseData");
const GetShopLIVEPerformanceOverviewResponseDataPerformance_1 = require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseDataPerformance");
const GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervals_1 = require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervals");
const GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv_1 = require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv");
const GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervals_1 = require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervals");
const GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervalsGmv_1 = require("./analytics/V202508/GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervalsGmv");
const GetAuthorizedShopsResponse_1 = require("./authorization/V202309/GetAuthorizedShopsResponse");
const GetAuthorizedShopsResponseData_1 = require("./authorization/V202309/GetAuthorizedShopsResponseData");
const GetAuthorizedShopsResponseDataShops_1 = require("./authorization/V202309/GetAuthorizedShopsResponseDataShops");
const GetWidgetTokenResponse_1 = require("./authorization/V202312/GetWidgetTokenResponse");
const GetWidgetTokenResponseData_1 = require("./authorization/V202312/GetWidgetTokenResponseData");
const GetWidgetTokenResponseDataWidgetToken_1 = require("./authorization/V202312/GetWidgetTokenResponseDataWidgetToken");
const GetWidgetTokenResponse_2 = require("./authorization/V202401/GetWidgetTokenResponse");
const GetWidgetTokenResponseData_2 = require("./authorization/V202401/GetWidgetTokenResponseData");
const GetWidgetTokenResponseDataWidgetToken_2 = require("./authorization/V202401/GetWidgetTokenResponseDataWidgetToken");
const DeauthorizeShopResponse_1 = require("./authorization/V202403/DeauthorizeShopResponse");
const CreateConversationRequestBody_1 = require("./customerService/V202309/CreateConversationRequestBody");
const CreateConversationResponse_1 = require("./customerService/V202309/CreateConversationResponse");
const CreateConversationResponseData_1 = require("./customerService/V202309/CreateConversationResponseData");
const GetAgentSettingsResponse_1 = require("./customerService/V202309/GetAgentSettingsResponse");
const GetAgentSettingsResponseData_1 = require("./customerService/V202309/GetAgentSettingsResponseData");
const GetConversationMessagesResponse_1 = require("./customerService/V202309/GetConversationMessagesResponse");
const GetConversationMessagesResponseData_1 = require("./customerService/V202309/GetConversationMessagesResponseData");
const GetConversationMessagesResponseDataMessages_1 = require("./customerService/V202309/GetConversationMessagesResponseDataMessages");
const GetConversationMessagesResponseDataMessagesSender_1 = require("./customerService/V202309/GetConversationMessagesResponseDataMessagesSender");
const GetConversationsResponse_1 = require("./customerService/V202309/GetConversationsResponse");
const GetConversationsResponseData_1 = require("./customerService/V202309/GetConversationsResponseData");
const GetConversationsResponseDataConversations_1 = require("./customerService/V202309/GetConversationsResponseDataConversations");
const GetConversationsResponseDataConversationsLatestMessage_1 = require("./customerService/V202309/GetConversationsResponseDataConversationsLatestMessage");
const GetConversationsResponseDataConversationsLatestMessageSender_1 = require("./customerService/V202309/GetConversationsResponseDataConversationsLatestMessageSender");
const GetConversationsResponseDataConversationsParticipants_1 = require("./customerService/V202309/GetConversationsResponseDataConversationsParticipants");
const ReadMessageResponse_1 = require("./customerService/V202309/ReadMessageResponse");
const SendMessageRequestBody_1 = require("./customerService/V202309/SendMessageRequestBody");
const SendMessageResponse_1 = require("./customerService/V202309/SendMessageResponse");
const SendMessageResponseData_1 = require("./customerService/V202309/SendMessageResponseData");
const UpdateAgentSettingsRequestBody_1 = require("./customerService/V202309/UpdateAgentSettingsRequestBody");
const UpdateAgentSettingsResponse_1 = require("./customerService/V202309/UpdateAgentSettingsResponse");
const UploadBuyerMessagesImageResponse_1 = require("./customerService/V202309/UploadBuyerMessagesImageResponse");
const UploadBuyerMessagesImageResponseData_1 = require("./customerService/V202309/UploadBuyerMessagesImageResponseData");
const GetCustomerServicePerformanceResponse_1 = require("./customerService/V202407/GetCustomerServicePerformanceResponse");
const GetCustomerServicePerformanceResponseData_1 = require("./customerService/V202407/GetCustomerServicePerformanceResponseData");
const GetCustomerServicePerformanceResponseDataPerformance_1 = require("./customerService/V202407/GetCustomerServicePerformanceResponseDataPerformance");
const OrderStatusDataExchangeRequestBody_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBody");
const OrderStatusDataExchangeRequestBodyOrders_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBodyOrders");
const OrderStatusDataExchangeRequestBodyOrdersPackages_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBodyOrdersPackages");
const OrderStatusDataExchangeResponse_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeResponse");
const OrderStatusDataExchangeResponseData_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseData");
const OrderStatusDataExchangeResponseDataErrors_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrors");
const OrderStatusDataExchangeResponseDataErrorsDetail_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrorsDetail");
const OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors");
const QualityFactoryOrderDataImportAPIRequestBody_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBody");
const QualityFactoryOrderDataImportAPIRequestBodyOrders_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBodyOrders");
const QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages");
const QualityFactoryOrderDataImportAPIResponse_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponse");
const QualityFactoryOrderDataImportAPIResponseData_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseData");
const QualityFactoryOrderDataImportAPIResponseDataErrors_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrors");
const QualityFactoryOrderDataImportAPIResponseDataErrorsDetail_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrorsDetail");
const QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors");
const QualityFactoryOrderDataImportAPIRequestBody_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBody");
const QualityFactoryOrderDataImportAPIRequestBodyOrders_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBodyOrders");
const QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages");
const QualityFactoryOrderDataImportAPIResponse_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponse");
const QualityFactoryOrderDataImportAPIResponseData_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseData");
const QualityFactoryOrderDataImportAPIResponseDataErrors_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrors");
const QualityFactoryOrderDataImportAPIResponseDataErrorsDetail_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrorsDetail");
const QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors");
const DeleteShopWebhookRequestBody_1 = require("./event/V202309/DeleteShopWebhookRequestBody");
const DeleteShopWebhookResponse_1 = require("./event/V202309/DeleteShopWebhookResponse");
const GetShopWebhooksResponse_1 = require("./event/V202309/GetShopWebhooksResponse");
const GetShopWebhooksResponseData_1 = require("./event/V202309/GetShopWebhooksResponseData");
const GetShopWebhooksResponseDataWebhooks_1 = require("./event/V202309/GetShopWebhooksResponseDataWebhooks");
const UpdateShopWebhookRequestBody_1 = require("./event/V202309/UpdateShopWebhookRequestBody");
const UpdateShopWebhookResponse_1 = require("./event/V202309/UpdateShopWebhookResponse");
const GetPaymentsResponse_1 = require("./finance/V202309/GetPaymentsResponse");
const GetPaymentsResponseData_1 = require("./finance/V202309/GetPaymentsResponseData");
const GetPaymentsResponseDataPayments_1 = require("./finance/V202309/GetPaymentsResponseDataPayments");
const GetPaymentsResponseDataPaymentsAmount_1 = require("./finance/V202309/GetPaymentsResponseDataPaymentsAmount");
const GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange_1 = require("./finance/V202309/GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange");
const GetPaymentsResponseDataPaymentsReserveAmount_1 = require("./finance/V202309/GetPaymentsResponseDataPaymentsReserveAmount");
const GetPaymentsResponseDataPaymentsSettlementAmount_1 = require("./finance/V202309/GetPaymentsResponseDataPaymentsSettlementAmount");
const GetStatementsResponse_1 = require("./finance/V202309/GetStatementsResponse");
const GetStatementsResponseData_1 = require("./finance/V202309/GetStatementsResponseData");
const GetStatementsResponseDataStatements_1 = require("./finance/V202309/GetStatementsResponseDataStatements");
const GetTransactionsbyOrderResponse_1 = require("./finance/V202309/GetTransactionsbyOrderResponse");
const GetTransactionsbyOrderResponseData_1 = require("./finance/V202309/GetTransactionsbyOrderResponseData");
const GetTransactionsbyOrderResponseDataStatementTransactions_1 = require("./finance/V202309/GetTransactionsbyOrderResponseDataStatementTransactions");
const GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions_1 = require("./finance/V202309/GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions");
const GetTransactionsbyStatementResponse_1 = require("./finance/V202309/GetTransactionsbyStatementResponse");
const GetTransactionsbyStatementResponseData_1 = require("./finance/V202309/GetTransactionsbyStatementResponseData");
const GetTransactionsbyStatementResponseDataStatementTransactions_1 = require("./finance/V202309/GetTransactionsbyStatementResponseDataStatementTransactions");
const GetWithdrawalsResponse_1 = require("./finance/V202309/GetWithdrawalsResponse");
const GetWithdrawalsResponseData_1 = require("./finance/V202309/GetWithdrawalsResponseData");
const GetWithdrawalsResponseDataWithdrawals_1 = require("./finance/V202309/GetWithdrawalsResponseDataWithdrawals");
const GetTransactionsbyOrderResponse_2 = require("./finance/V202501/GetTransactionsbyOrderResponse");
const GetTransactionsbyOrderResponseData_2 = require("./finance/V202501/GetTransactionsbyOrderResponseData");
const GetTransactionsbyOrderResponseDataSkuTransactions_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactions");
const GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown");
const GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee");
const GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax");
const GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown");
const GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown");
const GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent");
const GetTransactionsbyStatementResponse_2 = require("./finance/V202501/GetTransactionsbyStatementResponse");
const GetTransactionsbyStatementResponseData_2 = require("./finance/V202501/GetTransactionsbyStatementResponseData");
const GetTransactionsbyStatementResponseDataTotalSettlementBreakdown_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTotalSettlementBreakdown");
const GetTransactionsbyStatementResponseDataTransactions_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactions");
const GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown");
const GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee");
const GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax");
const GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown");
const GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown");
const GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent");
const GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent");
const GetUnsettledTransactionsResponse_1 = require("./finance/V202507/GetUnsettledTransactionsResponse");
const GetUnsettledTransactionsResponseData_1 = require("./finance/V202507/GetUnsettledTransactionsResponseData");
const GetUnsettledTransactionsResponseDataTransactions_1 = require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactions");
const GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown_1 = require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown");
const GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownFee_1 = require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownFee");
const GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax_1 = require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax");
const GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown_1 = require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown");
const GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown_1 = require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown");
const GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdownSupplementaryComponent_1 = require("./finance/V202507/GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdownSupplementaryComponent");
const BatchShipPackagesRequestBody_1 = require("./fulfillment/V202309/BatchShipPackagesRequestBody");
const BatchShipPackagesRequestBodyPackages_1 = require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackages");
const BatchShipPackagesRequestBodyPackagesPickupSlot_1 = require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackagesPickupSlot");
const BatchShipPackagesRequestBodyPackagesSelfShipment_1 = require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackagesSelfShipment");
const BatchShipPackagesResponse_1 = require("./fulfillment/V202309/BatchShipPackagesResponse");
const BatchShipPackagesResponseData_1 = require("./fulfillment/V202309/BatchShipPackagesResponseData");
const BatchShipPackagesResponseDataErrors_1 = require("./fulfillment/V202309/BatchShipPackagesResponseDataErrors");
const BatchShipPackagesResponseDataErrorsDetail_1 = require("./fulfillment/V202309/BatchShipPackagesResponseDataErrorsDetail");
const CombinePackageRequestBody_1 = require("./fulfillment/V202309/CombinePackageRequestBody");
const CombinePackageRequestBodyCombinablePackages_1 = require("./fulfillment/V202309/CombinePackageRequestBodyCombinablePackages");
const CombinePackageResponse_1 = require("./fulfillment/V202309/CombinePackageResponse");
const CombinePackageResponseData_1 = require("./fulfillment/V202309/CombinePackageResponseData");
const CombinePackageResponseDataErrors_1 = require("./fulfillment/V202309/CombinePackageResponseDataErrors");
const CombinePackageResponseDataErrorsDetail_1 = require("./fulfillment/V202309/CombinePackageResponseDataErrorsDetail");
const CombinePackageResponseDataPackages_1 = require("./fulfillment/V202309/CombinePackageResponseDataPackages");
const CreatePackagesRequestBody_1 = require("./fulfillment/V202309/CreatePackagesRequestBody");
const CreatePackagesRequestBodyDimension_1 = require("./fulfillment/V202309/CreatePackagesRequestBodyDimension");
const CreatePackagesRequestBodyWeight_1 = require("./fulfillment/V202309/CreatePackagesRequestBodyWeight");
const CreatePackagesResponse_1 = require("./fulfillment/V202309/CreatePackagesResponse");
const CreatePackagesResponseData_1 = require("./fulfillment/V202309/CreatePackagesResponseData");
const CreatePackagesResponseDataDimension_1 = require("./fulfillment/V202309/CreatePackagesResponseDataDimension");
const CreatePackagesResponseDataShippingServiceInfo_1 = require("./fulfillment/V202309/CreatePackagesResponseDataShippingServiceInfo");
const CreatePackagesResponseDataWeight_1 = require("./fulfillment/V202309/CreatePackagesResponseDataWeight");
const FulfillmentUploadDeliveryFileResponse_1 = require("./fulfillment/V202309/FulfillmentUploadDeliveryFileResponse");
const FulfillmentUploadDeliveryFileResponseData_1 = require("./fulfillment/V202309/FulfillmentUploadDeliveryFileResponseData");
const FulfillmentUploadDeliveryImageResponse_1 = require("./fulfillment/V202309/FulfillmentUploadDeliveryImageResponse");
const FulfillmentUploadDeliveryImageResponseData_1 = require("./fulfillment/V202309/FulfillmentUploadDeliveryImageResponseData");
const GetEligibleShippingServiceRequestBody_1 = require("./fulfillment/V202309/GetEligibleShippingServiceRequestBody");
const GetEligibleShippingServiceRequestBodyDimension_1 = require("./fulfillment/V202309/GetEligibleShippingServiceRequestBodyDimension");
const GetEligibleShippingServiceRequestBodyWeight_1 = require("./fulfillment/V202309/GetEligibleShippingServiceRequestBodyWeight");
const GetEligibleShippingServiceResponse_1 = require("./fulfillment/V202309/GetEligibleShippingServiceResponse");
const GetEligibleShippingServiceResponseData_1 = require("./fulfillment/V202309/GetEligibleShippingServiceResponseData");
const GetEligibleShippingServiceResponseDataDimension_1 = require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataDimension");
const GetEligibleShippingServiceResponseDataShippingServices_1 = require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataShippingServices");
const GetEligibleShippingServiceResponseDataWeight_1 = require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataWeight");
const GetHandoverTimeslotsResponse_1 = require("./fulfillment/V202309/GetHandoverTimeslotsResponse");
const GetHandoverTimeslotsResponseData_1 = require("./fulfillment/V202309/GetHandoverTimeslotsResponseData");
const GetHandoverTimeslotsResponseDataPickupSlots_1 = require("./fulfillment/V202309/GetHandoverTimeslotsResponseDataPickupSlots");
const GetOrderSplitAttributesResponse_1 = require("./fulfillment/V202309/GetOrderSplitAttributesResponse");
const GetOrderSplitAttributesResponseData_1 = require("./fulfillment/V202309/GetOrderSplitAttributesResponseData");
const GetOrderSplitAttributesResponseDataSplitAttributes_1 = require("./fulfillment/V202309/GetOrderSplitAttributesResponseDataSplitAttributes");
const GetOrderSplitAttributesResponseDataSplitAttributesMustSplitReasons_1 = require("./fulfillment/V202309/GetOrderSplitAttributesResponseDataSplitAttributesMustSplitReasons");
const GetPackageDetailResponse_1 = require("./fulfillment/V202309/GetPackageDetailResponse");
const GetPackageDetailResponseData_1 = require("./fulfillment/V202309/GetPackageDetailResponseData");
const GetPackageDetailResponseDataDimension_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataDimension");
const GetPackageDetailResponseDataInsurance_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataInsurance");
const GetPackageDetailResponseDataOrders_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataOrders");
const GetPackageDetailResponseDataOrdersSkus_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataOrdersSkus");
const GetPackageDetailResponseDataPickupSlot_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataPickupSlot");
const GetPackageDetailResponseDataRecipientAddress_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataRecipientAddress");
const GetPackageDetailResponseDataSenderAddress_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataSenderAddress");
const GetPackageDetailResponseDataWeight_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataWeight");
const GetPackageHandoverTimeSlotsResponse_1 = require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponse");
const GetPackageHandoverTimeSlotsResponseData_1 = require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponseData");
const GetPackageHandoverTimeSlotsResponseDataPickupSlots_1 = require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponseDataPickupSlots");
const GetPackageShippingDocumentResponse_1 = require("./fulfillment/V202309/GetPackageShippingDocumentResponse");
const GetPackageShippingDocumentResponseData_1 = require("./fulfillment/V202309/GetPackageShippingDocumentResponseData");
const GetTrackingResponse_1 = require("./fulfillment/V202309/GetTrackingResponse");
const GetTrackingResponseData_1 = require("./fulfillment/V202309/GetTrackingResponseData");
const GetTrackingResponseDataTracking_1 = require("./fulfillment/V202309/GetTrackingResponseDataTracking");
const MarkPackageAsShippedRequestBody_1 = require("./fulfillment/V202309/MarkPackageAsShippedRequestBody");
const MarkPackageAsShippedResponse_1 = require("./fulfillment/V202309/MarkPackageAsShippedResponse");
const MarkPackageAsShippedResponseData_1 = require("./fulfillment/V202309/MarkPackageAsShippedResponseData");
const MarkPackageAsShippedResponseDataWarning_1 = require("./fulfillment/V202309/MarkPackageAsShippedResponseDataWarning");
const SchedulePackageHandoverRequestBody_1 = require("./fulfillment/V202309/SchedulePackageHandoverRequestBody");
const SchedulePackageHandoverRequestBodyPickupSlot_1 = require("./fulfillment/V202309/SchedulePackageHandoverRequestBodyPickupSlot");
const SchedulePackageHandoverResponse_1 = require("./fulfillment/V202309/SchedulePackageHandoverResponse");
const SchedulePackageHandoverResponseData_1 = require("./fulfillment/V202309/SchedulePackageHandoverResponseData");
const SchedulePackageHandoverResponseDataDimension_1 = require("./fulfillment/V202309/SchedulePackageHandoverResponseDataDimension");
const SchedulePackageHandoverResponseDataWeight_1 = require("./fulfillment/V202309/SchedulePackageHandoverResponseDataWeight");
const SearchCombinablePackagesResponse_1 = require("./fulfillment/V202309/SearchCombinablePackagesResponse");
const SearchCombinablePackagesResponseData_1 = require("./fulfillment/V202309/SearchCombinablePackagesResponseData");
const SearchCombinablePackagesResponseDataCombinablePackages_1 = require("./fulfillment/V202309/SearchCombinablePackagesResponseDataCombinablePackages");
const SearchPackageRequestBody_1 = require("./fulfillment/V202309/SearchPackageRequestBody");
const SearchPackageResponse_1 = require("./fulfillment/V202309/SearchPackageResponse");
const SearchPackageResponseData_1 = require("./fulfillment/V202309/SearchPackageResponseData");
const SearchPackageResponseDataPackages_1 = require("./fulfillment/V202309/SearchPackageResponseDataPackages");
const SearchPackageResponseDataPackagesOrders_1 = require("./fulfillment/V202309/SearchPackageResponseDataPackagesOrders");
const SearchPackageResponseDataPackagesOrdersSkus_1 = require("./fulfillment/V202309/SearchPackageResponseDataPackagesOrdersSkus");
const ShipPackageRequestBody_1 = require("./fulfillment/V202309/ShipPackageRequestBody");
const ShipPackageRequestBodyPickupSlot_1 = require("./fulfillment/V202309/ShipPackageRequestBodyPickupSlot");
const ShipPackageRequestBodySelfShipment_1 = require("./fulfillment/V202309/ShipPackageRequestBodySelfShipment");
const ShipPackageResponse_1 = require("./fulfillment/V202309/ShipPackageResponse");
const SplitOrdersRequestBody_1 = require("./fulfillment/V202309/SplitOrdersRequestBody");
const SplitOrdersRequestBodySplittableGroups_1 = require("./fulfillment/V202309/SplitOrdersRequestBodySplittableGroups");
const SplitOrdersResponse_1 = require("./fulfillment/V202309/SplitOrdersResponse");
const SplitOrdersResponseData_1 = require("./fulfillment/V202309/SplitOrdersResponseData");
const SplitOrdersResponseDataPackages_1 = require("./fulfillment/V202309/SplitOrdersResponseDataPackages");
const UncombinePackagesRequestBody_1 = require("./fulfillment/V202309/UncombinePackagesRequestBody");
const UncombinePackagesResponse_1 = require("./fulfillment/V202309/UncombinePackagesResponse");
const UncombinePackagesResponseData_1 = require("./fulfillment/V202309/UncombinePackagesResponseData");
const UncombinePackagesResponseDataPackages_1 = require("./fulfillment/V202309/UncombinePackagesResponseDataPackages");
const UpdatePackageDeliveryStatusRequestBody_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusRequestBody");
const UpdatePackageDeliveryStatusRequestBodyPackages_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusRequestBodyPackages");
const UpdatePackageDeliveryStatusResponse_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponse");
const UpdatePackageDeliveryStatusResponseData_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseData");
const UpdatePackageDeliveryStatusResponseDataErrors_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseDataErrors");
const UpdatePackageDeliveryStatusResponseDataErrorsDetail_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseDataErrorsDetail");
const UpdatePackageShippingInfoRequestBody_1 = require("./fulfillment/V202309/UpdatePackageShippingInfoRequestBody");
const UpdatePackageShippingInfoResponse_1 = require("./fulfillment/V202309/UpdatePackageShippingInfoResponse");
const UpdateShippingInfoRequestBody_1 = require("./fulfillment/V202309/UpdateShippingInfoRequestBody");
const UpdateShippingInfoResponse_1 = require("./fulfillment/V202309/UpdateShippingInfoResponse");
const CreateFirstMileBundleRequestBody_1 = require("./fulfillment/V202407/CreateFirstMileBundleRequestBody");
const CreateFirstMileBundleResponse_1 = require("./fulfillment/V202407/CreateFirstMileBundleResponse");
const CreateFirstMileBundleResponseData_1 = require("./fulfillment/V202407/CreateFirstMileBundleResponseData");
const CreateFirstMileBundleResponseDataErrors_1 = require("./fulfillment/V202407/CreateFirstMileBundleResponseDataErrors");
const CreateFirstMileBundleResponseDataErrorsDetail_1 = require("./fulfillment/V202407/CreateFirstMileBundleResponseDataErrorsDetail");
const UploadInvoiceRequestBody_1 = require("./fulfillment/V202502/UploadInvoiceRequestBody");
const UploadInvoiceRequestBodyInvoices_1 = require("./fulfillment/V202502/UploadInvoiceRequestBodyInvoices");
const UploadInvoiceResponse_1 = require("./fulfillment/V202502/UploadInvoiceResponse");
const UploadInvoiceResponseData_1 = require("./fulfillment/V202502/UploadInvoiceResponseData");
const UploadInvoiceResponseDataErrors_1 = require("./fulfillment/V202502/UploadInvoiceResponseDataErrors");
const UploadInvoiceResponseDataErrorsDetail_1 = require("./fulfillment/V202502/UploadInvoiceResponseDataErrorsDetail");
const TTSTrackingValidationResponse_1 = require("./fulfillment/V202508/TTSTrackingValidationResponse");
const TTSTrackingValidationResponseData_1 = require("./fulfillment/V202508/TTSTrackingValidationResponseData");
const CreateFirstMileBundleV2RequestBody_1 = require("./fulfillment/V202510/CreateFirstMileBundleV2RequestBody");
const CreateFirstMileBundleV2Response_1 = require("./fulfillment/V202510/CreateFirstMileBundleV2Response");
const CreateFirstMileBundleV2ResponseData_1 = require("./fulfillment/V202510/CreateFirstMileBundleV2ResponseData");
const CreateFirstMileBundleV2ResponseDataErrors_1 = require("./fulfillment/V202510/CreateFirstMileBundleV2ResponseDataErrors");
const CreateFirstMileBundleV2ResponseDataErrorsDetail_1 = require("./fulfillment/V202510/CreateFirstMileBundleV2ResponseDataErrorsDetail");
const GetGlobalSellerWarehouseResponse_1 = require("./logistics/V202309/GetGlobalSellerWarehouseResponse");
const GetGlobalSellerWarehouseResponseData_1 = require("./logistics/V202309/GetGlobalSellerWarehouseResponseData");
const GetGlobalSellerWarehouseResponseDataGlobalWarehouses_1 = require("./logistics/V202309/GetGlobalSellerWarehouseResponseDataGlobalWarehouses");
const GetShippingProvidersResponse_1 = require("./logistics/V202309/GetShippingProvidersResponse");
const GetShippingProvidersResponseData_1 = require("./logistics/V202309/GetShippingProvidersResponseData");
const GetShippingProvidersResponseDataShippingProviders_1 = require("./logistics/V202309/GetShippingProvidersResponseDataShippingProviders");
const GetWarehouseDeliveryOptionsResponse_1 = require("./logistics/V202309/GetWarehouseDeliveryOptionsResponse");
const GetWarehouseDeliveryOptionsResponseData_1 = require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseData");
const GetWarehouseDeliveryOptionsResponseDataDeliveryOptions_1 = require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptions");
const GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit_1 = require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit");
const GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit_1 = require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit");
const GetWarehouseListResponse_1 = require("./logistics/V202309/GetWarehouseListResponse");
const GetWarehouseListResponseData_1 = require("./logistics/V202309/GetWarehouseListResponseData");
const GetWarehouseListResponseDataWarehouses_1 = require("./logistics/V202309/GetWarehouseListResponseDataWarehouses");
const GetWarehouseListResponseDataWarehousesAddress_1 = require("./logistics/V202309/GetWarehouseListResponseDataWarehousesAddress");
const GetWarehouseListResponseDataWarehousesAddressGeolocation_1 = require("./logistics/V202309/GetWarehouseListResponseDataWarehousesAddressGeolocation");
const GetAvailableShippingTemplateRequestBody_1 = require("./logistics/V202510/GetAvailableShippingTemplateRequestBody");
const GetAvailableShippingTemplateRequestBodyProductAttribute_1 = require("./logistics/V202510/GetAvailableShippingTemplateRequestBodyProductAttribute");
const GetAvailableShippingTemplateRequestBodyProductAttributeDimension_1 = require("./logistics/V202510/GetAvailableShippingTemplateRequestBodyProductAttributeDimension");
const GetAvailableShippingTemplateRequestBodyProductAttributeWeight_1 = require("./logistics/V202510/GetAvailableShippingTemplateRequestBodyProductAttributeWeight");
const GetAvailableShippingTemplateResponse_1 = require("./logistics/V202510/GetAvailableShippingTemplateResponse");
const GetAvailableShippingTemplateResponseData_1 = require("./logistics/V202510/GetAvailableShippingTemplateResponseData");
const GetAvailableShippingTemplateResponseDataTemplates_1 = require("./logistics/V202510/GetAvailableShippingTemplateResponseDataTemplates");
const GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReason_1 = require("./logistics/V202510/GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReason");
const GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReasonFilterReason_1 = require("./logistics/V202510/GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReasonFilterReason");
const GetAvailableShippingTemplateResponseDataTemplatesTemplate_1 = require("./logistics/V202510/GetAvailableShippingTemplateResponseDataTemplatesTemplate");
const GetOrderDetailResponse_1 = require("./order/V202309/GetOrderDetailResponse");
const GetOrderDetailResponseData_1 = require("./order/V202309/GetOrderDetailResponseData");
const GetOrderDetailResponseDataOrders_1 = require("./order/V202309/GetOrderDetailResponseDataOrders");
const GetOrderDetailResponseDataOrdersHandlingDuration_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersHandlingDuration");
const GetOrderDetailResponseDataOrdersLineItems_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersLineItems");
const GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus");
const GetOrderDetailResponseDataOrdersLineItemsItemTax_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersLineItemsItemTax");
const GetOrderDetailResponseDataOrdersPackages_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersPackages");
const GetOrderDetailResponseDataOrdersPayment_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersPayment");
const GetOrderDetailResponseDataOrdersRecipientAddress_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddress");
const GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences");
const GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo");
const GetOrderListRequestBody_1 = require("./order/V202309/GetOrderListRequestBody");
const GetOrderListResponse_1 = require("./order/V202309/GetOrderListResponse");
const GetOrderListResponseData_1 = require("./order/V202309/GetOrderListResponseData");
const GetOrderListResponseDataOrders_1 = require("./order/V202309/GetOrderListResponseDataOrders");
const GetOrderListResponseDataOrdersHandlingDuration_1 = require("./order/V202309/GetOrderListResponseDataOrdersHandlingDuration");
const GetOrderListResponseDataOrdersLineItems_1 = require("./order/V202309/GetOrderListResponseDataOrdersLineItems");
const GetOrderListResponseDataOrdersLineItemsCombinedListingSkus_1 = require("./order/V202309/GetOrderListResponseDataOrdersLineItemsCombinedListingSkus");
const GetOrderListResponseDataOrdersLineItemsItemTax_1 = require("./order/V202309/GetOrderListResponseDataOrdersLineItemsItemTax");
const GetOrderListResponseDataOrdersPackages_1 = require("./order/V202309/GetOrderListResponseDataOrdersPackages");
const GetOrderListResponseDataOrdersPayment_1 = require("./order/V202309/GetOrderListResponseDataOrdersPayment");
const GetOrderListResponseDataOrdersRecipientAddress_1 = require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddress");
const GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences_1 = require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences");
const GetOrderListResponseDataOrdersRecipientAddressDistrictInfo_1 = require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddressDistrictInfo");
const GetPriceDetailResponse_1 = require("./order/V202407/GetPriceDetailResponse");
const GetPriceDetailResponseData_1 = require("./order/V202407/GetPriceDetailResponseData");
const GetPriceDetailResponseDataLineItems_1 = require("./order/V202407/GetPriceDetailResponseDataLineItems");
const GetOrderDetailResponse_2 = require("./order/V202507/GetOrderDetailResponse");
const GetOrderDetailResponseData_2 = require("./order/V202507/GetOrderDetailResponseData");
const GetOrderDetailResponseDataOrders_2 = require("./order/V202507/GetOrderDetailResponseDataOrders");
const GetOrderDetailResponseDataOrdersHandlingDuration_2 = require("./order/V202507/GetOrderDetailResponseDataOrdersHandlingDuration");
const GetOrderDetailResponseDataOrdersLineItems_2 = require("./order/V202507/GetOrderDetailResponseDataOrdersLineItems");
const GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus_2 = require("./order/V202507/GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus");
const GetOrderDetailResponseDataOrdersLineItemsItemTax_2 = require("./order/V202507/GetOrderDetailResponseDataOrdersLineItemsItemTax");
const GetOrderDetailResponseDataOrdersPackages_2 = require("./order/V202507/GetOrderDetailResponseDataOrdersPackages");
const GetOrderDetailResponseDataOrdersPayment_2 = require("./order/V202507/GetOrderDetailResponseDataOrdersPayment");
const GetOrderDetailResponseDataOrdersRecipientAddress_2 = require("./order/V202507/GetOrderDetailResponseDataOrdersRecipientAddress");
const GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences_2 = require("./order/V202507/GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences");
const GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo_2 = require("./order/V202507/GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo");
const ActivateProductRequestBody_1 = require("./product/V202309/ActivateProductRequestBody");
const ActivateProductResponse_1 = require("./product/V202309/ActivateProductResponse");
const ActivateProductResponseData_1 = require("./product/V202309/ActivateProductResponseData");
const ActivateProductResponseDataErrors_1 = require("./product/V202309/ActivateProductResponseDataErrors");
const ActivateProductResponseDataErrorsDetail_1 = require("./product/V202309/ActivateProductResponseDataErrorsDetail");
const ActivateProductResponseDataErrorsDetailExtraErrors_1 = require("./product/V202309/ActivateProductResponseDataErrorsDetailExtraErrors");
const CheckListingPrerequisitesResponse_1 = require("./product/V202309/CheckListingPrerequisitesResponse");
const CheckListingPrerequisitesResponseData_1 = require("./product/V202309/CheckListingPrerequisitesResponseData");
const CheckListingPrerequisitesResponseDataShop_1 = require("./product/V202309/CheckListingPrerequisitesResponseDataShop");
const CheckListingPrerequisitesResponseDataShopGne_1 = require("./product/V202309/CheckListingPrerequisitesResponseDataShopGne");
const CheckListingPrerequisitesResponseDataShopLogistics_1 = require("./product/V202309/CheckListingPrerequisitesResponseDataShopLogistics");
const CheckProductListingRequestBody_1 = require("./product/V202309/CheckProductListingRequestBody");
const CheckProductListingRequestBodyCertifications_1 = require("./product/V202309/CheckProductListingRequestBodyCertifications");
const CheckProductListingRequestBodyCertificationsFiles_1 = require("./product/V202309/CheckProductListingRequestBodyCertificationsFiles");
const CheckProductListingRequestBodyCertificationsImages_1 = require("./product/V202309/CheckProductListingRequestBodyCertificationsImages");
const CheckProductListingRequestBodyMainImages_1 = require("./product/V202309/CheckProductListingRequestBodyMainImages");
const CheckProductListingRequestBodyPackageDimensions_1 = require("./product/V202309/CheckProductListingRequestBodyPackageDimensions");
const CheckProductListingRequestBodyPackageWeight_1 = require("./product/V202309/CheckProductListingRequestBodyPackageWeight");
const CheckProductListingRequestBodyProductAttributes_1 = require("./product/V202309/CheckProductListingRequestBodyProductAttributes");
const CheckProductListingRequestBodyProductAttributesValues_1 = require("./product/V202309/CheckProductListingRequestBodyProductAttributesValues");
const CheckProductListingRequestBodySizeChart_1 = require("./product/V202309/CheckProductListingRequestBodySizeChart");
const CheckProductListingRequestBodySizeChartImage_1 = require("./product/V202309/CheckProductListingRequestBodySizeChartImage");
const CheckProductListingRequestBodySizeChartTemplate_1 = require("./product/V202309/CheckProductListingRequestBodySizeChartTemplate");
const CheckProductListingRequestBodySkus_1 = require("./product/V202309/CheckProductListingRequestBodySkus");
const CheckProductListingRequestBodySkusCombinedSkus_1 = require("./product/V202309/CheckProductListingRequestBodySkusCombinedSkus");
const CheckProductListingRequestBodySkusExternalListPrices_1 = require("./product/V202309/CheckProductListingRequestBodySkusExternalListPrices");
const CheckProductListingRequestBodySkusFees_1 = require("./product/V202309/CheckProductListingRequestBodySkusFees");
const CheckProductListingRequestBodySkusIdentifierCode_1 = require("./product/V202309/CheckProductListingRequestBodySkusIdentifierCode");
const CheckProductListingRequestBodySkusInventory_1 = require("./product/V202309/CheckProductListingRequestBodySkusInventory");
const CheckProductListingRequestBodySkusListPrice_1 = require("./product/V202309/CheckProductListingRequestBodySkusListPrice");
const CheckProductListingRequestBodySkusPreSale_1 = require("./product/V202309/CheckProductListingRequestBodySkusPreSale");
const CheckProductListingRequestBodySkusPreSaleFulfillmentType_1 = require("./product/V202309/CheckProductListingRequestBodySkusPreSaleFulfillmentType");
const CheckProductListingRequestBodySkusPrice_1 = require("./product/V202309/CheckProductListingRequestBodySkusPrice");
const CheckProductListingRequestBodySkusSalesAttributes_1 = require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributes");
const CheckProductListingRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributesSkuImg");
const CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages");
const CheckProductListingRequestBodyVideo_1 = require("./product/V202309/CheckProductListingRequestBodyVideo");
const CheckProductListingResponse_1 = require("./product/V202309/CheckProductListingResponse");
const CheckProductListingResponseData_1 = require("./product/V202309/CheckProductListingResponseData");
const CheckProductListingResponseDataDiagnoses_1 = require("./product/V202309/CheckProductListingResponseDataDiagnoses");
const CheckProductListingResponseDataDiagnosesDiagnosisResults_1 = require("./product/V202309/CheckProductListingResponseDataDiagnosesDiagnosisResults");
const CheckProductListingResponseDataDiagnosesSuggestions_1 = require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestions");
const CheckProductListingResponseDataDiagnosesSuggestionsImages_1 = require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsImages");
const CheckProductListingResponseDataDiagnosesSuggestionsSeoWords_1 = require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsSeoWords");
const CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts_1 = require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts");
const CheckProductListingResponseDataFailReasons_1 = require("./product/V202309/CheckProductListingResponseDataFailReasons");
const CheckProductListingResponseDataListingQuality_1 = require("./product/V202309/CheckProductListingResponseDataListingQuality");
const CheckProductListingResponseDataWarnings_1 = require("./product/V202309/CheckProductListingResponseDataWarnings");
const CreateCustomBrandsRequestBody_1 = require("./product/V202309/CreateCustomBrandsRequestBody");
const CreateCustomBrandsResponse_1 = require("./product/V202309/CreateCustomBrandsResponse");
const CreateCustomBrandsResponseData_1 = require("./product/V202309/CreateCustomBrandsResponseData");
const CreateGlobalProductRequestBody_1 = require("./product/V202309/CreateGlobalProductRequestBody");
const CreateGlobalProductRequestBodyCertifications_1 = require("./product/V202309/CreateGlobalProductRequestBodyCertifications");
const CreateGlobalProductRequestBodyCertificationsFiles_1 = require("./product/V202309/CreateGlobalProductRequestBodyCertificationsFiles");
const CreateGlobalProductRequestBodyCertificationsImages_1 = require("./product/V202309/CreateGlobalProductRequestBodyCertificationsImages");
const CreateGlobalProductRequestBodyMainImages_1 = require("./product/V202309/CreateGlobalProductRequestBodyMainImages");
const CreateGlobalProductRequestBodyManufacturer_1 = require("./product/V202309/CreateGlobalProductRequestBodyManufacturer");
const CreateGlobalProductRequestBodyPackageDimensions_1 = require("./product/V202309/CreateGlobalProductRequestBodyPackageDimensions");
const CreateGlobalProductRequestBodyPackageWeight_1 = require("./product/V202309/CreateGlobalProductRequestBodyPackageWeight");
const CreateGlobalProductRequestBodyProductAttributes_1 = require("./product/V202309/CreateGlobalProductRequestBodyProductAttributes");
const CreateGlobalProductRequestBodyProductAttributesValues_1 = require("./product/V202309/CreateGlobalProductRequestBodyProductAttributesValues");
const CreateGlobalProductRequestBodySizeChart_1 = require("./product/V202309/CreateGlobalProductRequestBodySizeChart");
const CreateGlobalProductRequestBodySizeChartImage_1 = require("./product/V202309/CreateGlobalProductRequestBodySizeChartImage");
const CreateGlobalProductRequestBodySizeChartTemplate_1 = require("./product/V202309/CreateGlobalProductRequestBodySizeChartTemplate");
const CreateGlobalProductRequestBodySkus_1 = require("./product/V202309/CreateGlobalProductRequestBodySkus");
const CreateGlobalProductRequestBodySkusIdentifierCode_1 = require("./product/V202309/CreateGlobalProductRequestBodySkusIdentifierCode");
const CreateGlobalProductRequestBodySkusInventory_1 = require("./product/V202309/CreateGlobalProductRequestBodySkusInventory");
const CreateGlobalProductRequestBodySkusPrice_1 = require("./product/V202309/CreateGlobalProductRequestBodySkusPrice");
const CreateGlobalProductRequestBodySkusSalesAttributes_1 = require("./product/V202309/CreateGlobalProductRequestBodySkusSalesAttributes");
const CreateGlobalProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/CreateGlobalProductRequestBodySkusSalesAttributesSkuImg");
const CreateGlobalProductRequestBodyVideo_1 = require("./product/V202309/CreateGlobalProductRequestBodyVideo");
const CreateGlobalProductResponse_1 = require("./product/V202309/CreateGlobalProductResponse");
const CreateGlobalProductResponseData_1 = require("./product/V202309/CreateGlobalProductResponseData");
const CreateGlobalProductResponseDataGlobalSkus_1 = require("./product/V202309/CreateGlobalProductResponseDataGlobalSkus");
const CreateGlobalProductResponseDataGlobalSkusSalesAttributes_1 = require("./product/V202309/CreateGlobalProductResponseDataGlobalSkusSalesAttributes");
const CreateProductRequestBody_1 = require("./product/V202309/CreateProductRequestBody");
const CreateProductRequestBodyCertifications_1 = require("./product/V202309/CreateProductRequestBodyCertifications");
const CreateProductRequestBodyCertificationsFiles_1 = require("./product/V202309/CreateProductRequestBodyCertificationsFiles");
const CreateProductRequestBodyCertificationsImages_1 = require("./product/V202309/CreateProductRequestBodyCertificationsImages");
const CreateProductRequestBodyMainImages_1 = require("./product/V202309/CreateProductRequestBodyMainImages");
const CreateProductRequestBodyPackageDimensions_1 = require("./product/V202309/CreateProductRequestBodyPackageDimensions");
const CreateProductRequestBodyPackageWeight_1 = require("./product/V202309/CreateProductRequestBodyPackageWeight");
const CreateProductRequestBodyProductAttributes_1 = require("./product/V202309/CreateProductRequestBodyProductAttributes");
const CreateProductRequestBodyProductAttributesValues_1 = require("./product/V202309/CreateProductRequestBodyProductAttributesValues");
const CreateProductRequestBodySizeChart_1 = require("./product/V202309/CreateProductRequestBodySizeChart");
const CreateProductRequestBodySizeChartImage_1 = require("./product/V202309/CreateProductRequestBodySizeChartImage");
const CreateProductRequestBodySizeChartTemplate_1 = require("./product/V202309/CreateProductRequestBodySizeChartTemplate");
const CreateProductRequestBodySkus_1 = require("./product/V202309/CreateProductRequestBodySkus");
const CreateProductRequestBodySkusCombinedSkus_1 = require("./product/V202309/CreateProductRequestBodySkusCombinedSkus");
const CreateProductRequestBodySkusExternalListPrices_1 = require("./product/V202309/CreateProductRequestBodySkusExternalListPrices");
const CreateProductRequestBodySkusFees_1 = require("./product/V202309/CreateProductRequestBodySkusFees");
const CreateProductRequestBodySkusIdentifierCode_1 = require("./product/V202309/CreateProductRequestBodySkusIdentifierCode");
const CreateProductRequestBodySkusInventory_1 = require("./product/V202309/CreateProductRequestBodySkusInventory");
const CreateProductRequestBodySkusListPrice_1 = require("./product/V202309/CreateProductRequestBodySkusListPrice");
const CreateProductRequestBodySkusPreSale_1 = require("./product/V202309/CreateProductRequestBodySkusPreSale");
const CreateProductRequestBodySkusPreSaleFulfillmentType_1 = require("./product/V202309/CreateProductRequestBodySkusPreSaleFulfillmentType");
const CreateProductRequestBodySkusPrice_1 = require("./product/V202309/CreateProductRequestBodySkusPrice");
const CreateProductRequestBodySkusSalesAttributes_1 = require("./product/V202309/CreateProductRequestBodySkusSalesAttributes");
const CreateProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/CreateProductRequestBodySkusSalesAttributesSkuImg");
const CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages");
const CreateProductRequestBodyVideo_1 = require("./product/V202309/CreateProductRequestBodyVideo");
const CreateProductResponse_1 = require("./product/V202309/CreateProductResponse");
const CreateProductResponseData_1 = require("./product/V202309/CreateProductResponseData");
const CreateProductResponseDataSkus_1 = require("./product/V202309/CreateProductResponseDataSkus");
const CreateProductResponseDataSkusFees_1 = require("./product/V202309/CreateProductResponseDataSkusFees");
const CreateProductResponseDataSkusSalesAttributes_1 = require("./product/V202309/CreateProductResponseDataSkusSalesAttributes");
const CreateProductResponseDataWarnings_1 = require("./product/V202309/CreateProductResponseDataWarnings");
const DeactivateProductsRequestBody_1 = require("./product/V202309/DeactivateProductsRequestBody");
const DeactivateProductsResponse_1 = require("./product/V202309/DeactivateProductsResponse");
const DeactivateProductsResponseData_1 = require("./product/V202309/DeactivateProductsResponseData");
const DeactivateProductsResponseDataErrors_1 = require("./product/V202309/DeactivateProductsResponseDataErrors");
const DeactivateProductsResponseDataErrorsDetail_1 = require("./product/V202309/DeactivateProductsResponseDataErrorsDetail");
const DeleteGlobalProductsRequestBody_1 = require("./product/V202309/DeleteGlobalProductsRequestBody");
const DeleteGlobalProductsResponse_1 = require("./product/V202309/DeleteGlobalProductsResponse");
const DeleteGlobalProductsResponseData_1 = require("./product/V202309/DeleteGlobalProductsResponseData");
const DeleteGlobalProductsResponseDataErrors_1 = require("./product/V202309/DeleteGlobalProductsResponseDataErrors");
const DeleteGlobalProductsResponseDataErrorsDetail_1 = require("./product/V202309/DeleteGlobalProductsResponseDataErrorsDetail");
const DeleteProductsRequestBody_1 = require("./product/V202309/DeleteProductsRequestBody");
const DeleteProductsResponse_1 = require("./product/V202309/DeleteProductsResponse");
const DeleteProductsResponseData_1 = require("./product/V202309/DeleteProductsResponseData");
const DeleteProductsResponseDataErrors_1 = require("./product/V202309/DeleteProductsResponseDataErrors");
const DeleteProductsResponseDataErrorsDetail_1 = require("./product/V202309/DeleteProductsResponseDataErrorsDetail");
const EditGlobalProductRequestBody_1 = require("./product/V202309/EditGlobalProductRequestBody");
const EditGlobalProductRequestBodyCertifications_1 = require("./product/V202309/EditGlobalProductRequestBodyCertifications");
const EditGlobalProductRequestBodyCertificationsFiles_1 = require("./product/V202309/EditGlobalProductRequestBodyCertificationsFiles");
const EditGlobalProductRequestBodyCertificationsImages_1 = require("./product/V202309/EditGlobalProductRequestBodyCertificationsImages");
const EditGlobalProductRequestBodyMainImages_1 = require("./product/V202309/EditGlobalProductRequestBodyMainImages");
const EditGlobalProductRequestBodyManufacturer_1 = require("./product/V202309/EditGlobalProductRequestBodyManufacturer");
const EditGlobalProductRequestBodyPackageDimensions_1 = require("./product/V202309/EditGlobalProductRequestBodyPackageDimensions");
const EditGlobalProductRequestBodyPackageWeight_1 = require("./product/V202309/EditGlobalProductRequestBodyPackageWeight");
const EditGlobalProductRequestBodyProductAttributes_1 = require("./product/V202309/EditGlobalProductRequestBodyProductAttributes");
const EditGlobalProductRequestBodyProductAttributesValues_1 = require("./product/V202309/EditGlobalProductRequestBodyProductAttributesValues");
const EditGlobalProductRequestBodySizeChart_1 = require("./product/V202309/EditGlobalProductRequestBodySizeChart");
const EditGlobalProductRequestBodySizeChartImage_1 = require("./product/V202309/EditGlobalProductRequestBodySizeChartImage");
const EditGlobalProductRequestBodySizeChartTemplate_1 = require("./product/V202309/EditGlobalProductRequestBodySizeChartTemplate");
const EditGlobalProductRequestBodySkus_1 = require("./product/V202309/EditGlobalProductRequestBodySkus");
const EditGlobalProductRequestBodySkusIdentifierCode_1 = require("./product/V202309/EditGlobalProductRequestBodySkusIdentifierCode");
const EditGlobalProductRequestBodySkusInventory_1 = require("./product/V202309/EditGlobalProductRequestBodySkusInventory");
const EditGlobalProductRequestBodySkusPrice_1 = require("./product/V202309/EditGlobalProductRequestBodySkusPrice");
const EditGlobalProductRequestBodySkusSalePrices_1 = require("./product/V202309/EditGlobalProductRequestBodySkusSalePrices");
const EditGlobalProductRequestBodySkusSalesAttributes_1 = require("./product/V202309/EditGlobalProductRequestBodySkusSalesAttributes");
const EditGlobalProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/EditGlobalProductRequestBodySkusSalesAttributesSkuImg");
const EditGlobalProductRequestBodyVideo_1 = require("./product/V202309/EditGlobalProductRequestBodyVideo");
const EditGlobalProductResponse_1 = require("./product/V202309/EditGlobalProductResponse");
const EditGlobalProductResponseData_1 = require("./product/V202309/EditGlobalProductResponseData");
const EditGlobalProductResponseDataGlobalSkus_1 = require("./product/V202309/EditGlobalProductResponseDataGlobalSkus");
const EditGlobalProductResponseDataGlobalSkusSalesAttributes_1 = require("./product/V202309/EditGlobalProductResponseDataGlobalSkusSalesAttributes");
const EditGlobalProductResponseDataPublishResults_1 = require("./product/V202309/EditGlobalProductResponseDataPublishResults");
const EditGlobalProductResponseDataPublishResultsFailReasons_1 = require("./product/V202309/EditGlobalProductResponseDataPublishResultsFailReasons");
const EditProductRequestBody_1 = require("./product/V202309/EditProductRequestBody");
const EditProductRequestBodyCertifications_1 = require("./product/V202309/EditProductRequestBodyCertifications");
const EditProductRequestBodyCertificationsFiles_1 = require("./product/V202309/EditProductRequestBodyCertificationsFiles");
const EditProductRequestBodyCertificationsImages_1 = require("./product/V202309/EditProductRequestBodyCertificationsImages");
const EditProductRequestBodyMainImages_1 = require("./product/V202309/EditProductRequestBodyMainImages");
const EditProductRequestBodyPackageDimensions_1 = require("./product/V202309/EditProductRequestBodyPackageDimensions");
const EditProductRequestBodyPackageWeight_1 = require("./product/V202309/EditProductRequestBodyPackageWeight");
const EditProductRequestBodyProductAttributes_1 = require("./product/V202309/EditProductRequestBodyProductAttributes");
const EditProductRequestBodyProductAttributesValues_1 = require("./product/V202309/EditProductRequestBodyProductAttributesValues");
const EditProductRequestBodyReplicatedProducts_1 = require("./product/V202309/EditProductRequestBodyReplicatedProducts");
const EditProductRequestBodyReplicatedProductsSkus_1 = require("./product/V202309/EditProductRequestBodyReplicatedProductsSkus");
const EditProductRequestBodyReplicatedProductsSkusInventory_1 = require("./product/V202309/EditProductRequestBodyReplicatedProductsSkusInventory");
const EditProductRequestBodyReplicatedProductsSkusPrice_1 = require("./product/V202309/EditProductRequestBodyReplicatedProductsSkusPrice");
const EditProductRequestBodySizeChart_1 = require("./product/V202309/EditProductRequestBodySizeChart");
const EditProductRequestBodySizeChartImage_1 = require("./product/V202309/EditProductRequestBodySizeChartImage");
const EditProductRequestBodySizeChartTemplate_1 = require("./product/V202309/EditProductRequestBodySizeChartTemplate");
const EditProductRequestBodySkus_1 = require("./product/V202309/EditProductRequestBodySkus");
const EditProductRequestBodySkusCombinedSkus_1 = require("./product/V202309/EditProductRequestBodySkusCombinedSkus");
const EditProductRequestBodySkusExternalListPrices_1 = require("./product/V202309/EditProductRequestBodySkusExternalListPrices");
const EditProductRequestBodySkusFees_1 = require("./product/V202309/EditProductRequestBodySkusFees");
const EditProductRequestBodySkusIdentifierCode_1 = require("./product/V202309/EditProductRequestBodySkusIdentifierCode");
const EditProductRequestBodySkusInventory_1 = require("./product/V202309/EditProductRequestBodySkusInventory");
const EditProductRequestBodySkusListPrice_1 = require("./product/V202309/EditProductRequestBodySkusListPrice");
const EditProductRequestBodySkusPreSale_1 = require("./product/V202309/EditProductRequestBodySkusPreSale");
const EditProductRequestBodySkusPreSaleFulfillmentType_1 = require("./product/V202309/EditProductRequestBodySkusPreSaleFulfillmentType");
const EditProductRequestBodySkusPrice_1 = require("./product/V202309/EditProductRequestBodySkusPrice");
const EditProductRequestBodySkusSalesAttributes_1 = require("./product/V202309/EditProductRequestBodySkusSalesAttributes");
const EditProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/EditProductRequestBodySkusSalesAttributesSkuImg");
const EditProductRequestBodySkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/EditProductRequestBodySkusSalesAttributesSupplementarySkuImages");
const EditProductRequestBodySubscribeInfoEdit_1 = require("./product/V202309/EditProductRequestBodySubscribeInfoEdit");
const EditProductRequestBodySubscribeInfoEditDiscountDetails_1 = require("./product/V202309/EditProductRequestBodySubscribeInfoEditDiscountDetails");
const EditProductRequestBodyVideo_1 = require("./product/V202309/EditProductRequestBodyVideo");
const EditProductResponse_1 = require("./product/V202309/EditProductResponse");
const EditProductResponseData_1 = require("./product/V202309/EditProductResponseData");
const EditProductResponseDataAudit_1 = require("./product/V202309/EditProductResponseDataAudit");
const EditProductResponseDataSkus_1 = require("./product/V202309/EditProductResponseDataSkus");
const EditProductResponseDataSkusFees_1 = require("./product/V202309/EditProductResponseDataSkusFees");
const EditProductResponseDataSkusSalesAttributes_1 = require("./product/V202309/EditProductResponseDataSkusSalesAttributes");
const EditProductResponseDataWarnings_1 = require("./product/V202309/EditProductResponseDataWarnings");
const GetAttributesResponse_1 = require("./product/V202309/GetAttributesResponse");
const GetAttributesResponseData_1 = require("./product/V202309/GetAttributesResponseData");
const GetAttributesResponseDataAttributes_1 = require("./product/V202309/GetAttributesResponseDataAttributes");
const GetAttributesResponseDataAttributesRequirementConditions_1 = require("./product/V202309/GetAttributesResponseDataAttributesRequirementConditions");
const GetAttributesResponseDataAttributesValues_1 = require("./product/V202309/GetAttributesResponseDataAttributesValues");
const GetBrandsResponse_1 = require("./product/V202309/GetBrandsResponse");
const GetBrandsResponseData_1 = require("./product/V202309/GetBrandsResponseData");
const GetBrandsResponseDataBrands_1 = require("./product/V202309/GetBrandsResponseDataBrands");
const GetCategoriesResponse_1 = require("./product/V202309/GetCategoriesResponse");
const GetCategoriesResponseData_1 = require("./product/V202309/GetCategoriesResponseData");
const GetCategoriesResponseDataCategories_1 = require("./product/V202309/GetCategoriesResponseDataCategories");
const GetCategoryRulesResponse_1 = require("./product/V202309/GetCategoryRulesResponse");
const GetCategoryRulesResponseData_1 = require("./product/V202309/GetCategoryRulesResponseData");
const GetCategoryRulesResponseDataCod_1 = require("./product/V202309/GetCategoryRulesResponseDataCod");
const GetCategoryRulesResponseDataEpr_1 = require("./product/V202309/GetCategoryRulesResponseDataEpr");
const GetCategoryRulesResponseDataFees_1 = require("./product/V202309/GetCategoryRulesResponseDataFees");
const GetCategoryRulesResponseDataManufacturer_1 = require("./product/V202309/GetCategoryRulesResponseDataManufacturer");
const GetCategoryRulesResponseDataPackageDimension_1 = require("./product/V202309/GetCategoryRulesResponseDataPackageDimension");
const GetCategoryRulesResponseDataProductCertifications_1 = require("./product/V202309/GetCategoryRulesResponseDataProductCertifications");
const GetCategoryRulesResponseDataProductCertificationsExpirationDate_1 = require("./product/V202309/GetCategoryRulesResponseDataProductCertificationsExpirationDate");
const GetCategoryRulesResponseDataProductCertificationsRequirementConditions_1 = require("./product/V202309/GetCategoryRulesResponseDataProductCertificationsRequirementConditions");
const GetCategoryRulesResponseDataResponsiblePerson_1 = require("./product/V202309/GetCategoryRulesResponseDataResponsiblePerson");
const GetCategoryRulesResponseDataSizeChart_1 = require("./product/V202309/GetCategoryRulesResponseDataSizeChart");
const GetGlobalAttributesResponse_1 = require("./product/V202309/GetGlobalAttributesResponse");
const GetGlobalAttributesResponseData_1 = require("./product/V202309/GetGlobalAttributesResponseData");
const GetGlobalAttributesResponseDataAttributes_1 = require("./product/V202309/GetGlobalAttributesResponseDataAttributes");
const GetGlobalAttributesResponseDataAttributesRequirementConditions_1 = require("./product/V202309/GetGlobalAttributesResponseDataAttributesRequirementConditions");
const GetGlobalAttributesResponseDataAttributesValues_1 = require("./product/V202309/GetGlobalAttributesResponseDataAttributesValues");
const GetGlobalCategoriesResponse_1 = require("./product/V202309/GetGlobalCategoriesResponse");
const GetGlobalCategoriesResponseData_1 = require("./product/V202309/GetGlobalCategoriesResponseData");
const GetGlobalCategoriesResponseDataCategories_1 = require("./product/V202309/GetGlobalCategoriesResponseDataCategories");
const GetGlobalCategoryRulesResponse_1 = require("./product/V202309/GetGlobalCategoryRulesResponse");
const GetGlobalCategoryRulesResponseData_1 = require("./product/V202309/GetGlobalCategoryRulesResponseData");
const GetGlobalCategoryRulesResponseDataManufacturer_1 = require("./product/V202309/GetGlobalCategoryRulesResponseDataManufacturer");
const GetGlobalCategoryRulesResponseDataProductCertifications_1 = require("./product/V202309/GetGlobalCategoryRulesResponseDataProductCertifications");
const GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions_1 = require("./product/V202309/GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions");
const GetGlobalCategoryRulesResponseDataResponsiblePerson_1 = require("./product/V202309/GetGlobalCategoryRulesResponseDataResponsiblePerson");
const GetGlobalCategoryRulesResponseDataSizeChart_1 = require("./product/V202309/GetGlobalCategoryRulesResponseDataSizeChart");
const GetGlobalProductResponse_1 = require("./product/V202309/GetGlobalProductResponse");
const GetGlobalProductResponseData_1 = require("./product/V202309/GetGlobalProductResponseData");
const GetGlobalProductResponseDataBrand_1 = require("./product/V202309/GetGlobalProductResponseDataBrand");
const GetGlobalProductResponseDataCategory_1 = require("./product/V202309/GetGlobalProductResponseDataCategory");
const GetGlobalProductResponseDataCertifications_1 = require("./product/V202309/GetGlobalProductResponseDataCertifications");
const GetGlobalProductResponseDataCertificationsFiles_1 = require("./product/V202309/GetGlobalProductResponseDataCertificationsFiles");
const GetGlobalProductResponseDataCertificationsImages_1 = require("./product/V202309/GetGlobalProductResponseDataCertificationsImages");
const GetGlobalProductResponseDataMainImages_1 = require("./product/V202309/GetGlobalProductResponseDataMainImages");
const GetGlobalProductResponseDataManufacturer_1 = require("./product/V202309/GetGlobalProductResponseDataManufacturer");
const GetGlobalProductResponseDataPackageDimensions_1 = require("./product/V202309/GetGlobalProductResponseDataPackageDimensions");
const GetGlobalProductResponseDataPackageWeight_1 = require("./product/V202309/GetGlobalProductResponseDataPackageWeight");
const GetGlobalProductResponseDataProductAttributes_1 = require("./product/V202309/GetGlobalProductResponseDataProductAttributes");
const GetGlobalProductResponseDataProductAttributesValues_1 = require("./product/V202309/GetGlobalProductResponseDataProductAttributesValues");
const GetGlobalProductResponseDataProducts_1 = require("./product/V202309/GetGlobalProductResponseDataProducts");
const GetGlobalProductResponseDataProductsSkuMappings_1 = require("./product/V202309/GetGlobalProductResponseDataProductsSkuMappings");
const GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings_1 = require("./product/V202309/GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings");
const GetGlobalProductResponseDataSizeChart_1 = require("./product/V202309/GetGlobalProductResponseDataSizeChart");
const GetGlobalProductResponseDataSizeChartImage_1 = require("./product/V202309/GetGlobalProductResponseDataSizeChartImage");
const GetGlobalProductResponseDataSizeChartTemplate_1 = require("./product/V202309/GetGlobalProductResponseDataSizeChartTemplate");
const GetGlobalProductResponseDataSkus_1 = require("./product/V202309/GetGlobalProductResponseDataSkus");
const GetGlobalProductResponseDataSkusIdentifierCode_1 = require("./product/V202309/GetGlobalProductResponseDataSkusIdentifierCode");
const GetGlobalProductResponseDataSkusInventory_1 = require("./product/V202309/GetGlobalProductResponseDataSkusInventory");
const GetGlobalProductResponseDataSkusPrice_1 = require("./product/V202309/GetGlobalProductResponseDataSkusPrice");
const GetGlobalProductResponseDataSkusSalesAttributes_1 = require("./product/V202309/GetGlobalProductResponseDataSkusSalesAttributes");
const GetGlobalProductResponseDataSkusSalesAttributesSkuImg_1 = require("./product/V202309/GetGlobalProductResponseDataSkusSalesAttributesSkuImg");
const GetGlobalProductResponseDataVideo_1 = require("./product/V202309/GetGlobalProductResponseDataVideo");
const GetProductResponse_1 = require("./product/V202309/GetProductResponse");
const GetProductResponseData_1 = require("./product/V202309/GetProductResponseData");
const GetProductResponseDataAudit_1 = require("./product/V202309/GetProductResponseDataAudit");
const GetProductResponseDataAuditFailedReasons_1 = require("./product/V202309/GetProductResponseDataAuditFailedReasons");
const GetProductResponseDataBrand_1 = require("./product/V202309/GetProductResponseDataBrand");
const GetProductResponseDataCategoryChains_1 = require("./product/V202309/GetProductResponseDataCategoryChains");
const GetProductResponseDataCertifications_1 = require("./product/V202309/GetProductResponseDataCertifications");
const GetProductResponseDataCertificationsFiles_1 = require("./product/V202309/GetProductResponseDataCertificationsFiles");
const GetProductResponseDataCertificationsImages_1 = require("./product/V202309/GetProductResponseDataCertificationsImages");
const GetProductResponseDataDeliveryOptions_1 = require("./product/V202309/GetProductResponseDataDeliveryOptions");
const GetProductResponseDataGlobalProductAssociation_1 = require("./product/V202309/GetProductResponseDataGlobalProductAssociation");
const GetProductResponseDataGlobalProductAssociationSkuMappings_1 = require("./product/V202309/GetProductResponseDataGlobalProductAssociationSkuMappings");
const GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings_1 = require("./product/V202309/GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings");
const GetProductResponseDataIntegratedPlatformStatuses_1 = require("./product/V202309/GetProductResponseDataIntegratedPlatformStatuses");
const GetProductResponseDataMainImages_1 = require("./product/V202309/GetProductResponseDataMainImages");
const GetProductResponseDataPackageDimensions_1 = require("./product/V202309/GetProductResponseDataPackageDimensions");
const GetProductResponseDataPackageWeight_1 = require("./product/V202309/GetProductResponseDataPackageWeight");
const GetProductResponseDataPrescriptionRequirement_1 = require("./product/V202309/GetProductResponseDataPrescriptionRequirement");
const GetProductResponseDataProductAttributes_1 = require("./product/V202309/GetProductResponseDataProductAttributes");
const GetProductResponseDataProductAttributesValues_1 = require("./product/V202309/GetProductResponseDataProductAttributesValues");
const GetProductResponseDataProductFamilies_1 = require("./product/V202309/GetProductResponseDataProductFamilies");
const GetProductResponseDataProductFamiliesProducts_1 = require("./product/V202309/GetProductResponseDataProductFamiliesProducts");
const GetProductResponseDataRecommendedCategories_1 = require("./product/V202309/GetProductResponseDataRecommendedCategories");
const GetProductResponseDataSizeChart_1 = require("./product/V202309/GetProductResponseDataSizeChart");
const GetProductResponseDataSizeChartImage_1 = require("./product/V202309/GetProductResponseDataSizeChartImage");
const GetProductResponseDataSizeChartTemplate_1 = require("./product/V202309/GetProductResponseDataSizeChartTemplate");
const GetProductResponseDataSkus_1 = require("./product/V202309/GetProductResponseDataSkus");
const GetProductResponseDataSkusCombinedSkus_1 = require("./product/V202309/GetProductResponseDataSkusCombinedSkus");
const GetProductResponseDataSkusCombinedSkusBrand_1 = require("./product/V202309/GetProductResponseDataSkusCombinedSkusBrand");
const GetProductResponseDataSkusCombinedSkusCategories_1 = require("./product/V202309/GetProductResponseDataSkusCombinedSkusCategories");
const GetProductResponseDataSkusCombinedSkusInventory_1 = require("./product/V202309/GetProductResponseDataSkusCombinedSkusInventory");
const GetProductResponseDataSkusCombinedSkusPrice_1 = require("./product/V202309/GetProductResponseDataSkusCombinedSkusPrice");
const GetProductResponseDataSkusCombinedSkusProductMainImage_1 = require("./product/V202309/GetProductResponseDataSkusCombinedSkusProductMainImage");
const GetProductResponseDataSkusCombinedSkusSalesAttributes_1 = require("./product/V202309/GetProductResponseDataSkusCombinedSkusSalesAttributes");
const GetProductResponseDataSkusCombinedSkusSalesAttributesSkuImg_1 = require("./product/V202309/GetProductResponseDataSkusCombinedSkusSalesAttributesSkuImg");
const GetProductResponseDataSkusCombinedSkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/GetProductResponseDataSkusCombinedSkusSalesAttributesSupplementarySkuImages");
const GetProductResponseDataSkusExternalListPrices_1 = require("./product/V202309/GetProductResponseDataSkusExternalListPrices");
const GetProductResponseDataSkusFees_1 = require("./product/V202309/GetProductResponseDataSkusFees");
const GetProductResponseDataSkusGlobalListingPolicy_1 = require("./product/V202309/GetProductResponseDataSkusGlobalListingPolicy");
const GetProductResponseDataSkusGlobalListingPolicyReplicateSource_1 = require("./product/V202309/GetProductResponseDataSkusGlobalListingPolicyReplicateSource");
const GetProductResponseDataSkusIdentifierCode_1 = require("./product/V202309/GetProductResponseDataSkusIdentifierCode");
const GetProductResponseDataSkusInventory_1 = require("./product/V202309/GetProductResponseDataSkusInventory");
const GetProductResponseDataSkusListPrice_1 = require("./product/V202309/GetProductResponseDataSkusListPrice");
const GetProductResponseDataSkusPreSale_1 = require("./product/V202309/GetProductResponseDataSkusPreSale");
const GetProductResponseDataSkusPreSaleFulfillmentType_1 = require("./product/V202309/GetProductResponseDataSkusPreSaleFulfillmentType");
const GetProductResponseDataSkusPrice_1 = require("./product/V202309/GetProductResponseDataSkusPrice");
const GetProductResponseDataSkusSalesAttributes_1 = require("./product/V202309/GetProductResponseDataSkusSalesAttributes");
const GetProductResponseDataSkusSalesAttributesSkuImg_1 = require("./product/V202309/GetProductResponseDataSkusSalesAttributesSkuImg");
const GetProductResponseDataSkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/GetProductResponseDataSkusSalesAttributesSupplementarySkuImages");
const GetProductResponseDataSkusStatusInfo_1 = require("./product/V202309/GetProductResponseDataSkusStatusInfo");
const GetProductResponseDataSubscribeInfo_1 = require("./product/V202309/GetProductResponseDataSubscribeInfo");
const GetProductResponseDataSubscribeInfoSubscribeDiscountDetails_1 = require("./product/V202309/GetProductResponseDataSubscribeInfoSubscribeDiscountDetails");
const GetProductResponseDataSubscribeInfoSubscribePromotionConfig_1 = require("./product/V202309/GetProductResponseDataSubscribeInfoSubscribePromotionConfig");
const GetProductResponseDataVideo_1 = require("./product/V202309/GetProductResponseDataVideo");
const InventorySearchRequestBody_1 = require("./product/V202309/InventorySearchRequestBody");
const InventorySearchResponse_1 = require("./product/V202309/InventorySearchResponse");
const InventorySearchResponseData_1 = require("./product/V202309/InventorySearchResponseData");
const InventorySearchResponseDataInventory_1 = require("./product/V202309/InventorySearchResponseDataInventory");
const InventorySearchResponseDataInventorySkus_1 = require("./product/V202309/InventorySearchResponseDataInventorySkus");
const InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution_1 = require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution");
const InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory_1 = require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory");
const InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory_1 = require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory");
const InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory_1 = require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory");
const InventorySearchResponseDataInventorySkusWarehouseInventory_1 = require("./product/V202309/InventorySearchResponseDataInventorySkusWarehouseInventory");
const PartialEditProductRequestBody_1 = require("./product/V202309/PartialEditProductRequestBody");
const PartialEditProductRequestBodyCertifications_1 = require("./product/V202309/PartialEditProductRequestBodyCertifications");
const PartialEditProductRequestBodyCertificationsFiles_1 = require("./product/V202309/PartialEditProductRequestBodyCertificationsFiles");
const PartialEditProductRequestBodyCertificationsImages_1 = require("./product/V202309/PartialEditProductRequestBodyCertificationsImages");
const PartialEditProductRequestBodyMainImages_1 = require("./product/V202309/PartialEditProductRequestBodyMainImages");
const PartialEditProductRequestBodyPackageDimensions_1 = require("./product/V202309/PartialEditProductRequestBodyPackageDimensions");
const PartialEditProductRequestBodyPackageWeight_1 = require("./product/V202309/PartialEditProductRequestBodyPackageWeight");
const PartialEditProductRequestBodyProductAttributes_1 = require("./product/V202309/PartialEditProductRequestBodyProductAttributes");
const PartialEditProductRequestBodyProductAttributesValues_1 = require("./product/V202309/PartialEditProductRequestBodyProductAttributesValues");
const PartialEditProductRequestBodyReplicatedProducts_1 = require("./product/V202309/PartialEditProductRequestBodyReplicatedProducts");
const PartialEditProductRequestBodyReplicatedProductsSkus_1 = require("./product/V202309/PartialEditProductRequestBodyReplicatedProductsSkus");
const PartialEditProductRequestBodyReplicatedProductsSkusInventory_1 = require("./product/V202309/PartialEditProductRequestBodyReplicatedProductsSkusInventory");
const PartialEditProductRequestBodyReplicatedProductsSkusPrice_1 = require("./product/V202309/PartialEditProductRequestBodyReplicatedProductsSkusPrice");
const PartialEditProductRequestBodySizeChart_1 = require("./product/V202309/PartialEditProductRequestBodySizeChart");
const PartialEditProductRequestBodySizeChartImage_1 = require("./product/V202309/PartialEditProductRequestBodySizeChartImage");
const PartialEditProductRequestBodySizeChartTemplate_1 = require("./product/V202309/PartialEditProductRequestBodySizeChartTemplate");
const PartialEditProductRequestBodySkus_1 = require("./product/V202309/PartialEditProductRequestBodySkus");
const PartialEditProductRequestBodySkusExternalListPrices_1 = require("./product/V202309/PartialEditProductRequestBodySkusExternalListPrices");
const PartialEditProductRequestBodySkusFees_1 = require("./product/V202309/PartialEditProductRequestBodySkusFees");
const PartialEditProductRequestBodySkusIdentifierCode_1 = require("./product/V202309/PartialEditProductRequestBodySkusIdentifierCode");
const PartialEditProductRequestBodySkusInventory_1 = require("./product/V202309/PartialEditProductRequestBodySkusInventory");
const PartialEditProductRequestBodySkusListPrice_1 = require("./product/V202309/PartialEditProductRequestBodySkusListPrice");
const PartialEditProductRequestBodySkusPreSale_1 = require("./product/V202309/PartialEditProductRequestBodySkusPreSale");
const PartialEditProductRequestBodySkusPreSaleFulfillmentType_1 = require("./product/V202309/PartialEditProductRequestBodySkusPreSaleFulfillmentType");
const PartialEditProductRequestBodySkusPrice_1 = require("./product/V202309/PartialEditProductRequestBodySkusPrice");
const PartialEditProductRequestBodySkusSalesAttributes_1 = require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributes");
const PartialEditProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributesSkuImg");
const PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages");
const PartialEditProductRequestBodySubscribeInfoEdit_1 = require("./product/V202309/PartialEditProductRequestBodySubscribeInfoEdit");
const PartialEditProductRequestBodySubscribeInfoEditDiscountDetails_1 = require("./product/V202309/PartialEditProductRequestBodySubscribeInfoEditDiscountDetails");
const PartialEditProductRequestBodyVideo_1 = require("./product/V202309/PartialEditProductRequestBodyVideo");
const PartialEditProductResponse_1 = require("./product/V202309/PartialEditProductResponse");
const PartialEditProductResponseData_1 = require("./product/V202309/PartialEditProductResponseData");
const PartialEditProductResponseDataAudit_1 = require("./product/V202309/PartialEditProductResponseDataAudit");
const PartialEditProductResponseDataReplicatedProducts_1 = require("./product/V202309/PartialEditProductResponseDataReplicatedProducts");
const PartialEditProductResponseDataReplicatedProductsSkus_1 = require("./product/V202309/PartialEditProductResponseDataReplicatedProductsSkus");
const PartialEditProductResponseDataSkus_1 = require("./product/V202309/PartialEditProductResponseDataSkus");
const PartialEditProductResponseDataSkusFees_1 = require("./product/V202309/PartialEditProductResponseDataSkusFees");
const PartialEditProductResponseDataSkusSalesAttributes_1 = require("./product/V202309/PartialEditProductResponseDataSkusSalesAttributes");
const PublishGlobalProductRequestBody_1 = require("./product/V202309/PublishGlobalProductRequestBody");
const PublishGlobalProductRequestBodyPublishTarget_1 = require("./product/V202309/PublishGlobalProductRequestBodyPublishTarget");
const PublishGlobalProductRequestBodyPublishTargetSkus_1 = require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkus");
const PublishGlobalProductRequestBodyPublishTargetSkusFees_1 = require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkusFees");
const PublishGlobalProductRequestBodyPublishTargetSkusInventory_1 = require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkusInventory");
const PublishGlobalProductRequestBodyPublishTargetSkusPrice_1 = require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkusPrice");
const PublishGlobalProductResponse_1 = require("./product/V202309/PublishGlobalProductResponse");
const PublishGlobalProductResponseData_1 = require("./product/V202309/PublishGlobalProductResponseData");
const PublishGlobalProductResponseDataProducts_1 = require("./product/V202309/PublishGlobalProductResponseDataProducts");
const PublishGlobalProductResponseDataProductsSkus_1 = require("./product/V202309/PublishGlobalProductResponseDataProductsSkus");
const PublishGlobalProductResponseDataProductsSkusSaleAttributes_1 = require("./product/V202309/PublishGlobalProductResponseDataProductsSkusSaleAttributes");
const PublishGlobalProductResponseDataPublishResult_1 = require("./product/V202309/PublishGlobalProductResponseDataPublishResult");
const PublishGlobalProductResponseDataPublishResultFailReasons_1 = require("./product/V202309/PublishGlobalProductResponseDataPublishResultFailReasons");
const RecommendCategoryRequestBody_1 = require("./product/V202309/RecommendCategoryRequestBody");
const RecommendCategoryRequestBodyImages_1 = require("./product/V202309/RecommendCategoryRequestBodyImages");
const RecommendCategoryResponse_1 = require("./product/V202309/RecommendCategoryResponse");
const RecommendCategoryResponseData_1 = require("./product/V202309/RecommendCategoryResponseData");
const RecommendCategoryResponseDataCategories_1 = require("./product/V202309/RecommendCategoryResponseDataCategories");
const RecommendGlobalCategoriesRequestBody_1 = require("./product/V202309/RecommendGlobalCategoriesRequestBody");
const RecommendGlobalCategoriesRequestBodyImages_1 = require("./product/V202309/RecommendGlobalCategoriesRequestBodyImages");
const RecommendGlobalCategoriesResponse_1 = require("./product/V202309/RecommendGlobalCategoriesResponse");
const RecommendGlobalCategoriesResponseData_1 = require("./product/V202309/RecommendGlobalCategoriesResponseData");
const RecommendGlobalCategoriesResponseDataCategories_1 = require("./product/V202309/RecommendGlobalCategoriesResponseDataCategories");
const RecoverProductsRequestBody_1 = require("./product/V202309/RecoverProductsRequestBody");
const RecoverProductsResponse_1 = require("./product/V202309/RecoverProductsResponse");
const RecoverProductsResponseData_1 = require("./product/V202309/RecoverProductsResponseData");
const RecoverProductsResponseDataErrors_1 = require("./product/V202309/RecoverProductsResponseDataErrors");
const RecoverProductsResponseDataErrorsDetail_1 = require("./product/V202309/RecoverProductsResponseDataErrorsDetail");
const SearchGlobalProductsRequestBody_1 = require("./product/V202309/SearchGlobalProductsRequestBody");
const SearchGlobalProductsResponse_1 = require("./product/V202309/SearchGlobalProductsResponse");
const SearchGlobalProductsResponseData_1 = require("./product/V202309/SearchGlobalProductsResponseData");
const SearchGlobalProductsResponseDataGlobalProducts_1 = require("./product/V202309/SearchGlobalProductsResponseDataGlobalProducts");
const SearchGlobalProductsResponseDataGlobalProductsSkus_1 = require("./product/V202309/SearchGlobalProductsResponseDataGlobalProductsSkus");
const SearchProductsRequestBody_1 = require("./product/V202309/SearchProductsRequestBody");
const SearchProductsResponse_1 = require("./product/V202309/SearchProductsResponse");
const SearchProductsResponseData_1 = require("./product/V202309/SearchProductsResponseData");
const SearchProductsResponseDataProducts_1 = require("./product/V202309/SearchProductsResponseDataProducts");
const SearchProductsResponseDataProductsRecommendedCategories_1 = require("./product/V202309/SearchProductsResponseDataProductsRecommendedCategories");
const SearchProductsResponseDataProductsSkus_1 = require("./product/V202309/SearchProductsResponseDataProductsSkus");
const SearchProductsResponseDataProductsSkusFees_1 = require("./product/V202309/SearchProductsResponseDataProductsSkusFees");
const SearchProductsResponseDataProductsSkusInventory_1 = require("./product/V202309/SearchProductsResponseDataProductsSkusInventory");
const SearchProductsResponseDataProductsSkusPrice_1 = require("./product/V202309/SearchProductsResponseDataProductsSkusPrice");
const UpdateGlobalInventoryRequestBody_1 = require("./product/V202309/UpdateGlobalInventoryRequestBody");
const UpdateGlobalInventoryRequestBodyGlobalSkus_1 = require("./product/V202309/UpdateGlobalInventoryRequestBodyGlobalSkus");
const UpdateGlobalInventoryRequestBodyGlobalSkusInventory_1 = require("./product/V202309/UpdateGlobalInventoryRequestBodyGlobalSkusInventory");
const UpdateGlobalInventoryResponse_1 = require("./product/V202309/UpdateGlobalInventoryResponse");
const UpdateInventoryRequestBody_1 = require("./product/V202309/UpdateInventoryRequestBody");
const UpdateInventoryRequestBodySkus_1 = require("./product/V202309/UpdateInventoryRequestBodySkus");
const UpdateInventoryRequestBodySkusInventory_1 = require("./product/V202309/UpdateInventoryRequestBodySkusInventory");
const UpdateInventoryResponse_1 = require("./product/V202309/UpdateInventoryResponse");
const UpdateInventoryResponseData_1 = require("./product/V202309/UpdateInventoryResponseData");
const UpdateInventoryResponseDataErrors_1 = require("./product/V202309/UpdateInventoryResponseDataErrors");
const UpdateInventoryResponseDataErrorsDetail_1 = require("./product/V202309/UpdateInventoryResponseDataErrorsDetail");
const UpdateInventoryResponseDataErrorsDetailExtraErrors_1 = require("./product/V202309/UpdateInventoryResponseDataErrorsDetailExtraErrors");
const UpdatePriceRequestBody_1 = require("./product/V202309/UpdatePriceRequestBody");
const UpdatePriceRequestBodySkus_1 = require("./product/V202309/UpdatePriceRequestBodySkus");
const UpdatePriceRequestBodySkusExternalListPrices_1 = require("./product/V202309/UpdatePriceRequestBodySkusExternalListPrices");
const UpdatePriceRequestBodySkusListPrice_1 = require("./product/V202309/UpdatePriceRequestBodySkusListPrice");
const UpdatePriceRequestBodySkusPrice_1 = require("./product/V202309/UpdatePriceRequestBodySkusPrice");
const UpdatePriceResponse_1 = require("./product/V202309/UpdatePriceResponse");
const UploadProductFileResponse_1 = require("./product/V202309/UploadProductFileResponse");
const UploadProductFileResponseData_1 = require("./product/V202309/UploadProductFileResponseData");
const UploadProductImageResponse_1 = require("./product/V202309/UploadProductImageResponse");
const UploadProductImageResponseData_1 = require("./product/V202309/UploadProductImageResponseData");
const CheckListingPrerequisitesResponse_2 = require("./product/V202312/CheckListingPrerequisitesResponse");
const CheckListingPrerequisitesResponseData_2 = require("./product/V202312/CheckListingPrerequisitesResponseData");
const CheckListingPrerequisitesResponseDataCheckResults_1 = require("./product/V202312/CheckListingPrerequisitesResponseDataCheckResults");
const SearchGlobalProductsRequestBody_2 = require("./product/V202312/SearchGlobalProductsRequestBody");
const SearchGlobalProductsResponse_2 = require("./product/V202312/SearchGlobalProductsResponse");
const SearchGlobalProductsResponseData_2 = require("./product/V202312/SearchGlobalProductsResponseData");
const SearchGlobalProductsResponseDataGlobalProducts_2 = require("./product/V202312/SearchGlobalProductsResponseDataGlobalProducts");
const SearchGlobalProductsResponseDataGlobalProductsSkus_2 = require("./product/V202312/SearchGlobalProductsResponseDataGlobalProductsSkus");
const SearchProductsRequestBody_2 = require("./product/V202312/SearchProductsRequestBody");
const SearchProductsResponse_2 = require("./product/V202312/SearchProductsResponse");
const SearchProductsResponseData_2 = require("./product/V202312/SearchProductsResponseData");
const SearchProductsResponseDataProducts_2 = require("./product/V202312/SearchProductsResponseDataProducts");
const SearchProductsResponseDataProductsAudit_1 = require("./product/V202312/SearchProductsResponseDataProductsAudit");
const SearchProductsResponseDataProductsIntegratedPlatformStatuses_1 = require("./product/V202312/SearchProductsResponseDataProductsIntegratedPlatformStatuses");
const SearchProductsResponseDataProductsRecommendedCategories_2 = require("./product/V202312/SearchProductsResponseDataProductsRecommendedCategories");
const SearchProductsResponseDataProductsSkus_2 = require("./product/V202312/SearchProductsResponseDataProductsSkus");
const SearchProductsResponseDataProductsSkusExternalListPrices_1 = require("./product/V202312/SearchProductsResponseDataProductsSkusExternalListPrices");
const SearchProductsResponseDataProductsSkusFees_2 = require("./product/V202312/SearchProductsResponseDataProductsSkusFees");
const SearchProductsResponseDataProductsSkusInventory_2 = require("./product/V202312/SearchProductsResponseDataProductsSkusInventory");
const SearchProductsResponseDataProductsSkusListPrice_1 = require("./product/V202312/SearchProductsResponseDataProductsSkusListPrice");
const SearchProductsResponseDataProductsSkusPrice_2 = require("./product/V202312/SearchProductsResponseDataProductsSkusPrice");
const ListingSchemasResponse_1 = require("./product/V202401/ListingSchemasResponse");
const ListingSchemasResponseData_1 = require("./product/V202401/ListingSchemasResponseData");
const ListingSchemasResponseDataErrors_1 = require("./product/V202401/ListingSchemasResponseDataErrors");
const ListingSchemasResponseDataErrorsDetail_1 = require("./product/V202401/ListingSchemasResponseDataErrorsDetail");
const ListingSchemasResponseDataListingSchemas_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemas");
const ListingSchemasResponseDataListingSchemasFileds_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFileds");
const ListingSchemasResponseDataListingSchemasFiledsComplexValues_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValues");
const ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions");
const ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules");
const ListingSchemasResponseDataListingSchemasFiledsOptions_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsOptions");
const ListingSchemasResponseDataListingSchemasFiledsRules_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsRules");
const OptimizedImagesRequestBody_1 = require("./product/V202404/OptimizedImagesRequestBody");
const OptimizedImagesRequestBodyImages_1 = require("./product/V202404/OptimizedImagesRequestBodyImages");
const OptimizedImagesResponse_1 = require("./product/V202404/OptimizedImagesResponse");
const OptimizedImagesResponseData_1 = require("./product/V202404/OptimizedImagesResponseData");
const OptimizedImagesResponseDataImages_1 = require("./product/V202404/OptimizedImagesResponseDataImages");
const GetProductsSEOWordsResponse_1 = require("./product/V202405/GetProductsSEOWordsResponse");
const GetProductsSEOWordsResponseData_1 = require("./product/V202405/GetProductsSEOWordsResponseData");
const GetProductsSEOWordsResponseDataProducts_1 = require("./product/V202405/GetProductsSEOWordsResponseDataProducts");
const GetProductsSEOWordsResponseDataProductsSeoWords_1 = require("./product/V202405/GetProductsSEOWordsResponseDataProductsSeoWords");
const GetRecommendedProductTitleAndDescriptionResponse_1 = require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponse");
const GetRecommendedProductTitleAndDescriptionResponseData_1 = require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseData");
const GetRecommendedProductTitleAndDescriptionResponseDataProducts_1 = require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProducts");
const GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions_1 = require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions");
const GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems_1 = require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems");
const ProductInformationIssueDiagnosisResponse_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponse");
const ProductInformationIssueDiagnosisResponseData_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseData");
const ProductInformationIssueDiagnosisResponseDataProducts_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProducts");
const ProductInformationIssueDiagnosisResponseDataProductsDiagnoses_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnoses");
const ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults");
const ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion");
const ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages");
const ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords");
const ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts");
const ProductInformationIssueDiagnosisResponseDataProductsListingQuality_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsListingQuality");
const CreateCategoryUpgradeTaskResponse_1 = require("./product/V202407/CreateCategoryUpgradeTaskResponse");
const ListingSchemasResponse_2 = require("./product/V202407/ListingSchemasResponse");
const ListingSchemasResponseData_2 = require("./product/V202407/ListingSchemasResponseData");
const ListingSchemasResponseDataErrors_2 = require("./product/V202407/ListingSchemasResponseDataErrors");
const ListingSchemasResponseDataErrorsDetail_2 = require("./product/V202407/ListingSchemasResponseDataErrorsDetail");
const ListingSchemasResponseDataListingSchemas_2 = require("./product/V202407/ListingSchemasResponseDataListingSchemas");
const ListingSchemasResponseDataListingSchemasFields_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFields");
const ListingSchemasResponseDataListingSchemasFieldsComplexValues_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValues");
const ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions");
const ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules");
const ListingSchemasResponseDataListingSchemasFieldsOptions_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsOptions");
const ListingSchemasResponseDataListingSchemasFieldsRules_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsRules");
const SearchSizeChartsRequestBody_1 = require("./product/V202407/SearchSizeChartsRequestBody");
const SearchSizeChartsResponse_1 = require("./product/V202407/SearchSizeChartsResponse");
const SearchSizeChartsResponseData_1 = require("./product/V202407/SearchSizeChartsResponseData");
const SearchSizeChartsResponseDataSizeChart_1 = require("./product/V202407/SearchSizeChartsResponseDataSizeChart");
const SearchSizeChartsResponseDataSizeChartImages_1 = require("./product/V202407/SearchSizeChartsResponseDataSizeChartImages");
const CreateManufacturerRequestBody_1 = require("./product/V202409/CreateManufacturerRequestBody");
const CreateManufacturerRequestBodyPhoneNumber_1 = require("./product/V202409/CreateManufacturerRequestBodyPhoneNumber");
const CreateManufacturerResponse_1 = require("./product/V202409/CreateManufacturerResponse");
const CreateManufacturerResponseData_1 = require("./product/V202409/CreateManufacturerResponseData");
const CreateResponsiblePersonRequestBody_1 = require("./product/V202409/CreateResponsiblePersonRequestBody");
const CreateResponsiblePersonRequestBodyAddress_1 = require("./product/V202409/CreateResponsiblePersonRequestBodyAddress");
const CreateResponsiblePersonRequestBodyPhoneNumber_1 = require("./product/V202409/CreateResponsiblePersonRequestBodyPhoneNumber");
const CreateResponsiblePersonResponse_1 = require("./product/V202409/CreateResponsiblePersonResponse");
const CreateResponsiblePersonResponseData_1 = require("./product/V202409/CreateResponsiblePersonResponseData");
const PartialEditManufacturerRequestBody_1 = require("./product/V202409/PartialEditManufacturerRequestBody");
const PartialEditManufacturerRequestBodyPhoneNumber_1 = require("./product/V202409/PartialEditManufacturerRequestBodyPhoneNumber");
const PartialEditManufacturerResponse_1 = require("./product/V202409/PartialEditManufacturerResponse");
const PartialEditResponsiblePersonRequestBody_1 = require("./product/V202409/PartialEditResponsiblePersonRequestBody");
const PartialEditResponsiblePersonRequestBodyAddress_1 = require("./product/V202409/PartialEditResponsiblePersonRequestBodyAddress");
const PartialEditResponsiblePersonRequestBodyPhoneNumber_1 = require("./product/V202409/PartialEditResponsiblePersonRequestBodyPhoneNumber");
const PartialEditResponsiblePersonResponse_1 = require("./product/V202409/PartialEditResponsiblePersonResponse");
const SearchManufacturersRequestBody_1 = require("./product/V202409/SearchManufacturersRequestBody");
const SearchManufacturersResponse_1 = require("./product/V202409/SearchManufacturersResponse");
const SearchManufacturersResponseData_1 = require("./product/V202409/SearchManufacturersResponseData");
const SearchManufacturersResponseDataManufacturers_1 = require("./product/V202409/SearchManufacturersResponseDataManufacturers");
const SearchManufacturersResponseDataManufacturersPhoneNumber_1 = require("./product/V202409/SearchManufacturersResponseDataManufacturersPhoneNumber");
const SearchResponsiblePersonsRequestBody_1 = require("./product/V202409/SearchResponsiblePersonsRequestBody");
const SearchResponsiblePersonsResponse_1 = require("./product/V202409/SearchResponsiblePersonsResponse");
const SearchResponsiblePersonsResponseData_1 = require("./product/V202409/SearchResponsiblePersonsResponseData");
const SearchResponsiblePersonsResponseDataResponsiblePersons_1 = require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersons");
const SearchResponsiblePersonsResponseDataResponsiblePersonsAddress_1 = require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersonsAddress");
const SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber_1 = require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber");
const DiagnoseandOptimizeProductRequestBody_1 = require("./product/V202411/DiagnoseandOptimizeProductRequestBody");
const DiagnoseandOptimizeProductRequestBodyMainImages_1 = require("./product/V202411/DiagnoseandOptimizeProductRequestBodyMainImages");
const DiagnoseandOptimizeProductRequestBodyProductAttributes_1 = require("./product/V202411/DiagnoseandOptimizeProductRequestBodyProductAttributes");
const DiagnoseandOptimizeProductRequestBodyProductAttributesValues_1 = require("./product/V202411/DiagnoseandOptimizeProductRequestBodyProductAttributesValues");
const DiagnoseandOptimizeProductRequestBodySizeChart_1 = require("./product/V202411/DiagnoseandOptimizeProductRequestBodySizeChart");
const DiagnoseandOptimizeProductRequestBodySizeChartImage_1 = require("./product/V202411/DiagnoseandOptimizeProductRequestBodySizeChartImage");
const DiagnoseandOptimizeProductRequestBodySizeChartTemplate_1 = require("./product/V202411/DiagnoseandOptimizeProductRequestBodySizeChartTemplate");
const DiagnoseandOptimizeProductResponse_1 = require("./product/V202411/DiagnoseandOptimizeProductResponse");
const DiagnoseandOptimizeProductResponseData_1 = require("./product/V202411/DiagnoseandOptimizeProductResponseData");
const DiagnoseandOptimizeProductResponseDataDiagnoses_1 = require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnoses");
const DiagnoseandOptimizeProductResponseDataDiagnosesDiagnosisResults_1 = require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnosesDiagnosisResults");
const DiagnoseandOptimizeProductResponseDataDiagnosesSuggestion_1 = require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnosesSuggestion");
const DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionImages_1 = require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionImages");
const DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSeoWords_1 = require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSeoWords");
const DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSmartTexts_1 = require("./product/V202411/DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSmartTexts");
const DiagnoseandOptimizeProductResponseDataListingQuality_1 = require("./product/V202411/DiagnoseandOptimizeProductResponseDataListingQuality");
const SearchManufacturersRequestBody_2 = require("./product/V202501/SearchManufacturersRequestBody");
const SearchManufacturersResponse_2 = require("./product/V202501/SearchManufacturersResponse");
const SearchManufacturersResponseData_2 = require("./product/V202501/SearchManufacturersResponseData");
const SearchManufacturersResponseDataManufacturers_2 = require("./product/V202501/SearchManufacturersResponseDataManufacturers");
const SearchManufacturersResponseDataManufacturersRegionalProfiles_1 = require("./product/V202501/SearchManufacturersResponseDataManufacturersRegionalProfiles");
const SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber_1 = require("./product/V202501/SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber");
const SearchResponsiblePersonsRequestBody_2 = require("./product/V202501/SearchResponsiblePersonsRequestBody");
const SearchResponsiblePersonsResponse_2 = require("./product/V202501/SearchResponsiblePersonsResponse");
const SearchResponsiblePersonsResponseData_2 = require("./product/V202501/SearchResponsiblePersonsResponseData");
const SearchResponsiblePersonsResponseDataResponsiblePersons_2 = require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersons");
const SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles_1 = require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles");
const SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress_1 = require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress");
const SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber_1 = require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber");
const SearchProductsRequestBody_3 = require("./product/V202502/SearchProductsRequestBody");
const SearchProductsResponse_3 = require("./product/V202502/SearchProductsResponse");
const SearchProductsResponseData_3 = require("./product/V202502/SearchProductsResponseData");
const SearchProductsResponseDataProducts_3 = require("./product/V202502/SearchProductsResponseDataProducts");
const SearchProductsResponseDataProductsAudit_2 = require("./product/V202502/SearchProductsResponseDataProductsAudit");
const SearchProductsResponseDataProductsIntegratedPlatformStatuses_2 = require("./product/V202502/SearchProductsResponseDataProductsIntegratedPlatformStatuses");
const SearchProductsResponseDataProductsProductFamilies_1 = require("./product/V202502/SearchProductsResponseDataProductsProductFamilies");
const SearchProductsResponseDataProductsProductFamiliesProducts_1 = require("./product/V202502/SearchProductsResponseDataProductsProductFamiliesProducts");
const SearchProductsResponseDataProductsRecommendedCategories_3 = require("./product/V202502/SearchProductsResponseDataProductsRecommendedCategories");
const SearchProductsResponseDataProductsSkus_3 = require("./product/V202502/SearchProductsResponseDataProductsSkus");
const SearchProductsResponseDataProductsSkusExternalListPrices_2 = require("./product/V202502/SearchProductsResponseDataProductsSkusExternalListPrices");
const SearchProductsResponseDataProductsSkusFees_3 = require("./product/V202502/SearchProductsResponseDataProductsSkusFees");
const SearchProductsResponseDataProductsSkusInventory_3 = require("./product/V202502/SearchProductsResponseDataProductsSkusInventory");
const SearchProductsResponseDataProductsSkusListPrice_2 = require("./product/V202502/SearchProductsResponseDataProductsSkusListPrice");
const SearchProductsResponseDataProductsSkusPreSale_1 = require("./product/V202502/SearchProductsResponseDataProductsSkusPreSale");
const SearchProductsResponseDataProductsSkusPreSaleFulfillmentType_1 = require("./product/V202502/SearchProductsResponseDataProductsSkusPreSaleFulfillmentType");
const SearchProductsResponseDataProductsSkusPrice_3 = require("./product/V202502/SearchProductsResponseDataProductsSkusPrice");
const SearchProductsResponseDataProductsSkusStatusInfo_1 = require("./product/V202502/SearchProductsResponseDataProductsSkusStatusInfo");
const CreateImageTranslationTasksRequestBody_1 = require("./product/V202505/CreateImageTranslationTasksRequestBody");
const CreateImageTranslationTasksRequestBodyImages_1 = require("./product/V202505/CreateImageTranslationTasksRequestBodyImages");
const CreateImageTranslationTasksResponse_1 = require("./product/V202505/CreateImageTranslationTasksResponse");
const CreateImageTranslationTasksResponseData_1 = require("./product/V202505/CreateImageTranslationTasksResponseData");
const CreateImageTranslationTasksResponseDataTranslationTasks_1 = require("./product/V202505/CreateImageTranslationTasksResponseDataTranslationTasks");
const GetImageTranslationTasksResponse_1 = require("./product/V202506/GetImageTranslationTasksResponse");
const GetImageTranslationTasksResponseData_1 = require("./product/V202506/GetImageTranslationTasksResponseData");
const GetImageTranslationTasksResponseDataTranslationTasks_1 = require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasks");
const GetImageTranslationTasksResponseDataTranslationTasksOriginalImage_1 = require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasksOriginalImage");
const GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage_1 = require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage");
const GetGlobalListingRulesResponse_1 = require("./product/V202507/GetGlobalListingRulesResponse");
const GetGlobalListingRulesResponseData_1 = require("./product/V202507/GetGlobalListingRulesResponseData");
const GetGlobalListingRulesResponseDataInventoryRules_1 = require("./product/V202507/GetGlobalListingRulesResponseDataInventoryRules");
const GetGlobalListingRulesResponseDataInventoryRulesAssociatedWarehouses_1 = require("./product/V202507/GetGlobalListingRulesResponseDataInventoryRulesAssociatedWarehouses");
const GetGlobalReplicatedProductsResponse_1 = require("./product/V202507/GetGlobalReplicatedProductsResponse");
const GetGlobalReplicatedProductsResponseData_1 = require("./product/V202507/GetGlobalReplicatedProductsResponseData");
const GetGlobalReplicatedProductsResponseDataReplicatedProducts_1 = require("./product/V202507/GetGlobalReplicatedProductsResponseDataReplicatedProducts");
const ReplicateProductRequestBody_1 = require("./product/V202507/ReplicateProductRequestBody");
const ReplicateProductRequestBodyReplicateTarget_1 = require("./product/V202507/ReplicateProductRequestBodyReplicateTarget");
const ReplicateProductRequestBodyReplicateTargetSkus_1 = require("./product/V202507/ReplicateProductRequestBodyReplicateTargetSkus");
const ReplicateProductRequestBodyReplicateTargetSkusInventory_1 = require("./product/V202507/ReplicateProductRequestBodyReplicateTargetSkusInventory");
const ReplicateProductRequestBodyReplicateTargetSkusPrice_1 = require("./product/V202507/ReplicateProductRequestBodyReplicateTargetSkusPrice");
const ReplicateProductResponse_1 = require("./product/V202507/ReplicateProductResponse");
const ReplicateProductResponseData_1 = require("./product/V202507/ReplicateProductResponseData");
const ReplicateProductResponseDataErrors_1 = require("./product/V202507/ReplicateProductResponseDataErrors");
const ReplicateProductResponseDataErrorsDetail_1 = require("./product/V202507/ReplicateProductResponseDataErrorsDetail");
const EditProductRequestBody_2 = require("./product/V202509/EditProductRequestBody");
const EditProductRequestBodyCertifications_2 = require("./product/V202509/EditProductRequestBodyCertifications");
const EditProductRequestBodyCertificationsFiles_2 = require("./product/V202509/EditProductRequestBodyCertificationsFiles");
const EditProductRequestBodyCertificationsImages_2 = require("./product/V202509/EditProductRequestBodyCertificationsImages");
const EditProductRequestBodyMainImages_2 = require("./product/V202509/EditProductRequestBodyMainImages");
const EditProductRequestBodyPackageDimensions_2 = require("./product/V202509/EditProductRequestBodyPackageDimensions");
const EditProductRequestBodyPackageWeight_2 = require("./product/V202509/EditProductRequestBodyPackageWeight");
const EditProductRequestBodyProductAttributes_2 = require("./product/V202509/EditProductRequestBodyProductAttributes");
const EditProductRequestBodyProductAttributesValues_2 = require("./product/V202509/EditProductRequestBodyProductAttributesValues");
const EditProductRequestBodyReplicatedProducts_2 = require("./product/V202509/EditProductRequestBodyReplicatedProducts");
const EditProductRequestBodyReplicatedProductsSkus_2 = require("./product/V202509/EditProductRequestBodyReplicatedProductsSkus");
const EditProductRequestBodyReplicatedProductsSkusInventory_2 = require("./product/V202509/EditProductRequestBodyReplicatedProductsSkusInventory");
const EditProductRequestBodyReplicatedProductsSkusPrice_2 = require("./product/V202509/EditProductRequestBodyReplicatedProductsSkusPrice");
const EditProductRequestBodySizeChart_2 = require("./product/V202509/EditProductRequestBodySizeChart");
const EditProductRequestBodySizeChartImage_2 = require("./product/V202509/EditProductRequestBodySizeChartImage");
const EditProductRequestBodySizeChartTemplate_2 = require("./product/V202509/EditProductRequestBodySizeChartTemplate");
const EditProductRequestBodySkus_2 = require("./product/V202509/EditProductRequestBodySkus");
const EditProductRequestBodySkusCombinedSkus_2 = require("./product/V202509/EditProductRequestBodySkusCombinedSkus");
const EditProductRequestBodySkusExternalListPrices_2 = require("./product/V202509/EditProductRequestBodySkusExternalListPrices");
const EditProductRequestBodySkusFees_2 = require("./product/V202509/EditProductRequestBodySkusFees");
const EditProductRequestBodySkusIdentifierCode_2 = require("./product/V202509/EditProductRequestBodySkusIdentifierCode");
const EditProductRequestBodySkusInventory_2 = require("./product/V202509/EditProductRequestBodySkusInventory");
const EditProductRequestBodySkusListPrice_2 = require("./product/V202509/EditProductRequestBodySkusListPrice");
const EditProductRequestBodySkusPreSale_2 = require("./product/V202509/EditProductRequestBodySkusPreSale");
const EditProductRequestBodySkusPreSaleFulfillmentType_2 = require("./product/V202509/EditProductRequestBodySkusPreSaleFulfillmentType");
const EditProductRequestBodySkusPrice_2 = require("./product/V202509/EditProductRequestBodySkusPrice");
const EditProductRequestBodySkusSalesAttributes_2 = require("./product/V202509/EditProductRequestBodySkusSalesAttributes");
const EditProductRequestBodySkusSalesAttributesSkuImg_2 = require("./product/V202509/EditProductRequestBodySkusSalesAttributesSkuImg");
const EditProductRequestBodySkusSalesAttributesSupplementarySkuImages_2 = require("./product/V202509/EditProductRequestBodySkusSalesAttributesSupplementarySkuImages");
const EditProductRequestBodySubscribeInfoEdit_2 = require("./product/V202509/EditProductRequestBodySubscribeInfoEdit");
const EditProductRequestBodySubscribeInfoEditDiscountDetails_2 = require("./product/V202509/EditProductRequestBodySubscribeInfoEditDiscountDetails");
const EditProductRequestBodyVideo_2 = require("./product/V202509/EditProductRequestBodyVideo");
const EditProductResponse_2 = require("./product/V202509/EditProductResponse");
const EditProductResponseData_2 = require("./product/V202509/EditProductResponseData");
const EditProductResponseDataAudit_2 = require("./product/V202509/EditProductResponseDataAudit");
const EditProductResponseDataSkus_2 = require("./product/V202509/EditProductResponseDataSkus");
const EditProductResponseDataSkusFees_2 = require("./product/V202509/EditProductResponseDataSkusFees");
const EditProductResponseDataSkusSalesAttributes_2 = require("./product/V202509/EditProductResponseDataSkusSalesAttributes");
const EditProductResponseDataWarnings_2 = require("./product/V202509/EditProductResponseDataWarnings");
const PartialEditGlobalProductRequestBody_1 = require("./product/V202509/PartialEditGlobalProductRequestBody");
const PartialEditGlobalProductRequestBodyCertifications_1 = require("./product/V202509/PartialEditGlobalProductRequestBodyCertifications");
const PartialEditGlobalProductRequestBodyCertificationsFiles_1 = require("./product/V202509/PartialEditGlobalProductRequestBodyCertificationsFiles");
const PartialEditGlobalProductRequestBodyCertificationsImages_1 = require("./product/V202509/PartialEditGlobalProductRequestBodyCertificationsImages");
const PartialEditGlobalProductRequestBodyMainImages_1 = require("./product/V202509/PartialEditGlobalProductRequestBodyMainImages");
const PartialEditGlobalProductRequestBodyManufacturer_1 = require("./product/V202509/PartialEditGlobalProductRequestBodyManufacturer");
const PartialEditGlobalProductRequestBodyPackageDimensions_1 = require("./product/V202509/PartialEditGlobalProductRequestBodyPackageDimensions");
const PartialEditGlobalProductRequestBodyPackageWeight_1 = require("./product/V202509/PartialEditGlobalProductRequestBodyPackageWeight");
const PartialEditGlobalProductRequestBodyProductAttributes_1 = require("./product/V202509/PartialEditGlobalProductRequestBodyProductAttributes");
const PartialEditGlobalProductRequestBodyProductAttributesValues_1 = require("./product/V202509/PartialEditGlobalProductRequestBodyProductAttributesValues");
const PartialEditGlobalProductRequestBodySizeChart_1 = require("./product/V202509/PartialEditGlobalProductRequestBodySizeChart");
const PartialEditGlobalProductRequestBodySizeChartImage_1 = require("./product/V202509/PartialEditGlobalProductRequestBodySizeChartImage");
const PartialEditGlobalProductRequestBodySizeChartTemplate_1 = require("./product/V202509/PartialEditGlobalProductRequestBodySizeChartTemplate");
const PartialEditGlobalProductRequestBodySkus_1 = require("./product/V202509/PartialEditGlobalProductRequestBodySkus");
const PartialEditGlobalProductRequestBodySkusIdentifierCode_1 = require("./product/V202509/PartialEditGlobalProductRequestBodySkusIdentifierCode");
const PartialEditGlobalProductRequestBodySkusInventory_1 = require("./product/V202509/PartialEditGlobalProductRequestBodySkusInventory");
const PartialEditGlobalProductRequestBodySkusPrice_1 = require("./product/V202509/PartialEditGlobalProductRequestBodySkusPrice");
const PartialEditGlobalProductRequestBodySkusSalePrices_1 = require("./product/V202509/PartialEditGlobalProductRequestBodySkusSalePrices");
const PartialEditGlobalProductRequestBodySkusSalesAttributes_1 = require("./product/V202509/PartialEditGlobalProductRequestBodySkusSalesAttributes");
const PartialEditGlobalProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202509/PartialEditGlobalProductRequestBodySkusSalesAttributesSkuImg");
const PartialEditGlobalProductRequestBodyVideo_1 = require("./product/V202509/PartialEditGlobalProductRequestBodyVideo");
const PartialEditGlobalProductResponse_1 = require("./product/V202509/PartialEditGlobalProductResponse");
const PartialEditGlobalProductResponseData_1 = require("./product/V202509/PartialEditGlobalProductResponseData");
const PartialEditGlobalProductResponseDataGlobalSkus_1 = require("./product/V202509/PartialEditGlobalProductResponseDataGlobalSkus");
const PartialEditGlobalProductResponseDataGlobalSkusSalesAttributes_1 = require("./product/V202509/PartialEditGlobalProductResponseDataGlobalSkusSalesAttributes");
const PartialEditGlobalProductResponseDataPublishResults_1 = require("./product/V202509/PartialEditGlobalProductResponseDataPublishResults");
const PartialEditGlobalProductResponseDataPublishResultsFailReasons_1 = require("./product/V202509/PartialEditGlobalProductResponseDataPublishResultsFailReasons");
const PartialEditProductRequestBody_2 = require("./product/V202509/PartialEditProductRequestBody");
const PartialEditProductRequestBodyCertifications_2 = require("./product/V202509/PartialEditProductRequestBodyCertifications");
const PartialEditProductRequestBodyCertificationsFiles_2 = require("./product/V202509/PartialEditProductRequestBodyCertificationsFiles");
const PartialEditProductRequestBodyCertificationsImages_2 = require("./product/V202509/PartialEditProductRequestBodyCertificationsImages");
const PartialEditProductRequestBodyMainImages_2 = require("./product/V202509/PartialEditProductRequestBodyMainImages");
const PartialEditProductRequestBodyPackageDimensions_2 = require("./product/V202509/PartialEditProductRequestBodyPackageDimensions");
const PartialEditProductRequestBodyPackageWeight_2 = require("./product/V202509/PartialEditProductRequestBodyPackageWeight");
const PartialEditProductRequestBodyProductAttributes_2 = require("./product/V202509/PartialEditProductRequestBodyProductAttributes");
const PartialEditProductRequestBodyProductAttributesValues_2 = require("./product/V202509/PartialEditProductRequestBodyProductAttributesValues");
const PartialEditProductRequestBodyReplicatedProducts_2 = require("./product/V202509/PartialEditProductRequestBodyReplicatedProducts");
const PartialEditProductRequestBodyReplicatedProductsSkus_2 = require("./product/V202509/PartialEditProductRequestBodyReplicatedProductsSkus");
const PartialEditProductRequestBodyReplicatedProductsSkusInventory_2 = require("./product/V202509/PartialEditProductRequestBodyReplicatedProductsSkusInventory");
const PartialEditProductRequestBodyReplicatedProductsSkusPrice_2 = require("./product/V202509/PartialEditProductRequestBodyReplicatedProductsSkusPrice");
const PartialEditProductRequestBodySizeChart_2 = require("./product/V202509/PartialEditProductRequestBodySizeChart");
const PartialEditProductRequestBodySizeChartImage_2 = require("./product/V202509/PartialEditProductRequestBodySizeChartImage");
const PartialEditProductRequestBodySizeChartTemplate_2 = require("./product/V202509/PartialEditProductRequestBodySizeChartTemplate");
const PartialEditProductRequestBodySkus_2 = require("./product/V202509/PartialEditProductRequestBodySkus");
const PartialEditProductRequestBodySkusExternalListPrices_2 = require("./product/V202509/PartialEditProductRequestBodySkusExternalListPrices");
const PartialEditProductRequestBodySkusFees_2 = require("./product/V202509/PartialEditProductRequestBodySkusFees");
const PartialEditProductRequestBodySkusIdentifierCode_2 = require("./product/V202509/PartialEditProductRequestBodySkusIdentifierCode");
const PartialEditProductRequestBodySkusInventory_2 = require("./product/V202509/PartialEditProductRequestBodySkusInventory");
const PartialEditProductRequestBodySkusListPrice_2 = require("./product/V202509/PartialEditProductRequestBodySkusListPrice");
const PartialEditProductRequestBodySkusPreSale_2 = require("./product/V202509/PartialEditProductRequestBodySkusPreSale");
const PartialEditProductRequestBodySkusPreSaleFulfillmentType_2 = require("./product/V202509/PartialEditProductRequestBodySkusPreSaleFulfillmentType");
const PartialEditProductRequestBodySkusPrice_2 = require("./product/V202509/PartialEditProductRequestBodySkusPrice");
const PartialEditProductRequestBodySkusSalesAttributes_2 = require("./product/V202509/PartialEditProductRequestBodySkusSalesAttributes");
const PartialEditProductRequestBodySkusSalesAttributesSkuImg_2 = require("./product/V202509/PartialEditProductRequestBodySkusSalesAttributesSkuImg");
const PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages_2 = require("./product/V202509/PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages");
const PartialEditProductRequestBodySubscribeInfoEdit_2 = require("./product/V202509/PartialEditProductRequestBodySubscribeInfoEdit");
const PartialEditProductRequestBodySubscribeInfoEditDiscountDetails_2 = require("./product/V202509/PartialEditProductRequestBodySubscribeInfoEditDiscountDetails");
const PartialEditProductRequestBodyVideo_2 = require("./product/V202509/PartialEditProductRequestBodyVideo");
const PartialEditProductResponse_2 = require("./product/V202509/PartialEditProductResponse");
const PartialEditProductResponseData_2 = require("./product/V202509/PartialEditProductResponseData");
const PartialEditProductResponseDataAudit_2 = require("./product/V202509/PartialEditProductResponseDataAudit");
const PartialEditProductResponseDataSkus_2 = require("./product/V202509/PartialEditProductResponseDataSkus");
const PartialEditProductResponseDataSkusFees_2 = require("./product/V202509/PartialEditProductResponseDataSkusFees");
const PartialEditProductResponseDataSkusSalesAttributes_2 = require("./product/V202509/PartialEditProductResponseDataSkusSalesAttributes");
const CreateActivityRequestBody_1 = require("./promotion/V202309/CreateActivityRequestBody");
const CreateActivityRequestBodyDiscount_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscount");
const CreateActivityRequestBodyDiscountBmsmDiscount_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountBmsmDiscount");
const CreateActivityRequestBodyDiscountBmsmDiscountDetails_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountBmsmDiscountDetails");
const CreateActivityRequestBodyDiscountGiftDiscount_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountGiftDiscount");
const CreateActivityRequestBodyDiscountGiftDiscountGiftInfos_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountGiftDiscountGiftInfos");
const CreateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails");
const CreateActivityRequestBodyDiscountShippingDiscount_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountShippingDiscount");
const CreateActivityRequestBodyDiscountShippingDiscountAreaScope_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountShippingDiscountAreaScope");
const CreateActivityRequestBodyParticipationLimit_1 = require("./promotion/V202309/CreateActivityRequestBodyParticipationLimit");
const CreateActivityRequestBodyTargetUserInfo_1 = require("./promotion/V202309/CreateActivityRequestBodyTargetUserInfo");
const CreateActivityResponse_1 = require("./promotion/V202309/CreateActivityResponse");
const CreateActivityResponseData_1 = require("./promotion/V202309/CreateActivityResponseData");
const DeactivateActivityResponse_1 = require("./promotion/V202309/DeactivateActivityResponse");
const DeactivateActivityResponseData_1 = require("./promotion/V202309/DeactivateActivityResponseData");
const GetActivityResponse_1 = require("./promotion/V202309/GetActivityResponse");
const GetActivityResponseData_1 = require("./promotion/V202309/GetActivityResponseData");
const GetActivityResponseDataDiscount_1 = require("./promotion/V202309/GetActivityResponseDataDiscount");
const GetActivityResponseDataDiscountBmsmDiscount_1 = require("./promotion/V202309/GetActivityResponseDataDiscountBmsmDiscount");
const GetActivityResponseDataDiscountBmsmDiscountDetails_1 = require("./promotion/V202309/GetActivityResponseDataDiscountBmsmDiscountDetails");
const GetActivityResponseDataDiscountGiftDiscount_1 = require("./promotion/V202309/GetActivityResponseDataDiscountGiftDiscount");
const GetActivityResponseDataDiscountGiftDiscountGiftInfos_1 = require("./promotion/V202309/GetActivityResponseDataDiscountGiftDiscountGiftInfos");
const GetActivityResponseDataDiscountGiftDiscountGiftInfosGiftDetails_1 = require("./promotion/V202309/GetActivityResponseDataDiscountGiftDiscountGiftInfosGiftDetails");
const GetActivityResponseDataDiscountShippingDiscount_1 = require("./promotion/V202309/GetActivityResponseDataDiscountShippingDiscount");
const GetActivityResponseDataDiscountShippingDiscountAreaScope_1 = require("./promotion/V202309/GetActivityResponseDataDiscountShippingDiscountAreaScope");
const GetActivityResponseDataParticipationLimit_1 = require("./promotion/V202309/GetActivityResponseDataParticipationLimit");
const GetActivityResponseDataProducts_1 = require("./promotion/V202309/GetActivityResponseDataProducts");
const GetActivityResponseDataProductsActivityPrice_1 = require("./promotion/V202309/GetActivityResponseDataProductsActivityPrice");
const GetActivityResponseDataProductsSkus_1 = require("./promotion/V202309/GetActivityResponseDataProductsSkus");
const GetActivityResponseDataProductsSkusActivityPrice_1 = require("./promotion/V202309/GetActivityResponseDataProductsSkusActivityPrice");
const GetActivityResponseDataTargetUserInfo_1 = require("./promotion/V202309/GetActivityResponseDataTargetUserInfo");
const RemoveActivityProductRequestBody_1 = require("./promotion/V202309/RemoveActivityProductRequestBody");
const RemoveActivityProductResponse_1 = require("./promotion/V202309/RemoveActivityProductResponse");
const RemoveActivityProductResponseData_1 = require("./promotion/V202309/RemoveActivityProductResponseData");
const SearchActivitiesRequestBody_1 = require("./promotion/V202309/SearchActivitiesRequestBody");
const SearchActivitiesResponse_1 = require("./promotion/V202309/SearchActivitiesResponse");
const SearchActivitiesResponseData_1 = require("./promotion/V202309/SearchActivitiesResponseData");
const SearchActivitiesResponseDataActivities_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivities");
const SearchActivitiesResponseDataActivitiesDiscount_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscount");
const SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount");
const SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails");
const SearchActivitiesResponseDataActivitiesDiscountGiftDiscount_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountGiftDiscount");
const SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos");
const SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfosGiftDetails_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfosGiftDetails");
const SearchActivitiesResponseDataActivitiesDiscountShippingDiscount_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountShippingDiscount");
const SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope");
const SearchActivitiesResponseDataActivitiesParticipationLimit_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesParticipationLimit");
const UpdateActivityProductRequestBody_1 = require("./promotion/V202309/UpdateActivityProductRequestBody");
const UpdateActivityProductRequestBodyProducts_1 = require("./promotion/V202309/UpdateActivityProductRequestBodyProducts");
const UpdateActivityProductRequestBodyProductsSkus_1 = require("./promotion/V202309/UpdateActivityProductRequestBodyProductsSkus");
const UpdateActivityProductResponse_1 = require("./promotion/V202309/UpdateActivityProductResponse");
const UpdateActivityProductResponseData_1 = require("./promotion/V202309/UpdateActivityProductResponseData");
const UpdateActivityRequestBody_1 = require("./promotion/V202309/UpdateActivityRequestBody");
const UpdateActivityRequestBodyDiscount_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscount");
const UpdateActivityRequestBodyDiscountBmsmDiscount_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountBmsmDiscount");
const UpdateActivityRequestBodyDiscountBmsmDiscountDetails_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountBmsmDiscountDetails");
const UpdateActivityRequestBodyDiscountGiftDiscount_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountGiftDiscount");
const UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos");
const UpdateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails");
const UpdateActivityRequestBodyDiscountShippingDiscount_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountShippingDiscount");
const UpdateActivityRequestBodyDiscountShippingDiscountAreaScope_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountShippingDiscountAreaScope");
const UpdateActivityRequestBodyParticipationLimit_1 = require("./promotion/V202309/UpdateActivityRequestBodyParticipationLimit");
const UpdateActivityRequestBodyTargetUserInfo_1 = require("./promotion/V202309/UpdateActivityRequestBodyTargetUserInfo");
const UpdateActivityResponse_1 = require("./promotion/V202309/UpdateActivityResponse");
const UpdateActivityResponseData_1 = require("./promotion/V202309/UpdateActivityResponseData");
const GetCouponResponse_1 = require("./promotion/V202406/GetCouponResponse");
const GetCouponResponseData_1 = require("./promotion/V202406/GetCouponResponseData");
const GetCouponResponseDataCoupon_1 = require("./promotion/V202406/GetCouponResponseDataCoupon");
const GetCouponResponseDataCouponClaimDuration_1 = require("./promotion/V202406/GetCouponResponseDataCouponClaimDuration");
const GetCouponResponseDataCouponDiscount_1 = require("./promotion/V202406/GetCouponResponseDataCouponDiscount");
const GetCouponResponseDataCouponDiscountMaxDiscount_1 = require("./promotion/V202406/GetCouponResponseDataCouponDiscountMaxDiscount");
const GetCouponResponseDataCouponDiscountReductionAmount_1 = require("./promotion/V202406/GetCouponResponseDataCouponDiscountReductionAmount");
const GetCouponResponseDataCouponLiveTasks_1 = require("./promotion/V202406/GetCouponResponseDataCouponLiveTasks");
const GetCouponResponseDataCouponRedemptionDuration_1 = require("./promotion/V202406/GetCouponResponseDataCouponRedemptionDuration");
const GetCouponResponseDataCouponThreshold_1 = require("./promotion/V202406/GetCouponResponseDataCouponThreshold");
const GetCouponResponseDataCouponThresholdMinSpend_1 = require("./promotion/V202406/GetCouponResponseDataCouponThresholdMinSpend");
const GetCouponResponseDataCouponUsageLimits_1 = require("./promotion/V202406/GetCouponResponseDataCouponUsageLimits");
const GetCouponResponseDataCouponUsageStats_1 = require("./promotion/V202406/GetCouponResponseDataCouponUsageStats");
const SearchCouponsRequestBody_1 = require("./promotion/V202406/SearchCouponsRequestBody");
const SearchCouponsResponse_1 = require("./promotion/V202406/SearchCouponsResponse");
const SearchCouponsResponseData_1 = require("./promotion/V202406/SearchCouponsResponseData");
const SearchCouponsResponseDataCoupons_1 = require("./promotion/V202406/SearchCouponsResponseDataCoupons");
const SearchCouponsResponseDataCouponsClaimDuration_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsClaimDuration");
const SearchCouponsResponseDataCouponsDiscount_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscount");
const SearchCouponsResponseDataCouponsDiscountMaxDiscount_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscountMaxDiscount");
const SearchCouponsResponseDataCouponsDiscountReductionAmount_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscountReductionAmount");
const SearchCouponsResponseDataCouponsRedemptionDuration_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsRedemptionDuration");
const SearchCouponsResponseDataCouponsThreshold_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsThreshold");
const SearchCouponsResponseDataCouponsThresholdMinSpend_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsThresholdMinSpend");
const SearchCouponsResponseDataCouponsUsageLimits_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsUsageLimits");
const ApproveCancellationResponse_1 = require("./returnRefund/V202309/ApproveCancellationResponse");
const ApproveReturnRequestBody_1 = require("./returnRefund/V202309/ApproveReturnRequestBody");
const ApproveReturnRequestBodyPartialRefund_1 = require("./returnRefund/V202309/ApproveReturnRequestBodyPartialRefund");
const ApproveReturnResponse_1 = require("./returnRefund/V202309/ApproveReturnResponse");
const CalculateRefundRequestBody_1 = require("./returnRefund/V202309/CalculateRefundRequestBody");
const CalculateRefundRequestBodySkus_1 = require("./returnRefund/V202309/CalculateRefundRequestBodySkus");
const CalculateRefundResponse_1 = require("./returnRefund/V202309/CalculateRefundResponse");
const CalculateRefundResponseData_1 = require("./returnRefund/V202309/CalculateRefundResponseData");
const CalculateRefundResponseDataOrderRefundAmount_1 = require("./returnRefund/V202309/CalculateRefundResponseDataOrderRefundAmount");
const CancelOrderRequestBody_1 = require("./returnRefund/V202309/CancelOrderRequestBody");
const CancelOrderRequestBodySkus_1 = require("./returnRefund/V202309/CancelOrderRequestBodySkus");
const CancelOrderResponse_1 = require("./returnRefund/V202309/CancelOrderResponse");
const CancelOrderResponseData_1 = require("./returnRefund/V202309/CancelOrderResponseData");
const CreateReturnRequestBody_1 = require("./returnRefund/V202309/CreateReturnRequestBody");
const CreateReturnRequestBodySkus_1 = require("./returnRefund/V202309/CreateReturnRequestBodySkus");
const CreateReturnResponse_1 = require("./returnRefund/V202309/CreateReturnResponse");
const CreateReturnResponseData_1 = require("./returnRefund/V202309/CreateReturnResponseData");
const GetAftersaleEligibilityResponse_1 = require("./returnRefund/V202309/GetAftersaleEligibilityResponse");
const GetAftersaleEligibilityResponseData_1 = require("./returnRefund/V202309/GetAftersaleEligibilityResponseData");
const GetAftersaleEligibilityResponseDataSkuEligibility_1 = require("./returnRefund/V202309/GetAftersaleEligibilityResponseDataSkuEligibility");
const GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility_1 = require("./returnRefund/V202309/GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility");
const GetRejectReasonsResponse_1 = require("./returnRefund/V202309/GetRejectReasonsResponse");
const GetRejectReasonsResponseData_1 = require("./returnRefund/V202309/GetRejectReasonsResponseData");
const GetRejectReasonsResponseDataReasons_1 = require("./returnRefund/V202309/GetRejectReasonsResponseDataReasons");
const GetReturnRecordsResponse_1 = require("./returnRefund/V202309/GetReturnRecordsResponse");
const GetReturnRecordsResponseData_1 = require("./returnRefund/V202309/GetReturnRecordsResponseData");
const GetReturnRecordsResponseDataRecords_1 = require("./returnRefund/V202309/GetReturnRecordsResponseDataRecords");
const GetReturnRecordsResponseDataRecordsImages_1 = require("./returnRefund/V202309/GetReturnRecordsResponseDataRecordsImages");
const GetReturnRecordsResponseDataRecordsVideos_1 = require("./returnRefund/V202309/GetReturnRecordsResponseDataRecordsVideos");
const RejectCancellationRequestBody_1 = require("./returnRefund/V202309/RejectCancellationRequestBody");
const RejectCancellationRequestBodyImages_1 = require("./returnRefund/V202309/RejectCancellationRequestBodyImages");
const RejectCancellationResponse_1 = require("./returnRefund/V202309/RejectCancellationResponse");
const RejectReturnRequestBody_1 = require("./returnRefund/V202309/RejectReturnRequestBody");
const RejectReturnRequestBodyImages_1 = require("./returnRefund/V202309/RejectReturnRequestBodyImages");
const RejectReturnResponse_1 = require("./returnRefund/V202309/RejectReturnResponse");
const SearchCancellationsRequestBody_1 = require("./returnRefund/V202309/SearchCancellationsRequestBody");
const SearchCancellationsResponse_1 = require("./returnRefund/V202309/SearchCancellationsResponse");
const SearchCancellationsResponseData_1 = require("./returnRefund/V202309/SearchCancellationsResponseData");
const SearchCancellationsResponseDataCancellations_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellations");
const SearchCancellationsResponseDataCancellationsCancelLineItems_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItems");
const SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage");
const SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount");
const SearchCancellationsResponseDataCancellationsRefundAmount_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsRefundAmount");
const SearchCancellationsResponseDataCancellationsSellerNextActionResponse_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsSellerNextActionResponse");
const SearchReturnsRequestBody_1 = require("./returnRefund/V202309/SearchReturnsRequestBody");
const SearchReturnsResponse_1 = require("./returnRefund/V202309/SearchReturnsResponse");
const SearchReturnsResponseData_1 = require("./returnRefund/V202309/SearchReturnsResponseData");
const SearchReturnsResponseDataReturnOrders_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrders");
const SearchReturnsResponseDataReturnOrdersDiscountAmount_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersDiscountAmount");
const SearchReturnsResponseDataReturnOrdersPartialRefund_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersPartialRefund");
const SearchReturnsResponseDataReturnOrdersRefundAmount_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersRefundAmount");
const SearchReturnsResponseDataReturnOrdersReturnLineItems_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItems");
const SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage");
const SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount");
const SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress");
const SearchReturnsResponseDataReturnOrdersSellerNextActionResponse_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersSellerNextActionResponse");
const SearchReturnsResponseDataReturnOrdersShippingFeeAmount_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersShippingFeeAmount");
const GetActiveShopsResponse_1 = require("./seller/V202309/GetActiveShopsResponse");
const GetActiveShopsResponseData_1 = require("./seller/V202309/GetActiveShopsResponseData");
const GetActiveShopsResponseDataShops_1 = require("./seller/V202309/GetActiveShopsResponseDataShops");
const GetSellerPermissionsResponse_1 = require("./seller/V202309/GetSellerPermissionsResponse");
const GetSellerPermissionsResponseData_1 = require("./seller/V202309/GetSellerPermissionsResponseData");
const ConfirmPackageShipmentRequestBody_1 = require("./supplyChain/V202309/ConfirmPackageShipmentRequestBody");
const ConfirmPackageShipmentRequestBodyPackages_1 = require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackages");
const ConfirmPackageShipmentRequestBodyPackagesDimension_1 = require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesDimension");
const ConfirmPackageShipmentRequestBodyPackagesSkus_1 = require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesSkus");
const ConfirmPackageShipmentRequestBodyPackagesWeight_1 = require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesWeight");
const ConfirmPackageShipmentResponse_1 = require("./supplyChain/V202309/ConfirmPackageShipmentResponse");
const ConfirmPackageShipmentResponseData_1 = require("./supplyChain/V202309/ConfirmPackageShipmentResponseData");
const ConfirmPackageShipmentResponseDataErrors_1 = require("./supplyChain/V202309/ConfirmPackageShipmentResponseDataErrors");
const ConfirmPackageShipmentResponseDataErrorsDetail_1 = require("./supplyChain/V202309/ConfirmPackageShipmentResponseDataErrorsDetail");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {};
let typeMap = {
    "Analytics202405GetShopPerformanceResponse": GetShopPerformanceResponse_1.Analytics202405GetShopPerformanceResponse,
    "Analytics202405GetShopPerformanceResponseData": GetShopPerformanceResponseData_1.Analytics202405GetShopPerformanceResponseData,
    "Analytics202405GetShopPerformanceResponseDataPerformance": GetShopPerformanceResponseDataPerformance_1.Analytics202405GetShopPerformanceResponseDataPerformance,
    "Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervals": GetShopPerformanceResponseDataPerformanceComparisonIntervals_1.Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervals,
    "Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgOrderValue": GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgOrderValue_1.Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgOrderValue,
    "Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgProductPageVisitorBreakdowns": GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgProductPageVisitorBreakdowns_1.Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsAvgProductPageVisitorBreakdowns,
    "Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsBuyerBreakdowns": GetShopPerformanceResponseDataPerformanceComparisonIntervalsBuyerBreakdowns_1.Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsBuyerBreakdowns,
    "Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmv": GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmv_1.Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmv,
    "Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns": GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns_1.Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns,
    "Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductImpressionBreakdowns": GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductImpressionBreakdowns_1.Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductImpressionBreakdowns,
    "Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductPageViewBreakdowns": GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductPageViewBreakdowns_1.Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsProductPageViewBreakdowns,
    "Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsRefunds": GetShopPerformanceResponseDataPerformanceComparisonIntervalsRefunds_1.Analytics202405GetShopPerformanceResponseDataPerformanceComparisonIntervalsRefunds,
    "Analytics202405GetShopPerformanceResponseDataPerformanceIntervals": GetShopPerformanceResponseDataPerformanceIntervals_1.Analytics202405GetShopPerformanceResponseDataPerformanceIntervals,
    "Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsAvgOrderValue": GetShopPerformanceResponseDataPerformanceIntervalsAvgOrderValue_1.Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsAvgOrderValue,
    "Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsAvgProductPageVisitorBreakdowns": GetShopPerformanceResponseDataPerformanceIntervalsAvgProductPageVisitorBreakdowns_1.Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsAvgProductPageVisitorBreakdowns,
    "Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsBuyerBreakdowns": GetShopPerformanceResponseDataPerformanceIntervalsBuyerBreakdowns_1.Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsBuyerBreakdowns,
    "Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsGmv": GetShopPerformanceResponseDataPerformanceIntervalsGmv_1.Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsGmv,
    "Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsGmvBreakdowns": GetShopPerformanceResponseDataPerformanceIntervalsGmvBreakdowns_1.Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsGmvBreakdowns,
    "Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsProductImpressionBreakdowns": GetShopPerformanceResponseDataPerformanceIntervalsProductImpressionBreakdowns_1.Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsProductImpressionBreakdowns,
    "Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsProductPageViewBreakdowns": GetShopPerformanceResponseDataPerformanceIntervalsProductPageViewBreakdowns_1.Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsProductPageViewBreakdowns,
    "Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsRefunds": GetShopPerformanceResponseDataPerformanceIntervalsRefunds_1.Analytics202405GetShopPerformanceResponseDataPerformanceIntervalsRefunds,
    "Analytics202405GetShopProductPerformanceListResponse": GetShopProductPerformanceListResponse_1.Analytics202405GetShopProductPerformanceListResponse,
    "Analytics202405GetShopProductPerformanceListResponseData": GetShopProductPerformanceListResponseData_1.Analytics202405GetShopProductPerformanceListResponseData,
    "Analytics202405GetShopProductPerformanceListResponseDataProducts": GetShopProductPerformanceListResponseDataProducts_1.Analytics202405GetShopProductPerformanceListResponseDataProducts,
    "Analytics202405GetShopProductPerformanceListResponseDataProductsGmv": GetShopProductPerformanceListResponseDataProductsGmv_1.Analytics202405GetShopProductPerformanceListResponseDataProductsGmv,
    "Analytics202405GetShopProductPerformanceResponse": GetShopProductPerformanceResponse_1.Analytics202405GetShopProductPerformanceResponse,
    "Analytics202405GetShopProductPerformanceResponseData": GetShopProductPerformanceResponseData_1.Analytics202405GetShopProductPerformanceResponseData,
    "Analytics202405GetShopProductPerformanceResponseDataPerformance": GetShopProductPerformanceResponseDataPerformance_1.Analytics202405GetShopProductPerformanceResponseDataPerformance,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervals": GetShopProductPerformanceResponseDataPerformanceComparisonIntervals_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervals,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsAvgPageVisitorBreakdowns": GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsAvgPageVisitorBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsAvgPageVisitorBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsClickThroughRateBreakdowns": GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsClickThroughRateBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsClickThroughRateBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmv": GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmv_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmv,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns": GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsImpressionBreakdowns": GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsImpressionBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsImpressionBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsPageViewBreakdowns": GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsPageViewBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsPageViewBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsUnitSoldBreakdowns": GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsUnitSoldBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceComparisonIntervalsUnitSoldBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervals": GetShopProductPerformanceResponseDataPerformanceIntervals_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervals,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsAvgPageVisitorBreakdowns": GetShopProductPerformanceResponseDataPerformanceIntervalsAvgPageVisitorBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsAvgPageVisitorBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsClickThroughRateBreakdowns": GetShopProductPerformanceResponseDataPerformanceIntervalsClickThroughRateBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsClickThroughRateBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsGmv": GetShopProductPerformanceResponseDataPerformanceIntervalsGmv_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsGmv,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsGmvBreakdowns": GetShopProductPerformanceResponseDataPerformanceIntervalsGmvBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsGmvBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsImpressionBreakdowns": GetShopProductPerformanceResponseDataPerformanceIntervalsImpressionBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsImpressionBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsPageViewBreakdowns": GetShopProductPerformanceResponseDataPerformanceIntervalsPageViewBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsPageViewBreakdowns,
    "Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsUnitSoldBreakdowns": GetShopProductPerformanceResponseDataPerformanceIntervalsUnitSoldBreakdowns_1.Analytics202405GetShopProductPerformanceResponseDataPerformanceIntervalsUnitSoldBreakdowns,
    "Analytics202406GetShopSKUPerformanceListResponse": GetShopSKUPerformanceListResponse_1.Analytics202406GetShopSKUPerformanceListResponse,
    "Analytics202406GetShopSKUPerformanceListResponseData": GetShopSKUPerformanceListResponseData_1.Analytics202406GetShopSKUPerformanceListResponseData,
    "Analytics202406GetShopSKUPerformanceListResponseDataSkus": GetShopSKUPerformanceListResponseDataSkus_1.Analytics202406GetShopSKUPerformanceListResponseDataSkus,
    "Analytics202406GetShopSKUPerformanceListResponseDataSkusGmv": GetShopSKUPerformanceListResponseDataSkusGmv_1.Analytics202406GetShopSKUPerformanceListResponseDataSkusGmv,
    "Analytics202406GetShopSKUPerformanceResponse": GetShopSKUPerformanceResponse_1.Analytics202406GetShopSKUPerformanceResponse,
    "Analytics202406GetShopSKUPerformanceResponseData": GetShopSKUPerformanceResponseData_1.Analytics202406GetShopSKUPerformanceResponseData,
    "Analytics202406GetShopSKUPerformanceResponseDataPerformance": GetShopSKUPerformanceResponseDataPerformance_1.Analytics202406GetShopSKUPerformanceResponseDataPerformance,
    "Analytics202406GetShopSKUPerformanceResponseDataPerformanceComparisonIntervals": GetShopSKUPerformanceResponseDataPerformanceComparisonIntervals_1.Analytics202406GetShopSKUPerformanceResponseDataPerformanceComparisonIntervals,
    "Analytics202406GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmv": GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmv_1.Analytics202406GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmv,
    "Analytics202406GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdown": GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdown_1.Analytics202406GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsGmvBreakdown,
    "Analytics202406GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsUnitsSoldBreakdown": GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsUnitsSoldBreakdown_1.Analytics202406GetShopSKUPerformanceResponseDataPerformanceComparisonIntervalsUnitsSoldBreakdown,
    "Analytics202406GetShopSKUPerformanceResponseDataPerformanceIntervals": GetShopSKUPerformanceResponseDataPerformanceIntervals_1.Analytics202406GetShopSKUPerformanceResponseDataPerformanceIntervals,
    "Analytics202406GetShopSKUPerformanceResponseDataPerformanceIntervalsGmv": GetShopSKUPerformanceResponseDataPerformanceIntervalsGmv_1.Analytics202406GetShopSKUPerformanceResponseDataPerformanceIntervalsGmv,
    "Analytics202406GetShopSKUPerformanceResponseDataPerformanceIntervalsGmvBreakdown": GetShopSKUPerformanceResponseDataPerformanceIntervalsGmvBreakdown_1.Analytics202406GetShopSKUPerformanceResponseDataPerformanceIntervalsGmvBreakdown,
    "Analytics202406GetShopSKUPerformanceResponseDataPerformanceIntervalsUnitsSoldBreakdown": GetShopSKUPerformanceResponseDataPerformanceIntervalsUnitsSoldBreakdown_1.Analytics202406GetShopSKUPerformanceResponseDataPerformanceIntervalsUnitsSoldBreakdown,
    "Analytics202409GetShopVideoPerformanceDetailsResponse": GetShopVideoPerformanceDetailsResponse_1.Analytics202409GetShopVideoPerformanceDetailsResponse,
    "Analytics202409GetShopVideoPerformanceDetailsResponseData": GetShopVideoPerformanceDetailsResponseData_1.Analytics202409GetShopVideoPerformanceDetailsResponseData,
    "Analytics202409GetShopVideoPerformanceDetailsResponseDataEngagementData": GetShopVideoPerformanceDetailsResponseDataEngagementData_1.Analytics202409GetShopVideoPerformanceDetailsResponseDataEngagementData,
    "Analytics202409GetShopVideoPerformanceDetailsResponseDataPerformance": GetShopVideoPerformanceDetailsResponseDataPerformance_1.Analytics202409GetShopVideoPerformanceDetailsResponseDataPerformance,
    "Analytics202409GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervals": GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervals_1.Analytics202409GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervals,
    "Analytics202409GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervalsGmv": GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervalsGmv_1.Analytics202409GetShopVideoPerformanceDetailsResponseDataPerformanceComparisonIntervalsGmv,
    "Analytics202409GetShopVideoPerformanceDetailsResponseDataPerformanceIntervals": GetShopVideoPerformanceDetailsResponseDataPerformanceIntervals_1.Analytics202409GetShopVideoPerformanceDetailsResponseDataPerformanceIntervals,
    "Analytics202409GetShopVideoPerformanceDetailsResponseDataPerformanceIntervalsGmv": GetShopVideoPerformanceDetailsResponseDataPerformanceIntervalsGmv_1.Analytics202409GetShopVideoPerformanceDetailsResponseDataPerformanceIntervalsGmv,
    "Analytics202409GetShopVideoPerformanceListResponse": GetShopVideoPerformanceListResponse_1.Analytics202409GetShopVideoPerformanceListResponse,
    "Analytics202409GetShopVideoPerformanceListResponseData": GetShopVideoPerformanceListResponseData_1.Analytics202409GetShopVideoPerformanceListResponseData,
    "Analytics202409GetShopVideoPerformanceListResponseDataVideos": GetShopVideoPerformanceListResponseDataVideos_1.Analytics202409GetShopVideoPerformanceListResponseDataVideos,
    "Analytics202409GetShopVideoPerformanceListResponseDataVideosGmv": GetShopVideoPerformanceListResponseDataVideosGmv_1.Analytics202409GetShopVideoPerformanceListResponseDataVideosGmv,
    "Analytics202409GetShopVideoPerformanceListResponseDataVideosProducts": GetShopVideoPerformanceListResponseDataVideosProducts_1.Analytics202409GetShopVideoPerformanceListResponseDataVideosProducts,
    "Analytics202409GetShopVideoPerformanceOverviewResponse": GetShopVideoPerformanceOverviewResponse_1.Analytics202409GetShopVideoPerformanceOverviewResponse,
    "Analytics202409GetShopVideoPerformanceOverviewResponseData": GetShopVideoPerformanceOverviewResponseData_1.Analytics202409GetShopVideoPerformanceOverviewResponseData,
    "Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformance": GetShopVideoPerformanceOverviewResponseDataPerformance_1.Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformance,
    "Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervals": GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervals_1.Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervals,
    "Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv": GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv_1.Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv,
    "Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformanceIntervals": GetShopVideoPerformanceOverviewResponseDataPerformanceIntervals_1.Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformanceIntervals,
    "Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformanceIntervalsGmv": GetShopVideoPerformanceOverviewResponseDataPerformanceIntervalsGmv_1.Analytics202409GetShopVideoPerformanceOverviewResponseDataPerformanceIntervalsGmv,
    "Analytics202409GetShopVideoProductPerformanceListResponse": GetShopVideoProductPerformanceListResponse_1.Analytics202409GetShopVideoProductPerformanceListResponse,
    "Analytics202409GetShopVideoProductPerformanceListResponseData": GetShopVideoProductPerformanceListResponseData_1.Analytics202409GetShopVideoProductPerformanceListResponseData,
    "Analytics202409GetShopVideoProductPerformanceListResponseDataProducts": GetShopVideoProductPerformanceListResponseDataProducts_1.Analytics202409GetShopVideoProductPerformanceListResponseDataProducts,
    "Analytics202409GetShopVideoProductPerformanceListResponseDataProductsGmv": GetShopVideoProductPerformanceListResponseDataProductsGmv_1.Analytics202409GetShopVideoProductPerformanceListResponseDataProductsGmv,
    "Analytics202508GetShopLIVEPerformanceListResponse": GetShopLIVEPerformanceListResponse_1.Analytics202508GetShopLIVEPerformanceListResponse,
    "Analytics202508GetShopLIVEPerformanceListResponseData": GetShopLIVEPerformanceListResponseData_1.Analytics202508GetShopLIVEPerformanceListResponseData,
    "Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessions": GetShopLIVEPerformanceListResponseDataLiveStreamSessions_1.Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessions,
    "Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessionsInteractionPerformance": GetShopLIVEPerformanceListResponseDataLiveStreamSessionsInteractionPerformance_1.Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessionsInteractionPerformance,
    "Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance": GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance_1.Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance,
    "Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance24hLiveGmv": GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance24hLiveGmv_1.Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformance24hLiveGmv,
    "Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceAvgPrice": GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceAvgPrice_1.Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceAvgPrice,
    "Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceGmv": GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceGmv_1.Analytics202508GetShopLIVEPerformanceListResponseDataLiveStreamSessionsSalesPerformanceGmv,
    "Analytics202508GetShopLIVEPerformanceOverviewResponse": GetShopLIVEPerformanceOverviewResponse_1.Analytics202508GetShopLIVEPerformanceOverviewResponse,
    "Analytics202508GetShopLIVEPerformanceOverviewResponseData": GetShopLIVEPerformanceOverviewResponseData_1.Analytics202508GetShopLIVEPerformanceOverviewResponseData,
    "Analytics202508GetShopLIVEPerformanceOverviewResponseDataPerformance": GetShopLIVEPerformanceOverviewResponseDataPerformance_1.Analytics202508GetShopLIVEPerformanceOverviewResponseDataPerformance,
    "Analytics202508GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervals": GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervals_1.Analytics202508GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervals,
    "Analytics202508GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv": GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv_1.Analytics202508GetShopLIVEPerformanceOverviewResponseDataPerformanceComparisonIntervalsGmv,
    "Analytics202508GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervals": GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervals_1.Analytics202508GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervals,
    "Analytics202508GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervalsGmv": GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervalsGmv_1.Analytics202508GetShopLIVEPerformanceOverviewResponseDataPerformanceIntervalsGmv,
    "Authorization202309GetAuthorizedShopsResponse": GetAuthorizedShopsResponse_1.Authorization202309GetAuthorizedShopsResponse,
    "Authorization202309GetAuthorizedShopsResponseData": GetAuthorizedShopsResponseData_1.Authorization202309GetAuthorizedShopsResponseData,
    "Authorization202309GetAuthorizedShopsResponseDataShops": GetAuthorizedShopsResponseDataShops_1.Authorization202309GetAuthorizedShopsResponseDataShops,
    "Authorization202312GetWidgetTokenResponse": GetWidgetTokenResponse_1.Authorization202312GetWidgetTokenResponse,
    "Authorization202312GetWidgetTokenResponseData": GetWidgetTokenResponseData_1.Authorization202312GetWidgetTokenResponseData,
    "Authorization202312GetWidgetTokenResponseDataWidgetToken": GetWidgetTokenResponseDataWidgetToken_1.Authorization202312GetWidgetTokenResponseDataWidgetToken,
    "Authorization202401GetWidgetTokenResponse": GetWidgetTokenResponse_2.Authorization202401GetWidgetTokenResponse,
    "Authorization202401GetWidgetTokenResponseData": GetWidgetTokenResponseData_2.Authorization202401GetWidgetTokenResponseData,
    "Authorization202401GetWidgetTokenResponseDataWidgetToken": GetWidgetTokenResponseDataWidgetToken_2.Authorization202401GetWidgetTokenResponseDataWidgetToken,
    "Authorization202403DeauthorizeShopResponse": DeauthorizeShopResponse_1.Authorization202403DeauthorizeShopResponse,
    "CustomerService202309CreateConversationRequestBody": CreateConversationRequestBody_1.CustomerService202309CreateConversationRequestBody,
    "CustomerService202309CreateConversationResponse": CreateConversationResponse_1.CustomerService202309CreateConversationResponse,
    "CustomerService202309CreateConversationResponseData": CreateConversationResponseData_1.CustomerService202309CreateConversationResponseData,
    "CustomerService202309GetAgentSettingsResponse": GetAgentSettingsResponse_1.CustomerService202309GetAgentSettingsResponse,
    "CustomerService202309GetAgentSettingsResponseData": GetAgentSettingsResponseData_1.CustomerService202309GetAgentSettingsResponseData,
    "CustomerService202309GetConversationMessagesResponse": GetConversationMessagesResponse_1.CustomerService202309GetConversationMessagesResponse,
    "CustomerService202309GetConversationMessagesResponseData": GetConversationMessagesResponseData_1.CustomerService202309GetConversationMessagesResponseData,
    "CustomerService202309GetConversationMessagesResponseDataMessages": GetConversationMessagesResponseDataMessages_1.CustomerService202309GetConversationMessagesResponseDataMessages,
    "CustomerService202309GetConversationMessagesResponseDataMessagesSender": GetConversationMessagesResponseDataMessagesSender_1.CustomerService202309GetConversationMessagesResponseDataMessagesSender,
    "CustomerService202309GetConversationsResponse": GetConversationsResponse_1.CustomerService202309GetConversationsResponse,
    "CustomerService202309GetConversationsResponseData": GetConversationsResponseData_1.CustomerService202309GetConversationsResponseData,
    "CustomerService202309GetConversationsResponseDataConversations": GetConversationsResponseDataConversations_1.CustomerService202309GetConversationsResponseDataConversations,
    "CustomerService202309GetConversationsResponseDataConversationsLatestMessage": GetConversationsResponseDataConversationsLatestMessage_1.CustomerService202309GetConversationsResponseDataConversationsLatestMessage,
    "CustomerService202309GetConversationsResponseDataConversationsLatestMessageSender": GetConversationsResponseDataConversationsLatestMessageSender_1.CustomerService202309GetConversationsResponseDataConversationsLatestMessageSender,
    "CustomerService202309GetConversationsResponseDataConversationsParticipants": GetConversationsResponseDataConversationsParticipants_1.CustomerService202309GetConversationsResponseDataConversationsParticipants,
    "CustomerService202309ReadMessageResponse": ReadMessageResponse_1.CustomerService202309ReadMessageResponse,
    "CustomerService202309SendMessageRequestBody": SendMessageRequestBody_1.CustomerService202309SendMessageRequestBody,
    "CustomerService202309SendMessageResponse": SendMessageResponse_1.CustomerService202309SendMessageResponse,
    "CustomerService202309SendMessageResponseData": SendMessageResponseData_1.CustomerService202309SendMessageResponseData,
    "CustomerService202309UpdateAgentSettingsRequestBody": UpdateAgentSettingsRequestBody_1.CustomerService202309UpdateAgentSettingsRequestBody,
    "CustomerService202309UpdateAgentSettingsResponse": UpdateAgentSettingsResponse_1.CustomerService202309UpdateAgentSettingsResponse,
    "CustomerService202309UploadBuyerMessagesImageResponse": UploadBuyerMessagesImageResponse_1.CustomerService202309UploadBuyerMessagesImageResponse,
    "CustomerService202309UploadBuyerMessagesImageResponseData": UploadBuyerMessagesImageResponseData_1.CustomerService202309UploadBuyerMessagesImageResponseData,
    "CustomerService202407GetCustomerServicePerformanceResponse": GetCustomerServicePerformanceResponse_1.CustomerService202407GetCustomerServicePerformanceResponse,
    "CustomerService202407GetCustomerServicePerformanceResponseData": GetCustomerServicePerformanceResponseData_1.CustomerService202407GetCustomerServicePerformanceResponseData,
    "CustomerService202407GetCustomerServicePerformanceResponseDataPerformance": GetCustomerServicePerformanceResponseDataPerformance_1.CustomerService202407GetCustomerServicePerformanceResponseDataPerformance,
    "DataReconciliation202309OrderStatusDataExchangeRequestBody": OrderStatusDataExchangeRequestBody_1.DataReconciliation202309OrderStatusDataExchangeRequestBody,
    "DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders": OrderStatusDataExchangeRequestBodyOrders_1.DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders,
    "DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages": OrderStatusDataExchangeRequestBodyOrdersPackages_1.DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages,
    "DataReconciliation202309OrderStatusDataExchangeResponse": OrderStatusDataExchangeResponse_1.DataReconciliation202309OrderStatusDataExchangeResponse,
    "DataReconciliation202309OrderStatusDataExchangeResponseData": OrderStatusDataExchangeResponseData_1.DataReconciliation202309OrderStatusDataExchangeResponseData,
    "DataReconciliation202309OrderStatusDataExchangeResponseDataErrors": OrderStatusDataExchangeResponseDataErrors_1.DataReconciliation202309OrderStatusDataExchangeResponseDataErrors,
    "DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail": OrderStatusDataExchangeResponseDataErrorsDetail_1.DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail,
    "DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors": OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors_1.DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody": QualityFactoryOrderDataImportAPIRequestBody_1.DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders": QualityFactoryOrderDataImportAPIRequestBodyOrders_1.DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages": QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages_1.DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIResponse": QualityFactoryOrderDataImportAPIResponse_1.DataReconciliation202310QualityFactoryOrderDataImportAPIResponse,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIResponseData": QualityFactoryOrderDataImportAPIResponseData_1.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseData,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors": QualityFactoryOrderDataImportAPIResponseDataErrors_1.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail": QualityFactoryOrderDataImportAPIResponseDataErrorsDetail_1.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors": QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors_1.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody": QualityFactoryOrderDataImportAPIRequestBody_2.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders": QualityFactoryOrderDataImportAPIRequestBodyOrders_2.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages": QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages_2.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIResponse": QualityFactoryOrderDataImportAPIResponse_2.DataReconciliation202401QualityFactoryOrderDataImportAPIResponse,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIResponseData": QualityFactoryOrderDataImportAPIResponseData_2.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseData,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors": QualityFactoryOrderDataImportAPIResponseDataErrors_2.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail": QualityFactoryOrderDataImportAPIResponseDataErrorsDetail_2.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors": QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors_2.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors,
    "Event202309DeleteShopWebhookRequestBody": DeleteShopWebhookRequestBody_1.Event202309DeleteShopWebhookRequestBody,
    "Event202309DeleteShopWebhookResponse": DeleteShopWebhookResponse_1.Event202309DeleteShopWebhookResponse,
    "Event202309GetShopWebhooksResponse": GetShopWebhooksResponse_1.Event202309GetShopWebhooksResponse,
    "Event202309GetShopWebhooksResponseData": GetShopWebhooksResponseData_1.Event202309GetShopWebhooksResponseData,
    "Event202309GetShopWebhooksResponseDataWebhooks": GetShopWebhooksResponseDataWebhooks_1.Event202309GetShopWebhooksResponseDataWebhooks,
    "Event202309UpdateShopWebhookRequestBody": UpdateShopWebhookRequestBody_1.Event202309UpdateShopWebhookRequestBody,
    "Event202309UpdateShopWebhookResponse": UpdateShopWebhookResponse_1.Event202309UpdateShopWebhookResponse,
    "Finance202309GetPaymentsResponse": GetPaymentsResponse_1.Finance202309GetPaymentsResponse,
    "Finance202309GetPaymentsResponseData": GetPaymentsResponseData_1.Finance202309GetPaymentsResponseData,
    "Finance202309GetPaymentsResponseDataPayments": GetPaymentsResponseDataPayments_1.Finance202309GetPaymentsResponseDataPayments,
    "Finance202309GetPaymentsResponseDataPaymentsAmount": GetPaymentsResponseDataPaymentsAmount_1.Finance202309GetPaymentsResponseDataPaymentsAmount,
    "Finance202309GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange": GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange_1.Finance202309GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange,
    "Finance202309GetPaymentsResponseDataPaymentsReserveAmount": GetPaymentsResponseDataPaymentsReserveAmount_1.Finance202309GetPaymentsResponseDataPaymentsReserveAmount,
    "Finance202309GetPaymentsResponseDataPaymentsSettlementAmount": GetPaymentsResponseDataPaymentsSettlementAmount_1.Finance202309GetPaymentsResponseDataPaymentsSettlementAmount,
    "Finance202309GetStatementsResponse": GetStatementsResponse_1.Finance202309GetStatementsResponse,
    "Finance202309GetStatementsResponseData": GetStatementsResponseData_1.Finance202309GetStatementsResponseData,
    "Finance202309GetStatementsResponseDataStatements": GetStatementsResponseDataStatements_1.Finance202309GetStatementsResponseDataStatements,
    "Finance202309GetTransactionsbyOrderResponse": GetTransactionsbyOrderResponse_1.Finance202309GetTransactionsbyOrderResponse,
    "Finance202309GetTransactionsbyOrderResponseData": GetTransactionsbyOrderResponseData_1.Finance202309GetTransactionsbyOrderResponseData,
    "Finance202309GetTransactionsbyOrderResponseDataStatementTransactions": GetTransactionsbyOrderResponseDataStatementTransactions_1.Finance202309GetTransactionsbyOrderResponseDataStatementTransactions,
    "Finance202309GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions": GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions_1.Finance202309GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions,
    "Finance202309GetTransactionsbyStatementResponse": GetTransactionsbyStatementResponse_1.Finance202309GetTransactionsbyStatementResponse,
    "Finance202309GetTransactionsbyStatementResponseData": GetTransactionsbyStatementResponseData_1.Finance202309GetTransactionsbyStatementResponseData,
    "Finance202309GetTransactionsbyStatementResponseDataStatementTransactions": GetTransactionsbyStatementResponseDataStatementTransactions_1.Finance202309GetTransactionsbyStatementResponseDataStatementTransactions,
    "Finance202309GetWithdrawalsResponse": GetWithdrawalsResponse_1.Finance202309GetWithdrawalsResponse,
    "Finance202309GetWithdrawalsResponseData": GetWithdrawalsResponseData_1.Finance202309GetWithdrawalsResponseData,
    "Finance202309GetWithdrawalsResponseDataWithdrawals": GetWithdrawalsResponseDataWithdrawals_1.Finance202309GetWithdrawalsResponseDataWithdrawals,
    "Finance202501GetTransactionsbyOrderResponse": GetTransactionsbyOrderResponse_2.Finance202501GetTransactionsbyOrderResponse,
    "Finance202501GetTransactionsbyOrderResponseData": GetTransactionsbyOrderResponseData_2.Finance202501GetTransactionsbyOrderResponseData,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactions": GetTransactionsbyOrderResponseDataSkuTransactions_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactions,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown": GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee": GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax": GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown": GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown": GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent": GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent,
    "Finance202501GetTransactionsbyStatementResponse": GetTransactionsbyStatementResponse_2.Finance202501GetTransactionsbyStatementResponse,
    "Finance202501GetTransactionsbyStatementResponseData": GetTransactionsbyStatementResponseData_2.Finance202501GetTransactionsbyStatementResponseData,
    "Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown": GetTransactionsbyStatementResponseDataTotalSettlementBreakdown_1.Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown,
    "Finance202501GetTransactionsbyStatementResponseDataTransactions": GetTransactionsbyStatementResponseDataTransactions_1.Finance202501GetTransactionsbyStatementResponseDataTransactions,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown": GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee": GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax": GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown": GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown": GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent": GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent": GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent,
    "Finance202507GetUnsettledTransactionsResponse": GetUnsettledTransactionsResponse_1.Finance202507GetUnsettledTransactionsResponse,
    "Finance202507GetUnsettledTransactionsResponseData": GetUnsettledTransactionsResponseData_1.Finance202507GetUnsettledTransactionsResponseData,
    "Finance202507GetUnsettledTransactionsResponseDataTransactions": GetUnsettledTransactionsResponseDataTransactions_1.Finance202507GetUnsettledTransactionsResponseDataTransactions,
    "Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown": GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown_1.Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown,
    "Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownFee": GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownFee_1.Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownFee,
    "Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax": GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax_1.Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax,
    "Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown": GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown_1.Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown,
    "Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown": GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown_1.Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown,
    "Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdownSupplementaryComponent": GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdownSupplementaryComponent_1.Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdownSupplementaryComponent,
    "Fulfillment202309BatchShipPackagesRequestBody": BatchShipPackagesRequestBody_1.Fulfillment202309BatchShipPackagesRequestBody,
    "Fulfillment202309BatchShipPackagesRequestBodyPackages": BatchShipPackagesRequestBodyPackages_1.Fulfillment202309BatchShipPackagesRequestBodyPackages,
    "Fulfillment202309BatchShipPackagesRequestBodyPackagesPickupSlot": BatchShipPackagesRequestBodyPackagesPickupSlot_1.Fulfillment202309BatchShipPackagesRequestBodyPackagesPickupSlot,
    "Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment": BatchShipPackagesRequestBodyPackagesSelfShipment_1.Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment,
    "Fulfillment202309BatchShipPackagesResponse": BatchShipPackagesResponse_1.Fulfillment202309BatchShipPackagesResponse,
    "Fulfillment202309BatchShipPackagesResponseData": BatchShipPackagesResponseData_1.Fulfillment202309BatchShipPackagesResponseData,
    "Fulfillment202309BatchShipPackagesResponseDataErrors": BatchShipPackagesResponseDataErrors_1.Fulfillment202309BatchShipPackagesResponseDataErrors,
    "Fulfillment202309BatchShipPackagesResponseDataErrorsDetail": BatchShipPackagesResponseDataErrorsDetail_1.Fulfillment202309BatchShipPackagesResponseDataErrorsDetail,
    "Fulfillment202309CombinePackageRequestBody": CombinePackageRequestBody_1.Fulfillment202309CombinePackageRequestBody,
    "Fulfillment202309CombinePackageRequestBodyCombinablePackages": CombinePackageRequestBodyCombinablePackages_1.Fulfillment202309CombinePackageRequestBodyCombinablePackages,
    "Fulfillment202309CombinePackageResponse": CombinePackageResponse_1.Fulfillment202309CombinePackageResponse,
    "Fulfillment202309CombinePackageResponseData": CombinePackageResponseData_1.Fulfillment202309CombinePackageResponseData,
    "Fulfillment202309CombinePackageResponseDataErrors": CombinePackageResponseDataErrors_1.Fulfillment202309CombinePackageResponseDataErrors,
    "Fulfillment202309CombinePackageResponseDataErrorsDetail": CombinePackageResponseDataErrorsDetail_1.Fulfillment202309CombinePackageResponseDataErrorsDetail,
    "Fulfillment202309CombinePackageResponseDataPackages": CombinePackageResponseDataPackages_1.Fulfillment202309CombinePackageResponseDataPackages,
    "Fulfillment202309CreatePackagesRequestBody": CreatePackagesRequestBody_1.Fulfillment202309CreatePackagesRequestBody,
    "Fulfillment202309CreatePackagesRequestBodyDimension": CreatePackagesRequestBodyDimension_1.Fulfillment202309CreatePackagesRequestBodyDimension,
    "Fulfillment202309CreatePackagesRequestBodyWeight": CreatePackagesRequestBodyWeight_1.Fulfillment202309CreatePackagesRequestBodyWeight,
    "Fulfillment202309CreatePackagesResponse": CreatePackagesResponse_1.Fulfillment202309CreatePackagesResponse,
    "Fulfillment202309CreatePackagesResponseData": CreatePackagesResponseData_1.Fulfillment202309CreatePackagesResponseData,
    "Fulfillment202309CreatePackagesResponseDataDimension": CreatePackagesResponseDataDimension_1.Fulfillment202309CreatePackagesResponseDataDimension,
    "Fulfillment202309CreatePackagesResponseDataShippingServiceInfo": CreatePackagesResponseDataShippingServiceInfo_1.Fulfillment202309CreatePackagesResponseDataShippingServiceInfo,
    "Fulfillment202309CreatePackagesResponseDataWeight": CreatePackagesResponseDataWeight_1.Fulfillment202309CreatePackagesResponseDataWeight,
    "Fulfillment202309FulfillmentUploadDeliveryFileResponse": FulfillmentUploadDeliveryFileResponse_1.Fulfillment202309FulfillmentUploadDeliveryFileResponse,
    "Fulfillment202309FulfillmentUploadDeliveryFileResponseData": FulfillmentUploadDeliveryFileResponseData_1.Fulfillment202309FulfillmentUploadDeliveryFileResponseData,
    "Fulfillment202309FulfillmentUploadDeliveryImageResponse": FulfillmentUploadDeliveryImageResponse_1.Fulfillment202309FulfillmentUploadDeliveryImageResponse,
    "Fulfillment202309FulfillmentUploadDeliveryImageResponseData": FulfillmentUploadDeliveryImageResponseData_1.Fulfillment202309FulfillmentUploadDeliveryImageResponseData,
    "Fulfillment202309GetEligibleShippingServiceRequestBody": GetEligibleShippingServiceRequestBody_1.Fulfillment202309GetEligibleShippingServiceRequestBody,
    "Fulfillment202309GetEligibleShippingServiceRequestBodyDimension": GetEligibleShippingServiceRequestBodyDimension_1.Fulfillment202309GetEligibleShippingServiceRequestBodyDimension,
    "Fulfillment202309GetEligibleShippingServiceRequestBodyWeight": GetEligibleShippingServiceRequestBodyWeight_1.Fulfillment202309GetEligibleShippingServiceRequestBodyWeight,
    "Fulfillment202309GetEligibleShippingServiceResponse": GetEligibleShippingServiceResponse_1.Fulfillment202309GetEligibleShippingServiceResponse,
    "Fulfillment202309GetEligibleShippingServiceResponseData": GetEligibleShippingServiceResponseData_1.Fulfillment202309GetEligibleShippingServiceResponseData,
    "Fulfillment202309GetEligibleShippingServiceResponseDataDimension": GetEligibleShippingServiceResponseDataDimension_1.Fulfillment202309GetEligibleShippingServiceResponseDataDimension,
    "Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices": GetEligibleShippingServiceResponseDataShippingServices_1.Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices,
    "Fulfillment202309GetEligibleShippingServiceResponseDataWeight": GetEligibleShippingServiceResponseDataWeight_1.Fulfillment202309GetEligibleShippingServiceResponseDataWeight,
    "Fulfillment202309GetHandoverTimeslotsResponse": GetHandoverTimeslotsResponse_1.Fulfillment202309GetHandoverTimeslotsResponse,
    "Fulfillment202309GetHandoverTimeslotsResponseData": GetHandoverTimeslotsResponseData_1.Fulfillment202309GetHandoverTimeslotsResponseData,
    "Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots": GetHandoverTimeslotsResponseDataPickupSlots_1.Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots,
    "Fulfillment202309GetOrderSplitAttributesResponse": GetOrderSplitAttributesResponse_1.Fulfillment202309GetOrderSplitAttributesResponse,
    "Fulfillment202309GetOrderSplitAttributesResponseData": GetOrderSplitAttributesResponseData_1.Fulfillment202309GetOrderSplitAttributesResponseData,
    "Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes": GetOrderSplitAttributesResponseDataSplitAttributes_1.Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes,
    "Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributesMustSplitReasons": GetOrderSplitAttributesResponseDataSplitAttributesMustSplitReasons_1.Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributesMustSplitReasons,
    "Fulfillment202309GetPackageDetailResponse": GetPackageDetailResponse_1.Fulfillment202309GetPackageDetailResponse,
    "Fulfillment202309GetPackageDetailResponseData": GetPackageDetailResponseData_1.Fulfillment202309GetPackageDetailResponseData,
    "Fulfillment202309GetPackageDetailResponseDataDimension": GetPackageDetailResponseDataDimension_1.Fulfillment202309GetPackageDetailResponseDataDimension,
    "Fulfillment202309GetPackageDetailResponseDataInsurance": GetPackageDetailResponseDataInsurance_1.Fulfillment202309GetPackageDetailResponseDataInsurance,
    "Fulfillment202309GetPackageDetailResponseDataOrders": GetPackageDetailResponseDataOrders_1.Fulfillment202309GetPackageDetailResponseDataOrders,
    "Fulfillment202309GetPackageDetailResponseDataOrdersSkus": GetPackageDetailResponseDataOrdersSkus_1.Fulfillment202309GetPackageDetailResponseDataOrdersSkus,
    "Fulfillment202309GetPackageDetailResponseDataPickupSlot": GetPackageDetailResponseDataPickupSlot_1.Fulfillment202309GetPackageDetailResponseDataPickupSlot,
    "Fulfillment202309GetPackageDetailResponseDataRecipientAddress": GetPackageDetailResponseDataRecipientAddress_1.Fulfillment202309GetPackageDetailResponseDataRecipientAddress,
    "Fulfillment202309GetPackageDetailResponseDataSenderAddress": GetPackageDetailResponseDataSenderAddress_1.Fulfillment202309GetPackageDetailResponseDataSenderAddress,
    "Fulfillment202309GetPackageDetailResponseDataWeight": GetPackageDetailResponseDataWeight_1.Fulfillment202309GetPackageDetailResponseDataWeight,
    "Fulfillment202309GetPackageHandoverTimeSlotsResponse": GetPackageHandoverTimeSlotsResponse_1.Fulfillment202309GetPackageHandoverTimeSlotsResponse,
    "Fulfillment202309GetPackageHandoverTimeSlotsResponseData": GetPackageHandoverTimeSlotsResponseData_1.Fulfillment202309GetPackageHandoverTimeSlotsResponseData,
    "Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots": GetPackageHandoverTimeSlotsResponseDataPickupSlots_1.Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots,
    "Fulfillment202309GetPackageShippingDocumentResponse": GetPackageShippingDocumentResponse_1.Fulfillment202309GetPackageShippingDocumentResponse,
    "Fulfillment202309GetPackageShippingDocumentResponseData": GetPackageShippingDocumentResponseData_1.Fulfillment202309GetPackageShippingDocumentResponseData,
    "Fulfillment202309GetTrackingResponse": GetTrackingResponse_1.Fulfillment202309GetTrackingResponse,
    "Fulfillment202309GetTrackingResponseData": GetTrackingResponseData_1.Fulfillment202309GetTrackingResponseData,
    "Fulfillment202309GetTrackingResponseDataTracking": GetTrackingResponseDataTracking_1.Fulfillment202309GetTrackingResponseDataTracking,
    "Fulfillment202309MarkPackageAsShippedRequestBody": MarkPackageAsShippedRequestBody_1.Fulfillment202309MarkPackageAsShippedRequestBody,
    "Fulfillment202309MarkPackageAsShippedResponse": MarkPackageAsShippedResponse_1.Fulfillment202309MarkPackageAsShippedResponse,
    "Fulfillment202309MarkPackageAsShippedResponseData": MarkPackageAsShippedResponseData_1.Fulfillment202309MarkPackageAsShippedResponseData,
    "Fulfillment202309MarkPackageAsShippedResponseDataWarning": MarkPackageAsShippedResponseDataWarning_1.Fulfillment202309MarkPackageAsShippedResponseDataWarning,
    "Fulfillment202309SchedulePackageHandoverRequestBody": SchedulePackageHandoverRequestBody_1.Fulfillment202309SchedulePackageHandoverRequestBody,
    "Fulfillment202309SchedulePackageHandoverRequestBodyPickupSlot": SchedulePackageHandoverRequestBodyPickupSlot_1.Fulfillment202309SchedulePackageHandoverRequestBodyPickupSlot,
    "Fulfillment202309SchedulePackageHandoverResponse": SchedulePackageHandoverResponse_1.Fulfillment202309SchedulePackageHandoverResponse,
    "Fulfillment202309SchedulePackageHandoverResponseData": SchedulePackageHandoverResponseData_1.Fulfillment202309SchedulePackageHandoverResponseData,
    "Fulfillment202309SchedulePackageHandoverResponseDataDimension": SchedulePackageHandoverResponseDataDimension_1.Fulfillment202309SchedulePackageHandoverResponseDataDimension,
    "Fulfillment202309SchedulePackageHandoverResponseDataWeight": SchedulePackageHandoverResponseDataWeight_1.Fulfillment202309SchedulePackageHandoverResponseDataWeight,
    "Fulfillment202309SearchCombinablePackagesResponse": SearchCombinablePackagesResponse_1.Fulfillment202309SearchCombinablePackagesResponse,
    "Fulfillment202309SearchCombinablePackagesResponseData": SearchCombinablePackagesResponseData_1.Fulfillment202309SearchCombinablePackagesResponseData,
    "Fulfillment202309SearchCombinablePackagesResponseDataCombinablePackages": SearchCombinablePackagesResponseDataCombinablePackages_1.Fulfillment202309SearchCombinablePackagesResponseDataCombinablePackages,
    "Fulfillment202309SearchPackageRequestBody": SearchPackageRequestBody_1.Fulfillment202309SearchPackageRequestBody,
    "Fulfillment202309SearchPackageResponse": SearchPackageResponse_1.Fulfillment202309SearchPackageResponse,
    "Fulfillment202309SearchPackageResponseData": SearchPackageResponseData_1.Fulfillment202309SearchPackageResponseData,
    "Fulfillment202309SearchPackageResponseDataPackages": SearchPackageResponseDataPackages_1.Fulfillment202309SearchPackageResponseDataPackages,
    "Fulfillment202309SearchPackageResponseDataPackagesOrders": SearchPackageResponseDataPackagesOrders_1.Fulfillment202309SearchPackageResponseDataPackagesOrders,
    "Fulfillment202309SearchPackageResponseDataPackagesOrdersSkus": SearchPackageResponseDataPackagesOrdersSkus_1.Fulfillment202309SearchPackageResponseDataPackagesOrdersSkus,
    "Fulfillment202309ShipPackageRequestBody": ShipPackageRequestBody_1.Fulfillment202309ShipPackageRequestBody,
    "Fulfillment202309ShipPackageRequestBodyPickupSlot": ShipPackageRequestBodyPickupSlot_1.Fulfillment202309ShipPackageRequestBodyPickupSlot,
    "Fulfillment202309ShipPackageRequestBodySelfShipment": ShipPackageRequestBodySelfShipment_1.Fulfillment202309ShipPackageRequestBodySelfShipment,
    "Fulfillment202309ShipPackageResponse": ShipPackageResponse_1.Fulfillment202309ShipPackageResponse,
    "Fulfillment202309SplitOrdersRequestBody": SplitOrdersRequestBody_1.Fulfillment202309SplitOrdersRequestBody,
    "Fulfillment202309SplitOrdersRequestBodySplittableGroups": SplitOrdersRequestBodySplittableGroups_1.Fulfillment202309SplitOrdersRequestBodySplittableGroups,
    "Fulfillment202309SplitOrdersResponse": SplitOrdersResponse_1.Fulfillment202309SplitOrdersResponse,
    "Fulfillment202309SplitOrdersResponseData": SplitOrdersResponseData_1.Fulfillment202309SplitOrdersResponseData,
    "Fulfillment202309SplitOrdersResponseDataPackages": SplitOrdersResponseDataPackages_1.Fulfillment202309SplitOrdersResponseDataPackages,
    "Fulfillment202309UncombinePackagesRequestBody": UncombinePackagesRequestBody_1.Fulfillment202309UncombinePackagesRequestBody,
    "Fulfillment202309UncombinePackagesResponse": UncombinePackagesResponse_1.Fulfillment202309UncombinePackagesResponse,
    "Fulfillment202309UncombinePackagesResponseData": UncombinePackagesResponseData_1.Fulfillment202309UncombinePackagesResponseData,
    "Fulfillment202309UncombinePackagesResponseDataPackages": UncombinePackagesResponseDataPackages_1.Fulfillment202309UncombinePackagesResponseDataPackages,
    "Fulfillment202309UpdatePackageDeliveryStatusRequestBody": UpdatePackageDeliveryStatusRequestBody_1.Fulfillment202309UpdatePackageDeliveryStatusRequestBody,
    "Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages": UpdatePackageDeliveryStatusRequestBodyPackages_1.Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages,
    "Fulfillment202309UpdatePackageDeliveryStatusResponse": UpdatePackageDeliveryStatusResponse_1.Fulfillment202309UpdatePackageDeliveryStatusResponse,
    "Fulfillment202309UpdatePackageDeliveryStatusResponseData": UpdatePackageDeliveryStatusResponseData_1.Fulfillment202309UpdatePackageDeliveryStatusResponseData,
    "Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors": UpdatePackageDeliveryStatusResponseDataErrors_1.Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors,
    "Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrorsDetail": UpdatePackageDeliveryStatusResponseDataErrorsDetail_1.Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrorsDetail,
    "Fulfillment202309UpdatePackageShippingInfoRequestBody": UpdatePackageShippingInfoRequestBody_1.Fulfillment202309UpdatePackageShippingInfoRequestBody,
    "Fulfillment202309UpdatePackageShippingInfoResponse": UpdatePackageShippingInfoResponse_1.Fulfillment202309UpdatePackageShippingInfoResponse,
    "Fulfillment202309UpdateShippingInfoRequestBody": UpdateShippingInfoRequestBody_1.Fulfillment202309UpdateShippingInfoRequestBody,
    "Fulfillment202309UpdateShippingInfoResponse": UpdateShippingInfoResponse_1.Fulfillment202309UpdateShippingInfoResponse,
    "Fulfillment202407CreateFirstMileBundleRequestBody": CreateFirstMileBundleRequestBody_1.Fulfillment202407CreateFirstMileBundleRequestBody,
    "Fulfillment202407CreateFirstMileBundleResponse": CreateFirstMileBundleResponse_1.Fulfillment202407CreateFirstMileBundleResponse,
    "Fulfillment202407CreateFirstMileBundleResponseData": CreateFirstMileBundleResponseData_1.Fulfillment202407CreateFirstMileBundleResponseData,
    "Fulfillment202407CreateFirstMileBundleResponseDataErrors": CreateFirstMileBundleResponseDataErrors_1.Fulfillment202407CreateFirstMileBundleResponseDataErrors,
    "Fulfillment202407CreateFirstMileBundleResponseDataErrorsDetail": CreateFirstMileBundleResponseDataErrorsDetail_1.Fulfillment202407CreateFirstMileBundleResponseDataErrorsDetail,
    "Fulfillment202502UploadInvoiceRequestBody": UploadInvoiceRequestBody_1.Fulfillment202502UploadInvoiceRequestBody,
    "Fulfillment202502UploadInvoiceRequestBodyInvoices": UploadInvoiceRequestBodyInvoices_1.Fulfillment202502UploadInvoiceRequestBodyInvoices,
    "Fulfillment202502UploadInvoiceResponse": UploadInvoiceResponse_1.Fulfillment202502UploadInvoiceResponse,
    "Fulfillment202502UploadInvoiceResponseData": UploadInvoiceResponseData_1.Fulfillment202502UploadInvoiceResponseData,
    "Fulfillment202502UploadInvoiceResponseDataErrors": UploadInvoiceResponseDataErrors_1.Fulfillment202502UploadInvoiceResponseDataErrors,
    "Fulfillment202502UploadInvoiceResponseDataErrorsDetail": UploadInvoiceResponseDataErrorsDetail_1.Fulfillment202502UploadInvoiceResponseDataErrorsDetail,
    "Fulfillment202508TTSTrackingValidationResponse": TTSTrackingValidationResponse_1.Fulfillment202508TTSTrackingValidationResponse,
    "Fulfillment202508TTSTrackingValidationResponseData": TTSTrackingValidationResponseData_1.Fulfillment202508TTSTrackingValidationResponseData,
    "Fulfillment202510CreateFirstMileBundleV2RequestBody": CreateFirstMileBundleV2RequestBody_1.Fulfillment202510CreateFirstMileBundleV2RequestBody,
    "Fulfillment202510CreateFirstMileBundleV2Response": CreateFirstMileBundleV2Response_1.Fulfillment202510CreateFirstMileBundleV2Response,
    "Fulfillment202510CreateFirstMileBundleV2ResponseData": CreateFirstMileBundleV2ResponseData_1.Fulfillment202510CreateFirstMileBundleV2ResponseData,
    "Fulfillment202510CreateFirstMileBundleV2ResponseDataErrors": CreateFirstMileBundleV2ResponseDataErrors_1.Fulfillment202510CreateFirstMileBundleV2ResponseDataErrors,
    "Fulfillment202510CreateFirstMileBundleV2ResponseDataErrorsDetail": CreateFirstMileBundleV2ResponseDataErrorsDetail_1.Fulfillment202510CreateFirstMileBundleV2ResponseDataErrorsDetail,
    "Logistics202309GetGlobalSellerWarehouseResponse": GetGlobalSellerWarehouseResponse_1.Logistics202309GetGlobalSellerWarehouseResponse,
    "Logistics202309GetGlobalSellerWarehouseResponseData": GetGlobalSellerWarehouseResponseData_1.Logistics202309GetGlobalSellerWarehouseResponseData,
    "Logistics202309GetGlobalSellerWarehouseResponseDataGlobalWarehouses": GetGlobalSellerWarehouseResponseDataGlobalWarehouses_1.Logistics202309GetGlobalSellerWarehouseResponseDataGlobalWarehouses,
    "Logistics202309GetShippingProvidersResponse": GetShippingProvidersResponse_1.Logistics202309GetShippingProvidersResponse,
    "Logistics202309GetShippingProvidersResponseData": GetShippingProvidersResponseData_1.Logistics202309GetShippingProvidersResponseData,
    "Logistics202309GetShippingProvidersResponseDataShippingProviders": GetShippingProvidersResponseDataShippingProviders_1.Logistics202309GetShippingProvidersResponseDataShippingProviders,
    "Logistics202309GetWarehouseDeliveryOptionsResponse": GetWarehouseDeliveryOptionsResponse_1.Logistics202309GetWarehouseDeliveryOptionsResponse,
    "Logistics202309GetWarehouseDeliveryOptionsResponseData": GetWarehouseDeliveryOptionsResponseData_1.Logistics202309GetWarehouseDeliveryOptionsResponseData,
    "Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions": GetWarehouseDeliveryOptionsResponseDataDeliveryOptions_1.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions,
    "Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit": GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit_1.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit,
    "Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit": GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit_1.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit,
    "Logistics202309GetWarehouseListResponse": GetWarehouseListResponse_1.Logistics202309GetWarehouseListResponse,
    "Logistics202309GetWarehouseListResponseData": GetWarehouseListResponseData_1.Logistics202309GetWarehouseListResponseData,
    "Logistics202309GetWarehouseListResponseDataWarehouses": GetWarehouseListResponseDataWarehouses_1.Logistics202309GetWarehouseListResponseDataWarehouses,
    "Logistics202309GetWarehouseListResponseDataWarehousesAddress": GetWarehouseListResponseDataWarehousesAddress_1.Logistics202309GetWarehouseListResponseDataWarehousesAddress,
    "Logistics202309GetWarehouseListResponseDataWarehousesAddressGeolocation": GetWarehouseListResponseDataWarehousesAddressGeolocation_1.Logistics202309GetWarehouseListResponseDataWarehousesAddressGeolocation,
    "Logistics202510GetAvailableShippingTemplateRequestBody": GetAvailableShippingTemplateRequestBody_1.Logistics202510GetAvailableShippingTemplateRequestBody,
    "Logistics202510GetAvailableShippingTemplateRequestBodyProductAttribute": GetAvailableShippingTemplateRequestBodyProductAttribute_1.Logistics202510GetAvailableShippingTemplateRequestBodyProductAttribute,
    "Logistics202510GetAvailableShippingTemplateRequestBodyProductAttributeDimension": GetAvailableShippingTemplateRequestBodyProductAttributeDimension_1.Logistics202510GetAvailableShippingTemplateRequestBodyProductAttributeDimension,
    "Logistics202510GetAvailableShippingTemplateRequestBodyProductAttributeWeight": GetAvailableShippingTemplateRequestBodyProductAttributeWeight_1.Logistics202510GetAvailableShippingTemplateRequestBodyProductAttributeWeight,
    "Logistics202510GetAvailableShippingTemplateResponse": GetAvailableShippingTemplateResponse_1.Logistics202510GetAvailableShippingTemplateResponse,
    "Logistics202510GetAvailableShippingTemplateResponseData": GetAvailableShippingTemplateResponseData_1.Logistics202510GetAvailableShippingTemplateResponseData,
    "Logistics202510GetAvailableShippingTemplateResponseDataTemplates": GetAvailableShippingTemplateResponseDataTemplates_1.Logistics202510GetAvailableShippingTemplateResponseDataTemplates,
    "Logistics202510GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReason": GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReason_1.Logistics202510GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReason,
    "Logistics202510GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReasonFilterReason": GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReasonFilterReason_1.Logistics202510GetAvailableShippingTemplateResponseDataTemplatesServiceUnreachableReasonFilterReason,
    "Logistics202510GetAvailableShippingTemplateResponseDataTemplatesTemplate": GetAvailableShippingTemplateResponseDataTemplatesTemplate_1.Logistics202510GetAvailableShippingTemplateResponseDataTemplatesTemplate,
    "Order202309GetOrderDetailResponse": GetOrderDetailResponse_1.Order202309GetOrderDetailResponse,
    "Order202309GetOrderDetailResponseData": GetOrderDetailResponseData_1.Order202309GetOrderDetailResponseData,
    "Order202309GetOrderDetailResponseDataOrders": GetOrderDetailResponseDataOrders_1.Order202309GetOrderDetailResponseDataOrders,
    "Order202309GetOrderDetailResponseDataOrdersHandlingDuration": GetOrderDetailResponseDataOrdersHandlingDuration_1.Order202309GetOrderDetailResponseDataOrdersHandlingDuration,
    "Order202309GetOrderDetailResponseDataOrdersLineItems": GetOrderDetailResponseDataOrdersLineItems_1.Order202309GetOrderDetailResponseDataOrdersLineItems,
    "Order202309GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus": GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus_1.Order202309GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus,
    "Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax": GetOrderDetailResponseDataOrdersLineItemsItemTax_1.Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax,
    "Order202309GetOrderDetailResponseDataOrdersPackages": GetOrderDetailResponseDataOrdersPackages_1.Order202309GetOrderDetailResponseDataOrdersPackages,
    "Order202309GetOrderDetailResponseDataOrdersPayment": GetOrderDetailResponseDataOrdersPayment_1.Order202309GetOrderDetailResponseDataOrdersPayment,
    "Order202309GetOrderDetailResponseDataOrdersRecipientAddress": GetOrderDetailResponseDataOrdersRecipientAddress_1.Order202309GetOrderDetailResponseDataOrdersRecipientAddress,
    "Order202309GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences": GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences_1.Order202309GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences,
    "Order202309GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo": GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo_1.Order202309GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo,
    "Order202309GetOrderListRequestBody": GetOrderListRequestBody_1.Order202309GetOrderListRequestBody,
    "Order202309GetOrderListResponse": GetOrderListResponse_1.Order202309GetOrderListResponse,
    "Order202309GetOrderListResponseData": GetOrderListResponseData_1.Order202309GetOrderListResponseData,
    "Order202309GetOrderListResponseDataOrders": GetOrderListResponseDataOrders_1.Order202309GetOrderListResponseDataOrders,
    "Order202309GetOrderListResponseDataOrdersHandlingDuration": GetOrderListResponseDataOrdersHandlingDuration_1.Order202309GetOrderListResponseDataOrdersHandlingDuration,
    "Order202309GetOrderListResponseDataOrdersLineItems": GetOrderListResponseDataOrdersLineItems_1.Order202309GetOrderListResponseDataOrdersLineItems,
    "Order202309GetOrderListResponseDataOrdersLineItemsCombinedListingSkus": GetOrderListResponseDataOrdersLineItemsCombinedListingSkus_1.Order202309GetOrderListResponseDataOrdersLineItemsCombinedListingSkus,
    "Order202309GetOrderListResponseDataOrdersLineItemsItemTax": GetOrderListResponseDataOrdersLineItemsItemTax_1.Order202309GetOrderListResponseDataOrdersLineItemsItemTax,
    "Order202309GetOrderListResponseDataOrdersPackages": GetOrderListResponseDataOrdersPackages_1.Order202309GetOrderListResponseDataOrdersPackages,
    "Order202309GetOrderListResponseDataOrdersPayment": GetOrderListResponseDataOrdersPayment_1.Order202309GetOrderListResponseDataOrdersPayment,
    "Order202309GetOrderListResponseDataOrdersRecipientAddress": GetOrderListResponseDataOrdersRecipientAddress_1.Order202309GetOrderListResponseDataOrdersRecipientAddress,
    "Order202309GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences": GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences_1.Order202309GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences,
    "Order202309GetOrderListResponseDataOrdersRecipientAddressDistrictInfo": GetOrderListResponseDataOrdersRecipientAddressDistrictInfo_1.Order202309GetOrderListResponseDataOrdersRecipientAddressDistrictInfo,
    "Order202407GetPriceDetailResponse": GetPriceDetailResponse_1.Order202407GetPriceDetailResponse,
    "Order202407GetPriceDetailResponseData": GetPriceDetailResponseData_1.Order202407GetPriceDetailResponseData,
    "Order202407GetPriceDetailResponseDataLineItems": GetPriceDetailResponseDataLineItems_1.Order202407GetPriceDetailResponseDataLineItems,
    "Order202507GetOrderDetailResponse": GetOrderDetailResponse_2.Order202507GetOrderDetailResponse,
    "Order202507GetOrderDetailResponseData": GetOrderDetailResponseData_2.Order202507GetOrderDetailResponseData,
    "Order202507GetOrderDetailResponseDataOrders": GetOrderDetailResponseDataOrders_2.Order202507GetOrderDetailResponseDataOrders,
    "Order202507GetOrderDetailResponseDataOrdersHandlingDuration": GetOrderDetailResponseDataOrdersHandlingDuration_2.Order202507GetOrderDetailResponseDataOrdersHandlingDuration,
    "Order202507GetOrderDetailResponseDataOrdersLineItems": GetOrderDetailResponseDataOrdersLineItems_2.Order202507GetOrderDetailResponseDataOrdersLineItems,
    "Order202507GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus": GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus_2.Order202507GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus,
    "Order202507GetOrderDetailResponseDataOrdersLineItemsItemTax": GetOrderDetailResponseDataOrdersLineItemsItemTax_2.Order202507GetOrderDetailResponseDataOrdersLineItemsItemTax,
    "Order202507GetOrderDetailResponseDataOrdersPackages": GetOrderDetailResponseDataOrdersPackages_2.Order202507GetOrderDetailResponseDataOrdersPackages,
    "Order202507GetOrderDetailResponseDataOrdersPayment": GetOrderDetailResponseDataOrdersPayment_2.Order202507GetOrderDetailResponseDataOrdersPayment,
    "Order202507GetOrderDetailResponseDataOrdersRecipientAddress": GetOrderDetailResponseDataOrdersRecipientAddress_2.Order202507GetOrderDetailResponseDataOrdersRecipientAddress,
    "Order202507GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences": GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences_2.Order202507GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences,
    "Order202507GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo": GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo_2.Order202507GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo,
    "Product202309ActivateProductRequestBody": ActivateProductRequestBody_1.Product202309ActivateProductRequestBody,
    "Product202309ActivateProductResponse": ActivateProductResponse_1.Product202309ActivateProductResponse,
    "Product202309ActivateProductResponseData": ActivateProductResponseData_1.Product202309ActivateProductResponseData,
    "Product202309ActivateProductResponseDataErrors": ActivateProductResponseDataErrors_1.Product202309ActivateProductResponseDataErrors,
    "Product202309ActivateProductResponseDataErrorsDetail": ActivateProductResponseDataErrorsDetail_1.Product202309ActivateProductResponseDataErrorsDetail,
    "Product202309ActivateProductResponseDataErrorsDetailExtraErrors": ActivateProductResponseDataErrorsDetailExtraErrors_1.Product202309ActivateProductResponseDataErrorsDetailExtraErrors,
    "Product202309CheckListingPrerequisitesResponse": CheckListingPrerequisitesResponse_1.Product202309CheckListingPrerequisitesResponse,
    "Product202309CheckListingPrerequisitesResponseData": CheckListingPrerequisitesResponseData_1.Product202309CheckListingPrerequisitesResponseData,
    "Product202309CheckListingPrerequisitesResponseDataShop": CheckListingPrerequisitesResponseDataShop_1.Product202309CheckListingPrerequisitesResponseDataShop,
    "Product202309CheckListingPrerequisitesResponseDataShopGne": CheckListingPrerequisitesResponseDataShopGne_1.Product202309CheckListingPrerequisitesResponseDataShopGne,
    "Product202309CheckListingPrerequisitesResponseDataShopLogistics": CheckListingPrerequisitesResponseDataShopLogistics_1.Product202309CheckListingPrerequisitesResponseDataShopLogistics,
    "Product202309CheckProductListingRequestBody": CheckProductListingRequestBody_1.Product202309CheckProductListingRequestBody,
    "Product202309CheckProductListingRequestBodyCertifications": CheckProductListingRequestBodyCertifications_1.Product202309CheckProductListingRequestBodyCertifications,
    "Product202309CheckProductListingRequestBodyCertificationsFiles": CheckProductListingRequestBodyCertificationsFiles_1.Product202309CheckProductListingRequestBodyCertificationsFiles,
    "Product202309CheckProductListingRequestBodyCertificationsImages": CheckProductListingRequestBodyCertificationsImages_1.Product202309CheckProductListingRequestBodyCertificationsImages,
    "Product202309CheckProductListingRequestBodyMainImages": CheckProductListingRequestBodyMainImages_1.Product202309CheckProductListingRequestBodyMainImages,
    "Product202309CheckProductListingRequestBodyPackageDimensions": CheckProductListingRequestBodyPackageDimensions_1.Product202309CheckProductListingRequestBodyPackageDimensions,
    "Product202309CheckProductListingRequestBodyPackageWeight": CheckProductListingRequestBodyPackageWeight_1.Product202309CheckProductListingRequestBodyPackageWeight,
    "Product202309CheckProductListingRequestBodyProductAttributes": CheckProductListingRequestBodyProductAttributes_1.Product202309CheckProductListingRequestBodyProductAttributes,
    "Product202309CheckProductListingRequestBodyProductAttributesValues": CheckProductListingRequestBodyProductAttributesValues_1.Product202309CheckProductListingRequestBodyProductAttributesValues,
    "Product202309CheckProductListingRequestBodySizeChart": CheckProductListingRequestBodySizeChart_1.Product202309CheckProductListingRequestBodySizeChart,
    "Product202309CheckProductListingRequestBodySizeChartImage": CheckProductListingRequestBodySizeChartImage_1.Product202309CheckProductListingRequestBodySizeChartImage,
    "Product202309CheckProductListingRequestBodySizeChartTemplate": CheckProductListingRequestBodySizeChartTemplate_1.Product202309CheckProductListingRequestBodySizeChartTemplate,
    "Product202309CheckProductListingRequestBodySkus": CheckProductListingRequestBodySkus_1.Product202309CheckProductListingRequestBodySkus,
    "Product202309CheckProductListingRequestBodySkusCombinedSkus": CheckProductListingRequestBodySkusCombinedSkus_1.Product202309CheckProductListingRequestBodySkusCombinedSkus,
    "Product202309CheckProductListingRequestBodySkusExternalListPrices": CheckProductListingRequestBodySkusExternalListPrices_1.Product202309CheckProductListingRequestBodySkusExternalListPrices,
    "Product202309CheckProductListingRequestBodySkusFees": CheckProductListingRequestBodySkusFees_1.Product202309CheckProductListingRequestBodySkusFees,
    "Product202309CheckProductListingRequestBodySkusIdentifierCode": CheckProductListingRequestBodySkusIdentifierCode_1.Product202309CheckProductListingRequestBodySkusIdentifierCode,
    "Product202309CheckProductListingRequestBodySkusInventory": CheckProductListingRequestBodySkusInventory_1.Product202309CheckProductListingRequestBodySkusInventory,
    "Product202309CheckProductListingRequestBodySkusListPrice": CheckProductListingRequestBodySkusListPrice_1.Product202309CheckProductListingRequestBodySkusListPrice,
    "Product202309CheckProductListingRequestBodySkusPreSale": CheckProductListingRequestBodySkusPreSale_1.Product202309CheckProductListingRequestBodySkusPreSale,
    "Product202309CheckProductListingRequestBodySkusPreSaleFulfillmentType": CheckProductListingRequestBodySkusPreSaleFulfillmentType_1.Product202309CheckProductListingRequestBodySkusPreSaleFulfillmentType,
    "Product202309CheckProductListingRequestBodySkusPrice": CheckProductListingRequestBodySkusPrice_1.Product202309CheckProductListingRequestBodySkusPrice,
    "Product202309CheckProductListingRequestBodySkusSalesAttributes": CheckProductListingRequestBodySkusSalesAttributes_1.Product202309CheckProductListingRequestBodySkusSalesAttributes,
    "Product202309CheckProductListingRequestBodySkusSalesAttributesSkuImg": CheckProductListingRequestBodySkusSalesAttributesSkuImg_1.Product202309CheckProductListingRequestBodySkusSalesAttributesSkuImg,
    "Product202309CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages": CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages_1.Product202309CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages,
    "Product202309CheckProductListingRequestBodyVideo": CheckProductListingRequestBodyVideo_1.Product202309CheckProductListingRequestBodyVideo,
    "Product202309CheckProductListingResponse": CheckProductListingResponse_1.Product202309CheckProductListingResponse,
    "Product202309CheckProductListingResponseData": CheckProductListingResponseData_1.Product202309CheckProductListingResponseData,
    "Product202309CheckProductListingResponseDataDiagnoses": CheckProductListingResponseDataDiagnoses_1.Product202309CheckProductListingResponseDataDiagnoses,
    "Product202309CheckProductListingResponseDataDiagnosesDiagnosisResults": CheckProductListingResponseDataDiagnosesDiagnosisResults_1.Product202309CheckProductListingResponseDataDiagnosesDiagnosisResults,
    "Product202309CheckProductListingResponseDataDiagnosesSuggestions": CheckProductListingResponseDataDiagnosesSuggestions_1.Product202309CheckProductListingResponseDataDiagnosesSuggestions,
    "Product202309CheckProductListingResponseDataDiagnosesSuggestionsImages": CheckProductListingResponseDataDiagnosesSuggestionsImages_1.Product202309CheckProductListingResponseDataDiagnosesSuggestionsImages,
    "Product202309CheckProductListingResponseDataDiagnosesSuggestionsSeoWords": CheckProductListingResponseDataDiagnosesSuggestionsSeoWords_1.Product202309CheckProductListingResponseDataDiagnosesSuggestionsSeoWords,
    "Product202309CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts": CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts_1.Product202309CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts,
    "Product202309CheckProductListingResponseDataFailReasons": CheckProductListingResponseDataFailReasons_1.Product202309CheckProductListingResponseDataFailReasons,
    "Product202309CheckProductListingResponseDataListingQuality": CheckProductListingResponseDataListingQuality_1.Product202309CheckProductListingResponseDataListingQuality,
    "Product202309CheckProductListingResponseDataWarnings": CheckProductListingResponseDataWarnings_1.Product202309CheckProductListingResponseDataWarnings,
    "Product202309CreateCustomBrandsRequestBody": CreateCustomBrandsRequestBody_1.Product202309CreateCustomBrandsRequestBody,
    "Product202309CreateCustomBrandsResponse": CreateCustomBrandsResponse_1.Product202309CreateCustomBrandsResponse,
    "Product202309CreateCustomBrandsResponseData": CreateCustomBrandsResponseData_1.Product202309CreateCustomBrandsResponseData,
    "Product202309CreateGlobalProductRequestBody": CreateGlobalProductRequestBody_1.Product202309CreateGlobalProductRequestBody,
    "Product202309CreateGlobalProductRequestBodyCertifications": CreateGlobalProductRequestBodyCertifications_1.Product202309CreateGlobalProductRequestBodyCertifications,
    "Product202309CreateGlobalProductRequestBodyCertificationsFiles": CreateGlobalProductRequestBodyCertificationsFiles_1.Product202309CreateGlobalProductRequestBodyCertificationsFiles,
    "Product202309CreateGlobalProductRequestBodyCertificationsImages": CreateGlobalProductRequestBodyCertificationsImages_1.Product202309CreateGlobalProductRequestBodyCertificationsImages,
    "Product202309CreateGlobalProductRequestBodyMainImages": CreateGlobalProductRequestBodyMainImages_1.Product202309CreateGlobalProductRequestBodyMainImages,
    "Product202309CreateGlobalProductRequestBodyManufacturer": CreateGlobalProductRequestBodyManufacturer_1.Product202309CreateGlobalProductRequestBodyManufacturer,
    "Product202309CreateGlobalProductRequestBodyPackageDimensions": CreateGlobalProductRequestBodyPackageDimensions_1.Product202309CreateGlobalProductRequestBodyPackageDimensions,
    "Product202309CreateGlobalProductRequestBodyPackageWeight": CreateGlobalProductRequestBodyPackageWeight_1.Product202309CreateGlobalProductRequestBodyPackageWeight,
    "Product202309CreateGlobalProductRequestBodyProductAttributes": CreateGlobalProductRequestBodyProductAttributes_1.Product202309CreateGlobalProductRequestBodyProductAttributes,
    "Product202309CreateGlobalProductRequestBodyProductAttributesValues": CreateGlobalProductRequestBodyProductAttributesValues_1.Product202309CreateGlobalProductRequestBodyProductAttributesValues,
    "Product202309CreateGlobalProductRequestBodySizeChart": CreateGlobalProductRequestBodySizeChart_1.Product202309CreateGlobalProductRequestBodySizeChart,
    "Product202309CreateGlobalProductRequestBodySizeChartImage": CreateGlobalProductRequestBodySizeChartImage_1.Product202309CreateGlobalProductRequestBodySizeChartImage,
    "Product202309CreateGlobalProductRequestBodySizeChartTemplate": CreateGlobalProductRequestBodySizeChartTemplate_1.Product202309CreateGlobalProductRequestBodySizeChartTemplate,
    "Product202309CreateGlobalProductRequestBodySkus": CreateGlobalProductRequestBodySkus_1.Product202309CreateGlobalProductRequestBodySkus,
    "Product202309CreateGlobalProductRequestBodySkusIdentifierCode": CreateGlobalProductRequestBodySkusIdentifierCode_1.Product202309CreateGlobalProductRequestBodySkusIdentifierCode,
    "Product202309CreateGlobalProductRequestBodySkusInventory": CreateGlobalProductRequestBodySkusInventory_1.Product202309CreateGlobalProductRequestBodySkusInventory,
    "Product202309CreateGlobalProductRequestBodySkusPrice": CreateGlobalProductRequestBodySkusPrice_1.Product202309CreateGlobalProductRequestBodySkusPrice,
    "Product202309CreateGlobalProductRequestBodySkusSalesAttributes": CreateGlobalProductRequestBodySkusSalesAttributes_1.Product202309CreateGlobalProductRequestBodySkusSalesAttributes,
    "Product202309CreateGlobalProductRequestBodySkusSalesAttributesSkuImg": CreateGlobalProductRequestBodySkusSalesAttributesSkuImg_1.Product202309CreateGlobalProductRequestBodySkusSalesAttributesSkuImg,
    "Product202309CreateGlobalProductRequestBodyVideo": CreateGlobalProductRequestBodyVideo_1.Product202309CreateGlobalProductRequestBodyVideo,
    "Product202309CreateGlobalProductResponse": CreateGlobalProductResponse_1.Product202309CreateGlobalProductResponse,
    "Product202309CreateGlobalProductResponseData": CreateGlobalProductResponseData_1.Product202309CreateGlobalProductResponseData,
    "Product202309CreateGlobalProductResponseDataGlobalSkus": CreateGlobalProductResponseDataGlobalSkus_1.Product202309CreateGlobalProductResponseDataGlobalSkus,
    "Product202309CreateGlobalProductResponseDataGlobalSkusSalesAttributes": CreateGlobalProductResponseDataGlobalSkusSalesAttributes_1.Product202309CreateGlobalProductResponseDataGlobalSkusSalesAttributes,
    "Product202309CreateProductRequestBody": CreateProductRequestBody_1.Product202309CreateProductRequestBody,
    "Product202309CreateProductRequestBodyCertifications": CreateProductRequestBodyCertifications_1.Product202309CreateProductRequestBodyCertifications,
    "Product202309CreateProductRequestBodyCertificationsFiles": CreateProductRequestBodyCertificationsFiles_1.Product202309CreateProductRequestBodyCertificationsFiles,
    "Product202309CreateProductRequestBodyCertificationsImages": CreateProductRequestBodyCertificationsImages_1.Product202309CreateProductRequestBodyCertificationsImages,
    "Product202309CreateProductRequestBodyMainImages": CreateProductRequestBodyMainImages_1.Product202309CreateProductRequestBodyMainImages,
    "Product202309CreateProductRequestBodyPackageDimensions": CreateProductRequestBodyPackageDimensions_1.Product202309CreateProductRequestBodyPackageDimensions,
    "Product202309CreateProductRequestBodyPackageWeight": CreateProductRequestBodyPackageWeight_1.Product202309CreateProductRequestBodyPackageWeight,
    "Product202309CreateProductRequestBodyProductAttributes": CreateProductRequestBodyProductAttributes_1.Product202309CreateProductRequestBodyProductAttributes,
    "Product202309CreateProductRequestBodyProductAttributesValues": CreateProductRequestBodyProductAttributesValues_1.Product202309CreateProductRequestBodyProductAttributesValues,
    "Product202309CreateProductRequestBodySizeChart": CreateProductRequestBodySizeChart_1.Product202309CreateProductRequestBodySizeChart,
    "Product202309CreateProductRequestBodySizeChartImage": CreateProductRequestBodySizeChartImage_1.Product202309CreateProductRequestBodySizeChartImage,
    "Product202309CreateProductRequestBodySizeChartTemplate": CreateProductRequestBodySizeChartTemplate_1.Product202309CreateProductRequestBodySizeChartTemplate,
    "Product202309CreateProductRequestBodySkus": CreateProductRequestBodySkus_1.Product202309CreateProductRequestBodySkus,
    "Product202309CreateProductRequestBodySkusCombinedSkus": CreateProductRequestBodySkusCombinedSkus_1.Product202309CreateProductRequestBodySkusCombinedSkus,
    "Product202309CreateProductRequestBodySkusExternalListPrices": CreateProductRequestBodySkusExternalListPrices_1.Product202309CreateProductRequestBodySkusExternalListPrices,
    "Product202309CreateProductRequestBodySkusFees": CreateProductRequestBodySkusFees_1.Product202309CreateProductRequestBodySkusFees,
    "Product202309CreateProductRequestBodySkusIdentifierCode": CreateProductRequestBodySkusIdentifierCode_1.Product202309CreateProductRequestBodySkusIdentifierCode,
    "Product202309CreateProductRequestBodySkusInventory": CreateProductRequestBodySkusInventory_1.Product202309CreateProductRequestBodySkusInventory,
    "Product202309CreateProductRequestBodySkusListPrice": CreateProductRequestBodySkusListPrice_1.Product202309CreateProductRequestBodySkusListPrice,
    "Product202309CreateProductRequestBodySkusPreSale": CreateProductRequestBodySkusPreSale_1.Product202309CreateProductRequestBodySkusPreSale,
    "Product202309CreateProductRequestBodySkusPreSaleFulfillmentType": CreateProductRequestBodySkusPreSaleFulfillmentType_1.Product202309CreateProductRequestBodySkusPreSaleFulfillmentType,
    "Product202309CreateProductRequestBodySkusPrice": CreateProductRequestBodySkusPrice_1.Product202309CreateProductRequestBodySkusPrice,
    "Product202309CreateProductRequestBodySkusSalesAttributes": CreateProductRequestBodySkusSalesAttributes_1.Product202309CreateProductRequestBodySkusSalesAttributes,
    "Product202309CreateProductRequestBodySkusSalesAttributesSkuImg": CreateProductRequestBodySkusSalesAttributesSkuImg_1.Product202309CreateProductRequestBodySkusSalesAttributesSkuImg,
    "Product202309CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages": CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages_1.Product202309CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages,
    "Product202309CreateProductRequestBodyVideo": CreateProductRequestBodyVideo_1.Product202309CreateProductRequestBodyVideo,
    "Product202309CreateProductResponse": CreateProductResponse_1.Product202309CreateProductResponse,
    "Product202309CreateProductResponseData": CreateProductResponseData_1.Product202309CreateProductResponseData,
    "Product202309CreateProductResponseDataSkus": CreateProductResponseDataSkus_1.Product202309CreateProductResponseDataSkus,
    "Product202309CreateProductResponseDataSkusFees": CreateProductResponseDataSkusFees_1.Product202309CreateProductResponseDataSkusFees,
    "Product202309CreateProductResponseDataSkusSalesAttributes": CreateProductResponseDataSkusSalesAttributes_1.Product202309CreateProductResponseDataSkusSalesAttributes,
    "Product202309CreateProductResponseDataWarnings": CreateProductResponseDataWarnings_1.Product202309CreateProductResponseDataWarnings,
    "Product202309DeactivateProductsRequestBody": DeactivateProductsRequestBody_1.Product202309DeactivateProductsRequestBody,
    "Product202309DeactivateProductsResponse": DeactivateProductsResponse_1.Product202309DeactivateProductsResponse,
    "Product202309DeactivateProductsResponseData": DeactivateProductsResponseData_1.Product202309DeactivateProductsResponseData,
    "Product202309DeactivateProductsResponseDataErrors": DeactivateProductsResponseDataErrors_1.Product202309DeactivateProductsResponseDataErrors,
    "Product202309DeactivateProductsResponseDataErrorsDetail": DeactivateProductsResponseDataErrorsDetail_1.Product202309DeactivateProductsResponseDataErrorsDetail,
    "Product202309DeleteGlobalProductsRequestBody": DeleteGlobalProductsRequestBody_1.Product202309DeleteGlobalProductsRequestBody,
    "Product202309DeleteGlobalProductsResponse": DeleteGlobalProductsResponse_1.Product202309DeleteGlobalProductsResponse,
    "Product202309DeleteGlobalProductsResponseData": DeleteGlobalProductsResponseData_1.Product202309DeleteGlobalProductsResponseData,
    "Product202309DeleteGlobalProductsResponseDataErrors": DeleteGlobalProductsResponseDataErrors_1.Product202309DeleteGlobalProductsResponseDataErrors,
    "Product202309DeleteGlobalProductsResponseDataErrorsDetail": DeleteGlobalProductsResponseDataErrorsDetail_1.Product202309DeleteGlobalProductsResponseDataErrorsDetail,
    "Product202309DeleteProductsRequestBody": DeleteProductsRequestBody_1.Product202309DeleteProductsRequestBody,
    "Product202309DeleteProductsResponse": DeleteProductsResponse_1.Product202309DeleteProductsResponse,
    "Product202309DeleteProductsResponseData": DeleteProductsResponseData_1.Product202309DeleteProductsResponseData,
    "Product202309DeleteProductsResponseDataErrors": DeleteProductsResponseDataErrors_1.Product202309DeleteProductsResponseDataErrors,
    "Product202309DeleteProductsResponseDataErrorsDetail": DeleteProductsResponseDataErrorsDetail_1.Product202309DeleteProductsResponseDataErrorsDetail,
    "Product202309EditGlobalProductRequestBody": EditGlobalProductRequestBody_1.Product202309EditGlobalProductRequestBody,
    "Product202309EditGlobalProductRequestBodyCertifications": EditGlobalProductRequestBodyCertifications_1.Product202309EditGlobalProductRequestBodyCertifications,
    "Product202309EditGlobalProductRequestBodyCertificationsFiles": EditGlobalProductRequestBodyCertificationsFiles_1.Product202309EditGlobalProductRequestBodyCertificationsFiles,
    "Product202309EditGlobalProductRequestBodyCertificationsImages": EditGlobalProductRequestBodyCertificationsImages_1.Product202309EditGlobalProductRequestBodyCertificationsImages,
    "Product202309EditGlobalProductRequestBodyMainImages": EditGlobalProductRequestBodyMainImages_1.Product202309EditGlobalProductRequestBodyMainImages,
    "Product202309EditGlobalProductRequestBodyManufacturer": EditGlobalProductRequestBodyManufacturer_1.Product202309EditGlobalProductRequestBodyManufacturer,
    "Product202309EditGlobalProductRequestBodyPackageDimensions": EditGlobalProductRequestBodyPackageDimensions_1.Product202309EditGlobalProductRequestBodyPackageDimensions,
    "Product202309EditGlobalProductRequestBodyPackageWeight": EditGlobalProductRequestBodyPackageWeight_1.Product202309EditGlobalProductRequestBodyPackageWeight,
    "Product202309EditGlobalProductRequestBodyProductAttributes": EditGlobalProductRequestBodyProductAttributes_1.Product202309EditGlobalProductRequestBodyProductAttributes,
    "Product202309EditGlobalProductRequestBodyProductAttributesValues": EditGlobalProductRequestBodyProductAttributesValues_1.Product202309EditGlobalProductRequestBodyProductAttributesValues,
    "Product202309EditGlobalProductRequestBodySizeChart": EditGlobalProductRequestBodySizeChart_1.Product202309EditGlobalProductRequestBodySizeChart,
    "Product202309EditGlobalProductRequestBodySizeChartImage": EditGlobalProductRequestBodySizeChartImage_1.Product202309EditGlobalProductRequestBodySizeChartImage,
    "Product202309EditGlobalProductRequestBodySizeChartTemplate": EditGlobalProductRequestBodySizeChartTemplate_1.Product202309EditGlobalProductRequestBodySizeChartTemplate,
    "Product202309EditGlobalProductRequestBodySkus": EditGlobalProductRequestBodySkus_1.Product202309EditGlobalProductRequestBodySkus,
    "Product202309EditGlobalProductRequestBodySkusIdentifierCode": EditGlobalProductRequestBodySkusIdentifierCode_1.Product202309EditGlobalProductRequestBodySkusIdentifierCode,
    "Product202309EditGlobalProductRequestBodySkusInventory": EditGlobalProductRequestBodySkusInventory_1.Product202309EditGlobalProductRequestBodySkusInventory,
    "Product202309EditGlobalProductRequestBodySkusPrice": EditGlobalProductRequestBodySkusPrice_1.Product202309EditGlobalProductRequestBodySkusPrice,
    "Product202309EditGlobalProductRequestBodySkusSalePrices": EditGlobalProductRequestBodySkusSalePrices_1.Product202309EditGlobalProductRequestBodySkusSalePrices,
    "Product202309EditGlobalProductRequestBodySkusSalesAttributes": EditGlobalProductRequestBodySkusSalesAttributes_1.Product202309EditGlobalProductRequestBodySkusSalesAttributes,
    "Product202309EditGlobalProductRequestBodySkusSalesAttributesSkuImg": EditGlobalProductRequestBodySkusSalesAttributesSkuImg_1.Product202309EditGlobalProductRequestBodySkusSalesAttributesSkuImg,
    "Product202309EditGlobalProductRequestBodyVideo": EditGlobalProductRequestBodyVideo_1.Product202309EditGlobalProductRequestBodyVideo,
    "Product202309EditGlobalProductResponse": EditGlobalProductResponse_1.Product202309EditGlobalProductResponse,
    "Product202309EditGlobalProductResponseData": EditGlobalProductResponseData_1.Product202309EditGlobalProductResponseData,
    "Product202309EditGlobalProductResponseDataGlobalSkus": EditGlobalProductResponseDataGlobalSkus_1.Product202309EditGlobalProductResponseDataGlobalSkus,
    "Product202309EditGlobalProductResponseDataGlobalSkusSalesAttributes": EditGlobalProductResponseDataGlobalSkusSalesAttributes_1.Product202309EditGlobalProductResponseDataGlobalSkusSalesAttributes,
    "Product202309EditGlobalProductResponseDataPublishResults": EditGlobalProductResponseDataPublishResults_1.Product202309EditGlobalProductResponseDataPublishResults,
    "Product202309EditGlobalProductResponseDataPublishResultsFailReasons": EditGlobalProductResponseDataPublishResultsFailReasons_1.Product202309EditGlobalProductResponseDataPublishResultsFailReasons,
    "Product202309EditProductRequestBody": EditProductRequestBody_1.Product202309EditProductRequestBody,
    "Product202309EditProductRequestBodyCertifications": EditProductRequestBodyCertifications_1.Product202309EditProductRequestBodyCertifications,
    "Product202309EditProductRequestBodyCertificationsFiles": EditProductRequestBodyCertificationsFiles_1.Product202309EditProductRequestBodyCertificationsFiles,
    "Product202309EditProductRequestBodyCertificationsImages": EditProductRequestBodyCertificationsImages_1.Product202309EditProductRequestBodyCertificationsImages,
    "Product202309EditProductRequestBodyMainImages": EditProductRequestBodyMainImages_1.Product202309EditProductRequestBodyMainImages,
    "Product202309EditProductRequestBodyPackageDimensions": EditProductRequestBodyPackageDimensions_1.Product202309EditProductRequestBodyPackageDimensions,
    "Product202309EditProductRequestBodyPackageWeight": EditProductRequestBodyPackageWeight_1.Product202309EditProductRequestBodyPackageWeight,
    "Product202309EditProductRequestBodyProductAttributes": EditProductRequestBodyProductAttributes_1.Product202309EditProductRequestBodyProductAttributes,
    "Product202309EditProductRequestBodyProductAttributesValues": EditProductRequestBodyProductAttributesValues_1.Product202309EditProductRequestBodyProductAttributesValues,
    "Product202309EditProductRequestBodyReplicatedProducts": EditProductRequestBodyReplicatedProducts_1.Product202309EditProductRequestBodyReplicatedProducts,
    "Product202309EditProductRequestBodyReplicatedProductsSkus": EditProductRequestBodyReplicatedProductsSkus_1.Product202309EditProductRequestBodyReplicatedProductsSkus,
    "Product202309EditProductRequestBodyReplicatedProductsSkusInventory": EditProductRequestBodyReplicatedProductsSkusInventory_1.Product202309EditProductRequestBodyReplicatedProductsSkusInventory,
    "Product202309EditProductRequestBodyReplicatedProductsSkusPrice": EditProductRequestBodyReplicatedProductsSkusPrice_1.Product202309EditProductRequestBodyReplicatedProductsSkusPrice,
    "Product202309EditProductRequestBodySizeChart": EditProductRequestBodySizeChart_1.Product202309EditProductRequestBodySizeChart,
    "Product202309EditProductRequestBodySizeChartImage": EditProductRequestBodySizeChartImage_1.Product202309EditProductRequestBodySizeChartImage,
    "Product202309EditProductRequestBodySizeChartTemplate": EditProductRequestBodySizeChartTemplate_1.Product202309EditProductRequestBodySizeChartTemplate,
    "Product202309EditProductRequestBodySkus": EditProductRequestBodySkus_1.Product202309EditProductRequestBodySkus,
    "Product202309EditProductRequestBodySkusCombinedSkus": EditProductRequestBodySkusCombinedSkus_1.Product202309EditProductRequestBodySkusCombinedSkus,
    "Product202309EditProductRequestBodySkusExternalListPrices": EditProductRequestBodySkusExternalListPrices_1.Product202309EditProductRequestBodySkusExternalListPrices,
    "Product202309EditProductRequestBodySkusFees": EditProductRequestBodySkusFees_1.Product202309EditProductRequestBodySkusFees,
    "Product202309EditProductRequestBodySkusIdentifierCode": EditProductRequestBodySkusIdentifierCode_1.Product202309EditProductRequestBodySkusIdentifierCode,
    "Product202309EditProductRequestBodySkusInventory": EditProductRequestBodySkusInventory_1.Product202309EditProductRequestBodySkusInventory,
    "Product202309EditProductRequestBodySkusListPrice": EditProductRequestBodySkusListPrice_1.Product202309EditProductRequestBodySkusListPrice,
    "Product202309EditProductRequestBodySkusPreSale": EditProductRequestBodySkusPreSale_1.Product202309EditProductRequestBodySkusPreSale,
    "Product202309EditProductRequestBodySkusPreSaleFulfillmentType": EditProductRequestBodySkusPreSaleFulfillmentType_1.Product202309EditProductRequestBodySkusPreSaleFulfillmentType,
    "Product202309EditProductRequestBodySkusPrice": EditProductRequestBodySkusPrice_1.Product202309EditProductRequestBodySkusPrice,
    "Product202309EditProductRequestBodySkusSalesAttributes": EditProductRequestBodySkusSalesAttributes_1.Product202309EditProductRequestBodySkusSalesAttributes,
    "Product202309EditProductRequestBodySkusSalesAttributesSkuImg": EditProductRequestBodySkusSalesAttributesSkuImg_1.Product202309EditProductRequestBodySkusSalesAttributesSkuImg,
    "Product202309EditProductRequestBodySkusSalesAttributesSupplementarySkuImages": EditProductRequestBodySkusSalesAttributesSupplementarySkuImages_1.Product202309EditProductRequestBodySkusSalesAttributesSupplementarySkuImages,
    "Product202309EditProductRequestBodySubscribeInfoEdit": EditProductRequestBodySubscribeInfoEdit_1.Product202309EditProductRequestBodySubscribeInfoEdit,
    "Product202309EditProductRequestBodySubscribeInfoEditDiscountDetails": EditProductRequestBodySubscribeInfoEditDiscountDetails_1.Product202309EditProductRequestBodySubscribeInfoEditDiscountDetails,
    "Product202309EditProductRequestBodyVideo": EditProductRequestBodyVideo_1.Product202309EditProductRequestBodyVideo,
    "Product202309EditProductResponse": EditProductResponse_1.Product202309EditProductResponse,
    "Product202309EditProductResponseData": EditProductResponseData_1.Product202309EditProductResponseData,
    "Product202309EditProductResponseDataAudit": EditProductResponseDataAudit_1.Product202309EditProductResponseDataAudit,
    "Product202309EditProductResponseDataSkus": EditProductResponseDataSkus_1.Product202309EditProductResponseDataSkus,
    "Product202309EditProductResponseDataSkusFees": EditProductResponseDataSkusFees_1.Product202309EditProductResponseDataSkusFees,
    "Product202309EditProductResponseDataSkusSalesAttributes": EditProductResponseDataSkusSalesAttributes_1.Product202309EditProductResponseDataSkusSalesAttributes,
    "Product202309EditProductResponseDataWarnings": EditProductResponseDataWarnings_1.Product202309EditProductResponseDataWarnings,
    "Product202309GetAttributesResponse": GetAttributesResponse_1.Product202309GetAttributesResponse,
    "Product202309GetAttributesResponseData": GetAttributesResponseData_1.Product202309GetAttributesResponseData,
    "Product202309GetAttributesResponseDataAttributes": GetAttributesResponseDataAttributes_1.Product202309GetAttributesResponseDataAttributes,
    "Product202309GetAttributesResponseDataAttributesRequirementConditions": GetAttributesResponseDataAttributesRequirementConditions_1.Product202309GetAttributesResponseDataAttributesRequirementConditions,
    "Product202309GetAttributesResponseDataAttributesValues": GetAttributesResponseDataAttributesValues_1.Product202309GetAttributesResponseDataAttributesValues,
    "Product202309GetBrandsResponse": GetBrandsResponse_1.Product202309GetBrandsResponse,
    "Product202309GetBrandsResponseData": GetBrandsResponseData_1.Product202309GetBrandsResponseData,
    "Product202309GetBrandsResponseDataBrands": GetBrandsResponseDataBrands_1.Product202309GetBrandsResponseDataBrands,
    "Product202309GetCategoriesResponse": GetCategoriesResponse_1.Product202309GetCategoriesResponse,
    "Product202309GetCategoriesResponseData": GetCategoriesResponseData_1.Product202309GetCategoriesResponseData,
    "Product202309GetCategoriesResponseDataCategories": GetCategoriesResponseDataCategories_1.Product202309GetCategoriesResponseDataCategories,
    "Product202309GetCategoryRulesResponse": GetCategoryRulesResponse_1.Product202309GetCategoryRulesResponse,
    "Product202309GetCategoryRulesResponseData": GetCategoryRulesResponseData_1.Product202309GetCategoryRulesResponseData,
    "Product202309GetCategoryRulesResponseDataCod": GetCategoryRulesResponseDataCod_1.Product202309GetCategoryRulesResponseDataCod,
    "Product202309GetCategoryRulesResponseDataEpr": GetCategoryRulesResponseDataEpr_1.Product202309GetCategoryRulesResponseDataEpr,
    "Product202309GetCategoryRulesResponseDataFees": GetCategoryRulesResponseDataFees_1.Product202309GetCategoryRulesResponseDataFees,
    "Product202309GetCategoryRulesResponseDataManufacturer": GetCategoryRulesResponseDataManufacturer_1.Product202309GetCategoryRulesResponseDataManufacturer,
    "Product202309GetCategoryRulesResponseDataPackageDimension": GetCategoryRulesResponseDataPackageDimension_1.Product202309GetCategoryRulesResponseDataPackageDimension,
    "Product202309GetCategoryRulesResponseDataProductCertifications": GetCategoryRulesResponseDataProductCertifications_1.Product202309GetCategoryRulesResponseDataProductCertifications,
    "Product202309GetCategoryRulesResponseDataProductCertificationsExpirationDate": GetCategoryRulesResponseDataProductCertificationsExpirationDate_1.Product202309GetCategoryRulesResponseDataProductCertificationsExpirationDate,
    "Product202309GetCategoryRulesResponseDataProductCertificationsRequirementConditions": GetCategoryRulesResponseDataProductCertificationsRequirementConditions_1.Product202309GetCategoryRulesResponseDataProductCertificationsRequirementConditions,
    "Product202309GetCategoryRulesResponseDataResponsiblePerson": GetCategoryRulesResponseDataResponsiblePerson_1.Product202309GetCategoryRulesResponseDataResponsiblePerson,
    "Product202309GetCategoryRulesResponseDataSizeChart": GetCategoryRulesResponseDataSizeChart_1.Product202309GetCategoryRulesResponseDataSizeChart,
    "Product202309GetGlobalAttributesResponse": GetGlobalAttributesResponse_1.Product202309GetGlobalAttributesResponse,
    "Product202309GetGlobalAttributesResponseData": GetGlobalAttributesResponseData_1.Product202309GetGlobalAttributesResponseData,
    "Product202309GetGlobalAttributesResponseDataAttributes": GetGlobalAttributesResponseDataAttributes_1.Product202309GetGlobalAttributesResponseDataAttributes,
    "Product202309GetGlobalAttributesResponseDataAttributesRequirementConditions": GetGlobalAttributesResponseDataAttributesRequirementConditions_1.Product202309GetGlobalAttributesResponseDataAttributesRequirementConditions,
    "Product202309GetGlobalAttributesResponseDataAttributesValues": GetGlobalAttributesResponseDataAttributesValues_1.Product202309GetGlobalAttributesResponseDataAttributesValues,
    "Product202309GetGlobalCategoriesResponse": GetGlobalCategoriesResponse_1.Product202309GetGlobalCategoriesResponse,
    "Product202309GetGlobalCategoriesResponseData": GetGlobalCategoriesResponseData_1.Product202309GetGlobalCategoriesResponseData,
    "Product202309GetGlobalCategoriesResponseDataCategories": GetGlobalCategoriesResponseDataCategories_1.Product202309GetGlobalCategoriesResponseDataCategories,
    "Product202309GetGlobalCategoryRulesResponse": GetGlobalCategoryRulesResponse_1.Product202309GetGlobalCategoryRulesResponse,
    "Product202309GetGlobalCategoryRulesResponseData": GetGlobalCategoryRulesResponseData_1.Product202309GetGlobalCategoryRulesResponseData,
    "Product202309GetGlobalCategoryRulesResponseDataManufacturer": GetGlobalCategoryRulesResponseDataManufacturer_1.Product202309GetGlobalCategoryRulesResponseDataManufacturer,
    "Product202309GetGlobalCategoryRulesResponseDataProductCertifications": GetGlobalCategoryRulesResponseDataProductCertifications_1.Product202309GetGlobalCategoryRulesResponseDataProductCertifications,
    "Product202309GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions": GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions_1.Product202309GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions,
    "Product202309GetGlobalCategoryRulesResponseDataResponsiblePerson": GetGlobalCategoryRulesResponseDataResponsiblePerson_1.Product202309GetGlobalCategoryRulesResponseDataResponsiblePerson,
    "Product202309GetGlobalCategoryRulesResponseDataSizeChart": GetGlobalCategoryRulesResponseDataSizeChart_1.Product202309GetGlobalCategoryRulesResponseDataSizeChart,
    "Product202309GetGlobalProductResponse": GetGlobalProductResponse_1.Product202309GetGlobalProductResponse,
    "Product202309GetGlobalProductResponseData": GetGlobalProductResponseData_1.Product202309GetGlobalProductResponseData,
    "Product202309GetGlobalProductResponseDataBrand": GetGlobalProductResponseDataBrand_1.Product202309GetGlobalProductResponseDataBrand,
    "Product202309GetGlobalProductResponseDataCategory": GetGlobalProductResponseDataCategory_1.Product202309GetGlobalProductResponseDataCategory,
    "Product202309GetGlobalProductResponseDataCertifications": GetGlobalProductResponseDataCertifications_1.Product202309GetGlobalProductResponseDataCertifications,
    "Product202309GetGlobalProductResponseDataCertificationsFiles": GetGlobalProductResponseDataCertificationsFiles_1.Product202309GetGlobalProductResponseDataCertificationsFiles,
    "Product202309GetGlobalProductResponseDataCertificationsImages": GetGlobalProductResponseDataCertificationsImages_1.Product202309GetGlobalProductResponseDataCertificationsImages,
    "Product202309GetGlobalProductResponseDataMainImages": GetGlobalProductResponseDataMainImages_1.Product202309GetGlobalProductResponseDataMainImages,
    "Product202309GetGlobalProductResponseDataManufacturer": GetGlobalProductResponseDataManufacturer_1.Product202309GetGlobalProductResponseDataManufacturer,
    "Product202309GetGlobalProductResponseDataPackageDimensions": GetGlobalProductResponseDataPackageDimensions_1.Product202309GetGlobalProductResponseDataPackageDimensions,
    "Product202309GetGlobalProductResponseDataPackageWeight": GetGlobalProductResponseDataPackageWeight_1.Product202309GetGlobalProductResponseDataPackageWeight,
    "Product202309GetGlobalProductResponseDataProductAttributes": GetGlobalProductResponseDataProductAttributes_1.Product202309GetGlobalProductResponseDataProductAttributes,
    "Product202309GetGlobalProductResponseDataProductAttributesValues": GetGlobalProductResponseDataProductAttributesValues_1.Product202309GetGlobalProductResponseDataProductAttributesValues,
    "Product202309GetGlobalProductResponseDataProducts": GetGlobalProductResponseDataProducts_1.Product202309GetGlobalProductResponseDataProducts,
    "Product202309GetGlobalProductResponseDataProductsSkuMappings": GetGlobalProductResponseDataProductsSkuMappings_1.Product202309GetGlobalProductResponseDataProductsSkuMappings,
    "Product202309GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings": GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings_1.Product202309GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings,
    "Product202309GetGlobalProductResponseDataSizeChart": GetGlobalProductResponseDataSizeChart_1.Product202309GetGlobalProductResponseDataSizeChart,
    "Product202309GetGlobalProductResponseDataSizeChartImage": GetGlobalProductResponseDataSizeChartImage_1.Product202309GetGlobalProductResponseDataSizeChartImage,
    "Product202309GetGlobalProductResponseDataSizeChartTemplate": GetGlobalProductResponseDataSizeChartTemplate_1.Product202309GetGlobalProductResponseDataSizeChartTemplate,
    "Product202309GetGlobalProductResponseDataSkus": GetGlobalProductResponseDataSkus_1.Product202309GetGlobalProductResponseDataSkus,
    "Product202309GetGlobalProductResponseDataSkusIdentifierCode": GetGlobalProductResponseDataSkusIdentifierCode_1.Product202309GetGlobalProductResponseDataSkusIdentifierCode,
    "Product202309GetGlobalProductResponseDataSkusInventory": GetGlobalProductResponseDataSkusInventory_1.Product202309GetGlobalProductResponseDataSkusInventory,
    "Product202309GetGlobalProductResponseDataSkusPrice": GetGlobalProductResponseDataSkusPrice_1.Product202309GetGlobalProductResponseDataSkusPrice,
    "Product202309GetGlobalProductResponseDataSkusSalesAttributes": GetGlobalProductResponseDataSkusSalesAttributes_1.Product202309GetGlobalProductResponseDataSkusSalesAttributes,
    "Product202309GetGlobalProductResponseDataSkusSalesAttributesSkuImg": GetGlobalProductResponseDataSkusSalesAttributesSkuImg_1.Product202309GetGlobalProductResponseDataSkusSalesAttributesSkuImg,
    "Product202309GetGlobalProductResponseDataVideo": GetGlobalProductResponseDataVideo_1.Product202309GetGlobalProductResponseDataVideo,
    "Product202309GetProductResponse": GetProductResponse_1.Product202309GetProductResponse,
    "Product202309GetProductResponseData": GetProductResponseData_1.Product202309GetProductResponseData,
    "Product202309GetProductResponseDataAudit": GetProductResponseDataAudit_1.Product202309GetProductResponseDataAudit,
    "Product202309GetProductResponseDataAuditFailedReasons": GetProductResponseDataAuditFailedReasons_1.Product202309GetProductResponseDataAuditFailedReasons,
    "Product202309GetProductResponseDataBrand": GetProductResponseDataBrand_1.Product202309GetProductResponseDataBrand,
    "Product202309GetProductResponseDataCategoryChains": GetProductResponseDataCategoryChains_1.Product202309GetProductResponseDataCategoryChains,
    "Product202309GetProductResponseDataCertifications": GetProductResponseDataCertifications_1.Product202309GetProductResponseDataCertifications,
    "Product202309GetProductResponseDataCertificationsFiles": GetProductResponseDataCertificationsFiles_1.Product202309GetProductResponseDataCertificationsFiles,
    "Product202309GetProductResponseDataCertificationsImages": GetProductResponseDataCertificationsImages_1.Product202309GetProductResponseDataCertificationsImages,
    "Product202309GetProductResponseDataDeliveryOptions": GetProductResponseDataDeliveryOptions_1.Product202309GetProductResponseDataDeliveryOptions,
    "Product202309GetProductResponseDataGlobalProductAssociation": GetProductResponseDataGlobalProductAssociation_1.Product202309GetProductResponseDataGlobalProductAssociation,
    "Product202309GetProductResponseDataGlobalProductAssociationSkuMappings": GetProductResponseDataGlobalProductAssociationSkuMappings_1.Product202309GetProductResponseDataGlobalProductAssociationSkuMappings,
    "Product202309GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings": GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings_1.Product202309GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings,
    "Product202309GetProductResponseDataIntegratedPlatformStatuses": GetProductResponseDataIntegratedPlatformStatuses_1.Product202309GetProductResponseDataIntegratedPlatformStatuses,
    "Product202309GetProductResponseDataMainImages": GetProductResponseDataMainImages_1.Product202309GetProductResponseDataMainImages,
    "Product202309GetProductResponseDataPackageDimensions": GetProductResponseDataPackageDimensions_1.Product202309GetProductResponseDataPackageDimensions,
    "Product202309GetProductResponseDataPackageWeight": GetProductResponseDataPackageWeight_1.Product202309GetProductResponseDataPackageWeight,
    "Product202309GetProductResponseDataPrescriptionRequirement": GetProductResponseDataPrescriptionRequirement_1.Product202309GetProductResponseDataPrescriptionRequirement,
    "Product202309GetProductResponseDataProductAttributes": GetProductResponseDataProductAttributes_1.Product202309GetProductResponseDataProductAttributes,
    "Product202309GetProductResponseDataProductAttributesValues": GetProductResponseDataProductAttributesValues_1.Product202309GetProductResponseDataProductAttributesValues,
    "Product202309GetProductResponseDataProductFamilies": GetProductResponseDataProductFamilies_1.Product202309GetProductResponseDataProductFamilies,
    "Product202309GetProductResponseDataProductFamiliesProducts": GetProductResponseDataProductFamiliesProducts_1.Product202309GetProductResponseDataProductFamiliesProducts,
    "Product202309GetProductResponseDataRecommendedCategories": GetProductResponseDataRecommendedCategories_1.Product202309GetProductResponseDataRecommendedCategories,
    "Product202309GetProductResponseDataSizeChart": GetProductResponseDataSizeChart_1.Product202309GetProductResponseDataSizeChart,
    "Product202309GetProductResponseDataSizeChartImage": GetProductResponseDataSizeChartImage_1.Product202309GetProductResponseDataSizeChartImage,
    "Product202309GetProductResponseDataSizeChartTemplate": GetProductResponseDataSizeChartTemplate_1.Product202309GetProductResponseDataSizeChartTemplate,
    "Product202309GetProductResponseDataSkus": GetProductResponseDataSkus_1.Product202309GetProductResponseDataSkus,
    "Product202309GetProductResponseDataSkusCombinedSkus": GetProductResponseDataSkusCombinedSkus_1.Product202309GetProductResponseDataSkusCombinedSkus,
    "Product202309GetProductResponseDataSkusCombinedSkusBrand": GetProductResponseDataSkusCombinedSkusBrand_1.Product202309GetProductResponseDataSkusCombinedSkusBrand,
    "Product202309GetProductResponseDataSkusCombinedSkusCategories": GetProductResponseDataSkusCombinedSkusCategories_1.Product202309GetProductResponseDataSkusCombinedSkusCategories,
    "Product202309GetProductResponseDataSkusCombinedSkusInventory": GetProductResponseDataSkusCombinedSkusInventory_1.Product202309GetProductResponseDataSkusCombinedSkusInventory,
    "Product202309GetProductResponseDataSkusCombinedSkusPrice": GetProductResponseDataSkusCombinedSkusPrice_1.Product202309GetProductResponseDataSkusCombinedSkusPrice,
    "Product202309GetProductResponseDataSkusCombinedSkusProductMainImage": GetProductResponseDataSkusCombinedSkusProductMainImage_1.Product202309GetProductResponseDataSkusCombinedSkusProductMainImage,
    "Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes": GetProductResponseDataSkusCombinedSkusSalesAttributes_1.Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes,
    "Product202309GetProductResponseDataSkusCombinedSkusSalesAttributesSkuImg": GetProductResponseDataSkusCombinedSkusSalesAttributesSkuImg_1.Product202309GetProductResponseDataSkusCombinedSkusSalesAttributesSkuImg,
    "Product202309GetProductResponseDataSkusCombinedSkusSalesAttributesSupplementarySkuImages": GetProductResponseDataSkusCombinedSkusSalesAttributesSupplementarySkuImages_1.Product202309GetProductResponseDataSkusCombinedSkusSalesAttributesSupplementarySkuImages,
    "Product202309GetProductResponseDataSkusExternalListPrices": GetProductResponseDataSkusExternalListPrices_1.Product202309GetProductResponseDataSkusExternalListPrices,
    "Product202309GetProductResponseDataSkusFees": GetProductResponseDataSkusFees_1.Product202309GetProductResponseDataSkusFees,
    "Product202309GetProductResponseDataSkusGlobalListingPolicy": GetProductResponseDataSkusGlobalListingPolicy_1.Product202309GetProductResponseDataSkusGlobalListingPolicy,
    "Product202309GetProductResponseDataSkusGlobalListingPolicyReplicateSource": GetProductResponseDataSkusGlobalListingPolicyReplicateSource_1.Product202309GetProductResponseDataSkusGlobalListingPolicyReplicateSource,
    "Product202309GetProductResponseDataSkusIdentifierCode": GetProductResponseDataSkusIdentifierCode_1.Product202309GetProductResponseDataSkusIdentifierCode,
    "Product202309GetProductResponseDataSkusInventory": GetProductResponseDataSkusInventory_1.Product202309GetProductResponseDataSkusInventory,
    "Product202309GetProductResponseDataSkusListPrice": GetProductResponseDataSkusListPrice_1.Product202309GetProductResponseDataSkusListPrice,
    "Product202309GetProductResponseDataSkusPreSale": GetProductResponseDataSkusPreSale_1.Product202309GetProductResponseDataSkusPreSale,
    "Product202309GetProductResponseDataSkusPreSaleFulfillmentType": GetProductResponseDataSkusPreSaleFulfillmentType_1.Product202309GetProductResponseDataSkusPreSaleFulfillmentType,
    "Product202309GetProductResponseDataSkusPrice": GetProductResponseDataSkusPrice_1.Product202309GetProductResponseDataSkusPrice,
    "Product202309GetProductResponseDataSkusSalesAttributes": GetProductResponseDataSkusSalesAttributes_1.Product202309GetProductResponseDataSkusSalesAttributes,
    "Product202309GetProductResponseDataSkusSalesAttributesSkuImg": GetProductResponseDataSkusSalesAttributesSkuImg_1.Product202309GetProductResponseDataSkusSalesAttributesSkuImg,
    "Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages": GetProductResponseDataSkusSalesAttributesSupplementarySkuImages_1.Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages,
    "Product202309GetProductResponseDataSkusStatusInfo": GetProductResponseDataSkusStatusInfo_1.Product202309GetProductResponseDataSkusStatusInfo,
    "Product202309GetProductResponseDataSubscribeInfo": GetProductResponseDataSubscribeInfo_1.Product202309GetProductResponseDataSubscribeInfo,
    "Product202309GetProductResponseDataSubscribeInfoSubscribeDiscountDetails": GetProductResponseDataSubscribeInfoSubscribeDiscountDetails_1.Product202309GetProductResponseDataSubscribeInfoSubscribeDiscountDetails,
    "Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig": GetProductResponseDataSubscribeInfoSubscribePromotionConfig_1.Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig,
    "Product202309GetProductResponseDataVideo": GetProductResponseDataVideo_1.Product202309GetProductResponseDataVideo,
    "Product202309InventorySearchRequestBody": InventorySearchRequestBody_1.Product202309InventorySearchRequestBody,
    "Product202309InventorySearchResponse": InventorySearchResponse_1.Product202309InventorySearchResponse,
    "Product202309InventorySearchResponseData": InventorySearchResponseData_1.Product202309InventorySearchResponseData,
    "Product202309InventorySearchResponseDataInventory": InventorySearchResponseDataInventory_1.Product202309InventorySearchResponseDataInventory,
    "Product202309InventorySearchResponseDataInventorySkus": InventorySearchResponseDataInventorySkus_1.Product202309InventorySearchResponseDataInventorySkus,
    "Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution": InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution_1.Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution,
    "Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory": InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory_1.Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory,
    "Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory": InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory_1.Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory,
    "Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory": InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory_1.Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory,
    "Product202309InventorySearchResponseDataInventorySkusWarehouseInventory": InventorySearchResponseDataInventorySkusWarehouseInventory_1.Product202309InventorySearchResponseDataInventorySkusWarehouseInventory,
    "Product202309PartialEditProductRequestBody": PartialEditProductRequestBody_1.Product202309PartialEditProductRequestBody,
    "Product202309PartialEditProductRequestBodyCertifications": PartialEditProductRequestBodyCertifications_1.Product202309PartialEditProductRequestBodyCertifications,
    "Product202309PartialEditProductRequestBodyCertificationsFiles": PartialEditProductRequestBodyCertificationsFiles_1.Product202309PartialEditProductRequestBodyCertificationsFiles,
    "Product202309PartialEditProductRequestBodyCertificationsImages": PartialEditProductRequestBodyCertificationsImages_1.Product202309PartialEditProductRequestBodyCertificationsImages,
    "Product202309PartialEditProductRequestBodyMainImages": PartialEditProductRequestBodyMainImages_1.Product202309PartialEditProductRequestBodyMainImages,
    "Product202309PartialEditProductRequestBodyPackageDimensions": PartialEditProductRequestBodyPackageDimensions_1.Product202309PartialEditProductRequestBodyPackageDimensions,
    "Product202309PartialEditProductRequestBodyPackageWeight": PartialEditProductRequestBodyPackageWeight_1.Product202309PartialEditProductRequestBodyPackageWeight,
    "Product202309PartialEditProductRequestBodyProductAttributes": PartialEditProductRequestBodyProductAttributes_1.Product202309PartialEditProductRequestBodyProductAttributes,
    "Product202309PartialEditProductRequestBodyProductAttributesValues": PartialEditProductRequestBodyProductAttributesValues_1.Product202309PartialEditProductRequestBodyProductAttributesValues,
    "Product202309PartialEditProductRequestBodyReplicatedProducts": PartialEditProductRequestBodyReplicatedProducts_1.Product202309PartialEditProductRequestBodyReplicatedProducts,
    "Product202309PartialEditProductRequestBodyReplicatedProductsSkus": PartialEditProductRequestBodyReplicatedProductsSkus_1.Product202309PartialEditProductRequestBodyReplicatedProductsSkus,
    "Product202309PartialEditProductRequestBodyReplicatedProductsSkusInventory": PartialEditProductRequestBodyReplicatedProductsSkusInventory_1.Product202309PartialEditProductRequestBodyReplicatedProductsSkusInventory,
    "Product202309PartialEditProductRequestBodyReplicatedProductsSkusPrice": PartialEditProductRequestBodyReplicatedProductsSkusPrice_1.Product202309PartialEditProductRequestBodyReplicatedProductsSkusPrice,
    "Product202309PartialEditProductRequestBodySizeChart": PartialEditProductRequestBodySizeChart_1.Product202309PartialEditProductRequestBodySizeChart,
    "Product202309PartialEditProductRequestBodySizeChartImage": PartialEditProductRequestBodySizeChartImage_1.Product202309PartialEditProductRequestBodySizeChartImage,
    "Product202309PartialEditProductRequestBodySizeChartTemplate": PartialEditProductRequestBodySizeChartTemplate_1.Product202309PartialEditProductRequestBodySizeChartTemplate,
    "Product202309PartialEditProductRequestBodySkus": PartialEditProductRequestBodySkus_1.Product202309PartialEditProductRequestBodySkus,
    "Product202309PartialEditProductRequestBodySkusExternalListPrices": PartialEditProductRequestBodySkusExternalListPrices_1.Product202309PartialEditProductRequestBodySkusExternalListPrices,
    "Product202309PartialEditProductRequestBodySkusFees": PartialEditProductRequestBodySkusFees_1.Product202309PartialEditProductRequestBodySkusFees,
    "Product202309PartialEditProductRequestBodySkusIdentifierCode": PartialEditProductRequestBodySkusIdentifierCode_1.Product202309PartialEditProductRequestBodySkusIdentifierCode,
    "Product202309PartialEditProductRequestBodySkusInventory": PartialEditProductRequestBodySkusInventory_1.Product202309PartialEditProductRequestBodySkusInventory,
    "Product202309PartialEditProductRequestBodySkusListPrice": PartialEditProductRequestBodySkusListPrice_1.Product202309PartialEditProductRequestBodySkusListPrice,
    "Product202309PartialEditProductRequestBodySkusPreSale": PartialEditProductRequestBodySkusPreSale_1.Product202309PartialEditProductRequestBodySkusPreSale,
    "Product202309PartialEditProductRequestBodySkusPreSaleFulfillmentType": PartialEditProductRequestBodySkusPreSaleFulfillmentType_1.Product202309PartialEditProductRequestBodySkusPreSaleFulfillmentType,
    "Product202309PartialEditProductRequestBodySkusPrice": PartialEditProductRequestBodySkusPrice_1.Product202309PartialEditProductRequestBodySkusPrice,
    "Product202309PartialEditProductRequestBodySkusSalesAttributes": PartialEditProductRequestBodySkusSalesAttributes_1.Product202309PartialEditProductRequestBodySkusSalesAttributes,
    "Product202309PartialEditProductRequestBodySkusSalesAttributesSkuImg": PartialEditProductRequestBodySkusSalesAttributesSkuImg_1.Product202309PartialEditProductRequestBodySkusSalesAttributesSkuImg,
    "Product202309PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages": PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages_1.Product202309PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages,
    "Product202309PartialEditProductRequestBodySubscribeInfoEdit": PartialEditProductRequestBodySubscribeInfoEdit_1.Product202309PartialEditProductRequestBodySubscribeInfoEdit,
    "Product202309PartialEditProductRequestBodySubscribeInfoEditDiscountDetails": PartialEditProductRequestBodySubscribeInfoEditDiscountDetails_1.Product202309PartialEditProductRequestBodySubscribeInfoEditDiscountDetails,
    "Product202309PartialEditProductRequestBodyVideo": PartialEditProductRequestBodyVideo_1.Product202309PartialEditProductRequestBodyVideo,
    "Product202309PartialEditProductResponse": PartialEditProductResponse_1.Product202309PartialEditProductResponse,
    "Product202309PartialEditProductResponseData": PartialEditProductResponseData_1.Product202309PartialEditProductResponseData,
    "Product202309PartialEditProductResponseDataAudit": PartialEditProductResponseDataAudit_1.Product202309PartialEditProductResponseDataAudit,
    "Product202309PartialEditProductResponseDataReplicatedProducts": PartialEditProductResponseDataReplicatedProducts_1.Product202309PartialEditProductResponseDataReplicatedProducts,
    "Product202309PartialEditProductResponseDataReplicatedProductsSkus": PartialEditProductResponseDataReplicatedProductsSkus_1.Product202309PartialEditProductResponseDataReplicatedProductsSkus,
    "Product202309PartialEditProductResponseDataSkus": PartialEditProductResponseDataSkus_1.Product202309PartialEditProductResponseDataSkus,
    "Product202309PartialEditProductResponseDataSkusFees": PartialEditProductResponseDataSkusFees_1.Product202309PartialEditProductResponseDataSkusFees,
    "Product202309PartialEditProductResponseDataSkusSalesAttributes": PartialEditProductResponseDataSkusSalesAttributes_1.Product202309PartialEditProductResponseDataSkusSalesAttributes,
    "Product202309PublishGlobalProductRequestBody": PublishGlobalProductRequestBody_1.Product202309PublishGlobalProductRequestBody,
    "Product202309PublishGlobalProductRequestBodyPublishTarget": PublishGlobalProductRequestBodyPublishTarget_1.Product202309PublishGlobalProductRequestBodyPublishTarget,
    "Product202309PublishGlobalProductRequestBodyPublishTargetSkus": PublishGlobalProductRequestBodyPublishTargetSkus_1.Product202309PublishGlobalProductRequestBodyPublishTargetSkus,
    "Product202309PublishGlobalProductRequestBodyPublishTargetSkusFees": PublishGlobalProductRequestBodyPublishTargetSkusFees_1.Product202309PublishGlobalProductRequestBodyPublishTargetSkusFees,
    "Product202309PublishGlobalProductRequestBodyPublishTargetSkusInventory": PublishGlobalProductRequestBodyPublishTargetSkusInventory_1.Product202309PublishGlobalProductRequestBodyPublishTargetSkusInventory,
    "Product202309PublishGlobalProductRequestBodyPublishTargetSkusPrice": PublishGlobalProductRequestBodyPublishTargetSkusPrice_1.Product202309PublishGlobalProductRequestBodyPublishTargetSkusPrice,
    "Product202309PublishGlobalProductResponse": PublishGlobalProductResponse_1.Product202309PublishGlobalProductResponse,
    "Product202309PublishGlobalProductResponseData": PublishGlobalProductResponseData_1.Product202309PublishGlobalProductResponseData,
    "Product202309PublishGlobalProductResponseDataProducts": PublishGlobalProductResponseDataProducts_1.Product202309PublishGlobalProductResponseDataProducts,
    "Product202309PublishGlobalProductResponseDataProductsSkus": PublishGlobalProductResponseDataProductsSkus_1.Product202309PublishGlobalProductResponseDataProductsSkus,
    "Product202309PublishGlobalProductResponseDataProductsSkusSaleAttributes": PublishGlobalProductResponseDataProductsSkusSaleAttributes_1.Product202309PublishGlobalProductResponseDataProductsSkusSaleAttributes,
    "Product202309PublishGlobalProductResponseDataPublishResult": PublishGlobalProductResponseDataPublishResult_1.Product202309PublishGlobalProductResponseDataPublishResult,
    "Product202309PublishGlobalProductResponseDataPublishResultFailReasons": PublishGlobalProductResponseDataPublishResultFailReasons_1.Product202309PublishGlobalProductResponseDataPublishResultFailReasons,
    "Product202309RecommendCategoryRequestBody": RecommendCategoryRequestBody_1.Product202309RecommendCategoryRequestBody,
    "Product202309RecommendCategoryRequestBodyImages": RecommendCategoryRequestBodyImages_1.Product202309RecommendCategoryRequestBodyImages,
    "Product202309RecommendCategoryResponse": RecommendCategoryResponse_1.Product202309RecommendCategoryResponse,
    "Product202309RecommendCategoryResponseData": RecommendCategoryResponseData_1.Product202309RecommendCategoryResponseData,
    "Product202309RecommendCategoryResponseDataCategories": RecommendCategoryResponseDataCategories_1.Product202309RecommendCategoryResponseDataCategories,
    "Product202309RecommendGlobalCategoriesRequestBody": RecommendGlobalCategoriesRequestBody_1.Product202309RecommendGlobalCategoriesRequestBody,
    "Product202309RecommendGlobalCategoriesRequestBodyImages": RecommendGlobalCategoriesRequestBodyImages_1.Product202309RecommendGlobalCategoriesRequestBodyImages,
    "Product202309RecommendGlobalCategoriesResponse": RecommendGlobalCategoriesResponse_1.Product202309RecommendGlobalCategoriesResponse,
    "Product202309RecommendGlobalCategoriesResponseData": RecommendGlobalCategoriesResponseData_1.Product202309RecommendGlobalCategoriesResponseData,
    "Product202309RecommendGlobalCategoriesResponseDataCategories": RecommendGlobalCategoriesResponseDataCategories_1.Product202309RecommendGlobalCategoriesResponseDataCategories,
    "Product202309RecoverProductsRequestBody": RecoverProductsRequestBody_1.Product202309RecoverProductsRequestBody,
    "Product202309RecoverProductsResponse": RecoverProductsResponse_1.Product202309RecoverProductsResponse,
    "Product202309RecoverProductsResponseData": RecoverProductsResponseData_1.Product202309RecoverProductsResponseData,
    "Product202309RecoverProductsResponseDataErrors": RecoverProductsResponseDataErrors_1.Product202309RecoverProductsResponseDataErrors,
    "Product202309RecoverProductsResponseDataErrorsDetail": RecoverProductsResponseDataErrorsDetail_1.Product202309RecoverProductsResponseDataErrorsDetail,
    "Product202309SearchGlobalProductsRequestBody": SearchGlobalProductsRequestBody_1.Product202309SearchGlobalProductsRequestBody,
    "Product202309SearchGlobalProductsResponse": SearchGlobalProductsResponse_1.Product202309SearchGlobalProductsResponse,
    "Product202309SearchGlobalProductsResponseData": SearchGlobalProductsResponseData_1.Product202309SearchGlobalProductsResponseData,
    "Product202309SearchGlobalProductsResponseDataGlobalProducts": SearchGlobalProductsResponseDataGlobalProducts_1.Product202309SearchGlobalProductsResponseDataGlobalProducts,
    "Product202309SearchGlobalProductsResponseDataGlobalProductsSkus": SearchGlobalProductsResponseDataGlobalProductsSkus_1.Product202309SearchGlobalProductsResponseDataGlobalProductsSkus,
    "Product202309SearchProductsRequestBody": SearchProductsRequestBody_1.Product202309SearchProductsRequestBody,
    "Product202309SearchProductsResponse": SearchProductsResponse_1.Product202309SearchProductsResponse,
    "Product202309SearchProductsResponseData": SearchProductsResponseData_1.Product202309SearchProductsResponseData,
    "Product202309SearchProductsResponseDataProducts": SearchProductsResponseDataProducts_1.Product202309SearchProductsResponseDataProducts,
    "Product202309SearchProductsResponseDataProductsRecommendedCategories": SearchProductsResponseDataProductsRecommendedCategories_1.Product202309SearchProductsResponseDataProductsRecommendedCategories,
    "Product202309SearchProductsResponseDataProductsSkus": SearchProductsResponseDataProductsSkus_1.Product202309SearchProductsResponseDataProductsSkus,
    "Product202309SearchProductsResponseDataProductsSkusFees": SearchProductsResponseDataProductsSkusFees_1.Product202309SearchProductsResponseDataProductsSkusFees,
    "Product202309SearchProductsResponseDataProductsSkusInventory": SearchProductsResponseDataProductsSkusInventory_1.Product202309SearchProductsResponseDataProductsSkusInventory,
    "Product202309SearchProductsResponseDataProductsSkusPrice": SearchProductsResponseDataProductsSkusPrice_1.Product202309SearchProductsResponseDataProductsSkusPrice,
    "Product202309UpdateGlobalInventoryRequestBody": UpdateGlobalInventoryRequestBody_1.Product202309UpdateGlobalInventoryRequestBody,
    "Product202309UpdateGlobalInventoryRequestBodyGlobalSkus": UpdateGlobalInventoryRequestBodyGlobalSkus_1.Product202309UpdateGlobalInventoryRequestBodyGlobalSkus,
    "Product202309UpdateGlobalInventoryRequestBodyGlobalSkusInventory": UpdateGlobalInventoryRequestBodyGlobalSkusInventory_1.Product202309UpdateGlobalInventoryRequestBodyGlobalSkusInventory,
    "Product202309UpdateGlobalInventoryResponse": UpdateGlobalInventoryResponse_1.Product202309UpdateGlobalInventoryResponse,
    "Product202309UpdateInventoryRequestBody": UpdateInventoryRequestBody_1.Product202309UpdateInventoryRequestBody,
    "Product202309UpdateInventoryRequestBodySkus": UpdateInventoryRequestBodySkus_1.Product202309UpdateInventoryRequestBodySkus,
    "Product202309UpdateInventoryRequestBodySkusInventory": UpdateInventoryRequestBodySkusInventory_1.Product202309UpdateInventoryRequestBodySkusInventory,
    "Product202309UpdateInventoryResponse": UpdateInventoryResponse_1.Product202309UpdateInventoryResponse,
    "Product202309UpdateInventoryResponseData": UpdateInventoryResponseData_1.Product202309UpdateInventoryResponseData,
    "Product202309UpdateInventoryResponseDataErrors": UpdateInventoryResponseDataErrors_1.Product202309UpdateInventoryResponseDataErrors,
    "Product202309UpdateInventoryResponseDataErrorsDetail": UpdateInventoryResponseDataErrorsDetail_1.Product202309UpdateInventoryResponseDataErrorsDetail,
    "Product202309UpdateInventoryResponseDataErrorsDetailExtraErrors": UpdateInventoryResponseDataErrorsDetailExtraErrors_1.Product202309UpdateInventoryResponseDataErrorsDetailExtraErrors,
    "Product202309UpdatePriceRequestBody": UpdatePriceRequestBody_1.Product202309UpdatePriceRequestBody,
    "Product202309UpdatePriceRequestBodySkus": UpdatePriceRequestBodySkus_1.Product202309UpdatePriceRequestBodySkus,
    "Product202309UpdatePriceRequestBodySkusExternalListPrices": UpdatePriceRequestBodySkusExternalListPrices_1.Product202309UpdatePriceRequestBodySkusExternalListPrices,
    "Product202309UpdatePriceRequestBodySkusListPrice": UpdatePriceRequestBodySkusListPrice_1.Product202309UpdatePriceRequestBodySkusListPrice,
    "Product202309UpdatePriceRequestBodySkusPrice": UpdatePriceRequestBodySkusPrice_1.Product202309UpdatePriceRequestBodySkusPrice,
    "Product202309UpdatePriceResponse": UpdatePriceResponse_1.Product202309UpdatePriceResponse,
    "Product202309UploadProductFileResponse": UploadProductFileResponse_1.Product202309UploadProductFileResponse,
    "Product202309UploadProductFileResponseData": UploadProductFileResponseData_1.Product202309UploadProductFileResponseData,
    "Product202309UploadProductImageResponse": UploadProductImageResponse_1.Product202309UploadProductImageResponse,
    "Product202309UploadProductImageResponseData": UploadProductImageResponseData_1.Product202309UploadProductImageResponseData,
    "Product202312CheckListingPrerequisitesResponse": CheckListingPrerequisitesResponse_2.Product202312CheckListingPrerequisitesResponse,
    "Product202312CheckListingPrerequisitesResponseData": CheckListingPrerequisitesResponseData_2.Product202312CheckListingPrerequisitesResponseData,
    "Product202312CheckListingPrerequisitesResponseDataCheckResults": CheckListingPrerequisitesResponseDataCheckResults_1.Product202312CheckListingPrerequisitesResponseDataCheckResults,
    "Product202312SearchGlobalProductsRequestBody": SearchGlobalProductsRequestBody_2.Product202312SearchGlobalProductsRequestBody,
    "Product202312SearchGlobalProductsResponse": SearchGlobalProductsResponse_2.Product202312SearchGlobalProductsResponse,
    "Product202312SearchGlobalProductsResponseData": SearchGlobalProductsResponseData_2.Product202312SearchGlobalProductsResponseData,
    "Product202312SearchGlobalProductsResponseDataGlobalProducts": SearchGlobalProductsResponseDataGlobalProducts_2.Product202312SearchGlobalProductsResponseDataGlobalProducts,
    "Product202312SearchGlobalProductsResponseDataGlobalProductsSkus": SearchGlobalProductsResponseDataGlobalProductsSkus_2.Product202312SearchGlobalProductsResponseDataGlobalProductsSkus,
    "Product202312SearchProductsRequestBody": SearchProductsRequestBody_2.Product202312SearchProductsRequestBody,
    "Product202312SearchProductsResponse": SearchProductsResponse_2.Product202312SearchProductsResponse,
    "Product202312SearchProductsResponseData": SearchProductsResponseData_2.Product202312SearchProductsResponseData,
    "Product202312SearchProductsResponseDataProducts": SearchProductsResponseDataProducts_2.Product202312SearchProductsResponseDataProducts,
    "Product202312SearchProductsResponseDataProductsAudit": SearchProductsResponseDataProductsAudit_1.Product202312SearchProductsResponseDataProductsAudit,
    "Product202312SearchProductsResponseDataProductsIntegratedPlatformStatuses": SearchProductsResponseDataProductsIntegratedPlatformStatuses_1.Product202312SearchProductsResponseDataProductsIntegratedPlatformStatuses,
    "Product202312SearchProductsResponseDataProductsRecommendedCategories": SearchProductsResponseDataProductsRecommendedCategories_2.Product202312SearchProductsResponseDataProductsRecommendedCategories,
    "Product202312SearchProductsResponseDataProductsSkus": SearchProductsResponseDataProductsSkus_2.Product202312SearchProductsResponseDataProductsSkus,
    "Product202312SearchProductsResponseDataProductsSkusExternalListPrices": SearchProductsResponseDataProductsSkusExternalListPrices_1.Product202312SearchProductsResponseDataProductsSkusExternalListPrices,
    "Product202312SearchProductsResponseDataProductsSkusFees": SearchProductsResponseDataProductsSkusFees_2.Product202312SearchProductsResponseDataProductsSkusFees,
    "Product202312SearchProductsResponseDataProductsSkusInventory": SearchProductsResponseDataProductsSkusInventory_2.Product202312SearchProductsResponseDataProductsSkusInventory,
    "Product202312SearchProductsResponseDataProductsSkusListPrice": SearchProductsResponseDataProductsSkusListPrice_1.Product202312SearchProductsResponseDataProductsSkusListPrice,
    "Product202312SearchProductsResponseDataProductsSkusPrice": SearchProductsResponseDataProductsSkusPrice_2.Product202312SearchProductsResponseDataProductsSkusPrice,
    "Product202401ListingSchemasResponse": ListingSchemasResponse_1.Product202401ListingSchemasResponse,
    "Product202401ListingSchemasResponseData": ListingSchemasResponseData_1.Product202401ListingSchemasResponseData,
    "Product202401ListingSchemasResponseDataErrors": ListingSchemasResponseDataErrors_1.Product202401ListingSchemasResponseDataErrors,
    "Product202401ListingSchemasResponseDataErrorsDetail": ListingSchemasResponseDataErrorsDetail_1.Product202401ListingSchemasResponseDataErrorsDetail,
    "Product202401ListingSchemasResponseDataListingSchemas": ListingSchemasResponseDataListingSchemas_1.Product202401ListingSchemasResponseDataListingSchemas,
    "Product202401ListingSchemasResponseDataListingSchemasFileds": ListingSchemasResponseDataListingSchemasFileds_1.Product202401ListingSchemasResponseDataListingSchemasFileds,
    "Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues": ListingSchemasResponseDataListingSchemasFiledsComplexValues_1.Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues,
    "Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions": ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions_1.Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions,
    "Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules": ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules_1.Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules,
    "Product202401ListingSchemasResponseDataListingSchemasFiledsOptions": ListingSchemasResponseDataListingSchemasFiledsOptions_1.Product202401ListingSchemasResponseDataListingSchemasFiledsOptions,
    "Product202401ListingSchemasResponseDataListingSchemasFiledsRules": ListingSchemasResponseDataListingSchemasFiledsRules_1.Product202401ListingSchemasResponseDataListingSchemasFiledsRules,
    "Product202404OptimizedImagesRequestBody": OptimizedImagesRequestBody_1.Product202404OptimizedImagesRequestBody,
    "Product202404OptimizedImagesRequestBodyImages": OptimizedImagesRequestBodyImages_1.Product202404OptimizedImagesRequestBodyImages,
    "Product202404OptimizedImagesResponse": OptimizedImagesResponse_1.Product202404OptimizedImagesResponse,
    "Product202404OptimizedImagesResponseData": OptimizedImagesResponseData_1.Product202404OptimizedImagesResponseData,
    "Product202404OptimizedImagesResponseDataImages": OptimizedImagesResponseDataImages_1.Product202404OptimizedImagesResponseDataImages,
    "Product202405GetProductsSEOWordsResponse": GetProductsSEOWordsResponse_1.Product202405GetProductsSEOWordsResponse,
    "Product202405GetProductsSEOWordsResponseData": GetProductsSEOWordsResponseData_1.Product202405GetProductsSEOWordsResponseData,
    "Product202405GetProductsSEOWordsResponseDataProducts": GetProductsSEOWordsResponseDataProducts_1.Product202405GetProductsSEOWordsResponseDataProducts,
    "Product202405GetProductsSEOWordsResponseDataProductsSeoWords": GetProductsSEOWordsResponseDataProductsSeoWords_1.Product202405GetProductsSEOWordsResponseDataProductsSeoWords,
    "Product202405GetRecommendedProductTitleAndDescriptionResponse": GetRecommendedProductTitleAndDescriptionResponse_1.Product202405GetRecommendedProductTitleAndDescriptionResponse,
    "Product202405GetRecommendedProductTitleAndDescriptionResponseData": GetRecommendedProductTitleAndDescriptionResponseData_1.Product202405GetRecommendedProductTitleAndDescriptionResponseData,
    "Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts": GetRecommendedProductTitleAndDescriptionResponseDataProducts_1.Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts,
    "Product202405GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions": GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions_1.Product202405GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions,
    "Product202405GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems": GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems_1.Product202405GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems,
    "Product202405ProductInformationIssueDiagnosisResponse": ProductInformationIssueDiagnosisResponse_1.Product202405ProductInformationIssueDiagnosisResponse,
    "Product202405ProductInformationIssueDiagnosisResponseData": ProductInformationIssueDiagnosisResponseData_1.Product202405ProductInformationIssueDiagnosisResponseData,
    "Product202405ProductInformationIssueDiagnosisResponseDataProducts": ProductInformationIssueDiagnosisResponseDataProducts_1.Product202405ProductInformationIssueDiagnosisResponseDataProducts,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses": ProductInformationIssueDiagnosisResponseDataProductsDiagnoses_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults": ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion": ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages": ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords": ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts": ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsListingQuality": ProductInformationIssueDiagnosisResponseDataProductsListingQuality_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsListingQuality,
    "Product202407CreateCategoryUpgradeTaskResponse": CreateCategoryUpgradeTaskResponse_1.Product202407CreateCategoryUpgradeTaskResponse,
    "Product202407ListingSchemasResponse": ListingSchemasResponse_2.Product202407ListingSchemasResponse,
    "Product202407ListingSchemasResponseData": ListingSchemasResponseData_2.Product202407ListingSchemasResponseData,
    "Product202407ListingSchemasResponseDataErrors": ListingSchemasResponseDataErrors_2.Product202407ListingSchemasResponseDataErrors,
    "Product202407ListingSchemasResponseDataErrorsDetail": ListingSchemasResponseDataErrorsDetail_2.Product202407ListingSchemasResponseDataErrorsDetail,
    "Product202407ListingSchemasResponseDataListingSchemas": ListingSchemasResponseDataListingSchemas_2.Product202407ListingSchemasResponseDataListingSchemas,
    "Product202407ListingSchemasResponseDataListingSchemasFields": ListingSchemasResponseDataListingSchemasFields_1.Product202407ListingSchemasResponseDataListingSchemasFields,
    "Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValues": ListingSchemasResponseDataListingSchemasFieldsComplexValues_1.Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValues,
    "Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions": ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions_1.Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions,
    "Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules": ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules_1.Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules,
    "Product202407ListingSchemasResponseDataListingSchemasFieldsOptions": ListingSchemasResponseDataListingSchemasFieldsOptions_1.Product202407ListingSchemasResponseDataListingSchemasFieldsOptions,
    "Product202407ListingSchemasResponseDataListingSchemasFieldsRules": ListingSchemasResponseDataListingSchemasFieldsRules_1.Product202407ListingSchemasResponseDataListingSchemasFieldsRules,
    "Product202407SearchSizeChartsRequestBody": SearchSizeChartsRequestBody_1.Product202407SearchSizeChartsRequestBody,
    "Product202407SearchSizeChartsResponse": SearchSizeChartsResponse_1.Product202407SearchSizeChartsResponse,
    "Product202407SearchSizeChartsResponseData": SearchSizeChartsResponseData_1.Product202407SearchSizeChartsResponseData,
    "Product202407SearchSizeChartsResponseDataSizeChart": SearchSizeChartsResponseDataSizeChart_1.Product202407SearchSizeChartsResponseDataSizeChart,
    "Product202407SearchSizeChartsResponseDataSizeChartImages": SearchSizeChartsResponseDataSizeChartImages_1.Product202407SearchSizeChartsResponseDataSizeChartImages,
    "Product202409CreateManufacturerRequestBody": CreateManufacturerRequestBody_1.Product202409CreateManufacturerRequestBody,
    "Product202409CreateManufacturerRequestBodyPhoneNumber": CreateManufacturerRequestBodyPhoneNumber_1.Product202409CreateManufacturerRequestBodyPhoneNumber,
    "Product202409CreateManufacturerResponse": CreateManufacturerResponse_1.Product202409CreateManufacturerResponse,
    "Product202409CreateManufacturerResponseData": CreateManufacturerResponseData_1.Product202409CreateManufacturerResponseData,
    "Product202409CreateResponsiblePersonRequestBody": CreateResponsiblePersonRequestBody_1.Product202409CreateResponsiblePersonRequestBody,
    "Product202409CreateResponsiblePersonRequestBodyAddress": CreateResponsiblePersonRequestBodyAddress_1.Product202409CreateResponsiblePersonRequestBodyAddress,
    "Product202409CreateResponsiblePersonRequestBodyPhoneNumber": CreateResponsiblePersonRequestBodyPhoneNumber_1.Product202409CreateResponsiblePersonRequestBodyPhoneNumber,
    "Product202409CreateResponsiblePersonResponse": CreateResponsiblePersonResponse_1.Product202409CreateResponsiblePersonResponse,
    "Product202409CreateResponsiblePersonResponseData": CreateResponsiblePersonResponseData_1.Product202409CreateResponsiblePersonResponseData,
    "Product202409PartialEditManufacturerRequestBody": PartialEditManufacturerRequestBody_1.Product202409PartialEditManufacturerRequestBody,
    "Product202409PartialEditManufacturerRequestBodyPhoneNumber": PartialEditManufacturerRequestBodyPhoneNumber_1.Product202409PartialEditManufacturerRequestBodyPhoneNumber,
    "Product202409PartialEditManufacturerResponse": PartialEditManufacturerResponse_1.Product202409PartialEditManufacturerResponse,
    "Product202409PartialEditResponsiblePersonRequestBody": PartialEditResponsiblePersonRequestBody_1.Product202409PartialEditResponsiblePersonRequestBody,
    "Product202409PartialEditResponsiblePersonRequestBodyAddress": PartialEditResponsiblePersonRequestBodyAddress_1.Product202409PartialEditResponsiblePersonRequestBodyAddress,
    "Product202409PartialEditResponsiblePersonRequestBodyPhoneNumber": PartialEditResponsiblePersonRequestBodyPhoneNumber_1.Product202409PartialEditResponsiblePersonRequestBodyPhoneNumber,
    "Product202409PartialEditResponsiblePersonResponse": PartialEditResponsiblePersonResponse_1.Product202409PartialEditResponsiblePersonResponse,
    "Product202409SearchManufacturersRequestBody": SearchManufacturersRequestBody_1.Product202409SearchManufacturersRequestBody,
    "Product202409SearchManufacturersResponse": SearchManufacturersResponse_1.Product202409SearchManufacturersResponse,
    "Product202409SearchManufacturersResponseData": SearchManufacturersResponseData_1.Product202409SearchManufacturersResponseData,
    "Product202409SearchManufacturersResponseDataManufacturers": SearchManufacturersResponseDataManufacturers_1.Product202409SearchManufacturersResponseDataManufacturers,
    "Product202409SearchManufacturersResponseDataManufacturersPhoneNumber": SearchManufacturersResponseDataManufacturersPhoneNumber_1.Product202409SearchManufacturersResponseDataManufacturersPhoneNumber,
    "Product202409SearchResponsiblePersonsRequestBody": SearchResponsiblePersonsRequestBody_1.Product202409SearchResponsiblePersonsRequestBody,
    "Product202409SearchResponsiblePersonsResponse": SearchResponsiblePersonsResponse_1.Product202409SearchResponsiblePersonsResponse,
    "Product202409SearchResponsiblePersonsResponseData": SearchResponsiblePersonsResponseData_1.Product202409SearchResponsiblePersonsResponseData,
    "Product202409SearchResponsiblePersonsResponseDataResponsiblePersons": SearchResponsiblePersonsResponseDataResponsiblePersons_1.Product202409SearchResponsiblePersonsResponseDataResponsiblePersons,
    "Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsAddress": SearchResponsiblePersonsResponseDataResponsiblePersonsAddress_1.Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsAddress,
    "Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber": SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber_1.Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber,
    "Product202411DiagnoseandOptimizeProductRequestBody": DiagnoseandOptimizeProductRequestBody_1.Product202411DiagnoseandOptimizeProductRequestBody,
    "Product202411DiagnoseandOptimizeProductRequestBodyMainImages": DiagnoseandOptimizeProductRequestBodyMainImages_1.Product202411DiagnoseandOptimizeProductRequestBodyMainImages,
    "Product202411DiagnoseandOptimizeProductRequestBodyProductAttributes": DiagnoseandOptimizeProductRequestBodyProductAttributes_1.Product202411DiagnoseandOptimizeProductRequestBodyProductAttributes,
    "Product202411DiagnoseandOptimizeProductRequestBodyProductAttributesValues": DiagnoseandOptimizeProductRequestBodyProductAttributesValues_1.Product202411DiagnoseandOptimizeProductRequestBodyProductAttributesValues,
    "Product202411DiagnoseandOptimizeProductRequestBodySizeChart": DiagnoseandOptimizeProductRequestBodySizeChart_1.Product202411DiagnoseandOptimizeProductRequestBodySizeChart,
    "Product202411DiagnoseandOptimizeProductRequestBodySizeChartImage": DiagnoseandOptimizeProductRequestBodySizeChartImage_1.Product202411DiagnoseandOptimizeProductRequestBodySizeChartImage,
    "Product202411DiagnoseandOptimizeProductRequestBodySizeChartTemplate": DiagnoseandOptimizeProductRequestBodySizeChartTemplate_1.Product202411DiagnoseandOptimizeProductRequestBodySizeChartTemplate,
    "Product202411DiagnoseandOptimizeProductResponse": DiagnoseandOptimizeProductResponse_1.Product202411DiagnoseandOptimizeProductResponse,
    "Product202411DiagnoseandOptimizeProductResponseData": DiagnoseandOptimizeProductResponseData_1.Product202411DiagnoseandOptimizeProductResponseData,
    "Product202411DiagnoseandOptimizeProductResponseDataDiagnoses": DiagnoseandOptimizeProductResponseDataDiagnoses_1.Product202411DiagnoseandOptimizeProductResponseDataDiagnoses,
    "Product202411DiagnoseandOptimizeProductResponseDataDiagnosesDiagnosisResults": DiagnoseandOptimizeProductResponseDataDiagnosesDiagnosisResults_1.Product202411DiagnoseandOptimizeProductResponseDataDiagnosesDiagnosisResults,
    "Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestion": DiagnoseandOptimizeProductResponseDataDiagnosesSuggestion_1.Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestion,
    "Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionImages": DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionImages_1.Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionImages,
    "Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSeoWords": DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSeoWords_1.Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSeoWords,
    "Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSmartTexts": DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSmartTexts_1.Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestionSmartTexts,
    "Product202411DiagnoseandOptimizeProductResponseDataListingQuality": DiagnoseandOptimizeProductResponseDataListingQuality_1.Product202411DiagnoseandOptimizeProductResponseDataListingQuality,
    "Product202501SearchManufacturersRequestBody": SearchManufacturersRequestBody_2.Product202501SearchManufacturersRequestBody,
    "Product202501SearchManufacturersResponse": SearchManufacturersResponse_2.Product202501SearchManufacturersResponse,
    "Product202501SearchManufacturersResponseData": SearchManufacturersResponseData_2.Product202501SearchManufacturersResponseData,
    "Product202501SearchManufacturersResponseDataManufacturers": SearchManufacturersResponseDataManufacturers_2.Product202501SearchManufacturersResponseDataManufacturers,
    "Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles": SearchManufacturersResponseDataManufacturersRegionalProfiles_1.Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles,
    "Product202501SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber": SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber_1.Product202501SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber,
    "Product202501SearchResponsiblePersonsRequestBody": SearchResponsiblePersonsRequestBody_2.Product202501SearchResponsiblePersonsRequestBody,
    "Product202501SearchResponsiblePersonsResponse": SearchResponsiblePersonsResponse_2.Product202501SearchResponsiblePersonsResponse,
    "Product202501SearchResponsiblePersonsResponseData": SearchResponsiblePersonsResponseData_2.Product202501SearchResponsiblePersonsResponseData,
    "Product202501SearchResponsiblePersonsResponseDataResponsiblePersons": SearchResponsiblePersonsResponseDataResponsiblePersons_2.Product202501SearchResponsiblePersonsResponseDataResponsiblePersons,
    "Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles": SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles_1.Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles,
    "Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress": SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress_1.Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress,
    "Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber": SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber_1.Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber,
    "Product202502SearchProductsRequestBody": SearchProductsRequestBody_3.Product202502SearchProductsRequestBody,
    "Product202502SearchProductsResponse": SearchProductsResponse_3.Product202502SearchProductsResponse,
    "Product202502SearchProductsResponseData": SearchProductsResponseData_3.Product202502SearchProductsResponseData,
    "Product202502SearchProductsResponseDataProducts": SearchProductsResponseDataProducts_3.Product202502SearchProductsResponseDataProducts,
    "Product202502SearchProductsResponseDataProductsAudit": SearchProductsResponseDataProductsAudit_2.Product202502SearchProductsResponseDataProductsAudit,
    "Product202502SearchProductsResponseDataProductsIntegratedPlatformStatuses": SearchProductsResponseDataProductsIntegratedPlatformStatuses_2.Product202502SearchProductsResponseDataProductsIntegratedPlatformStatuses,
    "Product202502SearchProductsResponseDataProductsProductFamilies": SearchProductsResponseDataProductsProductFamilies_1.Product202502SearchProductsResponseDataProductsProductFamilies,
    "Product202502SearchProductsResponseDataProductsProductFamiliesProducts": SearchProductsResponseDataProductsProductFamiliesProducts_1.Product202502SearchProductsResponseDataProductsProductFamiliesProducts,
    "Product202502SearchProductsResponseDataProductsRecommendedCategories": SearchProductsResponseDataProductsRecommendedCategories_3.Product202502SearchProductsResponseDataProductsRecommendedCategories,
    "Product202502SearchProductsResponseDataProductsSkus": SearchProductsResponseDataProductsSkus_3.Product202502SearchProductsResponseDataProductsSkus,
    "Product202502SearchProductsResponseDataProductsSkusExternalListPrices": SearchProductsResponseDataProductsSkusExternalListPrices_2.Product202502SearchProductsResponseDataProductsSkusExternalListPrices,
    "Product202502SearchProductsResponseDataProductsSkusFees": SearchProductsResponseDataProductsSkusFees_3.Product202502SearchProductsResponseDataProductsSkusFees,
    "Product202502SearchProductsResponseDataProductsSkusInventory": SearchProductsResponseDataProductsSkusInventory_3.Product202502SearchProductsResponseDataProductsSkusInventory,
    "Product202502SearchProductsResponseDataProductsSkusListPrice": SearchProductsResponseDataProductsSkusListPrice_2.Product202502SearchProductsResponseDataProductsSkusListPrice,
    "Product202502SearchProductsResponseDataProductsSkusPreSale": SearchProductsResponseDataProductsSkusPreSale_1.Product202502SearchProductsResponseDataProductsSkusPreSale,
    "Product202502SearchProductsResponseDataProductsSkusPreSaleFulfillmentType": SearchProductsResponseDataProductsSkusPreSaleFulfillmentType_1.Product202502SearchProductsResponseDataProductsSkusPreSaleFulfillmentType,
    "Product202502SearchProductsResponseDataProductsSkusPrice": SearchProductsResponseDataProductsSkusPrice_3.Product202502SearchProductsResponseDataProductsSkusPrice,
    "Product202502SearchProductsResponseDataProductsSkusStatusInfo": SearchProductsResponseDataProductsSkusStatusInfo_1.Product202502SearchProductsResponseDataProductsSkusStatusInfo,
    "Product202505CreateImageTranslationTasksRequestBody": CreateImageTranslationTasksRequestBody_1.Product202505CreateImageTranslationTasksRequestBody,
    "Product202505CreateImageTranslationTasksRequestBodyImages": CreateImageTranslationTasksRequestBodyImages_1.Product202505CreateImageTranslationTasksRequestBodyImages,
    "Product202505CreateImageTranslationTasksResponse": CreateImageTranslationTasksResponse_1.Product202505CreateImageTranslationTasksResponse,
    "Product202505CreateImageTranslationTasksResponseData": CreateImageTranslationTasksResponseData_1.Product202505CreateImageTranslationTasksResponseData,
    "Product202505CreateImageTranslationTasksResponseDataTranslationTasks": CreateImageTranslationTasksResponseDataTranslationTasks_1.Product202505CreateImageTranslationTasksResponseDataTranslationTasks,
    "Product202506GetImageTranslationTasksResponse": GetImageTranslationTasksResponse_1.Product202506GetImageTranslationTasksResponse,
    "Product202506GetImageTranslationTasksResponseData": GetImageTranslationTasksResponseData_1.Product202506GetImageTranslationTasksResponseData,
    "Product202506GetImageTranslationTasksResponseDataTranslationTasks": GetImageTranslationTasksResponseDataTranslationTasks_1.Product202506GetImageTranslationTasksResponseDataTranslationTasks,
    "Product202506GetImageTranslationTasksResponseDataTranslationTasksOriginalImage": GetImageTranslationTasksResponseDataTranslationTasksOriginalImage_1.Product202506GetImageTranslationTasksResponseDataTranslationTasksOriginalImage,
    "Product202506GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage": GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage_1.Product202506GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage,
    "Product202507GetGlobalListingRulesResponse": GetGlobalListingRulesResponse_1.Product202507GetGlobalListingRulesResponse,
    "Product202507GetGlobalListingRulesResponseData": GetGlobalListingRulesResponseData_1.Product202507GetGlobalListingRulesResponseData,
    "Product202507GetGlobalListingRulesResponseDataInventoryRules": GetGlobalListingRulesResponseDataInventoryRules_1.Product202507GetGlobalListingRulesResponseDataInventoryRules,
    "Product202507GetGlobalListingRulesResponseDataInventoryRulesAssociatedWarehouses": GetGlobalListingRulesResponseDataInventoryRulesAssociatedWarehouses_1.Product202507GetGlobalListingRulesResponseDataInventoryRulesAssociatedWarehouses,
    "Product202507GetGlobalReplicatedProductsResponse": GetGlobalReplicatedProductsResponse_1.Product202507GetGlobalReplicatedProductsResponse,
    "Product202507GetGlobalReplicatedProductsResponseData": GetGlobalReplicatedProductsResponseData_1.Product202507GetGlobalReplicatedProductsResponseData,
    "Product202507GetGlobalReplicatedProductsResponseDataReplicatedProducts": GetGlobalReplicatedProductsResponseDataReplicatedProducts_1.Product202507GetGlobalReplicatedProductsResponseDataReplicatedProducts,
    "Product202507ReplicateProductRequestBody": ReplicateProductRequestBody_1.Product202507ReplicateProductRequestBody,
    "Product202507ReplicateProductRequestBodyReplicateTarget": ReplicateProductRequestBodyReplicateTarget_1.Product202507ReplicateProductRequestBodyReplicateTarget,
    "Product202507ReplicateProductRequestBodyReplicateTargetSkus": ReplicateProductRequestBodyReplicateTargetSkus_1.Product202507ReplicateProductRequestBodyReplicateTargetSkus,
    "Product202507ReplicateProductRequestBodyReplicateTargetSkusInventory": ReplicateProductRequestBodyReplicateTargetSkusInventory_1.Product202507ReplicateProductRequestBodyReplicateTargetSkusInventory,
    "Product202507ReplicateProductRequestBodyReplicateTargetSkusPrice": ReplicateProductRequestBodyReplicateTargetSkusPrice_1.Product202507ReplicateProductRequestBodyReplicateTargetSkusPrice,
    "Product202507ReplicateProductResponse": ReplicateProductResponse_1.Product202507ReplicateProductResponse,
    "Product202507ReplicateProductResponseData": ReplicateProductResponseData_1.Product202507ReplicateProductResponseData,
    "Product202507ReplicateProductResponseDataErrors": ReplicateProductResponseDataErrors_1.Product202507ReplicateProductResponseDataErrors,
    "Product202507ReplicateProductResponseDataErrorsDetail": ReplicateProductResponseDataErrorsDetail_1.Product202507ReplicateProductResponseDataErrorsDetail,
    "Product202509EditProductRequestBody": EditProductRequestBody_2.Product202509EditProductRequestBody,
    "Product202509EditProductRequestBodyCertifications": EditProductRequestBodyCertifications_2.Product202509EditProductRequestBodyCertifications,
    "Product202509EditProductRequestBodyCertificationsFiles": EditProductRequestBodyCertificationsFiles_2.Product202509EditProductRequestBodyCertificationsFiles,
    "Product202509EditProductRequestBodyCertificationsImages": EditProductRequestBodyCertificationsImages_2.Product202509EditProductRequestBodyCertificationsImages,
    "Product202509EditProductRequestBodyMainImages": EditProductRequestBodyMainImages_2.Product202509EditProductRequestBodyMainImages,
    "Product202509EditProductRequestBodyPackageDimensions": EditProductRequestBodyPackageDimensions_2.Product202509EditProductRequestBodyPackageDimensions,
    "Product202509EditProductRequestBodyPackageWeight": EditProductRequestBodyPackageWeight_2.Product202509EditProductRequestBodyPackageWeight,
    "Product202509EditProductRequestBodyProductAttributes": EditProductRequestBodyProductAttributes_2.Product202509EditProductRequestBodyProductAttributes,
    "Product202509EditProductRequestBodyProductAttributesValues": EditProductRequestBodyProductAttributesValues_2.Product202509EditProductRequestBodyProductAttributesValues,
    "Product202509EditProductRequestBodyReplicatedProducts": EditProductRequestBodyReplicatedProducts_2.Product202509EditProductRequestBodyReplicatedProducts,
    "Product202509EditProductRequestBodyReplicatedProductsSkus": EditProductRequestBodyReplicatedProductsSkus_2.Product202509EditProductRequestBodyReplicatedProductsSkus,
    "Product202509EditProductRequestBodyReplicatedProductsSkusInventory": EditProductRequestBodyReplicatedProductsSkusInventory_2.Product202509EditProductRequestBodyReplicatedProductsSkusInventory,
    "Product202509EditProductRequestBodyReplicatedProductsSkusPrice": EditProductRequestBodyReplicatedProductsSkusPrice_2.Product202509EditProductRequestBodyReplicatedProductsSkusPrice,
    "Product202509EditProductRequestBodySizeChart": EditProductRequestBodySizeChart_2.Product202509EditProductRequestBodySizeChart,
    "Product202509EditProductRequestBodySizeChartImage": EditProductRequestBodySizeChartImage_2.Product202509EditProductRequestBodySizeChartImage,
    "Product202509EditProductRequestBodySizeChartTemplate": EditProductRequestBodySizeChartTemplate_2.Product202509EditProductRequestBodySizeChartTemplate,
    "Product202509EditProductRequestBodySkus": EditProductRequestBodySkus_2.Product202509EditProductRequestBodySkus,
    "Product202509EditProductRequestBodySkusCombinedSkus": EditProductRequestBodySkusCombinedSkus_2.Product202509EditProductRequestBodySkusCombinedSkus,
    "Product202509EditProductRequestBodySkusExternalListPrices": EditProductRequestBodySkusExternalListPrices_2.Product202509EditProductRequestBodySkusExternalListPrices,
    "Product202509EditProductRequestBodySkusFees": EditProductRequestBodySkusFees_2.Product202509EditProductRequestBodySkusFees,
    "Product202509EditProductRequestBodySkusIdentifierCode": EditProductRequestBodySkusIdentifierCode_2.Product202509EditProductRequestBodySkusIdentifierCode,
    "Product202509EditProductRequestBodySkusInventory": EditProductRequestBodySkusInventory_2.Product202509EditProductRequestBodySkusInventory,
    "Product202509EditProductRequestBodySkusListPrice": EditProductRequestBodySkusListPrice_2.Product202509EditProductRequestBodySkusListPrice,
    "Product202509EditProductRequestBodySkusPreSale": EditProductRequestBodySkusPreSale_2.Product202509EditProductRequestBodySkusPreSale,
    "Product202509EditProductRequestBodySkusPreSaleFulfillmentType": EditProductRequestBodySkusPreSaleFulfillmentType_2.Product202509EditProductRequestBodySkusPreSaleFulfillmentType,
    "Product202509EditProductRequestBodySkusPrice": EditProductRequestBodySkusPrice_2.Product202509EditProductRequestBodySkusPrice,
    "Product202509EditProductRequestBodySkusSalesAttributes": EditProductRequestBodySkusSalesAttributes_2.Product202509EditProductRequestBodySkusSalesAttributes,
    "Product202509EditProductRequestBodySkusSalesAttributesSkuImg": EditProductRequestBodySkusSalesAttributesSkuImg_2.Product202509EditProductRequestBodySkusSalesAttributesSkuImg,
    "Product202509EditProductRequestBodySkusSalesAttributesSupplementarySkuImages": EditProductRequestBodySkusSalesAttributesSupplementarySkuImages_2.Product202509EditProductRequestBodySkusSalesAttributesSupplementarySkuImages,
    "Product202509EditProductRequestBodySubscribeInfoEdit": EditProductRequestBodySubscribeInfoEdit_2.Product202509EditProductRequestBodySubscribeInfoEdit,
    "Product202509EditProductRequestBodySubscribeInfoEditDiscountDetails": EditProductRequestBodySubscribeInfoEditDiscountDetails_2.Product202509EditProductRequestBodySubscribeInfoEditDiscountDetails,
    "Product202509EditProductRequestBodyVideo": EditProductRequestBodyVideo_2.Product202509EditProductRequestBodyVideo,
    "Product202509EditProductResponse": EditProductResponse_2.Product202509EditProductResponse,
    "Product202509EditProductResponseData": EditProductResponseData_2.Product202509EditProductResponseData,
    "Product202509EditProductResponseDataAudit": EditProductResponseDataAudit_2.Product202509EditProductResponseDataAudit,
    "Product202509EditProductResponseDataSkus": EditProductResponseDataSkus_2.Product202509EditProductResponseDataSkus,
    "Product202509EditProductResponseDataSkusFees": EditProductResponseDataSkusFees_2.Product202509EditProductResponseDataSkusFees,
    "Product202509EditProductResponseDataSkusSalesAttributes": EditProductResponseDataSkusSalesAttributes_2.Product202509EditProductResponseDataSkusSalesAttributes,
    "Product202509EditProductResponseDataWarnings": EditProductResponseDataWarnings_2.Product202509EditProductResponseDataWarnings,
    "Product202509PartialEditGlobalProductRequestBody": PartialEditGlobalProductRequestBody_1.Product202509PartialEditGlobalProductRequestBody,
    "Product202509PartialEditGlobalProductRequestBodyCertifications": PartialEditGlobalProductRequestBodyCertifications_1.Product202509PartialEditGlobalProductRequestBodyCertifications,
    "Product202509PartialEditGlobalProductRequestBodyCertificationsFiles": PartialEditGlobalProductRequestBodyCertificationsFiles_1.Product202509PartialEditGlobalProductRequestBodyCertificationsFiles,
    "Product202509PartialEditGlobalProductRequestBodyCertificationsImages": PartialEditGlobalProductRequestBodyCertificationsImages_1.Product202509PartialEditGlobalProductRequestBodyCertificationsImages,
    "Product202509PartialEditGlobalProductRequestBodyMainImages": PartialEditGlobalProductRequestBodyMainImages_1.Product202509PartialEditGlobalProductRequestBodyMainImages,
    "Product202509PartialEditGlobalProductRequestBodyManufacturer": PartialEditGlobalProductRequestBodyManufacturer_1.Product202509PartialEditGlobalProductRequestBodyManufacturer,
    "Product202509PartialEditGlobalProductRequestBodyPackageDimensions": PartialEditGlobalProductRequestBodyPackageDimensions_1.Product202509PartialEditGlobalProductRequestBodyPackageDimensions,
    "Product202509PartialEditGlobalProductRequestBodyPackageWeight": PartialEditGlobalProductRequestBodyPackageWeight_1.Product202509PartialEditGlobalProductRequestBodyPackageWeight,
    "Product202509PartialEditGlobalProductRequestBodyProductAttributes": PartialEditGlobalProductRequestBodyProductAttributes_1.Product202509PartialEditGlobalProductRequestBodyProductAttributes,
    "Product202509PartialEditGlobalProductRequestBodyProductAttributesValues": PartialEditGlobalProductRequestBodyProductAttributesValues_1.Product202509PartialEditGlobalProductRequestBodyProductAttributesValues,
    "Product202509PartialEditGlobalProductRequestBodySizeChart": PartialEditGlobalProductRequestBodySizeChart_1.Product202509PartialEditGlobalProductRequestBodySizeChart,
    "Product202509PartialEditGlobalProductRequestBodySizeChartImage": PartialEditGlobalProductRequestBodySizeChartImage_1.Product202509PartialEditGlobalProductRequestBodySizeChartImage,
    "Product202509PartialEditGlobalProductRequestBodySizeChartTemplate": PartialEditGlobalProductRequestBodySizeChartTemplate_1.Product202509PartialEditGlobalProductRequestBodySizeChartTemplate,
    "Product202509PartialEditGlobalProductRequestBodySkus": PartialEditGlobalProductRequestBodySkus_1.Product202509PartialEditGlobalProductRequestBodySkus,
    "Product202509PartialEditGlobalProductRequestBodySkusIdentifierCode": PartialEditGlobalProductRequestBodySkusIdentifierCode_1.Product202509PartialEditGlobalProductRequestBodySkusIdentifierCode,
    "Product202509PartialEditGlobalProductRequestBodySkusInventory": PartialEditGlobalProductRequestBodySkusInventory_1.Product202509PartialEditGlobalProductRequestBodySkusInventory,
    "Product202509PartialEditGlobalProductRequestBodySkusPrice": PartialEditGlobalProductRequestBodySkusPrice_1.Product202509PartialEditGlobalProductRequestBodySkusPrice,
    "Product202509PartialEditGlobalProductRequestBodySkusSalePrices": PartialEditGlobalProductRequestBodySkusSalePrices_1.Product202509PartialEditGlobalProductRequestBodySkusSalePrices,
    "Product202509PartialEditGlobalProductRequestBodySkusSalesAttributes": PartialEditGlobalProductRequestBodySkusSalesAttributes_1.Product202509PartialEditGlobalProductRequestBodySkusSalesAttributes,
    "Product202509PartialEditGlobalProductRequestBodySkusSalesAttributesSkuImg": PartialEditGlobalProductRequestBodySkusSalesAttributesSkuImg_1.Product202509PartialEditGlobalProductRequestBodySkusSalesAttributesSkuImg,
    "Product202509PartialEditGlobalProductRequestBodyVideo": PartialEditGlobalProductRequestBodyVideo_1.Product202509PartialEditGlobalProductRequestBodyVideo,
    "Product202509PartialEditGlobalProductResponse": PartialEditGlobalProductResponse_1.Product202509PartialEditGlobalProductResponse,
    "Product202509PartialEditGlobalProductResponseData": PartialEditGlobalProductResponseData_1.Product202509PartialEditGlobalProductResponseData,
    "Product202509PartialEditGlobalProductResponseDataGlobalSkus": PartialEditGlobalProductResponseDataGlobalSkus_1.Product202509PartialEditGlobalProductResponseDataGlobalSkus,
    "Product202509PartialEditGlobalProductResponseDataGlobalSkusSalesAttributes": PartialEditGlobalProductResponseDataGlobalSkusSalesAttributes_1.Product202509PartialEditGlobalProductResponseDataGlobalSkusSalesAttributes,
    "Product202509PartialEditGlobalProductResponseDataPublishResults": PartialEditGlobalProductResponseDataPublishResults_1.Product202509PartialEditGlobalProductResponseDataPublishResults,
    "Product202509PartialEditGlobalProductResponseDataPublishResultsFailReasons": PartialEditGlobalProductResponseDataPublishResultsFailReasons_1.Product202509PartialEditGlobalProductResponseDataPublishResultsFailReasons,
    "Product202509PartialEditProductRequestBody": PartialEditProductRequestBody_2.Product202509PartialEditProductRequestBody,
    "Product202509PartialEditProductRequestBodyCertifications": PartialEditProductRequestBodyCertifications_2.Product202509PartialEditProductRequestBodyCertifications,
    "Product202509PartialEditProductRequestBodyCertificationsFiles": PartialEditProductRequestBodyCertificationsFiles_2.Product202509PartialEditProductRequestBodyCertificationsFiles,
    "Product202509PartialEditProductRequestBodyCertificationsImages": PartialEditProductRequestBodyCertificationsImages_2.Product202509PartialEditProductRequestBodyCertificationsImages,
    "Product202509PartialEditProductRequestBodyMainImages": PartialEditProductRequestBodyMainImages_2.Product202509PartialEditProductRequestBodyMainImages,
    "Product202509PartialEditProductRequestBodyPackageDimensions": PartialEditProductRequestBodyPackageDimensions_2.Product202509PartialEditProductRequestBodyPackageDimensions,
    "Product202509PartialEditProductRequestBodyPackageWeight": PartialEditProductRequestBodyPackageWeight_2.Product202509PartialEditProductRequestBodyPackageWeight,
    "Product202509PartialEditProductRequestBodyProductAttributes": PartialEditProductRequestBodyProductAttributes_2.Product202509PartialEditProductRequestBodyProductAttributes,
    "Product202509PartialEditProductRequestBodyProductAttributesValues": PartialEditProductRequestBodyProductAttributesValues_2.Product202509PartialEditProductRequestBodyProductAttributesValues,
    "Product202509PartialEditProductRequestBodyReplicatedProducts": PartialEditProductRequestBodyReplicatedProducts_2.Product202509PartialEditProductRequestBodyReplicatedProducts,
    "Product202509PartialEditProductRequestBodyReplicatedProductsSkus": PartialEditProductRequestBodyReplicatedProductsSkus_2.Product202509PartialEditProductRequestBodyReplicatedProductsSkus,
    "Product202509PartialEditProductRequestBodyReplicatedProductsSkusInventory": PartialEditProductRequestBodyReplicatedProductsSkusInventory_2.Product202509PartialEditProductRequestBodyReplicatedProductsSkusInventory,
    "Product202509PartialEditProductRequestBodyReplicatedProductsSkusPrice": PartialEditProductRequestBodyReplicatedProductsSkusPrice_2.Product202509PartialEditProductRequestBodyReplicatedProductsSkusPrice,
    "Product202509PartialEditProductRequestBodySizeChart": PartialEditProductRequestBodySizeChart_2.Product202509PartialEditProductRequestBodySizeChart,
    "Product202509PartialEditProductRequestBodySizeChartImage": PartialEditProductRequestBodySizeChartImage_2.Product202509PartialEditProductRequestBodySizeChartImage,
    "Product202509PartialEditProductRequestBodySizeChartTemplate": PartialEditProductRequestBodySizeChartTemplate_2.Product202509PartialEditProductRequestBodySizeChartTemplate,
    "Product202509PartialEditProductRequestBodySkus": PartialEditProductRequestBodySkus_2.Product202509PartialEditProductRequestBodySkus,
    "Product202509PartialEditProductRequestBodySkusExternalListPrices": PartialEditProductRequestBodySkusExternalListPrices_2.Product202509PartialEditProductRequestBodySkusExternalListPrices,
    "Product202509PartialEditProductRequestBodySkusFees": PartialEditProductRequestBodySkusFees_2.Product202509PartialEditProductRequestBodySkusFees,
    "Product202509PartialEditProductRequestBodySkusIdentifierCode": PartialEditProductRequestBodySkusIdentifierCode_2.Product202509PartialEditProductRequestBodySkusIdentifierCode,
    "Product202509PartialEditProductRequestBodySkusInventory": PartialEditProductRequestBodySkusInventory_2.Product202509PartialEditProductRequestBodySkusInventory,
    "Product202509PartialEditProductRequestBodySkusListPrice": PartialEditProductRequestBodySkusListPrice_2.Product202509PartialEditProductRequestBodySkusListPrice,
    "Product202509PartialEditProductRequestBodySkusPreSale": PartialEditProductRequestBodySkusPreSale_2.Product202509PartialEditProductRequestBodySkusPreSale,
    "Product202509PartialEditProductRequestBodySkusPreSaleFulfillmentType": PartialEditProductRequestBodySkusPreSaleFulfillmentType_2.Product202509PartialEditProductRequestBodySkusPreSaleFulfillmentType,
    "Product202509PartialEditProductRequestBodySkusPrice": PartialEditProductRequestBodySkusPrice_2.Product202509PartialEditProductRequestBodySkusPrice,
    "Product202509PartialEditProductRequestBodySkusSalesAttributes": PartialEditProductRequestBodySkusSalesAttributes_2.Product202509PartialEditProductRequestBodySkusSalesAttributes,
    "Product202509PartialEditProductRequestBodySkusSalesAttributesSkuImg": PartialEditProductRequestBodySkusSalesAttributesSkuImg_2.Product202509PartialEditProductRequestBodySkusSalesAttributesSkuImg,
    "Product202509PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages": PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages_2.Product202509PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages,
    "Product202509PartialEditProductRequestBodySubscribeInfoEdit": PartialEditProductRequestBodySubscribeInfoEdit_2.Product202509PartialEditProductRequestBodySubscribeInfoEdit,
    "Product202509PartialEditProductRequestBodySubscribeInfoEditDiscountDetails": PartialEditProductRequestBodySubscribeInfoEditDiscountDetails_2.Product202509PartialEditProductRequestBodySubscribeInfoEditDiscountDetails,
    "Product202509PartialEditProductRequestBodyVideo": PartialEditProductRequestBodyVideo_2.Product202509PartialEditProductRequestBodyVideo,
    "Product202509PartialEditProductResponse": PartialEditProductResponse_2.Product202509PartialEditProductResponse,
    "Product202509PartialEditProductResponseData": PartialEditProductResponseData_2.Product202509PartialEditProductResponseData,
    "Product202509PartialEditProductResponseDataAudit": PartialEditProductResponseDataAudit_2.Product202509PartialEditProductResponseDataAudit,
    "Product202509PartialEditProductResponseDataSkus": PartialEditProductResponseDataSkus_2.Product202509PartialEditProductResponseDataSkus,
    "Product202509PartialEditProductResponseDataSkusFees": PartialEditProductResponseDataSkusFees_2.Product202509PartialEditProductResponseDataSkusFees,
    "Product202509PartialEditProductResponseDataSkusSalesAttributes": PartialEditProductResponseDataSkusSalesAttributes_2.Product202509PartialEditProductResponseDataSkusSalesAttributes,
    "Promotion202309CreateActivityRequestBody": CreateActivityRequestBody_1.Promotion202309CreateActivityRequestBody,
    "Promotion202309CreateActivityRequestBodyDiscount": CreateActivityRequestBodyDiscount_1.Promotion202309CreateActivityRequestBodyDiscount,
    "Promotion202309CreateActivityRequestBodyDiscountBmsmDiscount": CreateActivityRequestBodyDiscountBmsmDiscount_1.Promotion202309CreateActivityRequestBodyDiscountBmsmDiscount,
    "Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails": CreateActivityRequestBodyDiscountBmsmDiscountDetails_1.Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails,
    "Promotion202309CreateActivityRequestBodyDiscountGiftDiscount": CreateActivityRequestBodyDiscountGiftDiscount_1.Promotion202309CreateActivityRequestBodyDiscountGiftDiscount,
    "Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfos": CreateActivityRequestBodyDiscountGiftDiscountGiftInfos_1.Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfos,
    "Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails": CreateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails_1.Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails,
    "Promotion202309CreateActivityRequestBodyDiscountShippingDiscount": CreateActivityRequestBodyDiscountShippingDiscount_1.Promotion202309CreateActivityRequestBodyDiscountShippingDiscount,
    "Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope": CreateActivityRequestBodyDiscountShippingDiscountAreaScope_1.Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope,
    "Promotion202309CreateActivityRequestBodyParticipationLimit": CreateActivityRequestBodyParticipationLimit_1.Promotion202309CreateActivityRequestBodyParticipationLimit,
    "Promotion202309CreateActivityRequestBodyTargetUserInfo": CreateActivityRequestBodyTargetUserInfo_1.Promotion202309CreateActivityRequestBodyTargetUserInfo,
    "Promotion202309CreateActivityResponse": CreateActivityResponse_1.Promotion202309CreateActivityResponse,
    "Promotion202309CreateActivityResponseData": CreateActivityResponseData_1.Promotion202309CreateActivityResponseData,
    "Promotion202309DeactivateActivityResponse": DeactivateActivityResponse_1.Promotion202309DeactivateActivityResponse,
    "Promotion202309DeactivateActivityResponseData": DeactivateActivityResponseData_1.Promotion202309DeactivateActivityResponseData,
    "Promotion202309GetActivityResponse": GetActivityResponse_1.Promotion202309GetActivityResponse,
    "Promotion202309GetActivityResponseData": GetActivityResponseData_1.Promotion202309GetActivityResponseData,
    "Promotion202309GetActivityResponseDataDiscount": GetActivityResponseDataDiscount_1.Promotion202309GetActivityResponseDataDiscount,
    "Promotion202309GetActivityResponseDataDiscountBmsmDiscount": GetActivityResponseDataDiscountBmsmDiscount_1.Promotion202309GetActivityResponseDataDiscountBmsmDiscount,
    "Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails": GetActivityResponseDataDiscountBmsmDiscountDetails_1.Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails,
    "Promotion202309GetActivityResponseDataDiscountGiftDiscount": GetActivityResponseDataDiscountGiftDiscount_1.Promotion202309GetActivityResponseDataDiscountGiftDiscount,
    "Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfos": GetActivityResponseDataDiscountGiftDiscountGiftInfos_1.Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfos,
    "Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfosGiftDetails": GetActivityResponseDataDiscountGiftDiscountGiftInfosGiftDetails_1.Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfosGiftDetails,
    "Promotion202309GetActivityResponseDataDiscountShippingDiscount": GetActivityResponseDataDiscountShippingDiscount_1.Promotion202309GetActivityResponseDataDiscountShippingDiscount,
    "Promotion202309GetActivityResponseDataDiscountShippingDiscountAreaScope": GetActivityResponseDataDiscountShippingDiscountAreaScope_1.Promotion202309GetActivityResponseDataDiscountShippingDiscountAreaScope,
    "Promotion202309GetActivityResponseDataParticipationLimit": GetActivityResponseDataParticipationLimit_1.Promotion202309GetActivityResponseDataParticipationLimit,
    "Promotion202309GetActivityResponseDataProducts": GetActivityResponseDataProducts_1.Promotion202309GetActivityResponseDataProducts,
    "Promotion202309GetActivityResponseDataProductsActivityPrice": GetActivityResponseDataProductsActivityPrice_1.Promotion202309GetActivityResponseDataProductsActivityPrice,
    "Promotion202309GetActivityResponseDataProductsSkus": GetActivityResponseDataProductsSkus_1.Promotion202309GetActivityResponseDataProductsSkus,
    "Promotion202309GetActivityResponseDataProductsSkusActivityPrice": GetActivityResponseDataProductsSkusActivityPrice_1.Promotion202309GetActivityResponseDataProductsSkusActivityPrice,
    "Promotion202309GetActivityResponseDataTargetUserInfo": GetActivityResponseDataTargetUserInfo_1.Promotion202309GetActivityResponseDataTargetUserInfo,
    "Promotion202309RemoveActivityProductRequestBody": RemoveActivityProductRequestBody_1.Promotion202309RemoveActivityProductRequestBody,
    "Promotion202309RemoveActivityProductResponse": RemoveActivityProductResponse_1.Promotion202309RemoveActivityProductResponse,
    "Promotion202309RemoveActivityProductResponseData": RemoveActivityProductResponseData_1.Promotion202309RemoveActivityProductResponseData,
    "Promotion202309SearchActivitiesRequestBody": SearchActivitiesRequestBody_1.Promotion202309SearchActivitiesRequestBody,
    "Promotion202309SearchActivitiesResponse": SearchActivitiesResponse_1.Promotion202309SearchActivitiesResponse,
    "Promotion202309SearchActivitiesResponseData": SearchActivitiesResponseData_1.Promotion202309SearchActivitiesResponseData,
    "Promotion202309SearchActivitiesResponseDataActivities": SearchActivitiesResponseDataActivities_1.Promotion202309SearchActivitiesResponseDataActivities,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscount": SearchActivitiesResponseDataActivitiesDiscount_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscount,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount": SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails": SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscount": SearchActivitiesResponseDataActivitiesDiscountGiftDiscount_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscount,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos": SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfosGiftDetails": SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfosGiftDetails_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfosGiftDetails,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount": SearchActivitiesResponseDataActivitiesDiscountShippingDiscount_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope": SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope,
    "Promotion202309SearchActivitiesResponseDataActivitiesParticipationLimit": SearchActivitiesResponseDataActivitiesParticipationLimit_1.Promotion202309SearchActivitiesResponseDataActivitiesParticipationLimit,
    "Promotion202309UpdateActivityProductRequestBody": UpdateActivityProductRequestBody_1.Promotion202309UpdateActivityProductRequestBody,
    "Promotion202309UpdateActivityProductRequestBodyProducts": UpdateActivityProductRequestBodyProducts_1.Promotion202309UpdateActivityProductRequestBodyProducts,
    "Promotion202309UpdateActivityProductRequestBodyProductsSkus": UpdateActivityProductRequestBodyProductsSkus_1.Promotion202309UpdateActivityProductRequestBodyProductsSkus,
    "Promotion202309UpdateActivityProductResponse": UpdateActivityProductResponse_1.Promotion202309UpdateActivityProductResponse,
    "Promotion202309UpdateActivityProductResponseData": UpdateActivityProductResponseData_1.Promotion202309UpdateActivityProductResponseData,
    "Promotion202309UpdateActivityRequestBody": UpdateActivityRequestBody_1.Promotion202309UpdateActivityRequestBody,
    "Promotion202309UpdateActivityRequestBodyDiscount": UpdateActivityRequestBodyDiscount_1.Promotion202309UpdateActivityRequestBodyDiscount,
    "Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscount": UpdateActivityRequestBodyDiscountBmsmDiscount_1.Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscount,
    "Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails": UpdateActivityRequestBodyDiscountBmsmDiscountDetails_1.Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails,
    "Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount": UpdateActivityRequestBodyDiscountGiftDiscount_1.Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount,
    "Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos": UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos_1.Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos,
    "Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails": UpdateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails_1.Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails,
    "Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount": UpdateActivityRequestBodyDiscountShippingDiscount_1.Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount,
    "Promotion202309UpdateActivityRequestBodyDiscountShippingDiscountAreaScope": UpdateActivityRequestBodyDiscountShippingDiscountAreaScope_1.Promotion202309UpdateActivityRequestBodyDiscountShippingDiscountAreaScope,
    "Promotion202309UpdateActivityRequestBodyParticipationLimit": UpdateActivityRequestBodyParticipationLimit_1.Promotion202309UpdateActivityRequestBodyParticipationLimit,
    "Promotion202309UpdateActivityRequestBodyTargetUserInfo": UpdateActivityRequestBodyTargetUserInfo_1.Promotion202309UpdateActivityRequestBodyTargetUserInfo,
    "Promotion202309UpdateActivityResponse": UpdateActivityResponse_1.Promotion202309UpdateActivityResponse,
    "Promotion202309UpdateActivityResponseData": UpdateActivityResponseData_1.Promotion202309UpdateActivityResponseData,
    "Promotion202406GetCouponResponse": GetCouponResponse_1.Promotion202406GetCouponResponse,
    "Promotion202406GetCouponResponseData": GetCouponResponseData_1.Promotion202406GetCouponResponseData,
    "Promotion202406GetCouponResponseDataCoupon": GetCouponResponseDataCoupon_1.Promotion202406GetCouponResponseDataCoupon,
    "Promotion202406GetCouponResponseDataCouponClaimDuration": GetCouponResponseDataCouponClaimDuration_1.Promotion202406GetCouponResponseDataCouponClaimDuration,
    "Promotion202406GetCouponResponseDataCouponDiscount": GetCouponResponseDataCouponDiscount_1.Promotion202406GetCouponResponseDataCouponDiscount,
    "Promotion202406GetCouponResponseDataCouponDiscountMaxDiscount": GetCouponResponseDataCouponDiscountMaxDiscount_1.Promotion202406GetCouponResponseDataCouponDiscountMaxDiscount,
    "Promotion202406GetCouponResponseDataCouponDiscountReductionAmount": GetCouponResponseDataCouponDiscountReductionAmount_1.Promotion202406GetCouponResponseDataCouponDiscountReductionAmount,
    "Promotion202406GetCouponResponseDataCouponLiveTasks": GetCouponResponseDataCouponLiveTasks_1.Promotion202406GetCouponResponseDataCouponLiveTasks,
    "Promotion202406GetCouponResponseDataCouponRedemptionDuration": GetCouponResponseDataCouponRedemptionDuration_1.Promotion202406GetCouponResponseDataCouponRedemptionDuration,
    "Promotion202406GetCouponResponseDataCouponThreshold": GetCouponResponseDataCouponThreshold_1.Promotion202406GetCouponResponseDataCouponThreshold,
    "Promotion202406GetCouponResponseDataCouponThresholdMinSpend": GetCouponResponseDataCouponThresholdMinSpend_1.Promotion202406GetCouponResponseDataCouponThresholdMinSpend,
    "Promotion202406GetCouponResponseDataCouponUsageLimits": GetCouponResponseDataCouponUsageLimits_1.Promotion202406GetCouponResponseDataCouponUsageLimits,
    "Promotion202406GetCouponResponseDataCouponUsageStats": GetCouponResponseDataCouponUsageStats_1.Promotion202406GetCouponResponseDataCouponUsageStats,
    "Promotion202406SearchCouponsRequestBody": SearchCouponsRequestBody_1.Promotion202406SearchCouponsRequestBody,
    "Promotion202406SearchCouponsResponse": SearchCouponsResponse_1.Promotion202406SearchCouponsResponse,
    "Promotion202406SearchCouponsResponseData": SearchCouponsResponseData_1.Promotion202406SearchCouponsResponseData,
    "Promotion202406SearchCouponsResponseDataCoupons": SearchCouponsResponseDataCoupons_1.Promotion202406SearchCouponsResponseDataCoupons,
    "Promotion202406SearchCouponsResponseDataCouponsClaimDuration": SearchCouponsResponseDataCouponsClaimDuration_1.Promotion202406SearchCouponsResponseDataCouponsClaimDuration,
    "Promotion202406SearchCouponsResponseDataCouponsDiscount": SearchCouponsResponseDataCouponsDiscount_1.Promotion202406SearchCouponsResponseDataCouponsDiscount,
    "Promotion202406SearchCouponsResponseDataCouponsDiscountMaxDiscount": SearchCouponsResponseDataCouponsDiscountMaxDiscount_1.Promotion202406SearchCouponsResponseDataCouponsDiscountMaxDiscount,
    "Promotion202406SearchCouponsResponseDataCouponsDiscountReductionAmount": SearchCouponsResponseDataCouponsDiscountReductionAmount_1.Promotion202406SearchCouponsResponseDataCouponsDiscountReductionAmount,
    "Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration": SearchCouponsResponseDataCouponsRedemptionDuration_1.Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration,
    "Promotion202406SearchCouponsResponseDataCouponsThreshold": SearchCouponsResponseDataCouponsThreshold_1.Promotion202406SearchCouponsResponseDataCouponsThreshold,
    "Promotion202406SearchCouponsResponseDataCouponsThresholdMinSpend": SearchCouponsResponseDataCouponsThresholdMinSpend_1.Promotion202406SearchCouponsResponseDataCouponsThresholdMinSpend,
    "Promotion202406SearchCouponsResponseDataCouponsUsageLimits": SearchCouponsResponseDataCouponsUsageLimits_1.Promotion202406SearchCouponsResponseDataCouponsUsageLimits,
    "ReturnRefund202309ApproveCancellationResponse": ApproveCancellationResponse_1.ReturnRefund202309ApproveCancellationResponse,
    "ReturnRefund202309ApproveReturnRequestBody": ApproveReturnRequestBody_1.ReturnRefund202309ApproveReturnRequestBody,
    "ReturnRefund202309ApproveReturnRequestBodyPartialRefund": ApproveReturnRequestBodyPartialRefund_1.ReturnRefund202309ApproveReturnRequestBodyPartialRefund,
    "ReturnRefund202309ApproveReturnResponse": ApproveReturnResponse_1.ReturnRefund202309ApproveReturnResponse,
    "ReturnRefund202309CalculateRefundRequestBody": CalculateRefundRequestBody_1.ReturnRefund202309CalculateRefundRequestBody,
    "ReturnRefund202309CalculateRefundRequestBodySkus": CalculateRefundRequestBodySkus_1.ReturnRefund202309CalculateRefundRequestBodySkus,
    "ReturnRefund202309CalculateRefundResponse": CalculateRefundResponse_1.ReturnRefund202309CalculateRefundResponse,
    "ReturnRefund202309CalculateRefundResponseData": CalculateRefundResponseData_1.ReturnRefund202309CalculateRefundResponseData,
    "ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount": CalculateRefundResponseDataOrderRefundAmount_1.ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount,
    "ReturnRefund202309CancelOrderRequestBody": CancelOrderRequestBody_1.ReturnRefund202309CancelOrderRequestBody,
    "ReturnRefund202309CancelOrderRequestBodySkus": CancelOrderRequestBodySkus_1.ReturnRefund202309CancelOrderRequestBodySkus,
    "ReturnRefund202309CancelOrderResponse": CancelOrderResponse_1.ReturnRefund202309CancelOrderResponse,
    "ReturnRefund202309CancelOrderResponseData": CancelOrderResponseData_1.ReturnRefund202309CancelOrderResponseData,
    "ReturnRefund202309CreateReturnRequestBody": CreateReturnRequestBody_1.ReturnRefund202309CreateReturnRequestBody,
    "ReturnRefund202309CreateReturnRequestBodySkus": CreateReturnRequestBodySkus_1.ReturnRefund202309CreateReturnRequestBodySkus,
    "ReturnRefund202309CreateReturnResponse": CreateReturnResponse_1.ReturnRefund202309CreateReturnResponse,
    "ReturnRefund202309CreateReturnResponseData": CreateReturnResponseData_1.ReturnRefund202309CreateReturnResponseData,
    "ReturnRefund202309GetAftersaleEligibilityResponse": GetAftersaleEligibilityResponse_1.ReturnRefund202309GetAftersaleEligibilityResponse,
    "ReturnRefund202309GetAftersaleEligibilityResponseData": GetAftersaleEligibilityResponseData_1.ReturnRefund202309GetAftersaleEligibilityResponseData,
    "ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility": GetAftersaleEligibilityResponseDataSkuEligibility_1.ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility,
    "ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility": GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility_1.ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility,
    "ReturnRefund202309GetRejectReasonsResponse": GetRejectReasonsResponse_1.ReturnRefund202309GetRejectReasonsResponse,
    "ReturnRefund202309GetRejectReasonsResponseData": GetRejectReasonsResponseData_1.ReturnRefund202309GetRejectReasonsResponseData,
    "ReturnRefund202309GetRejectReasonsResponseDataReasons": GetRejectReasonsResponseDataReasons_1.ReturnRefund202309GetRejectReasonsResponseDataReasons,
    "ReturnRefund202309GetReturnRecordsResponse": GetReturnRecordsResponse_1.ReturnRefund202309GetReturnRecordsResponse,
    "ReturnRefund202309GetReturnRecordsResponseData": GetReturnRecordsResponseData_1.ReturnRefund202309GetReturnRecordsResponseData,
    "ReturnRefund202309GetReturnRecordsResponseDataRecords": GetReturnRecordsResponseDataRecords_1.ReturnRefund202309GetReturnRecordsResponseDataRecords,
    "ReturnRefund202309GetReturnRecordsResponseDataRecordsImages": GetReturnRecordsResponseDataRecordsImages_1.ReturnRefund202309GetReturnRecordsResponseDataRecordsImages,
    "ReturnRefund202309GetReturnRecordsResponseDataRecordsVideos": GetReturnRecordsResponseDataRecordsVideos_1.ReturnRefund202309GetReturnRecordsResponseDataRecordsVideos,
    "ReturnRefund202309RejectCancellationRequestBody": RejectCancellationRequestBody_1.ReturnRefund202309RejectCancellationRequestBody,
    "ReturnRefund202309RejectCancellationRequestBodyImages": RejectCancellationRequestBodyImages_1.ReturnRefund202309RejectCancellationRequestBodyImages,
    "ReturnRefund202309RejectCancellationResponse": RejectCancellationResponse_1.ReturnRefund202309RejectCancellationResponse,
    "ReturnRefund202309RejectReturnRequestBody": RejectReturnRequestBody_1.ReturnRefund202309RejectReturnRequestBody,
    "ReturnRefund202309RejectReturnRequestBodyImages": RejectReturnRequestBodyImages_1.ReturnRefund202309RejectReturnRequestBodyImages,
    "ReturnRefund202309RejectReturnResponse": RejectReturnResponse_1.ReturnRefund202309RejectReturnResponse,
    "ReturnRefund202309SearchCancellationsRequestBody": SearchCancellationsRequestBody_1.ReturnRefund202309SearchCancellationsRequestBody,
    "ReturnRefund202309SearchCancellationsResponse": SearchCancellationsResponse_1.ReturnRefund202309SearchCancellationsResponse,
    "ReturnRefund202309SearchCancellationsResponseData": SearchCancellationsResponseData_1.ReturnRefund202309SearchCancellationsResponseData,
    "ReturnRefund202309SearchCancellationsResponseDataCancellations": SearchCancellationsResponseDataCancellations_1.ReturnRefund202309SearchCancellationsResponseDataCancellations,
    "ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems": SearchCancellationsResponseDataCancellationsCancelLineItems_1.ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems,
    "ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage": SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage_1.ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage,
    "ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount": SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount_1.ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount,
    "ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount": SearchCancellationsResponseDataCancellationsRefundAmount_1.ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount,
    "ReturnRefund202309SearchCancellationsResponseDataCancellationsSellerNextActionResponse": SearchCancellationsResponseDataCancellationsSellerNextActionResponse_1.ReturnRefund202309SearchCancellationsResponseDataCancellationsSellerNextActionResponse,
    "ReturnRefund202309SearchReturnsRequestBody": SearchReturnsRequestBody_1.ReturnRefund202309SearchReturnsRequestBody,
    "ReturnRefund202309SearchReturnsResponse": SearchReturnsResponse_1.ReturnRefund202309SearchReturnsResponse,
    "ReturnRefund202309SearchReturnsResponseData": SearchReturnsResponseData_1.ReturnRefund202309SearchReturnsResponseData,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrders": SearchReturnsResponseDataReturnOrders_1.ReturnRefund202309SearchReturnsResponseDataReturnOrders,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount": SearchReturnsResponseDataReturnOrdersDiscountAmount_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersPartialRefund": SearchReturnsResponseDataReturnOrdersPartialRefund_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersPartialRefund,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount": SearchReturnsResponseDataReturnOrdersRefundAmount_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems": SearchReturnsResponseDataReturnOrdersReturnLineItems_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage": SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount": SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress": SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersSellerNextActionResponse": SearchReturnsResponseDataReturnOrdersSellerNextActionResponse_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersSellerNextActionResponse,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount": SearchReturnsResponseDataReturnOrdersShippingFeeAmount_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount,
    "Seller202309GetActiveShopsResponse": GetActiveShopsResponse_1.Seller202309GetActiveShopsResponse,
    "Seller202309GetActiveShopsResponseData": GetActiveShopsResponseData_1.Seller202309GetActiveShopsResponseData,
    "Seller202309GetActiveShopsResponseDataShops": GetActiveShopsResponseDataShops_1.Seller202309GetActiveShopsResponseDataShops,
    "Seller202309GetSellerPermissionsResponse": GetSellerPermissionsResponse_1.Seller202309GetSellerPermissionsResponse,
    "Seller202309GetSellerPermissionsResponseData": GetSellerPermissionsResponseData_1.Seller202309GetSellerPermissionsResponseData,
    "SupplyChain202309ConfirmPackageShipmentRequestBody": ConfirmPackageShipmentRequestBody_1.SupplyChain202309ConfirmPackageShipmentRequestBody,
    "SupplyChain202309ConfirmPackageShipmentRequestBodyPackages": ConfirmPackageShipmentRequestBodyPackages_1.SupplyChain202309ConfirmPackageShipmentRequestBodyPackages,
    "SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesDimension": ConfirmPackageShipmentRequestBodyPackagesDimension_1.SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesDimension,
    "SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesSkus": ConfirmPackageShipmentRequestBodyPackagesSkus_1.SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesSkus,
    "SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesWeight": ConfirmPackageShipmentRequestBodyPackagesWeight_1.SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesWeight,
    "SupplyChain202309ConfirmPackageShipmentResponse": ConfirmPackageShipmentResponse_1.SupplyChain202309ConfirmPackageShipmentResponse,
    "SupplyChain202309ConfirmPackageShipmentResponseData": ConfirmPackageShipmentResponseData_1.SupplyChain202309ConfirmPackageShipmentResponseData,
    "SupplyChain202309ConfirmPackageShipmentResponseDataErrors": ConfirmPackageShipmentResponseDataErrors_1.SupplyChain202309ConfirmPackageShipmentResponseDataErrors,
    "SupplyChain202309ConfirmPackageShipmentResponseDataErrorsDetail": ConfirmPackageShipmentResponseDataErrorsDetail_1.SupplyChain202309ConfirmPackageShipmentResponseDataErrorsDetail,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
