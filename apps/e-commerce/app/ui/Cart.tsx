import React, { useContext } from 'react';
import Image from 'next/image';
import shoe from '@/public/image-product-1-thumbnail.jpg';
import trash from '@/public/icon-delete.svg';
import { CartContext } from '../lib/provider/context';
import Button from './Button';

export default function Cart() {
	const cartItems = useContext(CartContext);
	console.log(cartItems);
	return (
		<div className="absolute right-3 top-20 w-[350px] min-h-[250px]  border-[2px] shadow-2xl border-clOrange py-4 rounded-lg z-50 bg-white">
			<h2 className="py-4 px-4 font-bold">Cart</h2>
			<hr />
			<div className="flex flex-col gap-4  p-4">
				<div className="flex items-center justify-center gap-4">
					<Image
						className="rounded-md"
						src={shoe}
						alt=""
						height={40}
						width={40}
					/>
					<div className="flex flex-col text-clDarkGreyblue">
						<p>Fall Limited Edition Sneakers</p>
						<p>
							$125.00 x 3
							<span className="text-clDarkBlue font-bold">
								{' '}
								$375
							</span>
						</p>
					</div>
					<button>
						<Image src={trash} alt="" height={15} width={15} />
					</button>
				</div>
				<Button>Checkout</Button>
			</div>
		</div>
	);
}
