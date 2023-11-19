'use client'
import React from 'react';
import {Avatar, Box, Container, Flex} from "@radix-ui/themes";
import Logo from "@/app/dashboard/components/Logo";
import IconWithLabel from "@/components/IconWithLabel";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {navBarItems} from "@/utils/constants";


const NavBar = () => {

    const pathName = usePathname();
    return (
        <Flex justify="between" align="stretch">
            <Box className="py-4">
                <Logo/>
            </Box>
            <Flex justify="between" gap="4">
                {navBarItems.map(({href, label, icon}) => <Link key={href} href={href}>
                    <Container
                        className={`px-5 h-full pt-7 ${href === pathName ? "border-b-4 border-purple-900 font-black" : ""}`}>
                        <IconWithLabel label={label} icon={icon}/>
                    </Container>

                </Link>)}
            </Flex>
            <Box className="py-4">
                <Avatar fallback="NB" radius="full" color="gray"/>
            </Box>
        </Flex>


    );
};

export default NavBar;