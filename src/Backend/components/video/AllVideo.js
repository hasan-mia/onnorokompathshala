import { Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { videoContext } from '../../../App';

const AllVideo = () => {
    const { videos } = useContext(videoContext);
    return (
        <div className='my-4 px-0 lg:px-2'>
            <h1 className='text-center text-md lg:text-2xl py-2 font-semibold uppercase text-white bg-purple-600'>All Video</h1>
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
                        videos?.reverse().map(video =>
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
                                    <Link to="/dashboard" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        Edit
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to="/dashboard" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        Delete
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        )
                    }


                </Table.Body>
            </Table>
        </div>
    );
};

export default AllVideo;