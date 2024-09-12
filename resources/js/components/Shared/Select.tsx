import React from "react";
import { __ } from "../../utils/translation";

interface SelectProps {
    label?: string;
    name?: string;
    value: string;
    options: string[];
    disabled?: boolean;
    onChange: (value: string) => void;
}

const Select = ({
    label,
    name,
    value,
    options,
    disabled,
    onChange,
}: SelectProps) => {
    return (
        <div>
            {label && (
                <label className="block mb-1 text-sm capitalize font-medium text-gray-700">
                    {__(label)}
                </label>
            )}

            <select
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                className="bg-white capitalize border-2 transition-all duration-300 hover:border-gray-400 focus:outline-gray-400 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:hover:border-gray-200 w-full p-2 rounded-md"
            >
                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                        className="accent-[#e72a7f] capitalize"
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
