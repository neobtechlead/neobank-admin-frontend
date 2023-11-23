'use client'
import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import MerchantTable from "@/app/dashboard/merchants/components/MerchantTable";
import LinkIcon from "@/components/LinkIcon";
import CaretRight from "@/assets/svgs/CaretRight.svg";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import PlusIcon from "@/assets/svgs/Plus.svg"
import CustomSelect from "@/components/CustomSelect";
import {color} from "@/utils/constants";
import Pagination from "@/components/Pagination";
import useCustomerData from "@/api/hooks/useCustomerData";
import useMerchantStore from "@/stores/merchant";


const sampleMerchantData = {
    columns: [
        {key: 'businessName', label: 'Merchant Business Name'},
        {key: 'tradingName', label: 'Merchant Trading Name'},
        {key: 'merchantID', label: 'Merchant ID'},
        {key: 'merchantAddress', label: 'Merchant Address'},
        {key: 'country', label: 'Country'},
        {key: 'icon', label: ''},
    ],
    rows: [
        {
            id: "1",
            businessName: 'ABC Electronics',
            tradingName: 'ABC Electronics Trading',
            merchantID: 'MID123456',
            merchantAddress: '123 Main Street, Cityville, USA',
            country: 'United States',
            icon: <LinkIcon href={`/merchants/1}`} icon={CaretRight}/>
        },
        {
            id: "1",
            businessName: 'XYZ Clothing',
            tradingName: 'XYZ Fashion Outlet',
            merchantID: 'MID789012',
            merchantAddress: '456 High Street, Townsville, Canada',
            country: 'Canada',
            icon: <LinkIcon href={`/merchants/2}`} icon={CaretRight}/>
        },
        {
            id: "1",
            businessName: 'Tech Solutions Ltd.',
            tradingName: 'Tech Solutions',
            merchantID: 'MID345678',
            merchantAddress: '789 Tech Park, Innovation City, Australia',
            country: 'Australia',
            icon: <LinkIcon href={`/merchants/3}`} icon={CaretRight}/>
        },
        {
            id: "1",
            businessName: 'Green Groceries',
            tradingName: 'Fresh Foods',
            merchantID: 'MID901234',
            merchantAddress: '101 Organic Lane, Greensburg, UK',
            country: 'United Kingdom',
            icon: <LinkIcon href={`/merchants/4}`} icon={CaretRight}/>
        },
        {
            id: "1",
            businessName: 'Global Imports',
            tradingName: 'Worldwide Goods',
            merchantID: 'MID567890',
            merchantAddress: '567 Import Street, International City, Germany',
            country: 'Germany',
            icon: <LinkIcon href={`/merchants/1}`} icon={CaretRight}/>
        },
        {
            id: "1",
            businessName: 'Fashion Trends Inc.',
            tradingName: 'Trendy Styles',
            merchantID: 'MID234567',
            merchantAddress: '890 Fashion Avenue, Paris, France',
            country: 'France',
            icon: <LinkIcon href={`/merchants/1}`} icon={CaretRight}/>
        },
        {
            id: "1",
            businessName: 'Food Haven',
            tradingName: 'Delicious Eats',
            merchantID: 'MID890123',
            merchantAddress: '321 Gourmet Lane, Foodtown, Italy',
            country: 'Italy',
            icon: <LinkIcon href={`/merchants/1}`} icon={CaretRight}/>
        },
        {
            id: "1",
            businessName: 'Sports Gear Outlet',
            tradingName: 'Athlete Choice',
            merchantID: 'MID456789',
            merchantAddress: '654 Sportswear Street, Fitness City, Spain',
            country: 'Spain',
            icon: <LinkIcon href={`/merchants/1}`} icon={CaretRight}/>
        },
        {
            id: "1",
            businessName: 'Home Essentials',
            tradingName: 'Cozy Living',
            merchantID: 'MID012345',
            merchantAddress: '987 Homeware Road, Comfort Town, Brazil',
            country: 'Brazil',
            icon: <LinkIcon href={`/merchants/1}`} icon={CaretRight}/>
        },
        {
            id: "1",
            businessName: 'Gadget Emporium',
            tradingName: 'Tech Gadgets',
            merchantID: 'MID678901',
            merchantAddress: '543 Gizmo Lane, Techtopia, Japan',
            country: 'Japan',
            icon: <LinkIcon href={`/merchants/1}`} icon={CaretRight}/>
        },

    ],
};


const MerchantPage = () => {


    const {data, isLoading, error} = useCustomerData()
    const {
        orderBy,
        selectedOrderBy,
        orderByChange,
        pageSizeChange,
        selectedPageSize,
        pageSizes
    } = useMerchantStore();

    if (isLoading) return <Box>Loading...</Box>
    if (error) return <Box>Error.</Box>


    return (
        <Box p="5">
            <Flex direction="column" gap="5">
                <Flex justify="end">
                    <Flex gap="3" align="stretch">
                        <ButtonWithIcon
                            label="Create New Merchant"
                            icon={PlusIcon}
                            onClick={() => {
                            }}
                            bgColor={color.darkPurple}
                        />
                        <CustomSelect options={orderBy}
                                      defaultValue={selectedOrderBy}
                                      onSelectChange={orderByChange}/>


                    </Flex>
                </Flex>
                <MerchantTable data={sampleMerchantData}/>
                <Flex justify="between" align="center">
                    <Box>
                        <CustomSelect
                            defaultValue={selectedPageSize}
                            options={pageSizes}
                            padding="0"
                            color={color.darkGray}
                            onSelectChange={pageSizeChange}
                        />
                    </Box>
                    <Pagination/>
                </Flex>
            </Flex>
        </Box>
    );
};

export default MerchantPage;