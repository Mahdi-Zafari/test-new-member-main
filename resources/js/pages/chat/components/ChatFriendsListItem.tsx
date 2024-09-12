import React from "react";
import { useNavigate } from "react-router-dom";
import { ChatFriendsListItemProps } from "../../../type";
import { MdOutlineBlock } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import DropDown from "../../../components/Shared/DropDown";

const ChatFriendsListItem = ({
    friend,
    onClose,
    onDelete,
}: ChatFriendsListItemProps) => {
    const navigate = useNavigate();

    const handleSelect = () => {
        navigate(`/chat/${friend.id}`);
        onClose();
    };

    const handleDelete = () => {
        onDelete();
    };

    const handleBlock = () => {
        alert(`block ${friend.name}`);
        onClose();
    };

    return (
        <div
            className="flex items-center px-2 py-3 cursor-pointer border-b"
            onClick={handleSelect}
        >
            <img
                src={friend.image}
                alt={friend.name}
                className="w-12 h-12 rounded-full mr-3"
            />

            <div className="flex-1">
                <div className="font-semibold">{friend.name}</div>
                <div className="text-xs text-gray-500 w-[150px] text-ellipsis whitespace-nowrap overflow-hidden">
                    {friend.lastMessage}
                </div>
            </div>

            <DropDown
                buttons={[
                    {
                        name: "Delete",
                        icon: <IoTrashOutline />,
                        onClick: handleDelete,
                    },
                    {
                        name: "Block",
                        icon: <MdOutlineBlock />,
                        onClick: handleBlock,
                    },
                ]}
            />
        </div>
    );
};

export default ChatFriendsListItem;
