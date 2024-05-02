import { Producto } from './definitions';

export async function getCollections() {
	try {
		const response = await fetch(
			'https://api.escuelajs.co/api/v1/products'
		);
		const data = await response.json();
		return data.filter(
			(item: Producto) =>
				item.images[0].includes('http') || !item.images[0] === null
		);
	} catch (error) {
		console.log('Error Fetching data' + error);
		throw new Error('Failed to fetch the products.');
	}
}
