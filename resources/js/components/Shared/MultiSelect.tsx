import React, { useState } from "react";
import useOutsideClick from "../../hooks/useClickOutside";
import { __, __c } from "../../utils/translation";

interface MultiSelectProps {
    label: string;
    selectedOptions: string[];
    options: string[];
    onChange: (selected: string[]) => void;
}

const MultiSelect = ({
    label,
    selectedOptions,
    options,
    onChange,
}: MultiSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const multiSelectRef = useOutsideClick(() => setIsOpen(false));

    const handleOptionToggle = (option: string) => {
        if (selectedOptions.includes(option)) {
            onChange(selectedOptions.filter((selected) => selected !== option));
        } else {
            onChange([...selectedOptions, option]);
        }
    };

    return (
        <div ref={multiSelectRef} className="relative">
            {/* LABEL */}
            <label className="block mb-1 text-sm capitalize font-medium text-gray-700">
                {__(label)}
            </label>

            {/* SELECT */}
            <div
                className="bg-white border-2 transition-all duration-300 hover:border-gray-400 focus:outline-gray-400 w-full p-2 rounded-md cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOptions.length > 0
                    ? selectedOptions.join(", ")
                    : __c("select...")}
            </div>

            {/* OPTIONS */}
            {isOpen && (
                <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    {options.map((option) => (
                        <label
                            key={option}
                            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleOptionToggle(option)}
                                className="form-checkbox h-4 w-4 accent-[#e72a7f]"
                            />
                            <span className="ml-2 text-sm capitalize text-gray-700">
                                {option}
                            </span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSelect;
