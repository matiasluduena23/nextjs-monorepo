import { getCollections } from './lib/data';
import { Producto } from './lib/definitions';
import CardProduct from './ui/CardProduct';

export default async function page() {
	const collections: Producto[] = await getCollections();
	const productWithImage = collections.filter((item) =>
		item.images[0].includes('http')
	);
	return (
		<>
			<div className="container mx-auto">
				<main className="grid grid-cols-1 gap-8 my-[3rem] ">
					{collections &&
						productWithImage.map((item) => (
							<CardProduct key={item.id} producto={item} />
						))}
				</main>
			</div>
		</>
	);
}
