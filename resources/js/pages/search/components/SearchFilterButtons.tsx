import React from "react";
import { FiFilter } from "react-icons/fi";

interface SearchFilterButtonsProps {
    onFilter: () => void;
    onReset: () => void;
}

const SearchFilterButtons = ({
    onFilter,
    onReset,
}: SearchFilterButtonsProps) => {
    return (
        <>
            {/* MOBILE */}
            <div className="flex items-center gap-4 md:hidden">
                {/* FILTER BUTTON */}
                <button
                    onClick={onFilter}
                    className="capitalize flex gap-1 bg-[#e72a7f] text-white rounded-md px-2 py-1 items-center"
                >
                    <FiFilter /> <span>filter by</span>
                </button>

                {/* RESET BUTTON */}
                <button
                    onClick={onReset}
                    className="capitalize flex gap-1 bg-gray-300 rounded-md px-2 py-1 items-center"
                >
                    <span>reset</span>
                </button>
            </div>

            {/* DESKTOP */}
            <div className="gap-2 hidden md:flex mb-6">
                {/* FILTER BUTTON */}
                <button
                    onClick={onFilter}
                    className="capitalize flex gap-1 bg-[#e72a7f] text-white rounded-md px-2 py-1 flex-1 justify-center items-center"
                >
                    <FiFilter /> <span>filter</span>
                </button>

                {/* RESET BUTTON */}
                <button
                    onClick={onReset}
                    className="capitalize flex gap-1 bg-gray-300 rounded-md px-2 py-1 items-center flex-1 justify-center"
                >
                    reset
                </button>
            </div>
        </>
    );
};

export default SearchFilterButtons;
