import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { HiGift } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { MdAddReaction, MdNotInterested } from "react-icons/md";

const SearchUserActions = () => {
    return (
        <div className="flex justify-end gap-1 md:gap-2 py-2 md:p-2 pb-0 items-center">
            <button>
                <FaStar color="#4b5563" size={20} />
            </button>
            <button>
                <FaHeart color="#4b5563" size={20} />
            </button>
            <button>
                <HiEnvelope color="#4b5563" size={20} />
            </button>
            <button>
                <MdAddReaction color="#4b5563" size={20} />
            </button>
            <button>
                <HiGift color="#4b5563" size={20} />
            </button>
            <button>
                <MdNotInterested color="#4b5563" size={20} />
            </button>
        </div>
    );
};

export default SearchUserActions;
