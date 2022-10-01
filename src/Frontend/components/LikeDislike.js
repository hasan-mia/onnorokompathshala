import React, { useEffect, useState } from 'react';
import { HiOutlineThumbDown, HiOutlineThumbUp } from 'react-icons/hi';
import { FcViewDetails } from 'react-icons/fc';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import { toast } from 'react-toastify';

const LikeDislike = ({ videoId, apiKey, likes, dislikes }) => {
    const [user] = useAuthState(auth);
    const [btnData, setBtnData] = useState();
    // like state
    const [like, setLikes] = useState([0]);
    // dislike state
    const [disLike, setDislike] = useState([0]);

    // console.log(likes, dislikes)
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
    const handleLike = (data) => {
        if (user) {
            // //====Condition Prctice=====
            // let like = likes.find(item => item == `${user?.displayName}`) // check item availability on array
            // console.log('Match Name:', like)
            // if (like) {
            //     let likeRemove = likes.filter(item => item !== `${user?.displayName}`);
            //     console.log('Remove liked:', likeRemove)
            //     toast.success('Unliked');
            // }else{
            //     likes.push(data)  // added item to array
            //     console.log('update array:', likes)
            // }
        }
        else {
            toast.error('Sorry! 🥺 you have to login');
        }
    }

    // Liked Handler
    const handleDisLike = () => {
        if (user) {
            // //====Condition Prctice=====
            // let like = likes.find(item => item == `${user?.displayName}`) // check item availability on array
            // console.log('Match Name:', like)
            // if (like) {
            //     let likeRemove = likes.filter(item => item !== `${user?.displayName}`);
            //     console.log('Remove liked:', likeRemove)
            //     toast.success('Unliked');
            // }else{
            //     likes.push(data)  // added item to array
            //     console.log('update array:', likes)
            // }
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
                    <button onClick={() => { handleLike(`${user?.displayName}`) }} className='flex items-center gap-2'><span className='text-xl'>{likes?.length}</span> <HiOutlineThumbUp className='text-2xl' /> </button>
                    <button onClick={() => { handleDisLike() }} className='flex items-center gap-2'><span className='text-xl'>{disLike?.length}</span> <HiOutlineThumbDown className='text-2xl' /> </button>
                </div>
                <button onClick={() => { viewDetails() }} className='flex items-center gap-2'><span className='text-xl'><FcViewDetails className='text-2xl text-gray-600' /></span></button>
            </div>
        </div>
    );
};

export default LikeDislike;