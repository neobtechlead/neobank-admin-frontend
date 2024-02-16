import React from 'react';
import Image from "next/image";
import LogoPNG from "@/assets/svgs/cf_transact_logo.svg"


const Logo = () => {
    return (
        <Image src={LogoPNG} alt="CF Transact Logo" priority={true}/>
    );
};

export default Logo;