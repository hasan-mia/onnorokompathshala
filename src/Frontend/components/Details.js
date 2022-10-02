import { Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { videoContext } from '../../App';

const Details = () => {
    const { videos } = useContext(videoContext);
    const { id } = useParams()
    // find video by id
    const video = videos?.find(item => item._id == id)
    const { title, likes, dislikes, author } = video
    // console.log(video)
    return (
        <main className='min-h-screen'>
            <div className='my-4 px-0 lg:px-2'>
                <h1 className='text-center text-md lg:text-2xl py-2 font-semibold uppercase text-white bg-purple-600'>Video Details</h1>
                <Table hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell>
                            Title
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Author
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Likes: {likes.length}
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Dislikes: {dislikes.length}
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                {title}
                            </Table.Cell>
                            <Table.Cell>
                                {author}
                            </Table.Cell>
                            <Table.Cell>
                                {likes.join(', ')}
                            </Table.Cell>
                            <Table.Cell>
                                {dislikes.join(', ')}
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>

                </Table>

            </div>
        </main>
    );
};

export default Details;