import React, {useEffect, useMemo, useState} from "react";
import useGetActivityLogs, {mapDataToActivityLogTable} from "@/api/hooks/queries/useGetActivityLogs";
import activityLogStore from "@/stores/activitylogs";


const useActivityLogs = () => {


    const [searchQuery, setSearchQuery] = useState('')
    const [useSearchFilter, setUseSearchFilter] = useState(false)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearchQuery(value)
        setUseSearchFilter(true)
    };


    const {
        updatePagination,
        pageNumber,
        selectedPageSize,

    } = activityLogStore();


    const pageSize = parseInt(selectedPageSize.value)
    const {data, isLoading, error} = useGetActivityLogs(pageNumber, pageSize, searchQuery);


    const mappedData = useMemo(() => {
        if (!data) return {columns: [], rows: []};

        return mapDataToActivityLogTable(data);
    }, [data]);

    // Updating pagination information in store on data change
    useEffect(() => {
        if (data) {
            const {last, first, totalElements, numberOfElements, pageable: {offset}} = data
            updatePagination({last, first, offset, totalElements, numberOfElements})
        }

    }, [data])


    return {
        mappedData,
        isLoading,
        error,
        isSearching: useSearchFilter,
        searchQuery,
        handleOnChange
    }


}
export default useActivityLogs