import React from 'react';
import Image from 'next/image';
import hamburgerIcon from '@/public/icon-menu.svg';
import cartIcon from '@/public/icon-cart.svg';
import avatarIcon from '@/public/image-avatar.png';
import Link from 'next/link';

export default function Navigation() {
	return (
		<div className="container mx-auto">
			<nav className="flex  justify-between p-4">
				<div className="flex items-center gap-4 ">
					<button>
						<Image
							className="sm:hidden"
							src={hamburgerIcon}
							alt="Picture of the author"
							width={20}
							height={20}
						/>
					</button>
					<Link href="/" className="text-4xl font-semibold mb-2">
						{' '}
						sneakers
					</Link>
					<ul className="hidden sm:flex gap-4 text-clDarkGreyblue">
						<li>
							<Link href={'#'}>Collections</Link>
						</li>
						<li>
							<Link href={'#'}>Men</Link>
						</li>
						<li>
							<Link href={'#'}>Woman</Link>
						</li>
						<li>
							<Link href={'#'}>About</Link>
						</li>
						<li>
							<Link href={'#'}>Contact</Link>
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-4 ">
					<button>
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
			</nav>
		</div>
	);
}
