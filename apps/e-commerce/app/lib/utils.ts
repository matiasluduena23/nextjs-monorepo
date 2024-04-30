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
