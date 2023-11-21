'use client'
import React from 'react';
import {Flex} from "@radix-ui/themes";
import StoreFront from "@/assets/svgs/BadgeStoreFront.svg"
import UserThree from "@/assets/svgs/BadgeUserThree.svg"
import EllipseGreen from "@/assets/svgs/EllipseG.svg"
import EllipseRed from "@/assets/svgs/EllipseR.svg"
import DashboardCardItem from "@/app/dashboard/components/DashBoardCardItem";
import PieChartCard from "@/app/dashboard/components/PieChartCard";
import DashBoardTable from "@/app/dashboard/components/DashBoardTable";

const clientsData = [
    {label: "Merchants", totalCounts: "84", icon: StoreFront},
    {label: "Customers", totalCounts: "5,456", icon: UserThree}
]

const pieChartData = {
    labels: ['Successful Disbursement', 'Failed Disbursement'],
    datasets: [
        {
            label: '',
            data: [78500, 56500],
            backgroundColor: [
                '#3BB33B',
                '#DC4040',
            ],
            borderColor: [
                '#3BB33B',
                '#DC4040',

            ],
            borderWidth: 1,
        },
    ],
};

const pieChartLegendData = [
    {title: "Successful Disbursement", content: "GHS 78,500", icon: EllipseGreen},
    {title: "Failed Disbursement", content: "GHS 56,500", icon: EllipseRed},
]

const sampleCustomerData = {
    columns: [
        {key: 'firstName', label: 'First Name'},
        {key: 'lastName', label: 'Last Name'},
        {key: 'phoneNumber', label: 'Phone Number'},
        {key: 'mobileNetwork', label: 'Mobile Network'},
    ],
    rows: [
        {id: "1", firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890', mobileNetwork: 'Verizon'},
        {id: "1", firstName: 'Jane', lastName: 'Doe', phoneNumber: '987-654-3210', mobileNetwork: 'AT&T'},
        {id: "1", firstName: 'Alice', lastName: 'Smith', phoneNumber: '555-123-4567', mobileNetwork: 'T-Mobile'},
        {id: "1", firstName: 'Bob', lastName: 'Johnson', phoneNumber: '444-555-6666', mobileNetwork: 'Sprint'},
        {id: "1", firstName: 'Eva', lastName: 'Williams', phoneNumber: '777-888-9999', mobileNetwork: 'Verizon'},
        {id: "1", firstName: 'Charlie', lastName: 'Brown', phoneNumber: '123-987-6543', mobileNetwork: 'AT&T'},
        {id: "1", firstName: 'Olivia', lastName: 'Davis', phoneNumber: '111-222-3333', mobileNetwork: 'T-Mobile'},
        {id: "1", firstName: 'Daniel', lastName: 'Lee', phoneNumber: '333-444-5555', mobileNetwork: 'Sprint'},
        {id: "1", firstName: 'Sophia', lastName: 'Taylor', phoneNumber: '666-777-8888', mobileNetwork: 'Verizon'}
    ],
};

const sampleMerchantData = {
    columns: [
        {key: 'businessName', label: 'Merchant Business Name'},
        {key: 'tradingName', label: 'Trading Name'},
        {key: 'merchantID', label: 'Merchant ID'},
        {key: 'merchantAddress', label: 'Merchant Address'},
        {key: 'country', label: 'Country'},
    ],
    rows: [
        {
            id: "1",
            businessName: 'ABC Electronics',
            tradingName: 'ABC Electronics Trading',
            merchantID: 'MID123456',
            merchantAddress: '123 Main Street, Cityville, USA',
            country: 'United States',
        },
        {
            id: "1",
            businessName: 'XYZ Clothing',
            tradingName: 'XYZ Fashion Outlet',
            merchantID: 'MID789012',
            merchantAddress: '456 High Street, Townsville, Canada',
            country: 'Canada',
        },
        {
            id: "1",
            businessName: 'Tech Solutions Ltd.',
            tradingName: 'Tech Solutions',
            merchantID: 'MID345678',
            merchantAddress: '789 Tech Park, Innovation City, Australia',
            country: 'Australia',
        },
        {
            id: "1",
            businessName: 'Green Groceries',
            tradingName: 'Fresh Foods',
            merchantID: 'MID901234',
            merchantAddress: '101 Organic Lane, Greensburg, UK',
            country: 'United Kingdom',
        },
        {
            id: "1",
            businessName: 'Global Imports',
            tradingName: 'Worldwide Goods',
            merchantID: 'MID567890',
            merchantAddress: '567 Import Street, International City, Germany',
            country: 'Germany',
        },
        {
            id: "1",
            businessName: 'Fashion Trends Inc.',
            tradingName: 'Trendy Styles',
            merchantID: 'MID234567',
            merchantAddress: '890 Fashion Avenue, Paris, France',
            country: 'France',
        },
        {
            id: "1",
            businessName: 'Food Haven',
            tradingName: 'Delicious Eats',
            merchantID: 'MID890123',
            merchantAddress: '321 Gourmet Lane, Foodtown, Italy',
            country: 'Italy',
        },
        {
            id: "1",
            businessName: 'Sports Gear Outlet',
            tradingName: 'Athlete Choice',
            merchantID: 'MID456789',
            merchantAddress: '654 Sportswear Street, Fitness City, Spain',
            country: 'Spain',
        },
        {
            id: "1",
            businessName: 'Home Essentials',
            tradingName: 'Cozy Living',
            merchantID: 'MID012345',
            merchantAddress: '987 Homeware Road, Comfort Town, Brazil',
            country: 'Brazil',
        },
        {
            id: "1",
            businessName: 'Gadget Emporium',
            tradingName: 'Tech Gadgets',
            merchantID: 'MID678901',
            merchantAddress: '543 Gizmo Lane, Techtopia, Japan',
            country: 'Japan',
        },
    ],
};






const DashBoardOverViewPage = () => {
    return (
        <Flex direction="column" gap="6" mt="7" px="6">
            <Flex gap="6">{clientsData.map(
                item => <DashboardCardItem key={item.label} {...item}/>
            )}
            </Flex>
            <Flex gap="6">
                <PieChartCard chartData={pieChartData} legendData={pieChartLegendData}/>
                <DashBoardTable href="/" description="Last 10 registered customers" data={sampleCustomerData}/>
            </Flex>
            <Flex gap="6">
                <DashBoardTable href="/" description="Last 10 merchants onboarded" data={sampleMerchantData}/>
            </Flex>
        </Flex>
    );
};

export default DashBoardOverViewPage;