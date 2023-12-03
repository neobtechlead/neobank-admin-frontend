export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-GH', {
        style: 'decimal',
    }).format(amount);
}


export function formatCurrencyAlt(amount: number): string {
    return new Intl.NumberFormat('en-GH', {
        style: 'decimal',
        currency: 'GHS',
        minimumFractionDigits: 2, // Set the minimum number of fraction digits to 2
    }).format(amount);
}

export function calculatePageInfo(pageNo: number, pageSize: number, totalElements: number): [number, number, boolean] {
    const pageOffset: number = pageNo * pageSize;
    const numberOfElements: number = Math.min(pageSize, (totalElements - pageOffset));
    const isFirstPage: boolean = pageNo === 0;
    return [pageOffset, numberOfElements, isFirstPage];
}

export function generateAvatarFallBack(name: string): string {
    return name.split(' ')
        .map(word => word[0])
        .filter(char => /[a-zA-Z]/.test(char)) // Filter out non-alphabet characters
        .slice(0, 2)
        .join('')
        .toUpperCase()
}


