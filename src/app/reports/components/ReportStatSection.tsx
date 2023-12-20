'use client'
import React from 'react';
import {Box} from "@radix-ui/themes";
import IconWithStackedTextLabels from "@/components/IconWithStackedTextLabels";
import Users from "@/assets/svgs/UserThree.svg"
import Coins from "@/assets/svgs/HandCoins.svg"
import Upload from "@/assets/svgs/Upload.svg"
import Download from "@/assets/svgs/Download.svg"
import ButtonWithIcon from "@/components/ButtonWithIcon";


const ReportStatSection = () => {
    return (
        <Box className="flex justify-around items-center py-4">
            <IconWithStackedTextLabels
                label="Users"
                value={10}
                icon={Users}
                overrideClassValue="!font-bold"
            />
            <IconWithStackedTextLabels
                label="Collections"
                value="GHS 79,000.00"
                icon={Coins}
                overrideClassValue="!font-bold"
            />
            <IconWithStackedTextLabels
                label="Disbursements"
                value="GHS 79,000.00"
                icon={Upload}
                overrideClassValue="!font-bold"
            />
            <ButtonWithIcon
                label="Extract Report"
                onClick={() => {
                }}
                icon={Download}
                overrideClassName="!px-8 !py-4 !font-semibold !rounded-lg"
            />
        </Box>
    );
};

export default ReportStatSection;