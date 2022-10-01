import React from 'react';
import { Avatar, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link } from "react-router-dom";
import { VscSearch } from 'react-icons/vsc';
import logo from '../assets/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import { signOut } from 'firebase/auth';
import { HiUser } from 'react-icons/hi';

const Headers = () => {
    const [user] = useAuthState(auth)
    return (
        <header className='border-b border-gray-200 m-0 py-0 px-2 lg:px-3'>

            {/* ====FrontEnd Navbar=== */}
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href='/'>
                    <img src={logo} className="mr-3 w-24" alt="onnorokom pathshala Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2 gap-2">
                    <div className='hidden lg:block'>
                        <TextInput type="text" placeholder="search here.." required={true} icon={VscSearch} />
                    </div>
                    <Dropdown inline={true}
                        label={<Avatar alt="User settings" icon={HiUser} rounded={true} />}
                    >
                        <Dropdown.Item>
                            {
                                !user ?
                                    <span>Please login</span>
                                    :

                                    user?.displayName ?
                                        <div className='grid gap-2'>
                                            <p className='font-semibold'>{user?.displayName}</p>
                                            <p>{user?.email}</p>
                                        </div>
                                        :
                                        <p>{user?.email}</p>

                            }
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/dashboard">Dashboard</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            {
                                !user ?
                                    <Link to="/login" className="">Login</Link>
                                    :
                                    <span onClick={() => signOut(auth)} className="">Logout</span>
                            }
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <div className='block lg:hidden pb-2'>
                        <TextInput type="text" placeholder="search here.." required={true} icon={VscSearch} />
                    </div>
                    <Navbar.Link href="/"> <span className='text-md lg:text-xl'>Home</span> </Navbar.Link>
                    <Navbar.Link href="/"><span className='text-md lg:text-xl'>Video</span></Navbar.Link>
                    <Navbar.Link href="/"><span className='text-md lg:text-xl'>Course</span></Navbar.Link>
                    <Navbar.Link href="/"><span className='text-md lg:text-xl'>About</span></Navbar.Link>
                    <Navbar.Link href="/"><span className='text-md lg:text-xl'>Contact</span></Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

            {/* =====Backend Navbar==== */}
            {/* <div>
                <Navbar fluid={true} rounded={true}>
                    <Navbar.Brand href='/'>
                        <img src={logo} className="mr-3 w-24" alt="onnorokom pathshala Logo" />
                    </Navbar.Brand>
                    
                    <div className='flex-inline block lg:hidden'>
                        <Navbar.Collapse>
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
                        </Navbar.Collapse>
                    </div>
                    <Navbar.Toggle />
                </Navbar>
            </div> */}
        </header>
    );
};

export default Headers;