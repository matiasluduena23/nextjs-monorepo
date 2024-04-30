export type Producto = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: {
		id: number;
		name: string;
		image: string;
	};
	images: [string, string, string];
};
