import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import defaultAvatar from "../../../../../public/assets/images/defaultAvatar.png";
import { IoMdImage } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Post from "../../../models/Post";

const allowedImageFormats = [
    "image/gif",
    "image/jpeg",
    "image/jpg",
    "image/png",
];

const HomeCreatePost = () => {
    const { profileImage } = useSelector((state) => state.user);
    const [postData, setPostData] = useState({ body: "", image: null });
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (allowedImageFormats.includes(file.type)) {
                setPostData((prevData) => ({ ...prevData, image: file }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("body", postData.body);
        if (postData.image) {
            formData.append("image", postData.image);
        }

        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        const newPost = await Post.create(postData);
        console.log("Post:", newPost);

        setPostData({ body: "", image: null });
    };

    useEffect(() => {
        if (!postData.image) {
            setPreviewUrl(null);
            return;
        }

        const objectUrl = URL.createObjectURL(postData.image);
        setPreviewUrl(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [postData.image]);

    return (
        <div className="w-full bg-white shadow flex rounded-md p-4">
            <img
                src={profileImage || defaultAvatar}
                alt="Profile"
                className="size-12 rounded-full object-cover object-center mb-4"
            />
            <form onSubmit={handleSubmit} className="flex-1 mt-1">
                <textarea
                    name="body"
                    value={postData.body}
                    onChange={handleInputChange}
                    className="w-full px-4 py-0 focus:outline-none resize-none"
                    placeholder="What do you think?"
                    rows={6}
                    maxLength={180}
                    style={{ height: "80px" }}
                />
                {previewUrl && (
                    <div className="relative mt-2 pl-4">
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="max-h-40 rounded-md"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setPostData((prevData) => ({
                                    ...prevData,
                                    image: null,
                                }))
                            }
                            className="absolute top-1 right-1 text-white bg-black bg-opacity-50 rounded-full p-1"
                        >
                            <IoClose size={20} />
                        </button>
                    </div>
                )}
                <div className="flex items-center justify-between mt-2 pl-4">
                    <div className="flex items-center gap-2">
                        <label className="cursor-pointer">
                            <input
                                type="file"
                                accept={allowedImageFormats.join(", ")}
                                onChange={handleImageUpload}
                                className="hidden"
                                ref={fileInputRef}
                            />
                            <IoMdImage
                                size={24}
                                className="text-gray-500 hover:text-gray-700"
                            />
                        </label>
                        <span className="text-sm text-gray-400">
                            {`${180 - postData.body.length} characters`}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="flex justify-center bg-green-500 hover:bg-green-600 transition-all duration-300 text-white px-4 py-1 rounded capitalize min-w-20"
                    >
                        save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HomeCreatePost;
