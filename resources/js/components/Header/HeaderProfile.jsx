import React from "react";
import { Link } from "../Shared/Link";
import { IoChevronDown } from "react-icons/io5";
import { HeaderProfileLinks } from "../../constants";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";
import { __ } from "../../utils/translation";

const HeaderProfile = () => {
    const dispatch = useDispatch();
    const { profileImage } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div className="px-2 lg:px-6 gap-3 group relative flex items-center text-white border-r border-pink-400 hover:cursor-pointer">
            {/* USER INFO */}
            <div className="flex items-center gap-1.5">
                {profileImage ? (
                    <img
                        src={profileImage}
                        alt="Uploaded"
                        className="size-12 rounded-full object-cover object-center"
                    />
                ) : (
                    <div className="rounded-full flex items-center justify-center size-12 bg-white border-2 border-white text-black">
                        img
                    </div>
                )}
                <span>username</span>
            </div>
            <span>
                <IoChevronDown className="text-lg" />
            </span>

            {/* DROPDOWN MENU */}
            <div className="absolute left-0 md:bottom-[-115px] lg:-bottom-[7.6rem] rounded transition-all duration-300 bg-[#e72a7f] hidden group-hover:flex flex-col w-full overflow-hidden">
                {HeaderProfileLinks.map((link) => (
                    <div key={link.title}>
                        <Link
                            to={link.url}
                            className="text-start capitalize w-full px-4 py-2 flex items-center gap-2 transition-all duration-200 hover:bg-pink-500"
                        >
                            <link.icon className="mt-1 mr-0.5 text-lg" />
                            <span>{__(link.title)}</span>
                        </Link>
                    </div>
                ))}
                <button
                    onClick={handleLogout}
                    className="text-start capitalize w-full px-4 py-2 flex items-center gap-2 transition-all duration-200 hover:bg-pink-500"
                >
                    <HiOutlineLogout className="mt-1 mr-0.5 text-lg" />
                    <span>safe exit</span>
                </button>
            </div>
        </div>
    );
};

export default HeaderProfile;
