export interface ISelect {
    value: string;
    label: string;
}

export interface PageInfo {
    last?: boolean,
    first?: boolean,
    offset?: number
    totalElements?: number,
    numberOfElements?: number


}