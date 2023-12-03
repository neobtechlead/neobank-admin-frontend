'use client'
import React from 'react';
import {Flex} from "@radix-ui/themes";
import DocumentWithDownload from "@/components/DocumentWithDownload";
import SimpleButton from "@/components/SimpleButton";

interface Props {
    href: string

}

const CertOfRegistrationCard = ({href}: Props) => {
    return (
        <Flex direction="column" justify="between" className="py-10 px-5 border rounded-lg"
              gap="9">
            <DocumentWithDownload label="Certificate of registration" href={href}/>
            <Flex justify="center" align="center" gap="5">
                <SimpleButton
                    className="flex-1"
                    type="secondary"
                    onClick={() => {
                    }}>Preview</SimpleButton>
                <SimpleButton
                    className="flex-1"
                    onClick={() => {
                    }}>Download</SimpleButton>

            </Flex>

        </Flex>
    );
};

export default CertOfRegistrationCard;