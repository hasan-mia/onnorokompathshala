import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { videoContext } from '../../../App';
import auth from '../../../Firebase/Firebase';

const EditVideo = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { videos } = useContext(videoContext);
    // find video by id
    const video = videos?.find(item => item._id == id)
    const { title, description, videoId, apiKey } = video
    // console.log(video);
    const onSubmit = async data => {
        const video = {
            title: data.title,
            description: data.description,
            videoId: data.videoId,
            apiKey: data.apiKey,
        }
        // Send to your database 
        fetch(`http://localhost:5001/video/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(video)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted) {
                    toast.success('Updated successfully')
                    reset();
                }
                else {
                    toast.error('Failed to update');
                }
            })


    }

    return (
        <div className='my-4 px-0 lg:px-2'>
            <h1 className='text-center text-md lg:text-2xl py-2 font-semibold uppercase text-white bg-purple-600'>Add Video</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 my-4">
                <input type="text" defaultValue={title} className='p-2'  {...register("title")} />
                <textarea type="text" rows={6} className='p-4' defaultValue={description}  {...register("description")}></textarea>
                <div className='grid grid-cols-1 lg:grid-cols-2 grid-reverse gap-2'>
                    <input type="text" defaultValue={videoId} className='p-2'  {...register("videoId")} required />
                    <input type="text" defaultValue={apiKey} className='p-2'  {...register("apiKey")} required />
                    <button className='p-2 bg-green-600 text-white text-lg uppercase'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EditVideo;