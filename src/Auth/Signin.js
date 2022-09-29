import React from 'react';
import SocialLogin from './SocialLogin';
import logo from '.././Frontend/assets/logo.png'

const Signin = () => {
    return (
        <main className='min-h-screen'>
            <div className="flex flex-col items-center justify-center gap-2">
                <img src={logo} alt="onnorokom logo" className='text-center w-20' />
                <form className="flex flex-col gap-2 w-full lg:w-96">
                    <input type="text" placeholder='Email' className='p-2 rounded-sm' />
                    <input type="password" placeholder='Password' className='p-2 rounded-sm' />
                    <button className='text-xl px-4 py-1 bg-purple-600 rounded-sm text-white'>Login</button>
                </form>
            </div>
            <div className="text-center mt-2 w-full">
                <p className='border-b border-gray-200'>or</p>
                <p className='py-2'>Login with</p>
                <SocialLogin />
            </div>
        </main>
    );
};

export default Signin;