import { Badge } from '@chakra-ui/react';

interface Props {
	score: number;
}

function CriticScore({ score }: Props) {
	const color = score > 75 ? 'green' : score > 65 ? 'yellow' : '';
	return (
		<Badge colorScheme={color} paddingX={2} borderRadius={4} fontSize="14px">
			{score}
		</Badge>
	);
}

export default CriticScore;
