'use client';

import React, { ReactNode, createContext, useState } from 'react';
import { CartContext } from '@/app/lib/provider/context';
import { CartItems } from '../definitions';

type ProviderProps = {
	children: JSX.Element | JSX.Element[];
};

export default function Provider({ children }: ProviderProps) {
	const [cartItems, setCartItems] = useState<CartItems[]>([
		{ id: 1, title: 'hola', amount: 2, price: 3 },
	]);

	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>
			{children}
		</CartContext.Provider>
	);
}
