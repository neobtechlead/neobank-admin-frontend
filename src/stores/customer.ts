import {create} from 'zustand'
import type ISelect from "@/utils/types/select";
import type {ICustomerDetailsStore, IPageStore} from "@/utils/types/storeInterface";
import {CustomerBalanceValues} from "@/utils/types/form";


const useCustomerStore = create<IPageStore>()(
    (set, get) => ({
        pageSizes: [
            {label: '10', value: '10'},
            {label: '20', value: '20'},
            {label: '30', value: '30'}
        ],
        pageNumber: 0,

        pagination: {
            last: false,
            first: false,
            totalElements: 0,
            numberOfElements: 0,
            offset: 0
        },

        updatePagination: (param) => set((state) => ({pagination: {...state.pagination, ...param}})),

        incrementPageNumber: () => set((state) => ({pageNumber: state.pageNumber + 1})),
        decrementPageNumber: () => set((state) => ({pageNumber: state.pageNumber - 1})),

        selectedPageSize: {label: '10', value: '10'},
        selectedOrderBy: {value: 'desc', label: 'Newest'},

        orderByChange: (value: ISelect) => set(() => ({selectedOrderBy: value, pageNumber: 0})),
        orderByOptions: [
            {value: 'desc', label: 'Newest'},
            {value: 'asc', label: 'Oldest'},
        ],
        pageSizeChange: (value: ISelect) => set(() => ({selectedPageSize: value, pageNumber: 0})),


    }),
)

export default useCustomerStore


export const useCustomerDetailsStore = create<ICustomerDetailsStore>()(
    (set, get) => ({
        selectedId: "",
        issuerId: "",
        defaultBalanceValues: {currentBalance: 0, newBalance: 0},
        isEditBalanceModalOpen: false,
        setEditBalanceModalOpen: (value: boolean) => set(() => ({isEditBalanceModalOpen: value})),
        setSelectedId: (id: string) => set(() => ({selectedId: id})),
        setIssuerId: (id: string) => set(() => ({issuerId: id})),
        setDefaultBalanceValues: (values: CustomerBalanceValues) => set(() => ({defaultBalanceValues: values}))

    }),
)





