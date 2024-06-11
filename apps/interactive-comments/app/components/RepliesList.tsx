'use client';
import { Reply } from '@/lib/definitions';
import React from 'react';
import ReplyItem from './ReplyItem';

export default function RepliesList({
	replies,
	idComment,
}: {
	replies: Reply[];
	idComment: number;
}) {
	return (
		<section className="flex flex-col gap-4 my-4 ml-4">
			{replies.map((item) => (
				<div key={item.id}>
					<ReplyItem reply={item} idComment={idComment} />
				</div>
			))}
		</section>
	);
}
