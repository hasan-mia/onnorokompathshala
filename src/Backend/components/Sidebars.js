import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiVideoCamera, HiInbox, HiUser, HiArrowSmRight, HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Sidebars = () => {
    return (
        <asside className="hidden lg:block">
            <div className="w-fit bg-gray-50">
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item icon={HiChartPie}>
                                <Link to="/dashboard">Dashboard</Link>
                            </Sidebar.Item>
                            <Sidebar.Collapse icon={HiVideoCamera} label="Video">
                                <Sidebar.Item icon={HiArrowSmRight} href="/dashboard/video">
                                   All video
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiPlus}>
                                    <Link to="/dashboard/add-video">Add video</Link>
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                            <Sidebar.Item href="#" icon={HiInbox}>
                                Inbox
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiUser}>
                                Users
                            </Sidebar.Item>

                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </asside>
    );
};

export default Sidebars;