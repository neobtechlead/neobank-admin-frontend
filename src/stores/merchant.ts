import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import type ISelect from "@/utils/types/select";
import type PageInfo from "@/utils/types/pagination"


interface IMerchantStore {
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

const useMerchantStore = create<IMerchantStore>()(
        persist(
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
            {name: 'merchantStore'},
        )
)

export default useMerchantStore