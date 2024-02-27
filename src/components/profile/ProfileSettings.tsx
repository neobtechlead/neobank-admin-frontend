import React from 'react';
import {Flex, Text} from "@radix-ui/themes";
import ChangePasswordForm from "@/components/profile/ChangePasswordForm";

const ProfileSettings = () => {
    return (
        <Flex justify="between" className="py-10 px-32">
            <Flex direction="column" className="w-1/2" gap="3">
                <Text className="text-gray-600 font-bold">Password</Text>
                <Text>Update your password</Text>
            </Flex>
            <Flex direction="column" className="w-1/2">
                <ChangePasswordForm/>
            </Flex>
        </Flex>
    );
};

export default ProfileSettings;