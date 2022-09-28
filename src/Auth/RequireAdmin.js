import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../Firebase/Firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Loader from '../Shared/Loader';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const { admin, isLoad } = useAdmin(user);
    const location = useLocation();

    if (loading || isLoad) {
        return <Loader/>
    }

    if (!user || admin.admin === false) {
        signOut(auth);
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;