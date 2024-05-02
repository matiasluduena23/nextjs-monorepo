import React, { cloneElement } from 'react';
import { getCollections } from '../lib/data';
import { Producto } from '../lib/definitions';
import CardProduct from '../ui/CardProduct';

export default async function page() {
	const data: Producto[] = await getCollections();
	const clothes = data.filter((item) => item.category.id === 1);

	return (
		<div className="container mx-auto">
			<h1 className="text-center text-2xl text-clDarkGreyblue font-bold mt-8">
				Clothes
			</h1>
			<main className="grid grid-cols-1 gap-8 my-[3rem] ">
				{clothes &&
					clothes.map((item) => (
						<CardProduct key={item.id} producto={item} />
					))}
			</main>
			;
		</div>
	);
}
