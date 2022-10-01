import React from 'react';
import Video from './Video';

const Videos = () => {
    return (
        <section className='my-2 lg:my-4'>
            <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-4'>
                <Video></Video>
            </div>
        </section>
    );
};

export default Videos;