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
		<section className="flex flex-col gap-4   mt-4 border-l border-clLightgray">
			{replies.map((item) => (
				<div key={item.id} className="ml-4">
					<ReplyItem reply={item} idComment={idComment} />
				</div>
			))}
		</section>
	);
}
