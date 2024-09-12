import React from "react";
import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../../hooks/useClickOutside";

function Sidebar({ isOpen, onClose, children }) {
    const sidebarRef = useOutsideClick(onClose);

    return (
        <div
            className={`md:hidden backdrop-brightness-50 fixed top-0 left-0 w-full h-screen bg-gray-300 bg-opacity-30 z-40 transition-opacity duration-300 ease-in-out ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                ref={sidebarRef}
                className={`fixed right-0 inset-y-0 z-50 bg-white p-4 md:p-6 shadow-lg w-64 md:max-w-lg overflow-y-auto transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
                    <button onClick={onClose}>
                        <HiOutlineX className="size-5 text-secondary-500" />
                    </button>
                </div>

                {children}
            </div>
        </div>
    );
}

export default Sidebar;
