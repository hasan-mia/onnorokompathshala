import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase';

const AddVideo = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageBBKey = '91ffb587f5e2033431bd88e856e0dde6';

    const videoAdded = async (data) => {
        const image = data.image[0];
        console.log(data);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageBBKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const video = {
                        title: data.title,
                        description: data.description,
                        poster: img,
                        videoId: data.videoId,
                        videoKey: data.videoKey,
                        videoLike : '0',
                        videoDisliike: '0',
                        email: user?.email,
                        author: user?.displayName
                    }

                    // Send to your database 
                    fetch('http://localhost:5001/video', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(video)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Post successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add Post');
                            }
                        })

                }

            })
    }
    return (
        <div className='my-4 px-0 lg:px-2'>
            <h1 className='text-center text-md lg:text-2xl py-2 font-semibold uppercase text-white bg-purple-600'>Add Video</h1>
            <form onSubmit={handleSubmit(videoAdded)} className="flex flex-col gap-2 my-4">
                <input type="text" placeholder='Add title' className='p-2'  {...register("title")} />
                <textarea type="text" rows={6} className='p-4' placeholder='Description'  {...register("description")}></textarea>
                <div className='grid grid-cols-1 lg:grid-cols-2 grid-reverse gap-2'>
                    <input type="text" placeholder='Video Id' className='p-2'  {...register("videoId")} />
                    <input type="text" placeholder='API Key' className='p-2'  {...register("videoKey")} />
                    <input type="file" placeholder='image' className='w-full mt-2 p-2 border' {...register("image")} required />
                    <button className='px-2 bg-green-600 text-white text-lg uppercase'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddVideo;