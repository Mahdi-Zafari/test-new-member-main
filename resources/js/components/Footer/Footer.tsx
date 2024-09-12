import React from "react";
import { Link, NavLink } from "../Shared/Link";
import {
    FooterDesktopPageLinks,
    FooterDesktopSocialLinks,
    FooterMobilePageLinks,
} from "../../constants";
import { __ } from "../../utils/translation";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const hiddenFooterInChatPage = location.pathname.startsWith("/chat");
    return (
        <>
            {!hiddenFooterInChatPage && (
                //{/* MOBILE */}
                <div className="h-16 flex justify-around rounded-t-lg shadow-t items-center bg-white md:hidden fixed bottom-0 inset-x-0 z-20">
                    {FooterMobilePageLinks.map((link) => (
                        <NavLink
                            key={link.title}
                            to={link.url}
                            className={({ isActive }) =>
                                `flex flex-1 flex-col capitalize items-center transition-all duration-300 ${
                                    isActive
                                        ? "text-[#e72a7f]"
                                        : "text-gray-400 hover:text-[#e72a7f]"
                                }`
                            }
                        >
                            <link.icon />
                            <span className="text-sm">{__(link.title)}</span>
                        </NavLink>
                    ))}
                </div>
            )}

            {/* DESKTOP */}
            <div className="bg-white border-t border-gray-200 hidden md:block">
                {/* PAGES */}
                <div className="flex items-center justify-around lg:justify-center lg:gap-4 px-8">
                    {FooterDesktopPageLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.url}
                            className="capitalize px-3 py-4 flex-nowrap text-[13px] text-gray-600 block"
                        >
                            {__(link.title)}
                        </Link>
                    ))}
                </div>

                <div className="p-2 bg-gray-100">
                    {/* COPY RIGHT */}
                    <p className="text-center text-gray-600 text-xs py-1">
                        All rights reserved © {new Date().getFullYear()}
                    </p>
                    {/* SOCIAL MEDIA */}
                    <div className="flex items-center justify-center gap-6 p-3">
                        {FooterDesktopSocialLinks.map((link) => (
                            <Link
                                key={link.url + Math.random()}
                                to={link.url}
                                className="capitalize hover:scale-[1.2] transition-all duration-300"
                            >
                                <link.icon />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
