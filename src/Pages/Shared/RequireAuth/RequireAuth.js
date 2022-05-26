import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import LoadingCom from "../../../Components/Loading/LoadingCom";
import firebaseAuth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(firebaseAuth);
    const location = useLocation();

    if (loading) {
        return <LoadingCom />;
    }
    if (error) {
        console.log(error);
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
