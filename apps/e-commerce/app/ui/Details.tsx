'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ButtonCart } from '@/app/ui/buttons';
import ButtonCount from '@/app/ui/ButtonCount';
import { Producto } from '../lib/definitions';

export default function Details({ product }: { product: Producto }) {
	const { image, title, category, description, price } = product;
	const [count, setCount] = useState(0);

	return (
		<div>
			<section>
				<Image
					className="mx-auto"
					src={image}
					alt={title}
					height={300}
					width={200}
				/>
				<div className="p-8">
					<span className="block text-clOrange uppercase tracking-[2px] text-[12px] my-4 font-bold ">
						{category}
					</span>
					<h2 className="text-xl font-semibold">{title}</h2>
					<p className="text-clDarkGreyblue">{description}</p>
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
					<ButtonCount count={count} setCount={setCount} />
					<ButtonCart />
				</div>
			</section>
		</div>
	);
}
