'use client';

import React, { useContext, useMemo } from 'react';
import Image from 'next/image';
import shoe from '@/public/image-product-1-thumbnail.jpg';
import trash from '@/public/icon-delete.svg';
import { CartContext } from '../lib/provider/context';
import type { CartContextProps, CartItems } from '../lib/definitions';
import Button from './Button';

export default function Cart() {
	const { cartItems, setCartItems } = useContext(
		CartContext
	) as CartContextProps;
	let total = useMemo(
		() => cartItems.map((item) => item.price * item.amount),
		[cartItems]
	);

	return (
		<>
			<div className="absolute -right-[3px] top-[60px] w-[350px] min-h-[200px]  border-[2px] shadow-2xl border-clOrange py-4 rounded-lg z-50 bg-white">
				<h2 className="py-4 px-4 font-bold">Cart</h2>
				<hr />
				<div className="flex flex-col gap-4  p-4">
					{cartItems.length ? (
						cartItems.map((item) => (
							<div
								className="flex items-center justify-center gap-4"
								key={item.id}
							>
								<Image
									className="rounded-md"
									src={item.image}
									alt=""
									height={40}
									width={40}
								/>
								<div className="flex flex-col text-clDarkGreyblue">
									<p>{item.title}</p>
									<p>
										${item.price} x {item.amount} :
										<span className="text-clDarkBlue font-bold">
											{' '}
											$
											{(item.price * item.amount).toFixed(
												2
											)}
										</span>
									</p>
								</div>
								<button
									onClick={() =>
										setCartItems(
											cartItems.filter(
												(i) => i.id !== item.id
											)
										)
									}
								>
									<Image
										src={trash}
										alt=""
										height={25}
										width={25}
									/>
								</button>
							</div>
						))
					) : (
						<p className="text-center text-clDarkGreyblue">
							Your cart is empty
						</p>
					)}
					{total.length > 0 && (
						<div className="flex gap-2 text-clDarkBlue font-semibold opacity-80">
							<p>Total: </p>
							<p>
								{total
									.reduce((acc, pre) => acc + pre)
									.toFixed(2)}
							</p>
						</div>
					)}

					<Button>Checkout</Button>
				</div>
			</div>
		</>
	);
}
