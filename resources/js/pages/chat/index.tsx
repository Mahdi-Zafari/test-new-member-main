import React, { useState } from "react";
import ChatFriendsList from "./components/ChatFriendsList";
import ChatBody from "./components/ChatBody";
import { useParams } from "react-router-dom";
import { Friend } from "../../type";
import ChatHeader from "./components/ChatHeader";

const initialFriends: Friend[] = [
    {
        id: 1,
        name: "Alice Johnson",
        lastMessage: "See you soon!",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        id: 2,
        name: "Bob Smith",
        lastMessage: "Don't forget the meeting tomorrow.",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        id: 3,
        name: "Charlie Brown",
        lastMessage: "Got it, thanks!",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 4,
        name: "Diana Prince",
        lastMessage: "Catch you later!",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        id: 5,
        name: "Eve Adams",
        lastMessage: "Sure, sounds good!",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
];

const ChatIndex = () => {
    const [friends, setFriends] = useState(initialFriends);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { id } = useParams<{ id: string }>();

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    const handleDeleteFriend = (friendId: number) => {
        setFriends((prevFriends) =>
            prevFriends.filter((friend) => friend.id !== friendId)
        );
    };

    const selectedFriend = friends.find((friend) => friend.id === Number(id));

    return (
        <div className="max-w-screen-xl mx-auto py-6 md:p-8 w-full">
            <div className="relative overflow-hidden border shadow h-[calc(100dvh-180px)] md:h-[calc(100dvh-145px)] border-gray-200 rounded-md bg-gray-50 md:flex">
                <ChatFriendsList
                    isOpen={isSidebarOpen}
                    onClose={handleSidebarClose}
                    friends={friends}
                    onDeleteFriend={handleDeleteFriend}
                />

                <div className="flex-1">
                    <ChatHeader
                        selectedFriend={selectedFriend}
                        onOpenSidebar={() => setIsSidebarOpen(true)}
                    />
                    <ChatBody friend={selectedFriend} />
                </div>
            </div>
        </div>
    );
};

export default ChatIndex;
