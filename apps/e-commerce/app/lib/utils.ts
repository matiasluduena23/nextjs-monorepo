import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function formatImage(image: string) {
	if (image.includes('[')) {
		return image.slice(image.indexOf('[') + 2, image.lastIndexOf(']') - 1);
	}
	return image;
}

export function formatPrice(price: number): string {
	let result = String(price);
	return result.includes('.') ? `${result}0` : `${result}.00`;
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
