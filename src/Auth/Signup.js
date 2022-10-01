import React from 'react';
import SocialLogin from './SocialLogin';
import logo from '.././Frontend/assets/logo.png'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <main className='min-h-screen'>
            <div className="flex flex-col items-center justify-center gap-2 px-2">
                <img src={logo} alt="onnorokom logo" className='text-center w-28' />
                <p className='border-t pt-1 border-gray-200 text-3xl text-purple-600 font-semibold'>Register</p>
                <form className="flex flex-col gap-2 w-full px-4 lg:w-96">
                    <input type="text" placeholder='Name' className='p-2 rounded-sm' />
                    <input type="email" placeholder='Email' className='p-2 rounded-sm' />
                    <input type="password" placeholder='Password' className='p-2 rounded-sm' />
                    <input type="password" placeholder='Confirm password' className='p-2 rounded-sm' />
                    <button className='text-xl px-4 py-1 bg-purple-500 rounded-sm text-white'>Register</button>
                </form>
                <p>Allready have an account?<Link to="/login" className='text-red-500'> Click here</Link></p>
            </div>
            <div className="text-center mt-2 w-full px-2">
                <p className='border-b border-gray-200'>or</p>
                <p className='py-2'>Login with</p>
                <SocialLogin />
            </div>
        </main>
    );
};

export default Signup;