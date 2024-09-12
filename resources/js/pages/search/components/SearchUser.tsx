import React from "react";
import SearchUserActions from "./SearchUserActions";

const SearchUser = ({ user }) => {
    return (
        <div
            key={user.id}
            className="bg-gray-50 shadow-md flex flex-col justify-between md:p-4 p-2 md:pb-0 divide-y rounded-lg"
        >
            {/* IMAGE */}
            <div className="p-2">image</div>

            {/* INFO */}
            <div className="p-2">
                <p className="font-semibold whitespace-nowrap">{user.name}</p>
                <p className="text-gray-500 text-sm whitespace-nowrap">
                    {user.getAge()}, {user.maritalStatus}, {user.livingCity}
                </p>
            </div>

            {/* ACTION BUTTONS */}
            <SearchUserActions />
        </div>
    );
};

export default SearchUser;
