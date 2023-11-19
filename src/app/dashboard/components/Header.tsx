'use client'
import React from 'react';
import NavBar from "@/app/dashboard/components/NavBar";
import {usePathname} from "next/navigation";
import {navBarItems} from "@/utils/constants";
import OverViewTitle from "@/app/dashboard/components/OverViewTitle";
import HeaderTitleWithBody from "@/app/dashboard/components/HeaderTitleWithBody";


const Header = () => {

    const pathName = usePathname();

    // Function to determine and display the heading title based on the current path
    const showHeadingTitle = () => {
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