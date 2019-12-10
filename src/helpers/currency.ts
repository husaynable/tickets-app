export function formatToCurrency(price: number, currency: string): string {
  return new Intl.NumberFormat('ru-RU', {
    currency,
    currencyDisplay: 'symbol',
    style: 'currency',
    minimumFractionDigits: 0
  }).format(price);
}
