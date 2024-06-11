'use client';

import { useComment } from '@/lib/CommentContext';
import React from 'react';
import CommentItem from './CommentItem';

export default function CommentList() {
	const { comments } = useComment();

	return (
		<>
			<div className="flex flex-col gap-4">
				{comments.map((comment) => (
					<div key={comment.id} className="">
						<CommentItem comment={comment} />
					</div>
				))}
			</div>
		</>
	);
}
