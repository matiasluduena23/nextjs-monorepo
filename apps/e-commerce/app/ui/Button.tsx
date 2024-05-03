import React, { ReactNode } from 'react';
import { cn } from '../lib/utils';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button
			className={cn(
				'bg-clOrange text-clLightgrayishblue flex items-center gap-2  py-2 rounded-md justify-center hover:opacity-70 font-bold',
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}
