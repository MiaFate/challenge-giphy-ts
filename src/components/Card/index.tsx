import { Link } from 'react-router-dom';
import { Image, Flex } from '@chakra-ui/react';
import React from 'react';
interface cardProp {
    gif: {
        id: string,
        title: string,
        images: {
            downsized: {
                height: number,
                width: number,
                url: string
            }
        }
    }
}

const Card = ({ gif }: cardProp) => {
    const { id, title, images: { downsized: { height, width, url } } } = gif;
    return (
        <Link to={`/detail/${id}`} state={{ title, url }}>
            <Flex direction='column' justify='start' align='center' textAlign='center'>
                <Image className={width > height ? "landscape" : "portrait"} src={url} alt={title} />
                <p>{title}</p>
            </Flex>
        </Link>
    )
};
export default Card;