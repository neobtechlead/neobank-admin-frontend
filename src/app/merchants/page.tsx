'use client'
import React, {useEffect, useMemo} from 'react';
import {Box, Flex} from "@radix-ui/themes";
import MerchantTable from "@/app/merchants/components/MerchantTable";
import LinkIcon from "@/components/LinkIcon";
import CaretRight from "@/assets/svgs/CaretRight.svg";
import PlusIcon from "@/assets/svgs/Plus.svg"
import CustomSelect from "@/components/CustomSelect";
import {color} from "@/utils/constants";
import {Pagination} from "@/components/pagination";
import useMerchantStore from "@/stores/merchant";
import useMerchantData from "@/api/hooks/queries/useMerchantData";
import type {IRow, ITable} from "@/utils/types/table";
import type {Merchant, PaginatedResponse} from "@/utils/types/dto";
import MerchantsSkeleton from "@/app/merchants/loading";
import ErrorPage from "@/app/error";
import {useRouter} from "next/navigation";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import NoActivityWrapper from "@/components/NoActivityWrapper";
import EmptyPlaceholder from "@/assets/images/emptyplaceholder.png"
import Header from "@/app/overview/components/Header";


const columns = [
    {key: 'businessName', label: 'Merchant Business Name'},
    {key: 'tradingName', label: 'Merchant Trading Name'},
    {key: 'neobankAccountNumber', label: 'Merchant ID'},
    {key: 'address', label: 'Merchant Address'},
    {key: 'country', label: 'Country'},
    {key: 'icon', label: ''}

]

// Maps API data to the format expected by the MerchantTable component
const mapDataToMerchantTable = (data: PaginatedResponse<Merchant>): ITable => {
    const {content} = data
    const rows: IRow[] = content.map((item: Merchant) => {
        const externalId = item.externalId || "";

        const rowData: IRow = {id: externalId}; //id is not truncated externalId
        const columnKeys = columns.map(item => item.key)

        columnKeys.forEach((key) => {
            if (key === 'address') rowData[key] = item.address?.city
            else if (key === 'country') rowData[key] = item.address?.country
            else if (key === 'icon') rowData[key] = <LinkIcon href={`/merchants/${externalId}`} icon={CaretRight}/>
            else rowData[key] = (item as any)[key] ?? ""
        });

        return rowData;
    });

    return {columns, rows};
};


const MerchantsPage = () => {
    const {
        orderByOptions,
        selectedOrderBy,
        orderByChange,
        pageSizeChange,
        updatePagination,
        incrementPageNumber,
        decrementPageNumber,
        pagination,
        pageNumber,
        selectedPageSize,
        pageSizes
    } = useMerchantStore();

    const router = useRouter()

    const pageSize = parseInt(selectedPageSize.value)
    const orderBy = selectedOrderBy.value
    const {data, isLoading, error} = useMerchantData(pageNumber, pageSize, orderBy);

    const mappedData = useMemo(() => {
        if (!data) return {columns, rows: []};

        return mapDataToMerchantTable(data);
    }, [data]);

    // Updating pagination information in store on data change
    useEffect(() => {
        if (data) {
            const {last, first, totalElements, numberOfElements, pageable: {offset}} = data
            updatePagination({last, first, offset, totalElements, numberOfElements})
        }

    }, [data])


    if (isLoading) return <MerchantsSkeleton/>;
    if (error) return <ErrorPage onRetry={() => router.refresh()}/>;

    // mappedData.rows = []
    // if empty row
    if (mappedData.rows.length === 0) return <NoActivityWrapper btnLabel="Create New Merchant"
                                                                item="merchant"
                                                                path="/merchants/register"
                                                                iconPlaceHolder={EmptyPlaceholder}
    />


    return (
        <Box>
            <Header/>
            <Box p="5">
                <Flex direction="column" gap="5">
                    <Flex justify="end">
                        <Flex gap="3" align="stretch">
                            <ButtonWithIcon
                                label="Create New Merchant"
                                onClick={() => router.push("/merchants/register")}
                                icon={PlusIcon}
                            />
                            <CustomSelect
                                options={orderByOptions}
                                defaultValue={selectedOrderBy}
                                onSelectChange={orderByChange}
                            />
                        </Flex>
                    </Flex>
                    <MerchantTable data={mappedData}/>
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

export default MerchantsPage;
