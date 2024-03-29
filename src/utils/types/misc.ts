export interface BasicInfoItem {
    label: string;
    value: string;
    field: string;
    editable?: boolean;
};

export interface DocInfoItem {
    label: string,
    value: string,
    href: string,
    field: string,
}

export interface MappedDataMerchantInfo {
    basicInfo?: BasicInfoItem[][],
    docInfo?: DocInfoItem[],
    headerInfo?: {
        email?: string,
        name?: string,
        firstName?: string,
        lastName?: string,
        businessName?: string
    }
}


export interface ICustomerInfo {
    label: string,
    value: string,
    icon: string,
}