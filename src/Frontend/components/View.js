import React, { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const View = ({ videoId, apiKey }) => {
    const [views, setViews] = useState();
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setViews(data.items[0].statistics.viewCount))
        // data.error.message
        // data.items[0].snippet.title
        // data.items[0].statistics.likeCount/favoriteCount/commentCount/viewCount
    }, [url])
    console.log(views)
    return (
        <div className='absolute top-3 left-3'>
            <p className='flex items-center gap-1 text-md text-gray-100'><AiOutlineEye className='text-xl' /> {views}</p>
        </div>
    );
};

export default View;