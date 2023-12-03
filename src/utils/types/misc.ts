export interface BasicInfoItem {
    label: string;
    value: string;
    editable?: boolean;
};

export interface DocInfoItem {
    label: string,
    href: string,
    canDownload?: boolean
}