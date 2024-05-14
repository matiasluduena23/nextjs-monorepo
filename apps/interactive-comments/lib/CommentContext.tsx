'use client';

import { Dispatch, createContext, useContext, useReducer } from 'react';
import data from '@/data/data.json';
import { CommentProviderProps, UserComment, Comment } from './definitions';

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
	return useContext(CommentDispatchContext);
}

type CommentReducer =
	| { type: 'addComment'; payload: Comment }
	| { type: 'updateComment'; payload: { id: number } };

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
		case 'updateComment': {
		}

		default: {
			throw Error('Unknown action: ');
		}
	}
}
