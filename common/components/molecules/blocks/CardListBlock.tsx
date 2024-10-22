import Card from '../../wrapper/Card';
import Icon from '../../atom/Icon';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const CardListBlock = (props: any) => {
	return (
		<div className='grid grid-cols-4 gap-4'>
			{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
			{props.value.cards.map((card: any) => {
				switch (props.value.type) {
					case 'largeIcon':
						return (
							<div
								key={card._key}
								className=' flex flex-col items-center justify-center text-center aspect-square '
							>
								<Icon icon={card.icon} size={84} />
								{card.title}
							</div>
						);
					default:
						return (
							<Card
								key={card._key}
								className=' flex flex-col items-center justify-center text-center aspect-square '
							>
								<Icon icon={card.icon} size={84} />
								{card.title}
							</Card>
						);
				}
			})}
		</div>
	);
};

export default CardListBlock;
