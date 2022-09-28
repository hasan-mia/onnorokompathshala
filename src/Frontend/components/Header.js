import { Avatar, Dropdown, Label, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="#">
                <img src={logo} className="mr-3 w-32" alt="onnorokom pathshala Logo" />
            </Navbar.Brand>
            <div className="flex md:order-2 gap-2">
                <div className='hidden lg:block'>
                <TextInput type="text" placeholder="search here.." required={true} icon={VscSearch}/>
                </div>
                <Dropdown arrowIcon={false} inline={true} label={<Avatar alt="User settings" img={logo} rounded={true} />}>
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
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
                    <TextInput type="text" placeholder="search here.." required={true} icon={VscSearch}/>
                </div>
                <Navbar.Link href="/navbars" active={true}> Home </Navbar.Link>
                <Navbar.Link href="/navbars">About</Navbar.Link>
                <Navbar.Link href="/navbars">Services</Navbar.Link>
                <Navbar.Link href="/navbars">Pricing</Navbar.Link>
                <Navbar.Link href="/navbars">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;