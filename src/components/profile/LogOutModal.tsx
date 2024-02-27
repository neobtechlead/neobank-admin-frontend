import React from 'react';
import ModalDialog from "@/components/ModalDialog";
import {Box, Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import LogOut from "@/assets/svgs/Logout.svg"
import SimpleButton from "@/components/SimpleButton";
import useLogout from "@/api/hooks/mutations/useLogout";
import useAuthStore from "@/stores/auth";
import {useRouter} from "next/navigation";

interface Props {
    isOpen: boolean
    onRequestClose: () => void

}

const LogOutModal = ({isOpen, onRequestClose}: Props) => {

    const {isPending, mutateAsync} = useLogout()
    const logout = useAuthStore(state => state.logout)
    const router = useRouter()

    const handleLogout = async () => {
        try {
            await mutateAsync()

        } catch (ex) {
        } finally {
            logout()
            router.replace("/")

        }


    }

    return (
        <ModalDialog isOpen={isOpen} onRequestClose={onRequestClose} contentWidth="40%">
            <Flex align="center" direction="column" className="h-full px-5">
                <Flex align="center" direction="column" justify="center">
                    <Box className="my-10">
                        <Image src={LogOut} alt="LogOut" width={100} height={100}/>
                    </Box>
                    <Flex className="my-8 space-y-2" direction="column" justify="center" align="center">
                        <Text className="font-bold text-lg">Logout</Text>
                        <Text>Are you sure you want to logout of this portal?</Text>
                    </Flex>
                </Flex>
                <Flex align="center" justify="center" gap="4" className="w-full space-x-5">
                    <SimpleButton
                        onClick={onRequestClose}
                        styleType="secondary"
                        type="button"
                        overrideClassName="!w-full !py-4 !font-semibold"
                    >
                        No
                    </SimpleButton>

                    <SimpleButton
                        disabled={isPending}
                        isLoading={isPending}
                        onClick={handleLogout}
                        type="button"
                        overrideClassName="!w-full !py-4 !font-semibold"
                    >
                        Yes
                    </SimpleButton>
                </Flex>
            </Flex>
        </ModalDialog>
    );
};

export default LogOutModal;