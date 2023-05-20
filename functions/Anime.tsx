import axios from 'axios';

export const GetAnime = async () => {
	try {
		const data = await axios.get('https://api.jikan.moe/v4/anime');
		const Anime = data.data;
		console.log(Anime);
		console.log(`Pulled ${data.data.length} anime from API`);
		return Anime;
	} catch (error: any) {
		console.log('Error getting anime.', error.message);
	}
};

export const GetAnimeEpisodes = async (ID: number) => {
	try {
		const data = await axios.get(
			`https://api.jikan.moe/v4/anime/${ID}/videos/episodes`
		);
		const Episodes = data.data;
		console.log('Episodes:', Episodes);
		return Episodes;
	} catch (error: any) {
		console.log('Error getting episodes.', error.message);
	}
};

export const GetAnimeVideos = async (ID: number) => {
	try {
		const data = await axios.get(`https://api.jikan.moe/v4/anime/${ID}/videos`);
		const Videos = data.data;
		console.log('Videos:', Videos);
		return Videos;
	} catch (error: any) {
		console.log('Error getting videos.', error.message);
	}
};

export const GetAnimeRelations = async (ID: number) => {
	try {
		const data = await axios.get(
			`https://api.jikan.moe/v4/anime/${ID}/relations`
		);
		const Relations = data.data;
		console.log('Relations:', Relations);
		return Relations;
	} catch (error: any) {
		console.log('Error getting relations.', error.message);
	}
};
