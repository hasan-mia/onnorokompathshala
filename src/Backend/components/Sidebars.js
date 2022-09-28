import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiVideoCamera, HiInbox, HiUser, HiArrowSmRight, HiPlus} from 'react-icons/hi';

const Sidebars = () => {
    return (
        <asside>
            <div className="w-fit bg-gray-50">
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="/admin" icon={HiChartPie}>
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Collapse icon={HiVideoCamera} label="Video">
                                <Sidebar.Item icon={HiArrowSmRight} href="/admin/video">
                                    All video
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiPlus} href="/admin/add-video">
                                    Add video
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