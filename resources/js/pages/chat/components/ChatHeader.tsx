import React from "react";
import { BiMenu } from "react-icons/bi";
import DropDown from "../../../components/Shared/DropDown";
import { MdOutlineBlock, MdOutlineReportProblem, MdOutlineDelete  } from "react-icons/md";

interface ChatHeaderProps {
    selectedFriend: {
        id: number;
        name: string;
        image: string;
    } | null;
    onOpenSidebar: () => void;
}

const ChatHeader = ({ selectedFriend, onOpenSidebar }: ChatHeaderProps) => {
    return (
        <div className="border-b justify-between flex items-center border-gray-200 px-2 md:px-4 py-2.5">
            <div className="flex items-center">
                {/* OPEN SIDE PANEL BUTTON */}
                <button className="md:hidden mr-4 z-10" onClick={onOpenSidebar}>
                    <BiMenu />
                </button>

                {/* USER INFO HEADER */}
                {selectedFriend && (
                    <div className="flex items-center md:px-2">
                        <img
                            src={selectedFriend.image}
                            alt={selectedFriend.name}
                            className="w-12 h-12 rounded-full mr-3"
                        />

                        <div>
                            <p className="font-semibold">
                                {selectedFriend.name}
                            </p>
                            <p className="text-xs text-gray-500">
                                45, divorced, Istanbul
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* ACTION BUTTONS DROPDOWN */}
            {selectedFriend && (
                <DropDown
                    buttons={[
                        {
                            name: "Report",
                            icon: <MdOutlineReportProblem />,
                            onClick: () => console.log("Report"),
                        },
                        {
                            name: "Block",
                            icon: <MdOutlineBlock />,
                            onClick: () => console.log("Block"),
                        },
                        {
                            name: "Delete",
                            icon: <MdOutlineDelete  />,
                            onClick: () => console.log("Delete conversation"),
                        }
                    ]}
                />
            )}
        </div>
    );
};

export default ChatHeader;
