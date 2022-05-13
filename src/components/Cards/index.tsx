import Card from '../Card';
import { Grid } from '@chakra-ui/react';
import useSWR from 'swr';
import { useGlobalContext } from '../../context';
// @ts-ignore
import uuid from 'react-uuid';

const Cards = () => {

  const { query } = useGlobalContext();
  interface Gif {
    id: string;
    title: string;
    images: {
      downsized: {
        height: number;
        width: number;
        url: string;
      };
    };
  }

  const key = (query: string) => {
    if (query == "") {
      return `https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_APIKEY}&limit=25&rating=g`;
    } else {
      return `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_APIKEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    }
  }

  const { data: { data } } = useSWR(key(query), { suspense: true });

  return (

    <Grid templateColumns='repeat(4, 1fr)' gap={3} id="cards" ml={'2rem'} mr={'2rem'}>
      {data.map((gif: Gif) => (
        <Card gif={gif} key={uuid()} />
      ))}
    </Grid>
  )
};

export default Cards;