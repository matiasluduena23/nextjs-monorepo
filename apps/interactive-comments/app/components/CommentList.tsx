'use client';

import { useComment } from '@/lib/CommentContext';
import React from 'react';
import CommentItem from './CommentItem';

export default function CommentList() {
	const { comments } = useComment();
	console.log(comments);
	return (
		<>
			<div className="flex flex-col gap-4">
				{comments.map((comment) => (
					<CommentItem key={comment.id} comment={comment} />
				))}
			</div>
		</>
	);
}
