import React from 'react';
import Link from "next/link";


interface Props {
    to: string
    label: string
    extraClassNames?: string

}

const NextLink = ({to, label, extraClassNames = ""}: Props) => {
    return (
        <Link href={to}
              className={`font-semibold text-sm text-purple-900 hover:text-purple-600 focus:text-purple-600 focus:outline-none focus:underline ${extraClassNames}`}>
            {label}
        </Link>
    );
};

export default NextLink;