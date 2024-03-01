'use client'
import {Avatar, Box, Button, DropdownMenu, Flex, Text, Theme} from '@radix-ui/themes';
import React from 'react';
import ProfileDropDownItem from "@/components/profile/ProfileDropDownItem";
import {profileMenuItems} from "@/utils/constants";
import {getInitials} from "@/utils/functions";
import useAuthStore from "@/stores/auth";


const ProfileDropDownList = () => {

    const user = useAuthStore(state => state.user)

    return (
        <Theme accentColor="gray">
            <Box>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="ghost" className="outline-none border-0 cursor-pointer">
                            <Avatar fallback={`${getInitials(user?.firstName ?? "", user?.lastName ?? "")}`}
                                    radius="full" color="gray"/>
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content className="py-5 px-2">
                        <Flex justify="between" align="center" gap="6">
                            <Avatar fallback={`${getInitials(user?.firstName ?? "", user?.lastName ?? "")}`} size="2"
                                    radius="full"
                                    color="gray"/>
                            <Flex direction="column">
                                <Text className="font-semibold text-lg">CF Transact</Text>
                                <Text
                                    className="text-gray-500 text-xs capitalize">{`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}</Text>
                            </Flex>
                        </Flex>
                        <DropdownMenu.Separator/>
                        {profileMenuItems.map((item, index) => (
                            <ProfileDropDownItem key={index} {...item} />
                        ))}
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Box>
        </Theme>
    );
};

export default ProfileDropDownList;