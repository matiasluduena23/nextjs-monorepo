import { getCategory } from '../lib/data';
import { Producto } from '../lib/definitions';
import CardProduct from '../ui/CardProduct';
import { CATEGORIES } from '../lib/constants';

export default async function page() {
	const data: Producto[] = await getCategory(CATEGORIES.electronic);

	return (
		<>
			<div className="container mx-auto">
				<h1 className="text-center text-2xl text-clDarkGreyblue font-bold mt-8">
					Electronics
				</h1>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,11fr))] justify-center gap-x-2 gap-y-4">
					{data &&
						data.map((item) => (
							<CardProduct key={item.id} producto={item} />
						))}
				</div>
			</div>
		</>
	);
}
