'use client';

import React from 'react';
import { createContext } from 'react';
import { CartItems } from '../definitions';
type CartContextProps = {
	cartItems: CartItems[];
	setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
};

export const CartContext = createContext<CartContextProps | null>(null);
