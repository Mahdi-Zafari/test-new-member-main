import React, { useState } from "react";
import { VscKebabVertical } from "react-icons/vsc";
import useOutsideClick from "../../hooks/useClickOutside";

interface DropDownButtonProps {
    name: string;
    icon: React.ReactNode;
    onClick: () => void;
}

interface DropDownProps {
    buttons: DropDownButtonProps[];
}

const DropDown = ({ buttons }: DropDownProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropDownRef = useOutsideClick(() => setIsDropdownOpen(false));

    return (
        <div ref={dropDownRef} className="relative flex items-center">
            <button
                className="text-gray-800 font-bold"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                }}
            >
                <VscKebabVertical size={20} />
            </button>

            {isDropdownOpen && (
                <div className="border font-medium absolute right-0 top-2 mt-2 rounded-md bg-white shadow-lg divide-y">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={`${
                                button.name === "Delete" && "text-red-500"
                            } w-full flex gap-1 hover:bg-gray-50 transition-all duration-200 items-center px-2 py-1`}
                            onClick={() => {
                                button.onClick();
                                setIsDropdownOpen(false);
                            }}
                        >
                            {button.icon}
                            {button.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDown;
