import React from 'react';
import {Flex} from "@radix-ui/themes";
import useReportStores from "@/stores/report/reports";

const ReportTabs = () => {

    const {selectedReportTab, updateSelectedReportTab} = useReportStores()

    const btnClasses = (tabName: string) => `p-2 transition duration-300 ease-in-out ${selectedReportTab === tabName ? 'border-b-[3px] border-purple-900 font-bold' : ''}`

    return (
        <Flex gap="6">
            <button className={btnClasses('merchants')} onClick={() => updateSelectedReportTab('merchants')}>
                Merchant Reports
            </button>

            <button className={btnClasses('customers')} onClick={() => updateSelectedReportTab('customers')}>
                Customer Reports
            </button>

        </Flex>
    );
};

export default ReportTabs;