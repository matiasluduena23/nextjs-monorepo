import { useCommentDispatch } from '@/lib/CommentContext';
import { Reply } from '@/lib/definitions';
import React, { useState } from 'react';
import Image from 'next/image';
import arrowIcon from '@/public/icon-reply.svg';

import ReplyLikesButtons from './ReplyLikesButtons';

export default function ReplyItem({
	reply,
	idComment,
}: {
	reply: Reply;
	idComment: number;
}) {
	const { id, content, createdAt, score, user } = reply;
	const dispatch = useCommentDispatch();

	return (
		<article className="bg-gray-400  p-4 flex flex-col gap-4 rounded-md">
			<div className="flex items-center gap-4">
				<Image
					src={user.image.png}
					alt="icon profile"
					width={25}
					height={25}
				/>
				<p className="text-clDarkblue font-bold">{user.username}</p>
				<p className="text-clGrayBlue">{createdAt}</p>
			</div>

			<p className="text-clGrayBlue">{content}</p>

			<div className="flex justify-between">
				<ReplyLikesButtons
					idComment={idComment}
					idReply={id}
					score={score}
				/>
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
