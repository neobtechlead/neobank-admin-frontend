export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-GH', {
        style: 'decimal',
    }).format(amount);
}


