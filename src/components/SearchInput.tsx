import React from 'react';
import {TextField} from "@radix-ui/themes";
import MagnifyingGlassIcon from "@/assets/svgs/MagnifyingGlass.svg"
import Image from "next/image";
import Spinner from "@/components/Spinner";

interface Props {
    placeholder?: string
    onChange: (value: any) => void
    value: string,
    isFetching?: boolean
}

const SearchInput = ({placeholder, onChange, value, isFetching}: Props) => {
    return (
        <TextField.Root size="3" radius="large" className="py-2 px-4 flex items-center ">
            <TextField.Slot>
                <Image src={MagnifyingGlassIcon} alt="" width={16} height={16}/>
            </TextField.Slot>
            <TextField.Input placeholder={`${placeholder || "Search"}`} value={value} onChange={onChange}/>
            {isFetching && <Spinner extraClasses='!border-darkPurple-900 !w-5 !h-5'/>}

        </TextField.Root>
    );
};

export default SearchInput;