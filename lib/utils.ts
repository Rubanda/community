import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function HtruncateText(text: string, maxLenght: number): string {

  if (text.length > maxLenght) {
    return text.slice(0, maxLenght) + "...";
  }

  return text;
} 