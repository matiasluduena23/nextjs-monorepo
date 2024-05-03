'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import cartIcon from '@/public/icon-cart.svg';
import avatarIcon from '@/public/image-avatar.png';
import NavLinks from './nav-links';
import Cart from './Cart';

export default function Navigation() {
	const [showcart, setShowcart] = useState(false);
	return (
		<div className="container mx-auto ">
			<nav className="flex  justify-between p-4 ">
				<NavLinks />
				<div className="flex items-center gap-4 ">
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
				</div>
				{showcart && <Cart />}
			</nav>
		</div>
	);
}
