import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase';
import logo from '.././Frontend/assets/logo.png'
import Loader from '../Shared/Loader';
import { toast } from 'react-toastify';
import useToken from './useToken';
import {Navigate, useLocation, useNavigate } from 'react-router-dom';

const UpdateName = () => {
    const [displayName, setDisplayName] = useState('');
    const [user]=useAuthState(auth)
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth)
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            if (token) {
                toast.success("Welcome");
            } else {
                toast.success("user not created");
            }
        }

    }, [token, from, navigate])
    useEffect(() => {
        if (updateerror) {
            switch (updateerror?.code) {
                case "auth/invalid-email":
                    toast.error("Please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast.error("Wrong password!!");
                    break;
                default:
                    toast.error("Something went wrong");
            }
        }
    }, [updateerror]);

    if (updating) {
        return <><Loader></Loader> <Navigate to="/dashboard" state={{ from: location }} replace /></>;
    }

    return (
        <main className='min-h-screen'>
            <div className="flex flex-col items-center justify-center gap-2 px-2">
                <img src={logo} alt="onnorokom logo" className='text-center w-28' />
                <p className='border-t pt-1 border-gray-200 text-3xl text-purple-600 font-semibold'>Please Give your name</p>
                <form className="flex flex-col gap-2 w-full px-4 lg:w-96">
                    <input placeholder='Your name' className='p-2 rounded-sm border border-gray-200'
                        type="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                    {/* <p className='text-center'>Go Dashboard<Link to="/dashboard" className='text-red-500'> Click here</Link></p> */}
                    <button
                        onClick={async () => { await updateProfile({ displayName }) }}
                        className='text-xl px-4 py-1 bg-purple-500 rounded-sm text-white'>Update</button>
                </form>
            </div>

        </main>
    );
};

export default UpdateName;