import React, { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-toastify';

const View = ({ videoId, apiKey }) => {
    const [views, setViews] = useState();
    const [load, setLoad] = useState(true);
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.items[0]) {
                    setViews(data.items[0].statistics.viewCount)
                    setLoad(false)
                }
                else{
                    toast.error('Your Api is invalid');
                }
            })
        // data.error.message
        // data.items[0].snippet.title
        // data.items[0].statistics.likeCount/favoriteCount/commentCount/viewCount
    }, [url,load])
    return (
        <div className='absolute top-3 left-3'>
            <p className='flex items-center gap-1 text-md text-gray-100'><AiOutlineEye className='text-xl' /> {views}</p>
        </div>
    );
};

export default View;