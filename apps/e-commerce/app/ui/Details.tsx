'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import ButtonCount from '@/app/ui/ButtonCount';
import Button from './Button';
import { CartContextProps, Producto } from '../lib/definitions';
import { CartContext } from '../lib/provider/context';
import DialogImage from './DialogImage';

export default function Details({ product }: { product: Producto }) {
	const { image, title, category, description, price, id } = product;
	const [count, setCount] = useState(0);

	const { cartItems, setCartItems } = useContext(
		CartContext
	) as CartContextProps;

	const arrImages = [
		{
			id: 1,
			image: image,
		},
		{
			id: 2,
			image: image,
		},
		{
			id: 3,
			image: image,
		},
		{
			id: 4,
			image: image,
		},
	];

	const [imageId, setImageId] = useState(1);

	const handleClick = () => {
		if (count === 0) return;

		if (cartItems.some((item) => item.id === id)) {
			const newArray = cartItems.map((item) => {
				if (item.id === id)
					return { ...item, amount: item.amount + count };
				else return { ...item };
			});
			setCartItems(newArray);
		} else {
			setCartItems([
				...cartItems,
				{ id, title, amount: count, price, image },
			]);
		}
	};

	return (
		<>
			<section className="mx-auto sm:flex sm:items-center justify-center sm:mt-16 gap-16">
				<div className="flex flex-col mx-auto  md:w-[50%] md:ml-20 gap-12 ">
					<DialogImage imageId={imageId} images={arrImages} />

					<div className="flex justify-center gap-4 md:gap-12 rounded-lg h-[60px] ">
						{arrImages.length > 0 &&
							arrImages.map((item) => (
								<button
									key={item.id}
									onClick={() =>
										setImageId((prev) => (prev = item.id))
									}
								>
									<Image
										className="border border-clOrange rounded-lg p-2 object-contain"
										src={item.image}
										alt={title}
										height={60}
										width={60}
									/>
								</button>
							))}
					</div>
				</div>

				<div className="md:w-[50%]">
					<div className="p-8 w-full md:max-w-[500px] ">
						<span className="block text-clOrange uppercase tracking-[2px] text-[12px] my-4 font-bold ">
							{category}
						</span>
						<h2 className="text-xl font-semibold sm:text-4xl">
							{title}
						</h2>
						<p className="text-clDarkGreyblue sm:mt-12 sm:mb-8">
							{description}
						</p>
						<div className="flex items-center justify-between font-bold sm:flex-col sm:items-start sm:mb-6">
							<div className="flex items-center gap-2 ">
								<p className="my-4  text-clDarkBlue text-2xl sm:my-0">
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
						<div className="flex flex-col sm:flex-row gap-4">
							<ButtonCount count={count} setCount={setCount} />
							<Button
								className="w-full py-3 sm:w-[60%] sm:py-0"
								onClick={handleClick}
							>
								Add to cart
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
