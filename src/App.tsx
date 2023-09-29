import { Grid, GridItem, Show, HStack } from '@chakra-ui/react';
import { Genre } from './hooks/useGenres';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);
	return (
		<Grid
			templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<GridItem area="nav">
				<Navbar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						selectedGenre={selectedGenre}
						onSelectGenre={(genre) => setSelectedGenre(genre)}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<HStack spacing={5} paddingLeft={5} marginBottom={5}>
					<PlatformSelector
						selectedPlatform={selectedPlatform}
						onSelectPlatform={(platform) => setSelectedPlatform(platform)}
					/>
					<SortSelector />
				</HStack>

				<GameGrid
					selectedGenre={selectedGenre}
					selectedPlatform={selectedPlatform}
				/>
			</GridItem>
		</Grid>
	);
}

export default App;
