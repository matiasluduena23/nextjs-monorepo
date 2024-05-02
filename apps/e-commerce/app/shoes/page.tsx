import React from 'react';
import { getCollections } from '../lib/data';
import { Producto } from '../lib/definitions';
import CardProduct from '../ui/CardProduct';

export default async function page() {
	const data: Producto[] = await getCollections();
	const shoes = data.filter((item) => item.category.id === 4);

	return (
		<div className="container mx-auto">
			<h1 className="text-center text-2xl text-clDarkGreyblue font-bold mt-8">
				Shoes
			</h1>
			<main className="grid grid-cols-1 gap-8 my-[1rem] ">
				{shoes &&
					shoes.map((item) => (
						<CardProduct key={item.id} producto={item} />
					))}
			</main>
			;
		</div>
	);
}
