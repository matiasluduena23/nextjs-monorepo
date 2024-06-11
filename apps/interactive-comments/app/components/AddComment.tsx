'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useComment, useCommentDispatch } from '@/lib/CommentContext';
import { Button } from '@/../../apps/e-commerce/components/ui/button';
import { Textarea } from '@/../../apps/e-commerce/components/ui/textarea';
import { Comment } from '@/lib/definitions';

export default function AddComment() {
	const { currentUser } = useComment();
	const dispatch = useCommentDispatch();
	const [commentText, setCommentText] = useState('');

	const handleClick = () => {
		if (!commentText) return;
		const newComment: Comment = {
			id: Number(new Date()),
			content: commentText,
			createdAt: 'recently',
			score: 0,
			user: { image: currentUser.image, username: currentUser.username },
			replies: [],
		};

		dispatch({ type: 'addComment', payload: newComment });
		setCommentText((prev) => (prev = ''));
	};

	return (
		<article className="bg-white p-4 rounded-md">
			<Textarea
				placeholder="Add a comment..."
				className="border w-full min-h-[80px] "
				value={commentText}
				onChange={(e) => setCommentText(e.target.value)}
			/>
			<div className="flex justify-between mt-2 items-center">
				<Image
					src={currentUser.image.png}
					alt="icon profile"
					width={25}
					height={25}
				/>
				<Button
					className="bg-clModerateblue text-white px-6 uppercase hover:bg-clModerateblue hover:opacity-70"
					onClick={handleClick}
				>
					send
				</Button>
			</div>
		</article>
	);
}
