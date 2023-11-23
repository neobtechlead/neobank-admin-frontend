import React from 'react';
import {Container} from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

interface Props {
    href: string
    icon: string
    className?: string
}

const LinkIcon = ({href, icon, className = ""}: Props) => {
    return (
        <Container>
            <Link href={href} className={className}><Image priority={true} src={icon} alt=""/></Link>
        </Container>
    );
};

export default LinkIcon;