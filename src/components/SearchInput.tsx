import React from 'react';
import {TextField} from "@radix-ui/themes";
import MagnifyingGlassIcon from "@/assets/svgs/MagnifyingGlass.svg"
import Image from "next/image";

interface Props {
    placeholder?: string
    onChange: (value: any) => void
}

const SearchInput = ({placeholder, onChange}: Props) => {
    return (
        <TextField.Root size="3" radius="large" className="py-2 px-4">
            <TextField.Slot>
                <Image src={MagnifyingGlassIcon} alt="" width={16} height={16}/>
            </TextField.Slot>
            <TextField.Input placeholder={`${placeholder || "Search"}`} onChange={onChange}/>
        </TextField.Root>
    );
};

export default SearchInput;