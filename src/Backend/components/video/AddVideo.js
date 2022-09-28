import React from 'react';

const AddVideo = () => {
    return (
        <div className='my-4 px-0 lg:px-2'>
            <h1 className='text-center text-md lg:text-2xl py-2 font-semibold uppercase text-white bg-purple-600'>Add Video</h1>
            <form className="grid grid-cols-1 gap-2 my-4">
                <input type="text" placeholder='Add title' className='p-2' />
                <textarea type="text" rows={6} className='p-4' placeholder='Description'></textarea>
                <div className='text-right'>
                    <button className='p-2 bg-green-600 text-white text-xl uppercase w-1/4'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddVideo;