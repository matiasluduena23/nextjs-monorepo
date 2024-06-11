import { useComment, useCommentDispatch } from '@/lib/CommentContext';
import { Reply } from '@/lib/definitions';
import React, { useState } from 'react';
import Image from 'next/image';
import arrowIcon from '@/public/icon-reply.svg';
import editIcon from '@/public/icon-edit.svg';

import ReplyLikesButtons from './ReplyLikesButtons';
import DeleteDialog from './DeleteDialog';
import { Textarea } from '../../../e-commerce/components/ui/textarea';
import { Button } from '../../../e-commerce/components/ui/button';

export default function ReplyItem({
	reply,
	idComment,
}: {
	reply: Reply;
	idComment: number;
}) {
	const [activeEdit, setActiveEdit] = useState(false);
	const { id, content, createdAt, score, user } = reply;
	const dispatch = useCommentDispatch();
	const { currentUser } = useComment();
	const [commentText, setCommentText] = useState(content);

	return (
		<article className="bg-white  p-4 flex flex-col  rounded-md sm:relative sm:pl-[4rem] sm:min-h-[115px]">
			<div className="flex items-center gap-4 sm:mb-2">
				<Image
					src={user.image.png}
					alt="icon profile"
					width={25}
					height={25}
				/>
				<p className="text-clDarkblue font-bold">{user.username}</p>
				<p className="text-clGrayBlue">{createdAt}</p>
			</div>

			{activeEdit ? (
				<div className="flex flex-col items-end">
					<Textarea
						placeholder="Add a comment..."
						className="border w-full min-h-[80px] "
						value={commentText}
						onChange={(e) => setCommentText(e.target.value)}
					/>
					<Button
						className="bg-clModerateblue text-white px-6 uppercase mt-2 hover:opacity-70 w-fit"
						onClick={() => {
							if (!commentText) return;
							dispatch({
								type: 'editReply',
								payload: {
									idComment: idComment,
									idReply: id,
									comment: commentText,
								},
							});
							setActiveEdit(false);
						}}
					>
						update
					</Button>
				</div>
			) : (
				<p className="text-clGrayBlue my-4 sm:my-0">{content}</p>
			)}

			<div className="flex justify-between">
				<ReplyLikesButtons
					idComment={idComment}
					idReply={id}
					score={score}
				/>
				{user.username === currentUser.username ? (
					<div className="flex items-center gap-3 sm:absolute top-4 right-4">
						<DeleteDialog id={idComment} idReply={id} />
						<button
							className="flex items-center text-clModerateblue font-semibold gap-1
                 text-sm hover:opacity-70"
							onClick={() => setActiveEdit(!activeEdit)}
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
                 text-sm hover:opacity-70 sm:absolute top-4 right-4"
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
