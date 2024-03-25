'use client'
import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import Header from "@/app/overview/components/Header";
import activityLogStore from "@/stores/activitylogs";
import useActivityLogs from "@/app/activity-logs/hooks/useActivityLogs";
import CustomSelect from "@/components/CustomSelect";
import {color} from "@/utils/constants";
import {Pagination} from "@/components/pagination";
import ActivityLogTable from "@/app/activity-logs/components/ActivityLogTable";
import SearchInput from "@/components/SearchInput";
import ActivityLogSkeleton from "@/app/activity-logs/loading";

const Page = () => {


    const {
        selectedPageSize,
        pageSizes,
        pageSizeChange,
        decrementPageNumber,
        incrementPageNumber,
        pagination
    } = activityLogStore()

    const {mappedData, isLoading, isSearching, error, searchQuery, handleOnChange} = useActivityLogs()

    if (isLoading && !isSearching) return <ActivityLogSkeleton/>;
    return (
        <Box>
            <Header/>
            <Box p="5">
                <Flex direction="column" gap="5">
                    <Flex justify="end">
                        <Flex gap="3" align="stretch">
                            <Flex>
                                <SearchInput
                                    isFetching={isSearching && isLoading}
                                    value={searchQuery}
                                    placeholder="Search Merchant"
                                    onChange={handleOnChange}
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                    <ActivityLogTable data={mappedData}/>
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
                        <Pagination
                            decrementPageNumber={decrementPageNumber}
                            incrementPageNumber={incrementPageNumber}
                            pagination={pagination}
                        />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default Page;