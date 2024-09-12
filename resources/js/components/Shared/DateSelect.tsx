import React from "react";
import { __ } from "../../utils/translation";

interface DateSelectProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
}

const DateSelect = ({ label, value, onChange }: DateSelectProps) => {
    return (
        <div>
            {label && (
                <label className="block mb-1 capitalize text-sm font-medium text-gray-700">
                    {__(label)}
                </label>
            )}
            <input
                type="date"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="bg-white border-2 transition-all duration-300 hover:border-gray-400 focus:outline-gray-400 w-full p-2 rounded-md"
            />
        </div>
    );
};

export default DateSelect;
