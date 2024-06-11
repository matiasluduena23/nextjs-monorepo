'use client';

import { Dispatch, createContext, useContext, useReducer } from 'react';
import data from '@/data/data.json';
import {
	CommentProviderProps,
	UserComment,
	Comment,
	Reply,
} from './definitions';

const CommentContext = createContext<null | UserComment>(null);
const CommentDispatchContext = createContext<null | Dispatch<CommentReducer>>(
	null
);

const initialState: UserComment = data;

export function CommentProvider({ children }: CommentProviderProps) {
	const [comments, dispatch] = useReducer(commentReducer, initialState);

	return (
		<CommentContext.Provider value={comments}>
			<CommentDispatchContext.Provider value={dispatch}>
				{children}
			</CommentDispatchContext.Provider>
		</CommentContext.Provider>
	);
}

export function useComment() {
	const context = useContext(CommentContext);
	if (!context) {
		throw new Error('Context not exist');
	}
	return context;
}

export function useCommentDispatch() {
	const context = useContext(CommentDispatchContext);
	if (!context) {
		throw new Error('Context not exist');
	}
	return context;
}

type CommentReducer =
	| { type: 'addComment'; payload: Comment }
	| { type: 'likeComment'; payload: { id: number } }
	| { type: 'unlikeComment'; payload: { id: number } }
	| { type: 'deleteComment'; payload: { id: number } }
	| { type: 'editComment'; payload: { id: number; comment: string } }
	| { type: 'addReply'; payload: { idComment: number; reply: Reply } }
	| { type: 'likeReply'; payload: { idComment: number; idReply: number } }
	| { type: 'unlikeReply'; payload: { idComment: number; idReply: number } }
	| { type: 'deleteReply'; payload: { idComment: number; idReply: number } };

function commentReducer(
	state: UserComment,
	action: CommentReducer
): UserComment {
	switch (action.type) {
		case 'addComment': {
			return {
				...state,
				comments: [...state.comments, action.payload],
			};
		}
		case 'likeComment': {
			return {
				...state,
				comments: [
					...state.comments.map((item) => {
						if (item.id === action.payload.id) {
							return { ...item, score: item.score + 1 };
						} else {
							return item;
						}
					}),
				],
			};
		}
		case 'unlikeComment': {
			return {
				...state,
				comments: [
					...state.comments.map((item) => {
						if (item.id === action.payload.id) {
							return { ...item, score: item.score - 1 };
						} else {
							return item;
						}
					}),
				],
			};
		}
		case 'deleteComment': {
			return {
				...state,
				comments: [
					...state.comments.filter(
						(comment) => comment.id !== action.payload.id
					),
				],
			};
		}
		case 'editComment': {
			return {
				...state,
				comments: [
					...state.comments.map((item) => {
						if (item.id === action.payload.id) {
							return { ...item, content: action.payload.comment };
						} else {
							return item;
						}
					}),
				],
			};
		}
		case 'addReply': {
			return {
				...state,
				comments: [
					...state.comments.map((item) => {
						if (item.id === action.payload.idComment) {
							return {
								...item,
								replies: [
									...item.replies,
									action.payload.reply,
								],
							};
						} else {
							return item;
						}
					}),
				],
			};
		}
		case 'likeReply': {
			return {
				...state,
				comments: [
					...state.comments.map((item) => {
						if (item.id === action.payload.idComment) {
							return {
								...item,
								replies: [
									...item.replies.map((reply) => {
										if (
											reply.id === action.payload.idReply
										) {
											return {
												...reply,
												score: reply.score + 1,
											};
										} else {
											return reply;
										}
									}),
								],
							};
						} else {
							return item;
						}
					}),
				],
			};
		}
		case 'unlikeReply': {
			return {
				...state,
				comments: [
					...state.comments.map((item) => {
						if (item.id === action.payload.idComment) {
							return {
								...item,
								replies: [
									...item.replies.map((reply) => {
										if (
											reply.id === action.payload.idReply
										) {
											return {
												...reply,
												score: reply.score - 1,
											};
										} else {
											return reply;
										}
									}),
								],
							};
						} else {
							return item;
						}
					}),
				],
			};
		}

		case 'deleteReply': {
			return {
				...state,
				comments: [
					...state.comments.map((item) => {
						if (item.id === action.payload.idComment) {
							return {
								...item,
								replies: [
									...item.replies.filter(
										(reply) =>
											reply.id !== action.payload.idReply
									),
								],
							};
						} else {
							return item;
						}
					}),
				],
			};
		}

		default: {
			throw Error('Unknown action: ');
		}
	}
}
