export type UserComment = {
	currentUser: {
		image: {
			kpng: string;
			webp: string;
		};
		username: string;
	};
	comments: Comment[];
};

export type Comment = {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: {
		image: {
			kpng: string;
			webp: string;
		};
		username: string;
	};
	replies: Reply[];
};

export type Reply = {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	replyingTo: string;
	user: {
		image: {
			kpng: string;
			webp: string;
		};
		username: string;
	};
};
