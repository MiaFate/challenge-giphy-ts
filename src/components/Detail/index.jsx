import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getGifById } from '../../helpers/fetchs';

const Detail = () => {
    const { state } = useLocation();
    const [{ title, url }, setData] = useState({ title: "title", url: "url" });

    useEffect(() => {

        if (state) {
            setData(state)

        } else {
            fetchMissingData()
        }
    }, [state]);

    const fetchMissingData = async () => {
        try {

            const id = location.pathname.split("/")[2];
            const response = await getGifById(id);
            const { title, images: { downsized: { url } } } = response;
            setData({ title, url })

        } catch (error) {
            console.log(error.message)
        }
    };

    return (
        <>
            <h1> {title}</h1>
            <div><img src={url} alt={title} /></div>
        </>
    )
};

export default Detail;