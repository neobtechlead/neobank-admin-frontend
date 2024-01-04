import React, {useEffect, useMemo, useState} from "react";
import useCustomerStore, {useCustomerDetailsStore} from "@/stores/customer";
import {calculatePageInfo, formatAsIssuerId} from "@/utils/functions";
import useCustomerData, {mapDataToCustomerTable} from "@/api/hooks/queries/useCustomerData";
import {CustomersResponse} from "@/utils/types/dto";

const useCustomers = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [useSearchFilter, setUseSearchFilter] = useState(false)


    const {

        updatePagination,
        pageNumber,
        selectedPageSize,

    } = useCustomerStore();


    const {
        setIssuerId,
        setSelectedId,
        setEditBalanceModalOpen,
    } = useCustomerDetailsStore()

    const toggleDrawer = () => {
        setDrawerOpen(prevState => !prevState)
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearchQuery(value)
        setUseSearchFilter(true)
    };

    const handleBalanceEditModalClose = () => {
        setEditBalanceModalOpen(false)
    }

    const onBalanceModify = (issuerId: string) => {
        if (issuerId) {
            setIssuerId(formatAsIssuerId(issuerId))
            setEditBalanceModalOpen(true)
        }

    }

    const pageSize = parseInt(selectedPageSize.value)
    const {data, isLoading, error} = useCustomerData(pageNumber, pageSize, searchQuery);


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
        setSelectedId(id)
        toggleDrawer()


    }


    return {
        handleBalanceEditModalClose,
        handleRowClick,
        onBalanceModify,
        toggleDrawer,
        handleOnChange,
        isSearching: useSearchFilter,
        isDrawerOpen,
        isLoading,
        searchQuery,
        mappedData,
        error
    }


}

export default useCustomers