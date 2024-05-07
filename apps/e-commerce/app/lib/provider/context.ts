'use client';

import { createContext } from 'react';
import { CartContextProps } from '../definitions';

export const CartContext = createContext<CartContextProps | null>(null);
