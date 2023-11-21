import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'

interface IMerchantStore {
    pageSize: number
}

const useMerchantStore = create<IMerchantStore>()(
    devtools(
        persist(
            (set) => ({
                pageSize: 0,
            }),
            {name: 'merchantStore'},
        ),
    ),
)

export default useMerchantStore