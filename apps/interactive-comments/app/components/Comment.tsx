import React from 'react';
import Image from 'next/image';
import arrowIcon from '@/public/icon-reply.svg';
import minusIcon from '@/public/icon-minus.svg';
import plusIcon from '@/public/icon-plus.svg';

export default function Comment() {
	const id = 1;
	const content = 'coment body';
	const createdAt = '1 may';
	const score = 4;
	const user = {
		image: {
			kpng: '/avatars/image-maxblagun.png',
			webp: 'url',
		},
		username: 'matias luduena',
	};
	const replies = [];
	return (
		<article className="bg-white p-4 flex flex-col gap-4 rounded-md">
			<div className="flex items-center gap-4">
				<Image
					src={user.image.kpng}
					alt="icon profile"
					width={25}
					height={25}
				/>
				<p className="text-clDarkblue font-bold">{user.username}</p>
				<p className="text-clGrayBlue">{createdAt}</p>
			</div>
			<p className="text-clGrayBlue">{content}</p>
			<div className="flex justify-between">
				<div className="flex items-center  bg-clLightgray rounded-md ">
					<button className="py-2 px-3 ">
						<Image
							src={plusIcon}
							alt="icon profile"
							width={12}
							height={12}
						/>
					</button>
					<p className="text-clModerateblue font-bold">{score}</p>
					<button className="py-2 px-3 ">
						<Image
							src={minusIcon}
							alt="icon profile"
							width={12}
							height={12}
						/>
					</button>
				</div>
				<button
					className="flex items-center text-clModerateblue font-semibold gap-1
                 text-sm"
				>
					<Image
						src={arrowIcon}
						alt="icon profile"
						width={12}
						height={12}
					/>
					<span>Reply</span>
				</button>
			</div>
		</article>
	);
}
