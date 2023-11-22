import {ReactNode} from "react";

export interface IColumn {
    key: string;
    label: string;
}

export interface IRow {
    id?: string;
    externalId?: string;
    [key: string]: string | number | ReactNode;
}

export interface ITable {
    columns: IColumn[];
    rows: IRow[];
}