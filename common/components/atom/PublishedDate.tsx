import { Calendar } from "lucide-react";

const PublishedDate = ({ date }: { date: string }) => (
	<div className=" flex gap-2 items-center">
		<Calendar />
		<p>{date}</p>
	</div>
);

export default PublishedDate;
