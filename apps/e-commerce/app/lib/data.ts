import { Producto } from './definitions';

export async function getCollections() {
	try {
		const response = await fetch('https://fakestoreapi.com/products');
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Error Fetching data' + error);
		throw new Error('Failed to fetch the products.');
	}
}

export async function getCategory(category: string) {
	try {
		const response = await fetch(
			`https://fakestoreapi.com/products/category/${category}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Error Fetching data' + error);
		throw new Error('Failed to fetch the products.');
	}
}

export async function getProduct(id: string) {
	try {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Error Fetching data' + error);
		throw new Error('Failed to fetch the products.');
	}
}
