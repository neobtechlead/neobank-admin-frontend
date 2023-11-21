import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {ISelect} from "@/utils/types/misc";

interface IMerchantStore {
    pageSize: number,
    orderBy: ISelect[],
    pageSizes: ISelect[],
    selectedOrderBy: ISelect,
    selectedPageSize: ISelect,
    orderByChange: (value: ISelect) => any
    pageSizeChange: (value: ISelect) => any
}

const useMerchantStore = create<IMerchantStore>()(
        persist(
            (set, get) => ({
                pageSize: 0,
                pageSizes: [
                    {label: '10', value: '10'},
                    {label: '20', value: '20'},
                    {label: '30', value: '30'}
                ],

                selectedPageSize: {label: '10', value: '10'},
                selectedOrderBy: {value: 'newest', label: 'Newest'},

                orderByChange: (value: ISelect) => set(() => ({selectedOrderBy: value})),
                orderBy: [
                    {value: 'newest', label: 'Newest'},
                    {value: 'oldest', label: 'Oldest'},
                ],
                pageSizeChange: (value: ISelect) => set(() => ({selectedPageSize: value})),


            }),
            {name: 'merchantStore'},
        )
)

export default useMerchantStore