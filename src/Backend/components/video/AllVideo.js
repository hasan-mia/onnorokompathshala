import { Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
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
    const yourVideo = videos?.filter(item => item?.email == user?.email)

    // Edit handler
    const handleEdit = (id) => {

    }
    // Delete handler
    const handleDelete = (id) => {
        fetch(`http://localhost:5001/video/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                setIsLoad(true)
                toast.success("Deleted success");
            }
        })

    }
    if(isLoad){
        return <Loader/>
    }
    return (
        <div className='my-4 px-0 lg:px-2'>
            <h1 className='text-center text-md lg:text-2xl py-2 font-semibold uppercase text-white bg-purple-600'>All Video</h1>
            {
                yourVideo.length == 0 ?
                    // if video array is null
                    <h1 className='text-center text-3xl text-red-600 pt-6'>You don't upload video yet</h1>
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
                                            <button onClick={()=>updateVideo(`/dashboard/edit-video/${video._id}`)} ><AiFillEdit className='text-2xl text-green-500' /></button>
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