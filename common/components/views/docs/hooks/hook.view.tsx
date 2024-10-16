import type { HookViewType } from '@/common/types/page/docs/hooks/hook-docs.type';

export default function HookView({ header, body, ...props }: HookViewType) {
	return (
		<div>
			<h1>{header.title}</h1>
			<p>{header.entry}</p>
			<p>{header.publishedAt}</p>
			<p>{body.content}</p>
		</div>
	);
}
