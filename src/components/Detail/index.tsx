import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getGifById } from '../../helpers/fetchs';

const Detail = ():JSX.Element => {
    type LocationStateProps = {
        title: string;
        url: string;
    }

    const location = useLocation();
    const state = location.state as LocationStateProps;
    const [{ title, url }, setData] = useState({ title: "title", url: "url" });

    useEffect(() => {

        if (state) {
            setData(state)

        } else {
            fetchMissingData()
        }
    }, [state]);

    const fetchMissingData = async () => {
        const id = location.pathname.split("/")[2];
        const response = await getGifById(id);
        const { title, images: { downsized: { url } } } = response;
        setData({ title, url })
    };

    return (
        <>
            <h1> {title}</h1>
            <div><img src={url} alt={title} /></div>
        </>
    )
};

export default Detail;