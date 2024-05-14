import CommentList from '@/app/components/CommentList';
import { CommentProvider } from '@/lib/CommentContext';

export default function Home() {
	return (
		<main className="bg-clVerylightgray py-12">
			<div className="container mx-auto w-[90%] ">
				<CommentProvider>
					<CommentList />
				</CommentProvider>
			</div>
		</main>
	);
}
