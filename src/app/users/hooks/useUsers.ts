import usersStore from "@/stores/user";
import useGetUsersData, {mapDataToUsersTable} from "@/api/hooks/queries/useGetUsersData";
import React, {useEffect, useMemo, useState} from "react";


const useUsers = () => {


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

    } = usersStore();


    const pageSize = parseInt(selectedPageSize.value)
    const {data, isLoading, error} = useGetUsersData(pageNumber, pageSize, searchQuery);


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


    return {
        mappedData,
        isLoading,
        error,
        isSearching: useSearchFilter,
        searchQuery,
        handleOnChange
    }


}
export default useUsers