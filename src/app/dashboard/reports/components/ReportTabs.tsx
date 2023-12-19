import React from 'react';
import {Flex} from "@radix-ui/themes";
import useReportStores from "@/stores/reports";

const ReportTabs = () => {

    const {selectReportTab, updateSelectedReportTab} = useReportStores()

    const btnClasses = (tabName: string) => `p-2 ${selectReportTab === tabName ? 'border-b-[3px] border-purple-900 font-bold' : ''}`

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