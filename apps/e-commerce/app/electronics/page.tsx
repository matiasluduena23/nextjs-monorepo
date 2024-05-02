import { getCollections } from '../lib/data';
import { Producto } from '../lib/definitions';
import CardProduct from '../ui/CardProduct';

export default async function page() {
	const collections: Producto[] = await getCollections();
	const electronics = collections.filter((item) => item.category.id === 2);
	return (
		<>
			<div className="container mx-auto">
				<h1 className="text-center text-2xl text-clDarkGreyblue font-bold mt-8">
					Electronics
				</h1>
				<main className="grid grid-cols-1 gap-8 my-[3rem] ">
					{collections &&
						electronics.map((item) => (
							<CardProduct key={item.id} producto={item} />
						))}
				</main>
			</div>
		</>
	);
}
