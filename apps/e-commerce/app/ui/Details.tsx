'use client';
//images
import smallImage1 from '@/public/image-product-1-thumbnail.jpg';
import smallImage2 from '@/public/image-product-2-thumbnail.jpg';
import smallImage3 from '@/public/image-product-3-thumbnail.jpg';
import image1 from '@/public/image-product-1.jpg';
import image2 from '@/public/image-product-2.jpg';
import image3 from '@/public/image-product-3.jpg';

import React, { useContext, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import ButtonCount from '@/app/ui/ButtonCount';
import Button from './Button';
import { CartContextProps, Producto } from '../lib/definitions';
import { CartContext } from '../lib/provider/context';
import DialogImage from './DialogImage';

export default function Details({ product }: { product: Producto }) {
	const { image, title, category, description, price, id } = product;
	const [count, setCount] = useState(0);
	const [openDialogImage, setOpenDialogImage] = useState(false);

	const [updateImage, setUpdateImage] = useState<string | StaticImageData>(
		image
	);
	const { cartItems, setCartItems } = useContext(
		CartContext
	) as CartContextProps;

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
			<section className="mx-auto sm:flex sm:items-center justify-center sm:mt-32 gap-16">
				<div className="flex flex-col   w-[50%] ml-20 gap-12 ">
					<button
						onClick={() => setOpenDialogImage(!openDialogImage)}
					>
						<Image
							className="mx-auto border border-clOrange rounded-lg p-4"
							src={updateImage}
							alt={title}
							height={300}
							width={200}
						/>
						<DialogImage
							openDialogImage={openDialogImage}
							setOpenDialogImage={setOpenDialogImage}
						/>
					</button>

					<div className="flex justify-center gap-12 rounded-lg h-[60px] ">
						<button onClick={() => setUpdateImage(image)}>
							<Image
								className="border border-clOrange rounded-lg p-2 object-cover"
								src={image}
								alt={title}
								height={40}
								width={60}
							/>
						</button>
						<button onClick={() => setUpdateImage(image1)}>
							<Image
								className="border border-clOrange rounded-lg p-2 object-contain"
								src={smallImage1}
								alt={title}
								height={60}
								width={60}
							/>
						</button>
						<button onClick={() => setUpdateImage(image2)}>
							<Image
								className="border border-clOrange rounded-lg p-2 object-contain"
								src={smallImage2}
								alt={title}
								height={60}
								width={60}
							/>
						</button>
						<button onClick={() => setUpdateImage(image3)}>
							<Image
								className="border border-clOrange rounded-lg p-2 object-contain"
								src={smallImage3}
								alt={title}
								height={60}
								width={60}
							/>
						</button>
					</div>
				</div>

				<div className="w-[50%]">
					<div className="p-8 sm:max-w-[500px] ">
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
