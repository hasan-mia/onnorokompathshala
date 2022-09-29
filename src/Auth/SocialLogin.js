

import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsGoogle } from 'react-icons/bs';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase';
import Loader from '../Shared/Loader';
import useToken from "./useToken"

const SocialLogin = () => {
    const [user] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [token] = useToken(googleUser);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            if (token) {
                toast.success("Welcome Back");
            } else {
                toast.success("user not created");
            }
        }

    }, [token, from, navigate])

    useEffect(() => {
        if (googleError) {
            switch (googleError?.code) {
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
    }, [googleError]);

    if (googleLoading) {
        return <Loader/>
    }
    if(user){
        <Navigate to="/dashboard" state={{ from: location }} replace />
    }
  
    return (
        <div className="flex justify-center gap-4 py-2">
            <div className="flex flex-row items-center justify-center lg:justify-start">
                <button onClick={() => signInWithGoogle()} type="button">
                    <BsGoogle className='text-red-500 text-5xl'/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;