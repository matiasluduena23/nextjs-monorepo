import React, { cloneElement } from 'react';
import { getCategory, getCollections } from '../lib/data';
import { Producto } from '../lib/definitions';
import CardProduct from '../ui/CardProduct';
import { CATEGORIES } from '../lib/constants';

export default async function page() {
	const data: Producto[] = await getCategory(CATEGORIES.men);

	return (
		<div className="container mx-auto  relative -z-10">
			<h1 className="text-center text-2xl text-clDarkGreyblue font-bold mt-8">
				Men
			</h1>
			<main className="grid grid-cols-1 gap-8 my-[3rem]  ">
				{data &&
					data.map((item) => (
						<CardProduct key={item.id} producto={item} />
					))}
			</main>
			;
		</div>
	);
}
