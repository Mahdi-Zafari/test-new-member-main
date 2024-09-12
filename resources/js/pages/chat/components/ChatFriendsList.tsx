import React from "react";
import ChatFriendsListItem from "./ChatFriendsListItem";
import { ChatFriendsListProps } from "../../../type";

const ChatFriendsList = ({
    isOpen,
    onClose,
    friends,
    onDeleteFriend,
}: ChatFriendsListProps) => {
    return (
        <>
            {/* SIDE PANEL */}
            <div
                className={`bg-white w-60 xs:w-64 shadow-md z-30 transform transition-transform duration-300 ease-in-out ${
                    isOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                } absolute inset-y-0 md:relative md:flex-shrink-0 md:h-full overflow-y-auto`}
            >
                {/* SIDE PANEL HEADER */}
                <div className="flex justify-between sticky top-0 bg-white z-20 items-center px-4 py-1 md:py-2 border-b">
                    <h2 className="font-semibold">Friends</h2>
                    <button
                        onClick={onClose}
                        className="text-lg font-semibold md:hidden"
                    >
                        &times;
                    </button>
                </div>

                {/* SIDE PANEL FRIENDS LIST */}
                <div className="max-h-[600px]">
                    {friends.map((friend) => (
                        <ChatFriendsListItem
                            key={friend.id}
                            friend={friend}
                            onClose={onClose}
                            onDelete={() => onDeleteFriend(friend.id)}
                        />
                    ))}
                </div>
            </div>

            {/* BACKDROP */}
            {isOpen && (
                <div
                    className="absolute inset-0 z-20 bg-black bg-opacity-10 md:hidden"
                    onClick={onClose}
                />
            )}
        </>
    );
};

export default ChatFriendsList;
