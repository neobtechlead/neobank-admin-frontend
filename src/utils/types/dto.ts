export interface Customer {
    id?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    mobileNetwork?: string;

}

export interface Merchant {
    externalId?: string;
    businessName?: string;
    tradingName?: string;
    merchantAddress?: string;
    country?: string;
}


export interface APIResponse<T> {
    httpStatusCode: number,
    message: string
    data?: T


}

export interface DashBoardStats {
    totalTransactionsValue: number;
    totalDisbursementsValue: number;
    totalCollectionsValue: number;
    failedDisbursementsValue: number;
    failedCollectionsValue: number;
    successfulDisbursementsValue: number;
    successfulCollectionsValue: number;
    totalMerchants: number;
    totalCustomers: number;
}
