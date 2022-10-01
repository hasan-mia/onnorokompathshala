import React from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsGithub, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'
import logo from '../assets/logo.png'
const Footers = () => {
    return (
        <footer>
            <Footer container={true}>
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
                        <div className='w-48'>
                            <img href="#" src={logo} className="w-full" alt="OnnorokomPathshala Logo"/>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                            <div>
                                <Footer.Title title="Home" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        OnnorokomPathshala
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Tailwind CSS
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="About" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Github
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Contact" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        OnnorokomPathshala
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Tailwind CSS
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Github
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Books" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        OnnorokomPathshala
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Tailwind CSS
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Business" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Github
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="OnnorokomPathshala™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </Footer>
        </footer>
    );
};

export default Footers;