'use client';

import React, { use, useState } from 'react';
import Image from 'next/image';
import arrowIcon from '@/public/icon-reply.svg';
import minusIcon from '@/public/icon-minus.svg';
import plusIcon from '@/public/icon-plus.svg';
import editIcon from '@/public/icon-edit.svg';
import { Comment } from '@/lib/definitions';
import { useCommentDispatch, useComment } from '@/lib/CommentContext';
import DeleteDialog from '@/public/design/DeleteDialog';

export default function CommentItem({ comment }: { comment: Comment }) {
	const { id, content, createdAt, score, user, replies } = comment;
	const dispatch = useCommentDispatch();
	const { currentUser } = useComment();
	const [like, setLike] = useState(1);

	const handleClickPlus = () => {
		if (like === 2) return;
		dispatch({ type: 'plusComment', payload: { id } });
		setLike(like + 1);
	};

	const handleClickMinus = () => {
		if (like === 0) return;
		dispatch({ type: 'minusComment', payload: { id } });
		setLike(like - 1);
	};

	return (
		<article className="bg-white p-4 flex flex-col gap-4 rounded-md">
			<div className="flex items-center gap-3">
				<Image
					src={user.image.png}
					alt="icon profile"
					width={25}
					height={25}
				/>
				<p className="text-clDarkblue font-bold">{user.username}</p>
				{user.username === currentUser.username && (
					<span className="bg-clModerateblue text-clLightgray font-semibold px-1">
						you
					</span>
				)}
				<p className="text-clGrayBlue">{createdAt}</p>
			</div>
			<p className="text-clGrayBlue">{content}</p>
			<div className="flex justify-between">
				<div className="flex items-center  bg-clLightgray rounded-md ">
					<button className="py-2 px-3 " onClick={handleClickPlus}>
						<Image
							src={plusIcon}
							alt="icon profile"
							width={12}
							height={12}
						/>
					</button>
					<p className="text-clModerateblue font-bold">{score}</p>
					<button className="py-2 px-3 " onClick={handleClickMinus}>
						<Image
							src={minusIcon}
							alt="icon profile"
							width={12}
							height={12}
						/>
					</button>
				</div>
				{user.username === currentUser.username ? (
					<div className="flex items-center gap-3">
						<DeleteDialog id={id} />
						<button
							className="flex items-center text-clModerateblue font-semibold gap-1
                 text-sm"
						>
							<Image
								src={editIcon}
								alt="icon profile"
								width={12}
								height={12}
							/>
							<span>Edit</span>
						</button>
					</div>
				) : (
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
				)}
			</div>
		</article>
	);
}
