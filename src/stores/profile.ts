import {create} from 'zustand'

interface IProfileStore {
    selectedItem: string,
    setSelectedItem: (item: string) => void


}


const useProfileStores = create<IProfileStore>()(
    set => ({
        selectedItem: "profile",

        setSelectedItem: (item: string) => set(() => ({
            selectedItem: item
        })),


    }),
)

export default useProfileStores