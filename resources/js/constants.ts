import { GoHomeFill } from "react-icons/go";
import { IoNotifications, IoSearch, IoSettingsOutline } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";
import { BiSolidUser } from "react-icons/bi";
import { LuHome, LuInstagram, LuShoppingCart, LuUser2 } from "react-icons/lu";
import { HiGift, HiOutlinePhone } from "react-icons/hi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import {
    RiTwitterXFill,
    RiFacebookFill,
    RiEarthFill,
    RiBloggerLine,
} from "react-icons/ri";

export const HeaderProfileLinks = [
    { title: "profile", icon: LuUser2, url: "/profile" },
    { title: "settings", icon: IoSettingsOutline, url: "/settings" },
];

export const ProfileNotifications = [
    { icon: HiEnvelope, count: 5, url: "/chat" },
    { icon: IoNotifications, count: 3, url: "/profile" },
    { icon: RiEarthFill, count: 1, url: "/profile" },
    { icon: HiGift, count: 5, url: "/profile" },
];

export const SidebarLinks = [
    { text: "home", icon: LuHome, url: "/home" },
    { text: "profile", icon: LuUser2, url: "/profile" },
    { text: "purchases", icon: LuShoppingCart, url: "/purchases" },
    {
        text: "account settings",
        icon: IoSettingsOutline,
        url: "/account-settings",
    },
    { text: "blogs", icon: RiBloggerLine, url: "/blogs" },
    { text: "help", icon: IoMdHelpCircleOutline, url: "/help" },
    { text: "contact", icon: HiOutlinePhone, url: "/contact-us" },
];

export const FooterMobilePageLinks = [
    { title: "home", icon: GoHomeFill, url: "/home" },
    { title: "search", icon: IoSearch, url: "/search" },
    { title: "message", icon: HiEnvelope, url: "/message" },
    { title: "notifications", icon: IoNotifications, url: "/notifications" },
    { title: "profile", icon: BiSolidUser, url: "/profile" },
];

export const FooterDesktopPageLinks = [
    { title: "home", url: "/" },
    { title: "blogs", url: "/blogs" },
    { title: "help", url: "/help" },
    { title: "guide", url: "/guide" },
    { title: "happy couples", url: "/happy-couples" },
    { title: "privacy policy", url: "/privacy-policy" },
    { title: "user contract", url: "/user-contract" },
    { title: "payment form", url: "/payment-form" },
    { title: "contact", url: "/contact-us" },
];

export const FooterDesktopSocialLinks = [
    { icon: RiFacebookFill, url: "/" },
    { icon: LuInstagram, url: "/" },
    { icon: RiTwitterXFill, url: "/" },
];

export const allowedImageFormats = [
    "image/gif",
    "image/jpeg",
    "image/jpg",
    "image/png",
];
