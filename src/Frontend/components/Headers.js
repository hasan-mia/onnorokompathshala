import React from 'react';
import { Avatar, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link } from "react-router-dom";
import { VscSearch } from 'react-icons/vsc';
import logo from '../assets/logo.png';
import user from '../assets/hasan.png'

const Headers = () => {
    return (
        <header className='border-b border-gray-200 m-0 py-0 px-2 lg:px-3'>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href='/'>
                    <img src={logo} className="mr-3 w-24" alt="onnorokom pathshala Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2 gap-2">
                    <div className='hidden lg:block'>
                        <TextInput type="text" placeholder="search here.." required={true} icon={VscSearch} />
                    </div>
                    <Dropdown arrowIcon={false} inline={true} label={<Avatar alt="User settings" img={user} rounded={true} />}>
                        <Dropdown.Header>
                            <span className="block text-sm">Md. Hasan Mia</span>
                            <span className="block truncate text-sm font-medium">info.hasanmiah@gmail.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <div className='block lg:hidden pb-2'>
                        <TextInput type="text" placeholder="search here.." required={true} icon={VscSearch} />
                    </div>
                    <Navbar.Link href="/"> <span className='text-md lg:text-xl'>Home</span> </Navbar.Link>
                    <Navbar.Link href="/navbars"><span className='text-md lg:text-xl'>Video</span></Navbar.Link>
                    <Navbar.Link href="/navbars"><span className='text-md lg:text-xl'>Course</span></Navbar.Link>
                    <Navbar.Link href="/navbars"><span className='text-md lg:text-xl'>About</span></Navbar.Link>
                    <Navbar.Link href="/navbars"><span className='text-md lg:text-xl'>Contact</span></Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Headers;