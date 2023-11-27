import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import type ISelect from "@/utils/types/select";

interface IDashBoardStore {
    selectedTransactionType: ISelect
    transactionTypes: ISelect[]
    onTransactionTypeChange: (value: ISelect) => any
}

const useDashBoardStore = create<IDashBoardStore>()(
    persist(
        (set, get) => ({
            selectedTransactionType: {value: 'disbursements', label: 'Disbursement'},
            transactionTypes: [
                {value: 'disbursements', label: 'Disbursements'},
                {value: 'collections', label: 'Collections'}
            ],
            onTransactionTypeChange: (value) => set(() => ({selectedTransactionType: value}))
        }),
        {name: 'dashboardStore'},
    )
)

export default useDashBoardStore