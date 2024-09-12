import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProtectedSidebar from "../Sidebar/ProtectedSidebar";

const AuthenticatedLayout = () => {
    return (
        <div className="relative">
            <Header />
            <main className="flex items-start justify-between max-w-screen-xl mx-auto">
                <div className="flex-1">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AuthenticatedLayout;
