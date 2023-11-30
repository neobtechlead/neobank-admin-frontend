'use client'
import React, {useEffect, useMemo} from 'react';
import {Box, Flex} from "@radix-ui/themes";
import {useRouter} from "next/navigation";
import MerchantSkeleton from "@/app/dashboard/merchants/loading";
import ErrorPage from "@/app/error";
import EmptyMerchantPage from "@/app/dashboard/merchants/components/EmptyMerchantPage";
import CustomSelect from "@/components/CustomSelect";
import {color} from "@/utils/constants";
import {Pagination} from "@/components/pagination";
import usersStore from "@/stores/user";
import useGetUsersData, {mapDataToUsersTable} from "@/api/hooks/useGetUsersData";
import SearchFilter from "@/components/SearchFilter";
import UserTable from "@/app/dashboard/users/components/UserTable";

const UserPage = () => {
    const {
        pageSizeChange,
        updatePagination,
        incrementPageNumber,
        decrementPageNumber,
        pagination,
        pageNumber,
        selectedPageSize,
        pageSizes
    } = usersStore();

    const router = useRouter()

    const pageSize = parseInt(selectedPageSize.value)
    const {data, isLoading, error} = useGetUsersData(pageNumber, pageSize);


    const mappedData = useMemo(() => {
        if (!data) return {columns: [], rows: []};

        return mapDataToUsersTable(data);
    }, [data]);

    // Updating pagination information in store on data change
    useEffect(() => {
        if (data) {
            const {last, first, totalElements, numberOfElements, pageable: {offset}} = data
            updatePagination({last, first, offset, totalElements, numberOfElements})
        }

    }, [data])


    if (isLoading) return <MerchantSkeleton/>;
    if (error) return <ErrorPage onRetry={() => router.refresh()}/>;

    //if empty row
    if (mappedData.rows.length === 0) return <EmptyMerchantPage/>


    return (
        <Box p="5">
            <Flex direction="column" gap="5">
                <Flex justify="end">
                    <Flex gap="3" align="stretch">
                        <Flex gap="3" align="stretch">
                            <SearchFilter onChange={(value) => console.log(value)}/>
                        </Flex>
                    </Flex>
                </Flex>
                <UserTable data={mappedData}/>
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
    );

};

export default UserPage;