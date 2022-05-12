import axios from 'axios';
import useSWR from 'swr';

/* function useGifs(query) {
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&limit=25&offset=0&rating=G&lang=en`;
    const { response, error } = useSWR(query, searchGifs, { suspense: true });
    console.log(response, error)
    return {
        response:response,
        isError:error};
} */


/* async function searchGifs(query:string):Promise<[]> {
    // try {
        const { data: { data: response } } = await axios({
            method: 'get',
            url: `https://api.giphy.com/v1/gifs/search`,
            params: {
                api_key: import.meta.env.VITE_APIKEY,
                q: query ? query : 'random',
                limit: 25,
                offset: 0,
                rating: 'g',
                lang: 'es',
            },
            responseType: 'json',
        });
        return response;
    // } catch (error) {
    //     console.log(error.message);
    // }
} */
/* async function trendingGifs() {
    try {
        const { data: { data: response } } = await axios({
            method: 'get',
            url: `https://api.giphy.com/v1/gifs/trending`,
            params: {
                api_key: import.meta.env.VITE_APIKEY,
                limit: 25,
                rating: 'g',
                lang: 'es',
            },
            responseType: 'json',
        });

        return response;
    } catch (error) {
        console.log(error.message);
    }
} */
interface response {
    title: string,
    images: {
        downsized: {
            url: string,
        }
    }
}

async function getGifById(id: string): Promise<response> {
    /* try { */
    const { data: { data: response } } = await axios({
        method: 'get',
        url: `https://api.giphy.com/v1/gifs/${id}`,
        params: {
            api_key: import.meta.env.VITE_APIKEY,
        },
        responseType: 'json',
    });
    return response;
    /* } catch (error) {
        console.log(error.message);
    } */
}

export {
    //searchGifs as default,
    //trendingGifs,
    getGifById,
    //useGifs
};