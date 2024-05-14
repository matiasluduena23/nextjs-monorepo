import CommentList from '@/app/components/CommentList';
import { CommentProvider } from '@/lib/CommentContext';
import AddComment from './components/AddComment';

export default function Home() {
	return (
		<main className="bg-clVerylightgray py-12">
			<div className="container mx-auto w-[90%] ">
				<CommentProvider>
					<div className="flex flex-col gap-4">
						<CommentList />
						<AddComment />
					</div>
				</CommentProvider>
			</div>
		</main>
	);
}
