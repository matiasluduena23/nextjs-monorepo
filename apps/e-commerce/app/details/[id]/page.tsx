import { getProduct } from '@/app/lib/data';
import { Producto } from '@/app/lib/definitions';
import React from 'react';

import Details from '@/app/ui/Details';

export default async function page({ params }: { params: { id: string } }) {
	const product: Producto = await getProduct(params.id);

	return (
		<main className="container mx-auto">
			<Details product={product} />
		</main>
	);
}
