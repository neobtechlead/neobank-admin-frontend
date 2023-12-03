
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




