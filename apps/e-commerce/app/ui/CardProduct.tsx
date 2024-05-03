/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { Producto } from '../lib/definitions';
import cart from '@/public/icon-cart.svg';
import Link from 'next/link';
import { ButtonCart } from './buttons';

export default function CardProduct({ producto }: { producto: Producto }) {
	return (
		<article className="p-4 rounded-2xl bg-white border border-clOrange max-w-[320px] mx-auto relative -z-10">
			<img
				className="rounded-2xl shadow-md  min-h-[180px]"
				src={producto.image}
				alt="Picture of the product"
				width="286px"
			/>
			<span className="block text-clOrange uppercase tracking-[2px] text-[12px] mt-4 font-bold ">
				{producto.category}
			</span>
			<h2 className="text-xl font-semibold">{producto.title}</h2>
			<div className="flex items-center justify-between font-bold">
				<div className="flex items-center gap-2">
					<p className="my-4  text-clDarkBlue text-2xl">
						$ {(producto.price / 2).toFixed(2)}
					</p>
					<span className="text-clOrange bg-orange-100 px-2 rounded-md text-sm">
						50%
					</span>
				</div>
				<p className="text-clGrayishblue line-through">
					${producto.price}
				</p>
			</div>

			<div className="flex items-center justify-between gap-4">
				<ButtonCart>
					<Image
						className="rounded-2xl text-clLightgrayishblue brightness-200"
						src={cart}
						alt="Picture of the product"
						width={20}
						height={20}
					/>
					<span className="text-sm">Add to cart</span>
				</ButtonCart>
				<Link
					href={`/details/${producto.id}/`}
					className="border border-clOrange text-clOrange py-2 px-4 w-[50%] rounded-md text-center hover:bg-clOrange hover:text-clLightgrayishblue text-sm"
				>
					Details
				</Link>
			</div>
		</article>
	);
}
