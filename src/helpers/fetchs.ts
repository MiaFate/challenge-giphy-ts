import axios from 'axios';
import useSWR from 'swr';

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

}

export {
    getGifById,
};