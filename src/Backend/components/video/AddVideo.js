import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase';
import Loader from '../../../Shared/Loader';

const AddVideo = () => {
    const [user] = useAuthState(auth);
    const [isLoad, setIsLoad] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const videoAdded = async (data) => {
        const video = {
            title: data.title,
            description: data.description,
            videoId: data.videoId,
            apiKey: data.apiKey,
            likes: [],
            dislikes: [],
            email: user?.email,
            author: user?.displayName
        }

        // Send to your database 
        fetch('https://onnorokompathshala.herokuapp.com/video', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(video)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('video upoload successfully')
                    reset();
                }
                else {
                    toast.error('Video upload Failed');
                }
            })

    }
    if(isLoad){
        return <Loader></Loader>
    }
    return (
        <div className='my-4 px-0 lg:px-2'>
            <h1 className='text-center text-md lg:text-2xl py-2 font-semibold uppercase text-white bg-purple-600'>Add Video</h1>
            <form onSubmit={handleSubmit(videoAdded)} className="flex flex-col gap-2 my-4">
                <input type="text" placeholder='Add title' className='p-2'  {...register("title")} required/>
                <textarea type="text" rows={6} className='p-4' placeholder='Description'  {...register("description")}></textarea>
                <div className='grid grid-cols-1 lg:grid-cols-2 grid-reverse gap-2'>
                    <input type="text" placeholder='Video Id' className='p-2'  {...register("videoId")} required />
                    <input type="text" placeholder='API Key' className='p-2'  {...register("apiKey")} required />
                    <button className='p-2 bg-green-600 text-white text-lg uppercase'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddVideo;