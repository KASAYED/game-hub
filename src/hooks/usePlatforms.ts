import { useState, useEffect } from 'react';
import { CanceledError } from 'axios';
import apiClient from '../services/api-client';
import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

// interface fetchGameResponse {
// 	count: number;
// 	results: Game[];
// }

// const useGames = () => {
// 	const [games, setGames] = useState<Game[]>([]);
// 	const [error, setError] = useState('');
// 	const [isLoading, setIsLoading] = useState(false);
// 	console.log(games);
// 	useEffect(() => {
// 		const controller = new AbortController();
// 		setIsLoading(true);
// 		apiClient
// 			.get<fetchGameResponse>('/games', { signal: controller.signal })
// 			.then((res) => {
// 				setIsLoading(false);
// 				setGames(res.data.results);
// 			})
// 			.catch((err) => {
// 				if (err instanceof CanceledError) return;

// 				setError(err.message);
// 				setIsLoading(false);
// 			});

// 		return () => controller.abort();
// 	}, []);

// 	return { games, error, isLoading };
// };

export default usePlatforms;
