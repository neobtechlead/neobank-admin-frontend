'use client'
import React, {useEffect, useMemo, useState} from 'react';
import {Box, Flex} from "@radix-ui/themes";
import {useRouter} from "next/navigation";
import ErrorPage from "@/app/error";
import useCustomerData, {mapDataToCustomerTable} from "@/api/hooks/queries/useCustomerData";
import useCustomerStore from "@/stores/customer";
import CustomerSkeleton from "@/app/dashboard/customers/loading";
import CustomSelect from "@/components/CustomSelect";
import {color} from "@/utils/constants";
import {Pagination} from "@/components/pagination";
import CustomerTable from "@/app/dashboard/customers/components/CustomerTable";
import {CustomersResponse} from "@/utils/types/dto";
import {calculatePageInfo} from "@/utils/functions";
import SearchInput from "@/components/SearchInput";
import DrawerContainer from "@/components/DrawerContainer";
import CustomerDetails from "@/app/dashboard/customers/components/CustomerDetails";
import EmptyPlaceholder from "@/assets/images/emptyplaceholdercust.png";
import NoActivityWrapper from "@/components/NoActivityWrapper";
import ModalDialog from "@/components/ModalDialog";
import MerchantModificationForm from "@/app/merchants/components/MerchantModificationForm";
import CustomerBalanceAdjustmentForm from "@/app/dashboard/customers/components/CustomerBalanceAdjustmentForm";

const CustomerPage = () => {

    const router = useRouter()

    const {
        pageSizeChange,
        updatePagination,
        incrementPageNumber,
        decrementPageNumber,
        pagination,
        pageNumber,
        selectedPageSize,
        pageSizes,
    } = useCustomerStore();


    const [isOpen, setIsOpen] = useState(false)
    const [selectedCustomerId, setSelectCustomerId] = useState("")
    const [isBalanceEditModalOpen, setBalanceEditModalOpen] = useState(false);



    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState)
    }

    const handleBalanceEditModalClose = () => {
        setBalanceEditModalOpen(false)
    }


    const pageSize = parseInt(selectedPageSize.value)
    const {data, isLoading, error} = useCustomerData(pageNumber, pageSize);



    const mappedData = useMemo(() => {
        if (!data) return {columns: [], rows: []};
        return mapDataToCustomerTable(data);
    }, [data]);

    // Updating pagination information in store on data change
    useEffect(() => {
        if (data) {
            const {metaData: {last, totalElements, pageNo, pageSize}} = data as CustomersResponse
            const [offset, numberOfElements, first] = calculatePageInfo(pageNo!, pageSize!, totalElements!);
            updatePagination({last, first, offset, totalElements, numberOfElements})
        }

    }, [data])

    const handleRowClick = (id: string) => {
        setSelectCustomerId(id)
        toggleDrawer()


    }


    if (isLoading) return <CustomerSkeleton/>;
    if (error) return <ErrorPage onRetry={() => router.refresh()}/>;


    // mappedData.rows = []
    if (mappedData.rows.length === 0) return <NoActivityWrapper btnLabel=""
                                                                item="customer"
                                                                path=""
                                                                description="You have no customers yet. This section will display information when customers come onboard."
                                                                iconPlaceHolder={EmptyPlaceholder}/>


    return (
        <>
            {selectedCustomerId && <DrawerContainer isOpen={isOpen} onClose={toggleDrawer}>
                <CustomerDetails id={selectedCustomerId} onBalanceModify={() => setBalanceEditModalOpen(true)}/>
            </DrawerContainer>}

            <ModalDialog isOpen={isBalanceEditModalOpen} onRequestClose={handleBalanceEditModalClose}>
                <CustomerBalanceAdjustmentForm
                    defaultValues={{currentBalance: 45666, newBalance: 45666}} //To be removed
                    onModalClose={handleBalanceEditModalClose}
                    customerId={selectedCustomerId}/>
            </ModalDialog>

            <Box p="5">
                <Flex direction="column" gap="5">
                    <Flex justify="end">
                        <Flex gap="3" align="stretch">
                            <SearchInput onChange={(value) => console.log(value)}/>
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