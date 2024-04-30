/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { Producto } from '../lib/definitions';
import cart from '@/public/icon-cart.svg';
import Link from 'next/link';
import { formatImage, formatPrice } from '../lib/utils';

export default function CardProduct({ producto }: { producto: Producto }) {
	return (
		<article className="p-6 rounded-2xl bg-white border border-clOrange max-w-[320px] mx-auto ">
			<img
				className="rounded-2xl shadow-md "
				src={formatImage(producto.images[0])}
				alt="Picture of the product"
			/>
			<span className="block text-clOrange uppercase tracking-[2px] text-[12px] mt-4 font-bold ">
				{producto.category.name}
			</span>
			<h2 className="text-xl font-semibold">{producto.title}</h2>
			<div className="flex items-center justify-between font-bold">
				<div className="flex items-center gap-4">
					<p className="my-4  text-clDarkBlue text-2xl">
						$ {formatPrice(producto.price / 2)}
					</p>
					<span className="text-clOrange bg-orange-100 px-2 rounded-md text-sm">
						50%
					</span>
				</div>
				<p className="text-clGrayishblue line-through">
					${producto.price}.00
				</p>
			</div>

			<div className="flex items-center justify-between gap-4">
				<button className="bg-clOrange text-clLightgrayishblue flex items-center gap-2  py-2 w-[50%] rounded-md justify-center hover:opacity-70 ">
					<Image
						className="rounded-2xl text-clLightgrayishblue"
						src={cart}
						alt="Picture of the product"
						width={20}
						height={20}
					/>
					<span>Add to cart</span>
				</button>
				<Link
					href={'#'}
					className="border border-clOrange text-clOrange py-2 px-4 w-[50%] rounded-md text-center hover:bg-clOrange hover:text-clLightgrayishblue"
				>
					Details
				</Link>
			</div>
		</article>
	);
}
