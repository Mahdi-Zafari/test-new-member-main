import React, { useState } from "react";
import { ChatBodyProps } from "../../../type";
import { FaPlus } from "react-icons/fa";
import { BsEmojiSmile, BsCheck2All, BsCheck2 } from "react-icons/bs";
import Picker from "emoji-picker-react";


const ChatBody = ({ friend }: ChatBodyProps) => {
    //Send Image In Chat
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    // Get Current Time For New Message
    function getCurrentTime(): string {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    const currentTime = getCurrentTime();

    // Get Current Date For New Message
    function getCurrentMonthAndDay(): string {
        const now = new Date();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0'); 
    
        return `${month}/${day}`;
    }
    const date = getCurrentMonthAndDay();

    // Emoji Picker
    const [inputValue, setInputValue] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    
    const handleEmojiClick = (event, emojiObject) => {
        setInputValue(inputValue + emojiObject.emoji);
    };

    return (
        <div className="h-full">
            {!friend && (
                <div className="flex items-center font-medium text-xl justify-center h-full">
                    <p>Select a friend to start chat!</p>
                </div>
            )}

            {friend && (
                <div className="flex flex-col absolute bottom-0 top-[69px] left-0 right-0 md:left-64">
                    <div className="p-4 overflow-y-auto bg-white flex-1">
                        {/* LEFT */}
                        <div className="flex justify-start mb-4">
                            <div className="py-2 px-4 bg-gray-100 rounded-full rounded-bl-none">
                                <p>Hi everybody!</p>
                                <p className='text-[10px] text-gray-400 items-end'>{`${currentTime} | ${date}`} <BsCheck2All /></p>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-end mb-4">
                            <div className="py-2 px-4 bg-pink-100 rounded-full rounded-br-none">
                                <p>Hello, what's up? How's everything?</p>
                                <p className='text-[10px] text-gray-400 items-end'>{`${currentTime} | ${date}`} <BsCheck2 /></p>
                            </div>
                        </div>

                        {/* IMAGE PREVIEW */}
                        {selectedImage && (
                            <div className="flex justify-end mb-4">
                                <img src={selectedImage} alt="Selected" className="max-w-xs max-h-48 object-cover" />
                            </div>
                        )}
                    </div>
                    <div className="p-4 flex items-center">
                        <input
                            type="text"
                            placeholder="Write a message"
                            className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            id="imageInput"
                            className='hidden'
                            onChange={handleImageChange}
                        />
                        <div className="relative">
                            <BsEmojiSmile
                                className='text-gray-400 cursor-pointer'
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                            />
                            {showEmojiPicker && (
                                <div className="absolute bottom-full mb-2 right-0 z-10">
                                    <Picker onEmojiClick={handleEmojiClick} />
                                </div>
                            )}
                        </div>
                        <button onClick={() => document.getElementById('imageInput').click()} className="ml-2">
                            <FaPlus className='text-gray-400 mr-2' />
                        </button>
                        <button className="p-2 bg-green-500 text-white rounded-lg">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBody;
