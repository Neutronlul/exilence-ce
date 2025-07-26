import { rootStore } from '..';

export function currencyConversion(value: number, precision: number): string {
  const rate = rootStore.priceStore.divinePrice;
  // If divinePrice is not available, just return value in chaos
  if (!rate) {
    return value.toFixed(precision) + 'c';
  }
  return value < rate ? value.toFixed(precision) + 'c' : (value / rate).toFixed(precision) + 'd';
}

export function getChaosToDivine(): number {
  const rate = rootStore.priceStore.divinePrice;
  // If divinePrice is not available, return 1
  return rate ?? 1;
}
