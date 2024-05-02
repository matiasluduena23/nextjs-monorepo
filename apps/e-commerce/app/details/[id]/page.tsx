import { getProduct } from '@/app/lib/data';
import { Producto } from '@/app/lib/definitions';
import React from 'react';

import Details from '@/app/ui/Details';

export default async function page({ params }: { params: { id: string } }) {
	const producto: Producto = await getProduct(params.id);

	return (
		<main>
			<Details product={producto} />
		</main>
	);
}