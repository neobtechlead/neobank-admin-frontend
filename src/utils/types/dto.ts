export interface Customer {
    id?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    mobileNetwork?: string;

}

export interface APIResponse<T> {
    httpStatusCode: number,
    message: string
    data?: T


}