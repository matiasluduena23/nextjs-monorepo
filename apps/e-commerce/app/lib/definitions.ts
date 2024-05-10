import { StaticImageData } from 'next/image';

export type Producto = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

export type CartItems = {
	id: number;
	title: string;
	amount: number;
	price: number;
	image: string;
};

export type CartContextProps = {
	cartItems: CartItems[];
	setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
};

export type Images = {
	id: number;
	src: string | StaticImageData;
	thumb: string | StaticImageData;
};
