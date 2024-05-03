import React from 'react';
import Image from 'next/image';
import cart from '@/public/icon-cart.svg';

export function ButtonCart({ children }: { children: JSX.Element | string }) {
	return (
		<>
			<button className="bg-clOrange text-clLightgrayishblue flex items-center gap-2  py-2 w-[50%] rounded-md justify-center hover:opacity-70 ">
				{children}
			</button>
		</>
	);
}
