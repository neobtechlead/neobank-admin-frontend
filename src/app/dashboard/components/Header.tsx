'use client'
import React from 'react';
import NavBar from "@/app/dashboard/components/NavBar";
import {usePathname} from "next/navigation";
import {navBarItems, profileMenuItems} from "@/utils/constants";
import OverViewTitle from "@/app/dashboard/components/OverViewTitle";
import HeaderTitleWithBody from "@/app/dashboard/components/HeaderTitleWithBody";
import useProfileStores from "@/stores/profile";


const Header = () => {

    const pathName = usePathname();
    const selectedProfileItem = useProfileStores(state => state.selectedItem)

    // Function to determine and display the heading title based on the current path
    const showHeadingTitle = () => {

        if (pathName.startsWith("/profile") && selectedProfileItem) {
            for (const {name, description, title} of profileMenuItems) {
                if (name === selectedProfileItem) return <HeaderTitleWithBody title={title} body={description}/>

            }

        }

        for (const {href, label, description} of navBarItems) {
            if (pathName === href) {
                // Check if the path is "/dashboard" to display a specific component
                return pathName === '/dashboard' ? <OverViewTitle/> :
                    <HeaderTitleWithBody title={label} body={description}/>;
            }
        }
        return null;
    };


    return (
        <header className="md:sticky md:top-0 md:z-10 bg-white ">
            <nav className="px-8">
                <NavBar/>
            </nav>
            <div className="bg-[url('/assets/images/cyan-background.svg')] flex flex-col justify-center ">
                {showHeadingTitle()}
            </div>
        </header>
    );
};

export default Header;