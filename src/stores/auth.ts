import {create} from 'zustand'
import {LoginResponse} from "@/utils/types/auth";
import {persist} from "zustand/middleware";

interface AuthStore {
    user: LoginResponse | null;
    authenticated: boolean;
    login: (response: LoginResponse) => void;
    logout: () => void;
}

const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            authenticated: false,
            login: (response) => set({user: response, authenticated: true}),
            logout: () => set({user: null, authenticated: false}),
        }),
        {
            name: 'auth'

        }
    )
);

export default useAuthStore;