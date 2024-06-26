import React, { useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import { useCommentDispatch } from '@/lib/CommentContext';
import deleteIcon from '@/public/icon-delete.svg';
import Image from 'next/image';
export default function DeleteDialog({
	id,
	idReply,
}: {
	id: number;
	idReply?: number;
}) {
	const dispatch = useCommentDispatch();
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		if (idReply) {
			dispatch({
				type: 'deleteReply',
				payload: { idComment: id, idReply: idReply },
			});
		} else {
			dispatch({
				type: 'deleteComment',
				payload: { id },
			});
		}
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button
					className="flex items-center text-clModerateblue font-semibold gap-1
                 text-sm hover:opacity-70"
				>
					<Image
						src={deleteIcon}
						alt="icon profile"
						width={12}
						height={12}
					/>
					<span className="text-clSoftRed">Delete</span>
				</button>
			</DialogTrigger>
			<DialogContent className="w-[340px] rounded-md">
				<DialogHeader className=" text-start">
					<DialogTitle>Delete comment</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this comment? this will
						remove the comment and can&apos;t be undone.
					</DialogDescription>
				</DialogHeader>

				<DialogFooter className="flex flex-row gap-4 items-center">
					<Button
						className="uppercase bg-clGrayBlue w-[50%]"
						onClick={() => setOpen(false)}
					>
						No, cancel
					</Button>
					<Button
						variant={'destructive'}
						className="uppercase w-[50%]"
						onClick={handleClick}
					>
						yes delete
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
