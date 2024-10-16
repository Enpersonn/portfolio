import PortableText from '@/common/components/molecules/portableText/PortableText';
import type { HookViewType } from '@/common/types/page/docs/hooks/hook-docs.type';

export default function HookView({ ...props }: HookViewType) {
	return (
		<div>
			<PortableText blocks={props.body.content} />
		</div>
	);
}
