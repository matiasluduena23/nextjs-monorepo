import React, { useState } from 'react';
import plus from '@/public/icon-plus.svg';
import minus from '@/public/icon-minus.svg';
import Image from 'next/image';

export default function ButtonCount({
	count,
	setCount,
}: {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
	const handleMinusClick = () => {
		count > 0 && setCount(count - 1);
	};

	return (
		<div className="flex items-center justify-between px-4 bg-clLightgrayishblue rounded-md mb-4">
			<button
				className="inline-block h-[55px] w-[50px] "
				onClick={handleMinusClick}
			>
				<Image
					className="mx-auto"
					src={minus}
					alt="icon minus"
					height={15}
					width={15}
				/>
			</button>
			<span className="font-bold">{count}</span>
			<button
				className="inline-block h-[55px] w-[50px] "
				onClick={() => setCount(count + 1)}
			>
				<Image
					className="mx-auto"
					src={plus}
					alt="icon plus"
					height={15}
					width={15}
				/>
			</button>
		</div>
	);
}
