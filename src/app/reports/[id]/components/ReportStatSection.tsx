'use client'
import React from 'react';
import {Box} from "@radix-ui/themes";
import IconWithStackedTextLabels from "@/components/IconWithStackedTextLabels";
import Users from "@/assets/svgs/UserThree.svg"
import Coins from "@/assets/svgs/HandCoins.svg"
import Upload from "@/assets/svgs/Upload.svg"
import Download from "@/assets/svgs/Download.svg"
import ButtonWithIcon from "@/components/ButtonWithIcon";
import {convertPesewasToCedis, formatCurrencyAlt} from "@/utils/functions";
import SkeletonText from "@/components/skeleton/SkeletonText";
import useFileDownloader from "@/api/useFileDownloader";

interface Props {
    data: any
    isLoading: boolean
    id: string
}


const ReportStatSection = ({data: {users, collectionValue, disbursementValue}, isLoading, id}: Props) => {
    const {downloadFile, isLoading: isFileDownloading} = useFileDownloader()

    const handleDownload = () => {
        downloadFile(id)
    }

    return (
        <Box className="flex justify-around items-center py-4">
            {isLoading ? <SkeletonText/> : <IconWithStackedTextLabels
                label="Users"
                value={users ?? "N/A"}
                icon={Users}
                overrideClassValue="!font-bold"
            />}

            {
                isLoading ? <SkeletonText/> : <IconWithStackedTextLabels
                    label="Collections"
                    value={`GHS ${formatCurrencyAlt(convertPesewasToCedis(collectionValue ?? 0))}`}
                    icon={Coins}
                    overrideClassValue="!font-bold"
                />
            }

            {isLoading ? <SkeletonText/> : <IconWithStackedTextLabels
                label="Disbursements"
                value={`GHS ${formatCurrencyAlt(convertPesewasToCedis(disbursementValue ?? 0))}`}
                icon={Upload}
                overrideClassValue="!font-bold"
            />}
            {isLoading ? <SkeletonText/> : <ButtonWithIcon
                label="Extract Report"
                onClick={handleDownload}
                isLoading={isFileDownloading}
                disabled={isFileDownloading}
                icon={Download}
                overrideClassName="!px-8 !py-4 !font-semibold !rounded-lg"
            />}
        </Box>
    );
};

export default ReportStatSection;