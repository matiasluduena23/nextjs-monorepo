'use client';
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useContext } from 'react';
import { CartContextProps, Producto } from '../lib/definitions';
import cart from '@/public/icon-cart.svg';
import Link from 'next/link';
import Button from './Button';
import { CartContext } from '../lib/provider/context';

export default function CardProduct({ producto }: { producto: Producto }) {
	const { id, image, category, title, price } = producto;
	const { cartItems, setCartItems } = useContext(
		CartContext
	) as CartContextProps;

	const handleClick = () => {
		if (cartItems.some((item) => item.id === id)) {
			const result = cartItems.map((item) => {
				if (item.id === id) return { ...item, amount: item.amount + 1 };
				else return { ...item };
			});
			setCartItems(result);
		} else {
			setCartItems([
				...cartItems,
				{ id, title, amount: 1, price, image },
			]);
		}
	};

	return (
		<article className="p-4 rounded-2xl bg-white border border-clOrange max-w-[320px] mx-auto max-h-[480px]">
			{producto ? (
				<>
					<Link href={`/details/${id}/`}>
						<img
							className="rounded-2xl shadow-md  w-[230px] h-[280px] object-contain mx-auto"
							src={image}
							alt="Picture of the product"
						/>
						<span className="block text-clOrange uppercase tracking-[2px] text-[12px] mt-4 font-bold ">
							{category}
						</span>
						<h2 className="text-xl font-semibold">
							{title.slice(0, 23)}
						</h2>
						<div className="flex items-center justify-between font-bold">
							<div className="flex items-center gap-2">
								<p className="my-4  text-clDarkBlue text-2xl">
									$ {(price / 2).toFixed(2)}
								</p>
								<span className="text-clOrange bg-orange-100 px-2 rounded-md text-sm">
									50%
								</span>
							</div>
							<p className="text-clGrayishblue line-through">
								${price}
							</p>
						</div>
					</Link>
					<div className="flex items-center justify-between gap-2">
						<Button
							className="flex px-3 h-full w-[60%]"
							onClick={handleClick}
						>
							<Image
								className="rounded-2xl text-clLightgrayishblue brightness-200"
								src={cart}
								alt="Picture of the product"
								width={15}
								height={15}
							/>
							<span className="text-sm ">Add to cart</span>
						</Button>
						<Link
							href={`/details/${id}/`}
							className="border border-clOrange text-clOrange py-2 px-4 w-[40%] rounded-md text-center hover:bg-clOrange hover:text-clLightgrayishblue text-sm "
						>
							Details
						</Link>
					</div>
				</>
			) : (
				<p className="text-clDarkGreyblue font-bold">
					{' '}
					Your cart is empty.
				</p>
			)}
		</article>
	);
}
