import {
	FaWindows,
	FaLinux,
	FaXbox,
	FaPlaystation,
	FaApple,
	FaAndroid,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib/esm/iconBase';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';

interface Props {
	platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
	const iconMap: { [key: string]: IconType } = {
		windows: FaWindows,
		xbox: FaXbox,
		linux: FaLinux,
		playstation: FaPlaystation,
		apple: FaApple,
		andorid: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
		nintendo: SiNintendo,
	};
	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
			))}
		</HStack>
	);
}

export default PlatformIconList;
