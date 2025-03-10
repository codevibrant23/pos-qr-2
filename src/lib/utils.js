import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function toUrlString(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export function toCategoryName(str) {
  return str ? str.replace(/-/g, " ") : "Category";
}
