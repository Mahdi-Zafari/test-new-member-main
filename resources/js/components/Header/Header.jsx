import React, { useState } from "react";
import { Link } from "../Shared/Link";
import { FaCircle } from "react-icons/fa";
import { HiOutlineLogout, HiOutlineMenuAlt3 } from "react-icons/hi";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarLinks } from "../../constants";
import HeaderProfile from "./HeaderProfile";
import HeaderNotifications from "./HeaderNotifications";
import { __ } from "../../utils/translation";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";
import Img from "../Shared/Img";

const Header = () => {
    const dispatch = useDispatch();
    const { isMember } = useSelector((state) => state.user);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div className="bg-[#e72a7f] sticky top-0 inset-x-0 p-4 z-40 md:px-8 lg:px-14">
            <div className="flex items-center justify-between">
                <Link to="/dashboard">
                    <Img src="/assets/images/whiteLogo.png" />
                </Link>

                {/* WHEN USER LOGGED OUT */}
                {!isMember && (
                    <div className="flex justify-around gap-8 items-center">
                        <Link
                            to="/blogs"
                            className="uppercase font-bold hidden md:block text-white"
                        >
                            {__("blog")}
                        </Link>
                        <Link
                            to="/policy"
                            className="uppercase font-bold hidden md:block text-white"
                        >
                            {__("policy")}
                        </Link>
                        <Link
                            to="/contract"
                            className="uppercase font-bold hidden md:block text-white"
                        >
                            {__("contract")}
                        </Link>
                        <Link
                            to="/about-us"
                            className="uppercase font-bold hidden md:block text-white"
                        >
                            {__("about us")}
                        </Link>
                        <Link
                            to="/contact-us"
                            className="uppercase font-bold hidden md:block text-white"
                        >
                            {__("contact us")}
                        </Link>
                        {/* <Link
                            to="/payment"
                            className="uppercase font-bold hidden md:block text-white"
                        >
                            {__("payment")}
                        </Link>
                        <Link
                            to="/subscription-plans"
                            className="uppercase font-bold hidden md:block text-white"
                        >
                            {__("subscription plans")}
                        </Link> */}

                        <span className="uppercase font-bold hidden lg:block text-white">
                            {__("online member")}: 1216
                        </span>

                        <Link
                            to="/"
                            className="active:scale-[0.98] transition-all duration-200 uppercase font-bold bg-white text-gray-800 px-4 ml-36 py-2 rounded hover:shadow-md"
                        >
                            {__("sign up")}
                        </Link>
                    </div>
                )}

                {/* WHEN USER LOGGED IN */}
                {isMember && (
                    <div className="flex items-center">
                        {/* MOBILE */}
                        <div className="uppercase flex gap-2 items-center justify-center font-semibold md:hidden">
                            <FaCircle className="fill-green-500 text-xs" />
                            <span className="text-white text-sm">
                                {__("online")}: 255
                            </span>

                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="p-2 pr-0"
                            >
                                <HiOutlineMenuAlt3 className="text-2xl text-white" />
                            </button>
                        </div>
                        <Sidebar
                            isOpen={isSidebarOpen}
                            onClose={() => setIsSidebarOpen(false)}
                        >
                            <ul className="space-y-2">
                                {SidebarLinks.map((link) => (
                                    <li
                                        key={link.text}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className="flex items-center capitalize p-2 gap-2 hover:bg-[#e72a7f] hover:text-white transition-all duration-200 rounded-md text-gray-800"
                                    >
                                        <link.icon />
                                        <Link to={link.url} className="flex-1">
                                            {__(link.text)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <li className="flex items-center capitalize p-2 gap-2 mt-10">
                                <HiOutlineLogout className="text-red-500 mt-1 text-lg" />
                                <button
                                    onClick={handleLogout}
                                    className="flex-1 capitalize text-start text-red-500"
                                >
                                    {__("safe exit")}
                                </button>
                            </li>
                        </Sidebar>

                        {/* DESKTOP */}
                        <div className="hidden md:flex text-sm lg:text-base">
                            {/* ONLINE MEMBERS */}
                            <p className="flex gap-2 items-center px-2 lg:px-6 text-white border-r border-pink-400 uppercase font-semibold">
                                {__("online")}: 1610
                            </p>

                            {/* BLOG */}
                            <Link
                                to="/blogs"
                                className="flex items-center lg:px-4 text-white uppercase font-semibold"
                            >
                                {__("blogs")}
                            </Link>
                            {/* <Link
                                to="/policy"
                                className="flex items-center lg:px-4 text-white uppercase font-semibold"
                            >
                                {__("policy")}
                            </Link> */}
                            {/* <Link
                                to="/contract"
                                className="flex items-center lg:px-4 text-white uppercase font-semibold"
                            >
                                {__("contract")}
                            </Link> */}
                            {/* <Link
                                to="/about-us"
                                className="flex items-center lg:px-4 text-white uppercase font-semibold"
                            >
                                {__("about us")}
                            </Link> */}
                            <Link
                                to="/contact-us"
                                className="flex items-center lg:px-4 text-white uppercase font-semibold"
                            >
                                {__("contact us")}
                            </Link>
                            {/* <Link
                            to="/payment"
                            className="flex items-center lg:px-4 text-white uppercase font-semibold"
                        >
                            {__("payment")}
                        </Link>
                        <Link
                            to="/subscription-plans"
                            className="flex items-center lg:px-4 text-white uppercase font-semibold"
                        >
                            {__("subscription plans")}
                        </Link> */}

                            {/* SEARCH */}
                            <Link
                                to="/search"
                                className="flex gap-2 items-center px-2 lg:px-6 text-white
                            border-r border-pink-400 uppercase font-semibold"
                            >
                                {__("search for co-candidate")}
                            </Link>

                            {/* PROFILE */}
                            <HeaderProfile />

                            {/* NOTIFICATIONS */}
                            <HeaderNotifications />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
