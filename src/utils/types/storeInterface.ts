import ISelect from "@/utils/types/select";
import PageInfo from "@/utils/types/pagination";

export interface IPageStore {
    pageNumber: number,
    orderByOptions: ISelect[],
    pageSizes: ISelect[],
    selectedOrderBy: ISelect,
    selectedPageSize: ISelect,
    pagination: PageInfo
    updatePagination: (param: PageInfo) => void
    orderByChange: (value: ISelect) => any
    pageSizeChange: (value: ISelect) => any
    incrementPageNumber: () => void
    decrementPageNumber: () => void

}
