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
    canDownload?: boolean
}

export interface MappedDataMerchantInfo {
    basicInfo?: BasicInfoItem[][],
    docInfo?: DocInfoItem[],
    headerInfo?: {
        email?: string,
        name?: string,
        businessName?: string
    }
}