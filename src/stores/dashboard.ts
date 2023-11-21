import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {ISelect} from "@/utils/types/misc";

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