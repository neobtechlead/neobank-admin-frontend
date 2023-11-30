export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-GH', {
        style: 'decimal',
    }).format(amount);
}


export function calculatePageInfo(pageNo: number, pageSize: number, totalElements: number): [number, number, boolean] {
    const pageOffset: number = pageNo * pageSize;
    const numberOfElements: number = Math.min(pageSize, (totalElements - pageOffset));
    const isFirstPage: boolean = pageNo === 0;
    return [pageOffset, numberOfElements, isFirstPage];
}



