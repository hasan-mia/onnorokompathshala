import React from 'react';
import Sidebars from './components/Sidebars';
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <main className='min-h-screen'>
            <div className="w-full flex flex-col lg:flex-row">
                <div className='w-full lg:w-2/12 hidden lg:block'>
                    <Sidebars></Sidebars>
                </div>

                <div className='w-full lg:w-10/12 ml-0 lg:ml-4 border-l border-gray-100 min-h-screen'>
                    <Outlet/>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;