import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { title } from 'process';
import Image from 'next/image';
import { Images } from '../lib/definitions';

export default function DialogImage({
	imageId,
	images,
}: {
	imageId: number;
	images: { id: number; image: string }[];
}) {
	const showImage = images.find((i) => i.id === imageId)?.image;
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button>
					{showImage && (
						<>
							<Image
								className="mx-auto border border-clOrange rounded-lg p-4"
								src={showImage}
								alt="product image"
								height={300}
								width={200}
							/>
						</>
					)}
				</button>
			</DialogTrigger>
			<DialogContent className="bg-transparent border-none">
				<Carousel className="">
					<CarouselContent>
						{images &&
							images.map((item) => (
								<CarouselItem key={item.id}>
									<Card>
										<CardContent>
											<Image
												src={item.image}
												alt="product image"
												height={200}
												width={400}
											/>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</DialogContent>
		</Dialog>
	);
}
