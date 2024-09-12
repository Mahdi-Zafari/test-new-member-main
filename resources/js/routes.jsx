import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { useSelector } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import AuthenticatedLayout from "./components/Layout/AuthenticatedLayout";
import CommonLayout from "./components/Layout/CommonLayout";

import NotFound from "./pages/not-found";
import Landing from "./pages/landing/landing";
import Profile from "./pages/profile/profile";
import Purchase from "./pages/purchase/purchase";
import HomeIndex from "./pages/home/index";
import BlogIndex from "./pages/blogs/index";
import BlogShow from "./pages/blogs/show";
import SecurityPolicy from "./pages/security-policy/security-policy";
import Contract from "./pages/contract/contract";
import AboutUs from "./pages/about-us/about-us";
import Help from "./pages/help/help";
import ContactUs from "./pages/contact-us/contact-us";
import SubscriptionPlans from "./pages/subscription-plans/subscription-plans";
import Payment from "./pages/payment/payment";
import ETF from "./pages/etf/etf";
import SearchIndex from "./pages/search/index";
import ChatIndex from "./pages/chat/index";

import "react-toastify/dist/ReactToastify.css";

function routes() {
    const { isMember } = useSelector((state) => state.user);

    return (
        <Routes>
            {/* LANDING PAGE */}
            <Route path="/" element={<Landing />} />

            {/* PUBLIC ROUTES */}
            <Route element={<CommonLayout />}>
                <Route path="blogs" element={<BlogIndex />} />
                <Route path="blogs/:id" element={<BlogShow />} />
                <Route path="policy" element={<SecurityPolicy />} />
                <Route path="contract" element={<Contract />} />
                <Route path="help" element={<Help />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="etf" element={<ETF />} />
                <Route
                    path="subscription-plans"
                    element={<SubscriptionPlans />}
                />
                <Route path="payment" element={<Payment />} />
            </Route>

            {/* PROTECTED ROUTES */}
            <Route
                element={
                    <ProtectedRoute isMember={Boolean(isMember)}>
                        <AuthenticatedLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="profile" element={<Profile />} />
                <Route path="home" element={<HomeIndex />} />
                <Route path="chat" element={<ChatIndex />} />
                <Route path="chat/:id" element={<ChatIndex />} />
                <Route path="search" element={<SearchIndex />} />
                <Route path="purchase" element={<Purchase />} />
            </Route>

            {/* NON-EXISTENT ROUTES */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default routes;
