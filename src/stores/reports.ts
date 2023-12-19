import {create} from 'zustand'

interface IReportStore {
    selectReportTab: string
    updateSelectedReportTab: (tabName: string) => void


}


const useReportStores = create<IReportStore>()(
    (set, get) => ({
        selectReportTab: "merchants",
        updateSelectedReportTab: (tabName: string) => set(() => ({
            selectReportTab: tabName
        }))

    }),
)

export default useReportStores