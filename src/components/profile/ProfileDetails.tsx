import React from 'react';
import {Flex, Text} from '@radix-ui/themes';
import SimpleTextInputWithLabel from '@/components/forms/SimpleTextInputWithLabel';
import useAuthStore from "@/stores/auth";
import {LoginResponse} from "@/utils/types/auth";


const ProfileDetails = () => {

    const {firstName, lastName, email, phoneNumber, roles} = useAuthStore(state => state.user as LoginResponse)

    const inputFields = [
        {
            label: 'Name',
            name: 'name',
            value: `${firstName ?? ""} ${lastName ?? ""}`,
        },
        {
            label: 'Contact',
            name: 'contact',
            value: phoneNumber ?? "",
        },
        {
            label: 'Email',
            name: 'email',
            value: email ?? "",
        },
        {
            label: 'Role',
            name: 'role',
            value: roles.join(" "),
        },
    ];

    return (
        <Flex justify="between" className="py-10 px-32">
            <Flex direction="column" className="w-1/2" gap="3">
                <Text className="text-gray-600 font-bold">My Profile</Text>
                <Text>My name and personal information</Text>
            </Flex>
            <Flex direction="column" gap="4" className="w-1/2">
                {inputFields.map((field) => (
                    <SimpleTextInputWithLabel
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        overrideClassName="!text-gray-500 !cursor-not-allowed"
                        value={field.value}
                        disabled={true}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default ProfileDetails;
