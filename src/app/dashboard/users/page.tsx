'use client'
import React, {useEffect, useMemo} from 'react';
import {Box, Flex} from "@radix-ui/themes";
import {useRouter} from "next/navigation";
import ErrorPage from "@/app/error";
import NoActivityWrapper from "@/components/NoActivityWrapper";
import CustomSelect from "@/components/CustomSelect";
import {color} from "@/utils/constants";
import {Pagination} from "@/components/pagination";
import usersStore from "@/stores/user";
import useGetUsersData, {mapDataToUsersTable} from "@/api/hooks/queries/useGetUsersData";
import SearchFilter from "@/components/SearchFilter";
import UserTable from "@/app/dashboard/users/components/UserTable";
import UsersSkeleton from "@/app/dashboard/users/loading";
import EmptyPlaceholder from "@/assets/images/emptyplaceholderuser.png"
import SimpleButton from "@/components/SimpleButton";

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


    if (isLoading) return <UsersSkeleton/>;
    if (error) return <ErrorPage onRetry={() => router.refresh()}/>;

    // mappedData.rows = []
    //if empty row
    if (mappedData.rows.length === 0) return <NoActivityWrapper btnLabel="Create New User"
                                                                item="user"
                                                                path="/users"
                                                                iconPlaceHolder={EmptyPlaceholder}

    />


    return (
        <Box p="5">
            <Flex direction="column" gap="5">
                <Flex justify="end">
                    <Flex gap="3" align="stretch">
                        <Flex gap="3" align="stretch">
                            <SearchFilter onChange={(value) => console.log(value)}/>
                            <SimpleButton
                                onClick={() => router.push("/users")}
                                overrideClassName="!px-6">
                                Create New User
                            </SimpleButton>
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