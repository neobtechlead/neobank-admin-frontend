'use client'
import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import {useRouter} from "next/navigation";
import ErrorPage from "@/app/error";
import NoActivityWrapper from "@/components/NoActivityWrapper";
import CustomSelect from "@/components/CustomSelect";
import {color} from "@/utils/constants";
import {Pagination} from "@/components/pagination";
import usersStore from "@/stores/user";
import SearchInput from "@/components/SearchInput";
import UserTable from "@/app/users/components/UserTable";
import UsersSkeleton from "@/app/users/loading";
import EmptyPlaceholder from "@/assets/images/emptyplaceholderuser.png"
import SimpleButton from "@/components/SimpleButton";
import useUsers from "@/app/users/hooks/useUsers";
import Header from "@/app/overview/components/Header";

const UserPage = () => {

    const {
        selectedPageSize,
        pageSizes,
        pageSizeChange,
        decrementPageNumber,
        incrementPageNumber,
        pagination
    } = usersStore()

    const router = useRouter()
    const {mappedData, isLoading, isSearching, error, searchQuery, handleOnChange} = useUsers()


    if (isLoading && !isSearching) return <UsersSkeleton/>;
    if (error) return <ErrorPage onRetry={() => router.refresh()}/>;


    //if empty row
    if (!isSearching && mappedData.rows.length === 0) return <NoActivityWrapper btnLabel="Create New User"
                                                                                item="user"
                                                                                path="/users"
                                                                                iconPlaceHolder={EmptyPlaceholder}

    />

    return (
        <Box>
            <Header/>
            <Box p="5">
                <Flex direction="column" gap="5">
                    <Flex justify="end">
                        <Flex gap="3" align="stretch">
                            <Flex gap="3">
                                <SearchInput
                                    isFetching={isSearching && isLoading}
                                    value={searchQuery}
                                    placeholder="Search Merchant"
                                    onChange={handleOnChange}
                                />
                                <SimpleButton
                                    onClick={() => router.push("/users/register")}
                                    overrideClassName="!px-6">
                                    Create New User
                                </SimpleButton>
                            </Flex>
                        </Flex>
                    </Flex>
                    <>
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
                    </>
                </Flex>
            </Box>
        </Box>
    );

};

export default UserPage;