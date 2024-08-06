import { PortableText as NativePortableText } from "@portabletext/react";
import { Lightbulb, LucideIcon } from "lucide-react";
import type { PortableTextReactComponents } from "next-sanity";
import SanityImage from "../../atom/SanityImage";
import DefaultComponents from "./PTComponents";
import Card from "../../wrapper/Card";
import Icon from "../../atom/Icon";

const type: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: (props: any) => React.ReactNode;
} = {
	image: (props) => (
		<div className=" w-full  rounded-[5px]  overflow-hidden mt-20 mb-10">
			<SanityImage image={props.value} width={"full"} />
			<p className=" image-caption mt-1 ">{props.value.caption}</p>
		</div>
	),

	quote: (props) => (
		<div className="grid grid-cols-8 my-10">
			<blockquote className=" col-start-2 col-span-6">
				<div>
					<p className=" quote-text">{props.value.quote}</p>
					<p className=" quote-author">- {props.value.author}</p>
				</div>
			</blockquote>
		</div>
	),

	highlighted: (props) => (
		<div className=" my-5 items-center flex">
			<Lightbulb size={32} className=" mr-3" />
			<div className=" w-full pl-3 border-l-[1px]">
				<NativePortableText
					value={props.value.text}
					components={{
						...DefaultComponents,
					}}
				/>
			</div>
		</div>
	),

	cardList: (props: any) => (
		<div className="grid grid-cols-4 gap-4 p-4">
			{props.value.cards.map((card: any) => {
				return(
				<Card key={card._key} className=" flex flex-col items-center justify-center aspect-square ">
					<Icon icon={card.icon} size={84} />
					{card.title}
					</Card>
			)})}
		</div>
	),
};

const CustomComponents: Partial<PortableTextReactComponents> = {
	types: type,
};

export default CustomComponents;
