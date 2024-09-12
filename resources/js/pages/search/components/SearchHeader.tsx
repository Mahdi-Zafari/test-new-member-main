import React, { useState } from "react";

const SearchSearchBar = () => {
    const [activeButton, setActiveButton] = useState(null);

    // Example filter functions
    const handleDetailedSearch = () => {
        console.log("Detailed search filter activated");
    };

    const handleOnlineMembers = () => {
        console.log("Online members filter activated");
    };

    const handleToLocate = () => {
        console.log("To locate filter activated");
    };

    const handleNewMembers = () => {
        console.log("New members filter activated");
    };

    const handleApprovedMembers = () => {
        console.log("Approved members filter activated");
    };

    const handleNewPhotos = () => {
        console.log("New photos filter activated");
    };

    const handleBornToday = () => {
        console.log("Born today filter activated");
    };

    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const filterButtons = [
        { id: 1, label: "detailed search", onClick: handleDetailedSearch },
        { id: 2, label: "online members", onClick: handleOnlineMembers },
        { id: 3, label: "to locate", onClick: handleToLocate },
        { id: 4, label: "new members", onClick: handleNewMembers },
        { id: 5, label: "approved members", onClick: handleApprovedMembers },
        { id: 6, label: "new photos", onClick: handleNewPhotos },
        { id: 7, label: "born today", onClick: handleBornToday },
    ];

    return (
        <div className="overflow-x-auto flex px-4 py-8 scrollbar-hide mb-8">
            <ul className="flex gap-4 justify-center lg:gap-8">
                {filterButtons.map((button) => (
                    <button
                        key={button.id}
                        onClick={() => handleClick(button.id)}
                        className={`px-4 h-12 text-sm rounded-md capitalize flex items-center justify-center ${
                            activeButton === button.id
                                ? "bg-gray-100"
                                : "shadow"
                        }`}
                    >
                        {button.label}
                    </button>
                ))}
            </ul>
        </div>
    );
};

export default SearchSearchBar;
