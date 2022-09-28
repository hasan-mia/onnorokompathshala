import React from 'react';
import Sidebars from '../components/Sidebars';

const Dashboard = () => {
    return (
        <main className='min-h-screen'>
            <div className="w-full">
                <div className='w-full lg:w-3/12'>
                    <Sidebars></Sidebars>
                </div>

                <div className='w-full lg:w-9/12'>
                
                </div>
            </div>
        </main>
    );
};

export default Dashboard;