import React from 'react';
import {Flex, Text} from "@radix-ui/themes";


interface Props {
    value: number,
    currentStep: number
}

const Ellipse = ({value, currentStep}: Props) => {


    return (
        <Flex align="center"
              justify="center"
              className={`rounded-full w-6 h-6 border ${currentStep === value ? "border-darkPurple-900" : "border-grey-500"}`}>
            <Text
                className={`text-xs ${currentStep === value ? "text-darkPurple-900" : "text-grey-500"}`}>{value}</Text>
        </Flex>
    );
};

export default Ellipse;