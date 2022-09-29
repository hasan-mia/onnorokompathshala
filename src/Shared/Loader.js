import { Spinner } from 'flowbite-react';
import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center pt-48'>
            <Spinner aria-label="Extra large spinner example" size="xl" color="purple"/>
        </div>
    );
};

export default Loader;