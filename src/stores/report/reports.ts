import {create} from 'zustand'

interface IReportStore {
    selectedReportTab: string
    selectMerchantReportType: string,
    updateSelectedMerchantReportType: (tabName: string) => void
    updateSelectedReportTab: (tabName: string) => void


}


const useReportStores = create<IReportStore>()(
    (set, get) => ({
        selectedReportTab: "merchants",
        selectMerchantReportType: "COLLECTION",
        updateSelectedReportTab: (tabName: string) => set(() => ({
            selectedReportTab: tabName
        })),
        updateSelectedMerchantReportType: (tabName: string) => set(() => ({
            selectMerchantReportType: tabName
        })),

    }),
)

export default useReportStores