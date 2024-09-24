import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: string) {
  // Create a new number formatter for Vietnamese locale with custom options
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'decimal', // use decimal formatting
    minimumFractionDigits: 0, // ensure no fractional part is shown
  });

  // Format the value and append 'VNĐ'
  return `${formatter.format(Number(value))} VNĐ`;
}
