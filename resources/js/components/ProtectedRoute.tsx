import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    isMember: boolean;
    children: React.ReactNode;
}

const ProtectedRoute = ({ isMember, children }: ProtectedRouteProps) => {
    return isMember ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
