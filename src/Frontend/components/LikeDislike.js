import React, { useEffect, useState } from 'react';
import { HiOutlineThumbDown, HiOutlineThumbUp } from 'react-icons/hi';
import { FcViewDetails } from 'react-icons/fc';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import { toast } from 'react-toastify';
import { Tooltip } from 'flowbite-react';

const LikeDislike = ({ videoId, apiKey, likes, dislikes }) => {
    const [user] = useAuthState(auth);
    // set youtube data from api
    const [btnData, setBtnData] = useState();
    //fetch youtube data
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBtnData(data.items[0]))
        // data.items[0].snippet.title
        // data.items[0].statistics.likeCount/favoriteCount/commentCount/viewCount
    }, []);

    // Liked Handler
    const handleLike = (videoId, data) => {
        if (user) {
            const video = {
                videoId : videoId,
                likes: data,
            }
            //====Like & Dislike Conditon=====
            let liked = likes.find(item => item == `${user?.displayName}`) // check user available or not on array
            // console.log('Match Name:', liked)
            if (!liked) {
                // Send to your database 
                fetch(`http://localhost:5001/video/${videoId}/like`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(video)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                // likes.push(data)  // added item to array
                // console.log('update array:', likes)
                toast.success('Liked')
            }
            else if (liked) {
                let likeRemove = likes.filter(item => item !== `${user?.displayName}`);
                console.log('Remove liked:', likeRemove)
                toast.success('Unliked');
            }

        }
        else {
            toast.error('Sorry! 🥺 you have to login');
        }
    }

    // Dislike Handler
    const handleDisLike = (videoId, data) => {
        if (user) {
            const video = {
                videoId : videoId,
                dislikes: data,
            }
            //====Like & Dislike Conditon=====
            let disliked = dislikes.find(item => item == `${user?.displayName}`) // check user available or not on array
            // console.log('Match Name:', liked)
            if (!disliked) {
                // Send to your database 
                fetch(`http://localhost:5001/video/${videoId}/dislike`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(video)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                // likes.push(data)  // added item to array
                // console.log('update array:', likes)
                toast.success('dislike')
            }
            else if (disliked) {
                let dislikeRemove = likes.filter(item => item !== `${user?.displayName}`);
                console.log('Remove liked:', dislikeRemove)
                toast.success('Undislike');
            }

        }
        else {
            toast.error('Sorry! 🥺 you have to login');
        }
    }

    // Liked View Details
    const viewDetails = () => {
        if (user) {
            toast.success('success')
        }
        else {
            toast.error('Sorry! 🥺 you have to login');
        }
    }

    return (
        <div className="grid">
            <h2 className='text-sm text-gray-700 font-semibold p-2'>{btnData?.snippet.title}</h2>
            {/* button */}
            <div className="flex justify-between border-t border-gray-200 pt-2">
                <div className='flex items-center gap-4 lg:gap-10 px-2'>
                    <Tooltip content="Likes" style="light">
                        <button onClick={() => { handleLike(videoId,`${user?.displayName}`) }} className='flex items-center gap-2'><span className='text-xl'>{likes?.length}</span> <HiOutlineThumbUp className='text-2xl' /> </button>
                    </Tooltip>
                    <Tooltip content="Dislikes" style="light">
                        <button onClick={() => { handleDisLike(videoId,`${user?.displayName}`) }} className='flex items-center gap-2'><span className='text-xl'>{dislikes?.length}</span> <HiOutlineThumbDown className='text-2xl' /> </button>
                    </Tooltip>
                </div>
                <Tooltip content="Details" style="light">
                    <button onClick={() => { viewDetails() }} className='flex items-center gap-2'><span className='text-xl'><FcViewDetails className='text-2xl text-gray-600' /></span></button>
                </Tooltip>
            </div>
        </div>
    );
};

export default LikeDislike;