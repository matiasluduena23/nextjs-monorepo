'use client';

import React, { useState } from 'react';
import { CartContext } from '@/app/lib/provider/context';
import { CartItems } from '../definitions';

type ProviderProps = {
	children: JSX.Element | JSX.Element[];
};

export default function Provider({ children }: ProviderProps) {
	const [cartItems, setCartItems] = useState<CartItems[]>([]);

	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>
			{children}
		</CartContext.Provider>
	);
}
