import PortableText from '@/common/components/molecules/portableText/PortableText';
import type { HookViewType } from '@/common/types/page/docs/hooks/hook-docs.type';

export default function HookView({ ...props }: HookViewType) {
	return (
		<div>
			<h1>{props.header.title}</h1>
			<PortableText blocks={props.header.entry} />
			<PortableText blocks={props.body.content} />
		</div>
	);
}
