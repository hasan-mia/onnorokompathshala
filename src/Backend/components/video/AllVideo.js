import { Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { videoContext } from '../../../App';
import auth from '../../../Firebase/Firebase';
import Loader from '../../../Shared/Loader';

const AllVideo = () => {
    const [user] = useAuthState(auth);
    const updateVideo = useNavigate();
    const { videos, isLoad, setIsLoad } = useContext(videoContext);
    // filter video by user
    const yourVideo = videos?.filter(item => item?.email === user?.email)

    // Delete handler
    const handleDelete = (id) => {
        fetch(`https://onnorokompathshala.herokuapp.com/video/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setIsLoad(true)
                    toast.success("Deleted success");
                }
            })

    }
    if (isLoad) {
        return <Loader />
    }
    return (
        <div className='my-4 px-0 lg:px-2'>
            <h1 className='text-center text-md lg:text-2xl py-2 font-semibold uppercase text-white bg-purple-600'>Your All Video</h1>
            {
                yourVideo.length === 0 ?
                    // if video array is null
                    <div className='px-2'>
                        <h1 className='text-center text-3xl text-red-600 pt-6'>You don't upload video yet</h1>
                        <p className='text-purple-500 text-2xl font-semibold flex items-center gap-2'><BsArrowRight/> Before you start</p>
                        <p className='flex items-center gap-2'><BsArrowRight/>You need a Google Account to access the Google API Console, request an API key, and register your application.</p>

                        <p className='flex items-center gap-2'><BsArrowRight/>Create a project in the <a href='https://console.developers.google.com/' target="_blank" className='text-blue-500 font-semibold'>Google Developers Console</a> and <a href='https://console.cloud.google.com/apis/credentials' target="_blank" className='text-blue-500 font-semibold'>obtain authorization credentials</a> so your application can submit API requests.</p>

                        <p className='flex items-center gap-2'><BsArrowRight/>After creating your project, make sure the YouTube Data API is one of the services that your application is registered to use:</p>

                        <div className='flex items-center gap-2'><BsArrowRight/> 
                        <p>Go to the <a href="https://console.developers.google.com/" target="_blank" className='text-blue-500 font-semibold'>API Console</a> and select the project that you just registered.
                            Visit the <a href="https://console.developers.google.com/apis/enabled" target="_blank" className='text-blue-500 font-semibold'>Enabled APIs page</a>. In the list of APIs, make sure the status is ON for the YouTube Data API v3.If your application will use any API methods that require user authorization, read the authentication guide to learn how to implement OAuth 2.0 authorization.</p>
                        </div>

                        <p className='flex items-center gap-2'><BsArrowRight/>Save the key to using share the video :) </p>
                    </div>
                    :
                    // if video array is not null
                    <Table hoverable={true}>
                        <Table.Head>
                            <Table.HeadCell>
                                Title
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Video ID
                            </Table.HeadCell>
                            <Table.HeadCell>
                                API KEY
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Edit
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Delete
                            </Table.HeadCell>
                        </Table.Head>

                        <Table.Body className="divide-y">
                            {
                                yourVideo?.reverse().map(video =>
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {video?.title}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {video?.videoId}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {video?.apiKey}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <button onClick={() => updateVideo(`/dashboard/edit-video/${video._id}`)} ><AiFillEdit className='text-2xl text-green-500' /></button>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <button onClick={() => handleDelete(`${video?._id}`)}><AiFillDelete className='text-2xl text-red-500' /></button>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            }

                        </Table.Body>

                    </Table>
            }
        </div>
    );
};

export default AllVideo;