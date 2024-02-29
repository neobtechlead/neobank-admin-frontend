import React from 'react';
import Image from "next/image";
import LogoPNG from "@/assets/svgs/cf_transact_logo.svg"

interface Props {
    width?: number,
    height?: number
}


const Logo = ({width = 200, height = 34}: Props) => {
    return (
        <Image src={LogoPNG} alt="CF Transact Logo" width={width} height={height} priority={true}
               style={{width: 'auto'}}/>
    );
};

export default Logo;