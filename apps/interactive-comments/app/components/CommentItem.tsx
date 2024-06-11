'use client';

import React, { use, useState } from 'react';
import Image from 'next/image';
import arrowIcon from '@/public/icon-reply.svg';

import editIcon from '@/public/icon-edit.svg';
import { Comment } from '@/lib/definitions';
import { useCommentDispatch, useComment } from '@/lib/CommentContext';
import DeleteDialog from '@/app/components/DeleteDialog';
import CommentLikesButtons from './CommentLikesButtons';
import { Textarea } from '../../../e-commerce/components/ui/textarea';
import { Button } from '../../../e-commerce/components/ui/button';
import RepliesList from './RepliesList';
import AddReply from './AddReply';

export default function CommentItem({ comment }: { comment: Comment }) {
	const [activeEdit, setActiveEdit] = useState(false);
	const [activeReply, setActiveReply] = useState(false);
	const { id, content, createdAt, score, user, replies } = comment;
	const dispatch = useCommentDispatch();
	const { currentUser } = useComment();
	const [commentText, setCommentText] = useState(content);

	return (
		<section className="max-w-[600px] mx-auto">
			<article className="bg-white p-4 flex flex-col  rounded-md sm:relative sm:pl-[4rem] sm:min-h-[115px]">
				<div className="flex items-center gap-3 sm:mb-2">
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
								dispatch({
									type: 'editComment',
									payload: { id, comment: commentText },
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
					<CommentLikesButtons id={id} score={score} />
					{user.username === currentUser.username ? (
						<div className="flex items-center gap-3 sm:absolute top-4 right-4">
							<DeleteDialog id={id} />
							<button
								className="flex items-center text-clModerateblue font-semibold gap-1
                 text-sm hover:opacity-70 "
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
							onClick={() => setActiveReply(!activeReply)}
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
			{activeReply && (
				<AddReply
					idComment={id}
					setActiveReply={setActiveReply}
					user={comment.user.username}
				/>
			)}

			{replies.length > 0 && (
				<RepliesList replies={replies} idComment={id} />
			)}
		</section>
	);
}
