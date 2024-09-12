import React from "react";
import { __ } from "../../utils/translation";

interface InputProps {
    label?: string;
    type?: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
}

const TextField = ({
    label,
    type = "text",
    placeholder,
    name,
    value,
    onChange,
    disabled,
    error,
}: InputProps) => {
    return (
        <div>
            {label && (
                <label className="block mb-1 text-sm capitalize font-medium text-gray-700">
                    {__(label)}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`bg-white border-2 placeholder:capitalize transition-all duration-300 ${
                    error ? "border-red-600" : "hover:border-gray-400"
                } focus:outline-gray-400 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:hover:border-gray-200 w-full p-2 rounded-md`}
            />
            {error && (
                <p className="text-red-600 font-medium text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default TextField;
