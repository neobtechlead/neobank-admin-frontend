import ISelect from "@/utils/types/select";
import PageInfo from "@/utils/types/paginationInfo";
import {CustomerReportFormFilterFields, MerchantReportFormFilterFields} from "@/utils/validations/schema/report";
import {CustomerBalanceValues} from "@/utils/types/form";

export interface IPageStore {
    pageNumber: number,
    orderByOptions: ISelect[],
    pageSizes: ISelect[],
    selectedOrderBy: ISelect,
    selectedPageSize: ISelect,
    pagination: PageInfo
    updatePagination: (param: PageInfo) => void
    orderByChange: (value: ISelect) => any
    pageSizeChange: (value: ISelect) => any
    incrementPageNumber: () => void
    decrementPageNumber: () => void

}

export interface IPaginationStore {
    pageNumber: number,
    pageSizes: ISelect[],
    selectedPageSize: ISelect,
    pagination: PageInfo
    updatePagination: (param: PageInfo) => void
    onPageSizeChange: (value: ISelect) => any
    incrementPageNumber: () => void
    decrementPageNumber: () => void

}


export const createIPaginationStore = (set: any) => ({
    pageSizes: [
        {label: '10', value: '10'},
        {label: '20', value: '20'},
        {label: '30', value: '30'},
    ],
    pageNumber: 1,
    pagination: {
        last: false,
        first: false,
        totalElements: 0,
        numberOfElements: 0,
        offset: 0,
    },
    selectedPageSize: {label: '10', value: '10'},
    updatePagination: (param: PageInfo) => set((state: IPaginationStore) => ({pagination: {...state.pagination, ...param}})),
    incrementPageNumber: () => set((state: IPaginationStore) => ({pageNumber: state.pageNumber + 1})),
    decrementPageNumber: () => set((state: IPaginationStore) => ({pageNumber: state.pageNumber - 1})),
    onPageSizeChange: (value: ISelect) => set(() => ({selectedPageSize: value, pageNumber: 1})),
});


export interface IMerchantReportFilterStore {
    formStoreParams: MerchantReportFormFilterFields,
    updateStoreParams: (values: any) => void

}

export interface ICustomerReportFilterStore {
    formStoreParams: CustomerReportFormFilterFields,
    updateStoreParams: (values: any) => void

}

export interface ICustomerDetailsStore {
    selectedId: string
    issuerId: string
    defaultBalanceValues: CustomerBalanceValues
    isEditBalanceModalOpen: boolean
    setEditBalanceModalOpen: (value: boolean) => void


    setSelectedId: (id: string) => void
    setIssuerId: (id: string) => void
    setDefaultBalanceValues: (value: CustomerBalanceValues) => void
}