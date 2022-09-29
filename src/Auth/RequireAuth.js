import React, { useEffect } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase';
import Loader from '../Shared/Loader';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, errors] = useSendEmailVerification(auth);
    const location = useLocation();

    useEffect(() => {
        if (errors) {
            switch (errors?.code) {
                case "auth/invalid-email":
                    toast.error("Please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast.error("Invalid password!!");
                    break;
                case "auth/wrong-password":
                    toast.error("Password is Wrong!!");
                    break;
                case "auth/user-not-found":
                    toast.error("User Not Found!!");
                    break;
                default:
                    toast.error("Something went wrong");
            }
        }
    }, [errors]);

    if (loading || sending) {
        return <Loader/>
    }

    if (user) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default RequireAuth;