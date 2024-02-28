'use client'
import React from 'react';
import useProfileStores from "@/stores/profile";
import ProfileDetails from "@/components/profile/ProfileDetails";
import ProfileSettings from "@/components/profile/ProfileSettings";
import LogOutModal from "@/components/profile/LogOutModal";

const ProfileContainer = () => {
    const {selectedItem, setSelectedItem} = useProfileStores()
    return (
        <>
            {selectedItem === 'profile' && <ProfileDetails/>}
            {selectedItem === 'settings' && <ProfileSettings/>}
            <LogOutModal
                isOpen={selectedItem === "logout"}
                onRequestClose={() => setSelectedItem("profile")}
            />
        </>
    );
};

export default ProfileContainer;