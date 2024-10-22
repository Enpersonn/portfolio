import type { PortableTextReactComponents } from 'next-sanity';
import * as blocks from '../blocks';

const type = Object.entries(blocks).reduce(
	(acc, [key, Component]) => {
		if (key.endsWith('Block')) {
			const typeName = key.replace('Block', '').toLowerCase();
			acc[typeName] = (props: blocks.BlockProps) => {
				const BlockComponent = Component as React.ComponentType<blocks.BlockProps>;
				return <BlockComponent {...props} />;
			};
		}
		return acc;
	},
	{} as { [key: string]: (props: blocks.BlockProps) => React.ReactNode },
);

const CustomComponents: Partial<PortableTextReactComponents> = {
	types: type,
};

export default CustomComponents;
