import {ReactNode} from "react";

export interface IColumn {
    key: string;
    label: string;
}

export interface IRow {
    [key: string]: string | number | ReactNode;
}

export interface ITable {
    columns: IColumn[];
    rows: IRow[];
}