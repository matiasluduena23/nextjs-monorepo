import React, { useState } from 'react';
import Image from 'next/image';
import { useCommentDispatch } from '@/lib/CommentContext';
import minusIcon from '@/public/icon-minus.svg';
import plusIcon from '@/public/icon-plus.svg';

export default function CommentLikesButtons({
	id,
	score,
}: {
	id: number;
	score: number;
}) {
	const dispatch = useCommentDispatch();
	const [like, setLike] = useState(1);

	const handleClickPlus = () => {
		if (like === 2) return;
		dispatch({ type: 'likeComment', payload: { id } });
		setLike(like + 1);
	};

	const handleClickMinus = () => {
		if (like === 0) return;
		dispatch({ type: 'unlikeComment', payload: { id } });
		setLike(like - 1);
	};
	return (
		<div className="flex items-center  bg-clLightgray rounded-md sm:absolute left-4 top-4 sm:flex-col sm:gap-2">
			<button className="py-2 px-3 group " onClick={handleClickPlus}>
				<Image
					src={plusIcon}
					alt="icon profile"
					width={12}
					height={12}
					className="group-hover:sepia-[.4] group-hover:invert-[.50] group-hover:saturate-[80] group-hover:hue-rotate-[300deg] group-hover:brightness-[1]"
				/>
			</button>
			<p className="text-clModerateblue font-bold">{score}</p>
			<button className="py-2 px-3 group" onClick={handleClickMinus}>
				<Image
					src={minusIcon}
					alt="icon profile"
					width={12}
					height={12}
					className="group-hover:sepia-[.4] group-hover:invert-[.50] group-hover:saturate-[80] group-hover:hue-rotate-[300deg] group-hover:brightness-[1]"
				/>
			</button>
		</div>
	);
}
