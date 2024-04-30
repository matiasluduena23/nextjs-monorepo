import React, { useState } from 'react';
import hamburgerIcon from '@/public/icon-menu.svg';
import openMenuIcon from '@/public/icon-close.svg';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function NavLinks() {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="flex items-center gap-4 ">
			<button className="z-20" onClick={() => setShowMenu(!showMenu)}>
				{showMenu ? (
					<Image
						className="sm:hidden "
						src={openMenuIcon}
						alt="Picture of the author"
						width={20}
						height={20}
					/>
				) : (
					<Image
						className="sm:hidden"
						src={hamburgerIcon}
						alt="Picture of the author"
						width={20}
						height={20}
					/>
				)}
			</button>
			<Link href="/" className="text-4xl font-semibold mb-2 -z-1">
				{' '}
				sneakers
			</Link>
			<ul
				className={clsx(
					' sm:flex gap-4 text-clDarkGreyblue',
					!showMenu
						? 'hidden'
						: ' absolute left-0 right-[45%] top-0 bottom-0 h-full z-10  flex flex-col gap-6 pt-20 pl-6 font-bold text-clDarkBlue text-xl  bg-clLightgrayishblue '
				)}
			>
				<li>
					<Link href={'/'}>Collections</Link>
				</li>
				<li>
					<Link href={'/men'}>Men</Link>
				</li>
				<li>
					<Link href={'/woman'}>Woman</Link>
				</li>
				<li>
					<Link href={'/about'}>About</Link>
				</li>
				<li>
					<Link href={'/contact'}>Contact</Link>
				</li>
			</ul>
		</div>
	);
}
