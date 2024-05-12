import FormContact from '../ui/FormContact';

export default function page() {
	return (
		<div className="container">
			<h1 className="text-center text-3xl mt-8 ">Contact Page</h1>
			<div className="max-w-lg mt-16  mx-auto">
				<FormContact />
			</div>
		</div>
	);
}
