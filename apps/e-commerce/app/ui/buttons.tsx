import React from 'react';
import Image from 'next/image';
import cart from '@/public/icon-cart.svg';

export function ButtonCart() {
	return (
		<>
			<button className="bg-clOrange text-clLightgrayishblue flex items-center gap-2  py-2 w-[50%] rounded-md justify-center hover:opacity-70 ">
				<Image
					className="rounded-2xl text-clLightgrayishblue brightness-200"
					src={cart}
					alt="Picture of the product"
					width={20}
					height={20}
				/>
				<span className="text-sm">Add to cart</span>
			</button>
		</>
	);
}
