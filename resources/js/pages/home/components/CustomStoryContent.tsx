import React, { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import Story from "../../../models/Story";

const CustomStoryContent = ({ story }: { story: Story }) => {
    const [message, setMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSaveMessage = () => {
        console.log(message);
        setMessage("");
    };

    const formattedStory = story.getFormattedStory();

    return (
        <div className="relative p-4 w-full h-full flex flex-col justify-between">
            {/* STORY HEADER */}
            <div className="flex gap-4">
                <img
                    src={formattedStory.header.profileImage}
                    alt="Profile"
                    className="rounded-full mt-4 size-14"
                />
                <div className="mt-5 text-white">
                    {/* NAME */}
                    <h3>{formattedStory.header.heading}</h3>
                    {/* DATE */}
                    <span className="text-xs">
                        {formattedStory.header.subheading}
                    </span>
                </div>
            </div>

            {/* STORY CONTENT */}
            <div className="flex-1 flex items-center justify-center p-4">
                <img
                    src={formattedStory.imageUrl}
                    alt="Story"
                    className="max-h-[80vh] mx-auto"
                />
            </div>

            {/* STORY FOOTER (REPLY TO STORY) */}
            <div className="flex w-full items-center py-4 px-2 z-[10000]">
                <input
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Send message..."
                    className="w-full px-3 rounded-full py-2"
                />
                <button
                    onClick={handleSaveMessage}
                    className="p-2 ml-2 bg-blue-500 text-white rounded-full"
                >
                    <HiEnvelope />
                </button>
            </div>
        </div>
    );
};

export default CustomStoryContent;
