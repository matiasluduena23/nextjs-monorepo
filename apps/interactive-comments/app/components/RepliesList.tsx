'use client';
import { Reply } from '@/lib/definitions';
import React from 'react';
import ReplyItem from './ReplyItem';

export default function RepliesList({ replies }: { replies: Reply[] }) {
	return (
		<>
			{replies.map((item) => (
				<div key={item.id}>
					<ReplyItem reply={item} />
				</div>
			))}
		</>
	);
}
