import React, { useEffect, useState } from 'react';
import SocialLogin from './SocialLogin';
import logo from '.././Frontend/assets/logo.png'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loader from '../Shared/Loader';
import auth from '../Firebase/Firebase';
import { toast } from 'react-toastify';
import useToken from './useToken';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/update";

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
        if (error) {
            switch (error?.code) {
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
    }, [error]);

    if (loading) {
        return <Loader></Loader>;
    }
    if(user){
        <Navigate to="/update" state={{ from: location }} replace />
    }
    return (
        <main className='min-h-screen'>
            <div className="flex flex-col items-center justify-center gap-2 px-2">
                <img src={logo} alt="onnorokom logo" className='text-center w-28' />
                <p className='border-t pt-1 border-gray-200 text-3xl text-purple-600 font-semibold'>Register</p>
                <form className="flex flex-col gap-2 w-full px-4 lg:w-96">
                    <input type="email" placeholder='Email' className='p-2 rounded-sm'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder='Password' className='p-2 rounded-sm'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <input type="password" placeholder='Confirm password' className='p-2 rounded-sm' /> */}
                    <button
                        onClick={() => createUserWithEmailAndPassword(email, password)}
                        className='text-xl px-4 py-1 bg-purple-500 rounded-sm text-white'>Register</button>
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