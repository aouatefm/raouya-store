export const formatNumber = number => {
    return new Intl.NumberFormat('en-TN', { style: 'currency', currency: 'TND' }).format(number);
}