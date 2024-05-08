import { getCollections } from './lib/data';
import { Producto } from './lib/definitions';
import CardProduct from './ui/CardProduct';

export default async function page() {
	const products: Producto[] = await getCollections();

	return (
		<>
			<div className="container mx-auto ">
				<h1 className="text-center text-2xl text-clDarkGreyblue font-bold mt-8 "></h1>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,11fr))] justify-center gap-x-2 gap-y-4">
					{products &&
						products.map((item) => (
							<CardProduct key={item.id} producto={item} />
						))}
				</div>
			</div>
		</>
	);
}
