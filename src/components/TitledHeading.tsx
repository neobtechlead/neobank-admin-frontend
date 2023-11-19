import React, {ReactNode} from 'react';
import {PoppinsFont} from "@/fonts";
import {Heading} from "@radix-ui/themes";

interface Props {
    className?: string,
    children: ReactNode

}

const TitledHeading = ({children, className = ""}: Props) => {
    return <Heading style={PoppinsFont.style} className={className}>{children}</Heading>
};

export default TitledHeading;