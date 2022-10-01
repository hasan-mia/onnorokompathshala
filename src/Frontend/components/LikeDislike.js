import React, { useEffect, useState } from 'react';
import { HiOutlineThumbDown, HiOutlineThumbUp } from 'react-icons/hi';
import { FcViewDetails } from 'react-icons/fc';

const LikeDislike = ({ videoId, apiKey }) => {
    const [btnData, setBtnData] = useState();
    // like state
    const [like, setLikes] = useState([0]);
    // dislike state
    const [disLike, setDislike] = useState([0]);
    //fetch youtube data
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBtnData(data.items[0]))
        // data.items[0].snippet.title
        // data.items[0].statistics.likeCount/favoriteCount/commentCount/viewCount
    }, []);


    return (
        <div className="grid">
            <h2 className='text-sm text-gray-700 font-semibold p-2'>{btnData?.snippet.title}</h2>
            {/* button */}
            <div className="flex justify-between border-t border-gray-200 pt-2">
                <div className='flex items-center gap-4 lg:gap-10 px-2'>
                    <button className='flex items-center gap-2'><span className='text-xl'>{btnData?.statistics?.likeCount}</span> <HiOutlineThumbUp className='text-2xl' /> </button>
                    <button className='flex items-center gap-2'><span className='text-xl'>{disLike}</span> <HiOutlineThumbDown className='text-2xl' /> </button>
                </div>
                <button className='flex items-center gap-2'><span className='text-xl'><FcViewDetails className='text-2xl text-gray-600' /></span></button>
            </div>
        </div>
    );
};

export default LikeDislike;