import React from 'react';
import {Container} from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

interface Props {
    href: string
    icon: string
    overrideClassName?: string
}

const LinkIcon = ({href, icon, overrideClassName = ""}: Props) => {
    return (
        <Container>
            <Link href={href} className={overrideClassName}><Image priority={true} src={icon} alt=""/></Link>
        </Container>
    );
};

export default LinkIcon;