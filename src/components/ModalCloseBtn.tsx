import React from 'react';
import Image from "next/image";
import CloseTimes from "@/assets/svgs/CloseTimes.svg"

interface Props {
    onClick: () => void
}

const ModalCloseBtn = ({onClick}: Props) => {
    return (
        <button onClick={onClick} className="absolute top-4 right-4 text-gray-500 focus:outline-none">
            <Image src={CloseTimes} alt=""/>
        </button>
    );
};

export default ModalCloseBtn;