import React, { useState } from 'react';
import { Textarea } from '../../../e-commerce/components/ui/textarea';
import Image from 'next/image';
import { Button } from '../../../e-commerce/components/ui/button';
import { useComment, useCommentDispatch } from '@/lib/CommentContext';
import { Reply } from '@/lib/definitions';

export default function AddReply({
	idComment,
	user,
	setActiveReply,
}: {
	idComment: number;
	user: string;
	setActiveReply: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [replyText, setReplyText] = useState('');
	const { currentUser } = useComment();
	const dispatch = useCommentDispatch();

	const handleClick = () => {
		if (!replyText) return;
		const newReply: Reply = {
			id: 5,
			content: replyText,
			createdAt: 'recently',
			score: 0,
			user: { image: currentUser.image, username: currentUser.username },
			replyingTo: user,
		};

		dispatch({
			type: 'addReply',
			payload: { idComment: idComment, reply: newReply },
		});
		setReplyText((prev) => (prev = ''));
		setActiveReply(false);
	};

	return (
		<div className="p-4 bg-white mt-4 rounded">
			<Textarea
				placeholder="Add a reply..."
				className="border w-full min-h-[80px] "
				value={replyText}
				onChange={(e) => setReplyText(e.target.value)}
			/>
			<div className="flex justify-between items-center px-1">
				<Image
					src={currentUser.image.png}
					alt="icon profile"
					width={25}
					height={25}
					className="w-[30px] h-[30px]"
				/>
				<Button
					className="bg-clModerateblue text-white px-6 uppercase mt-2"
					onClick={handleClick}
				>
					Reply
				</Button>
			</div>
		</div>
	);
}
