'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import cartIcon from '@/public/icon-cart.svg';
import avatarIcon from '@/public/image-avatar.png';
import NavLinks from './nav-links';
import Cart from './Cart';
import { CartContext } from '../lib/provider/context';
import { CartContextProps } from '../lib/definitions';

export default function Navigation() {
	const [showcart, setShowcart] = useState(false);
	const { cartItems } = useContext(CartContext) as CartContextProps;

	return (
		<div className="container mx-auto ">
			<nav className="flex  justify-between p-4 ">
				<NavLinks />
				<div className="flex items-center gap-4 relative">
					<button onClick={() => setShowcart(!showcart)}>
						<Image
							src={cartIcon}
							alt="Picture of the author"
							width={25}
							height={25}
						/>
					</button>
					<button>
						<Image
							src={avatarIcon}
							alt="Picture of the author"
							width={25}
							height={25}
						/>
					</button>
					{showcart && <Cart />}
					{cartItems.length > 0 && (
						<span className="rounded-full bg-clOrange px-2 text-[10px] text-clPaleOrange font-bold absolute right-[35px] top-2">
							{cartItems.length}
						</span>
					)}
				</div>
			</nav>
		</div>
	);
}
