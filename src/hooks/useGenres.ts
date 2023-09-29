import { useState, useEffect } from 'react';
import { CanceledError } from 'axios';
import apiClient from '../services/api-client';
import genres from '../data/genre'

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}


//static data 

const useGenres = () =>({data: genres, isLoadin: false, error: null});
// const useGenres = () => useData<Genre>('/genres');

// interface fetchGenreResponse {
// 	count: number;
// 	results: Genre[];
// }

// const useGenres = () => {
// 	const [genres, setGenres] = useState<Genre[]>([]);
// 	const [error, setError] = useState('');
// 	const [isLoading, setIsLoading] = useState(false);

// 	useEffect(() => {
// 		const controller = new AbortController();
// 		setIsLoading(true);
// 		apiClient
// 			.get<fetchGenreResponse>('/genres', { signal: controller.signal })
// 			.then((res) => {
// 				setIsLoading(false);
// 				setGenres(res.data.results);
// 			})
// 			.catch((err) => {
// 				if (err instanceof CanceledError) return;

// 				setError(err.message);
// 				setIsLoading(false);
// 			});

// 		return () => controller.abort();
// 	}, []);

// 	return { genres, error, isLoading };
// };

export default useGenres;
