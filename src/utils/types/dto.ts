export interface ApiResponse<T> {
    httpStatusCode: number,
    message: string
    data?: T


}

export interface DashBoardStats {
    totalSuccessfulCollectionVolume: number;
    totalFailedDisbursementValue: number;
    totalDisbursementVolume: number;
    totalFailedCollectionVolume: number;
    totalDisbursementValue: number;
    totalSuccessfulDisbursementValue: number;
    totalSuccessfulCollectionValue: number;
    totalSuccessfulDisbursementVolume: number;
    totalCollectionValue: number;
    totalFailedCollectionValue: number;
    totalCollectionVolume: number;
    totalAccounts: {
        CUSTOMER: number;
        MERCHANT: number;
    };
    totalFailedDisbursementVolume: number;
}


interface Address {
    externalId?: string;
    zipCode?: string;
    city?: string;
    country?: string;
    poBox?: string | null;
    state?: string;
    streetAddress?: string;
    digitalAddress?: string | null;
}

interface MerchantAccountHolder {
    firstName?: string;
    lastName?: string;
    email?: string;
    roles?: string[];
}

export interface Merchant {
    businessName?: string;
    externalId?: string;
    descriptionOfService?: string;
    tradingName?: string;
    liveEnvironmentKey?: string;
    sandboxEnvironmentKey?: string;
    neobankAccountNumber?: string;
    neobankAccountExternalId?: string;
    phoneNumber?: string;
    address?: Address;
    merchantAccountHolders?: MerchantAccountHolder[];
    directorNationalIds?: DirectorNationalId[];
    certificateOfRegistration?: string;
    certificateOfIncorporation?: string;
    taxClearanceCertificate?: string;
    constitutionByeLaws?: string;
}

interface Pageable {
    pageNumber?: number;
    pageSize?: number;
    sort?: {
        empty?: boolean;
        sorted?: boolean;
        unsorted?: boolean;
    };
    offset?: number;
    paged?: boolean;
    unpaged?: boolean;
}

export interface PaginatedResponse<T> {
    content: T[];
    pageable: Pageable;
    last?: boolean;
    totalElements?: number;
    totalPages?: number;
    size?: number;
    number?: number;
    sort?: {
        empty?: boolean;
        sorted?: boolean;
        unsorted?: boolean;
    };
    first?: boolean;
    numberOfElements?: number;
}

export interface Customer {
    externalId?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    accountIssuer?: string | null
    accountNumber?: string | null;
    email?: string | null;
    status?: string;
}

export interface MetaData {
    pageNo?: number;
    pageSize?: number;
    totalElements?: number;
    totalPages?: number;
    last?: boolean;
}

export interface CustomersResponse {
    data: Customer[];
    metaData: MetaData;
}


export interface User {
    firstName: string;
    lastName: string;
    email: string;
    externalId: string;
    phoneNumber: string;
    userExternalId: string;
    nationalId?: string;
    dateOfBirth?: string
    roles: string[];
    accountType: string;
    merchant: Merchant;
}

interface DirectorNationalId {
    nationalIdType: string;
    nationalIdPhoto: string;
}

export interface Balance {
    actualBalance: string,
    availableBalance: string

}

export interface MerchantsRoles {
    merchants: string[];
    roles: string[];
}


export interface TransactionReport {
    externalId: string;
    transactionId: string;
    internalId: string;
    type: string;
    status: string;
    businessName: string;
    tradingName: string;
    issuerId: string;
    address: Address;
    balanceBefore: number;
    balanceAfter: number;
    createdAt: string;
    updatedAt: string;
}

export interface PaginationMeta {
    pageNumber: number;
    pageSize: number;
    sort: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Pagination {
    size: number;
    lastPage: boolean;
    firstPage: boolean;
    sorting: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
    };
    totalPages: number;
    totalElements: number;
}

export interface PaginatedTransactionsData<T> {
    pagination: Pagination;
    meta: PaginationMeta;
    transactions: T[];
}


export interface Transaction {
    externalId: string;
    internalId: string;
    amount: number;
    narration: string;
    clientReference: string;
    accountIssuer: string;
    accountNumber: string;
    accountName: string;
    callbackUrl: string;
    processAt: string | null;
    type: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    balanceBefore: number;
    balanceAfter: number;
    issuerId: string;
    accountType: string;
    initiatorName: string;
    batchExternalId: string | null;
}

export interface MerchantStats {
    recentTransactions: Transaction[];
    actualBalance: number;
    disbursementCount: number;
    collectionCount: number;
    collectionValue: number;
    disbursementValue: number;
    availableBalance: number;
    users: number;
    transactionCount: number;
}

export interface ActivityLogsDTO {
    externalId: string;
    merchantName: string;
    merchantId: string;
    merchantIssuerId: string;
    adminLoginName: string;
    adminLoginId: string;
    channel: string;
    activityType: string;
    balanceBefore: string;
    balanceAfter: string;
    amount: string;
    updatedAt: string;
    createdAt: string;

}




