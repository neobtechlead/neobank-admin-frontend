import {create} from 'zustand'
import {
    createIPaginationStore,
    ICustomerReportFilterStore,
    IMerchantReportFilterStore,
    IPaginationStore
} from "@/utils/types/storeInterface";


export const useMerchantReportStore = create<IPaginationStore>()(
    (set, get) => createIPaginationStore(set)
)

export const useCustomerReportStore = create<IPaginationStore>()(
    (set, get) => createIPaginationStore(set)
)

export const useCollectionReportStore = create<IPaginationStore>()(
    (set, get) => createIPaginationStore(set)
)

export const useDisbursementReportStore = create<IPaginationStore>()(
    (set, get) => createIPaginationStore(set)
)

export const useMerchantReportFilterStore = create<IMerchantReportFilterStore>()(
    (set, get) => ({
        formStoreParams: {
            merchant: {label: "Select Merchant", value: ""},
            startDate: "",
            endDate: "",
            status: {label: "Select Status", value: ""}
        },
        updateStoreParams: values => set(() => ({formStoreParams: values})),

    }),
)

export const useCustomerReportFilterStore = create<ICustomerReportFilterStore>()(
    (set, get) => ({
        formStoreParams: {
            phoneNumber: "",
            startDate: "",
            endDate: "",
            type: {label: "Select Type", value: ""},
            status: {label: "Select Status", value: ""}
        },
        updateStoreParams: values => set(() => ({formStoreParams: values})),

    }),
)


