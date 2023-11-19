import React from 'react';
import Image from "next/image";
import LogoPNG from "@/assets/images/logo.png"


const Logo = () => {
    return (
        <Image src={LogoPNG} alt="Neobank Logo" priority={true} width={85} height={35}/>
    );
};

export default Logo;