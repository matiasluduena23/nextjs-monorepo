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

export default function DialogImage({
	openDialogImage,
	setOpenDialogImage,
}: {
	openDialogImage: boolean;
	setOpenDialogImage: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<Dialog
			open={openDialogImage}
			onOpenChange={() => setOpenDialogImage(!open)}
		>
			<DialogContent className="w-[700px]"></DialogContent>
		</Dialog>
	);
}
