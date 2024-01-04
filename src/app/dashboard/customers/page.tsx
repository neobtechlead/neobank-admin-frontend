'use client'
import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import {useRouter} from "next/navigation";
import ErrorPage from "@/app/error";
import useCustomerStore, {useCustomerDetailsStore} from "@/stores/customer";
import CustomerSkeleton from "@/app/dashboard/customers/loading";
import CustomSelect from "@/components/CustomSelect";
import {color} from "@/utils/constants";
import {Pagination} from "@/components/pagination";
import CustomerTable from "@/app/dashboard/customers/components/CustomerTable";
import SearchInput from "@/components/SearchInput";
import DrawerContainer from "@/components/DrawerContainer";
import CustomerDetails from "@/app/dashboard/customers/components/CustomerDetails";
import EmptyPlaceholder from "@/assets/images/emptyplaceholdercust.png";
import NoActivityWrapper from "@/components/NoActivityWrapper";
import ModalDialog from "@/components/ModalDialog";
import CustomerBalanceAdjustmentForm from "@/app/dashboard/customers/components/CustomerBalanceAdjustmentForm";
import useCustomers from "@/app/dashboard/customers/hooks/useCustomers";


const CustomerPage = () => {

    const {issuerId, isEditBalanceModalOpen, selectedId} = useCustomerDetailsStore()
    const {
        selectedPageSize,
        pageSizes,
        pageSizeChange,
        decrementPageNumber,
        incrementPageNumber,
        pagination
    } = useCustomerStore()


    const router = useRouter()
    const {
        isDrawerOpen,
        isLoading,
        error,
        mappedData,
        searchQuery,
        handleOnChange,
        isSearching,
        toggleDrawer,
        handleBalanceEditModalClose,
        handleRowClick,
        onBalanceModify
    } = useCustomers()


    if (isLoading && !isSearching) return <CustomerSkeleton/>;
    if (error) return <ErrorPage onRetry={() => router.refresh()}/>;


    // mappedData.rows = []
    if (!isSearching && mappedData.rows.length === 0) return <NoActivityWrapper btnLabel=""
                                                                item="customer"
                                                                path=""
                                                                description="You have no customers yet. This section will display information when customers come onboard."
                                                                iconPlaceHolder={EmptyPlaceholder}/>


    return (
        <>
            {selectedId && <DrawerContainer isOpen={isDrawerOpen} onClose={toggleDrawer}>
                <CustomerDetails id={selectedId} onBalanceModify={onBalanceModify}/>
            </DrawerContainer>}

            {issuerId && <ModalDialog isOpen={isEditBalanceModalOpen} onRequestClose={handleBalanceEditModalClose}>
                <CustomerBalanceAdjustmentForm
                    onModalClose={handleBalanceEditModalClose}
                />
            </ModalDialog>}

            <Box p="5">
                <Flex direction="column" gap="5">
                    <Flex justify="end">
                        <Flex gap="3" align="stretch">
                            <SearchInput
                                isFetching={isSearching && isLoading}
                                placeholder="Search Number"
                                value={searchQuery}
                                onChange={handleOnChange}
                            />
                        </Flex>
                    </Flex>
                    <CustomerTable onRowClick={handleRowClick} data={mappedData}/>
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
        </>
    );
};

export default CustomerPage;