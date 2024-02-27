'use client'
import {DropdownMenu, Flex, Text} from '@radix-ui/themes';
import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";
import useProfileStores from "@/stores/profile";

interface Props {
    icon: string
    name: string,
    color: any,
    label: string
}

const ProfileDropDownItem = ({icon, label, color, name}: Props) => {

    const router = useRouter()
    const setSelectedItem = useProfileStores(state => state.setSelectedItem)

    const handleMenuItemClick = () => {
        setSelectedItem(name)
        router.push("/profile")
    }


    return (
        <DropdownMenu.Item className="cursor-pointer my-1" color={color} onClick={handleMenuItemClick}>
            <Flex justify="between" align="center" gap="3">
                <Image src={icon} alt={label}/>
                <Text>{label}</Text>
            </Flex>
        </DropdownMenu.Item>
    );
};

export default ProfileDropDownItem;