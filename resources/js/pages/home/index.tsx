import React, { useState, useEffect, useRef } from "react";
import HomeStoryNavigation from "./components/HomeStoryNavigation";
import HomeCreatePost from "./components/HomeCreatePost";
import ProtectedSidebar from "../../components/Sidebar/ProtectedSidebar";
import DisplayPosts from "../../components/Post/Posts";
import CustomStoryContent from "./components/CustomStoryContent";
import Stories from "react-insta-stories";
import { IoCloseSharp } from "react-icons/io5";
import Story from "../../models/Story";
import { allowedImageFormats } from "../../constants";
import "./home.css";

const HomeIndex = () => {
    const [stories, setStories] = useState([]);
    const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
    const [isUploadingStory, setIsUploadingStory] = useState(false);
    const fileInputRef = useRef(null);

    const handleStoryClick = (index: number) => {
        setSelectedStoryIndex(index);
    };

    const handleStroyChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const stroyImage = event.target.files[0];
        if (stroyImage) {
            setIsUploadingStory(true);
            const newStory = await Story.create(stroyImage);
            setStories([newStory, ...stories]);
            setIsUploadingStory(false);
        }
    };

    const handleAddStory = () => {
        fileInputRef.current.click();
    };

    const handleDeleteStory = async (storyId: number) => {
        await Story.delete(storyId);
        setStories(stories.filter((story) => story.id !== storyId));
    };

    const fetchStories = async () => {
        const allStories = await Story.all();
        setStories(allStories);
    };

    useEffect(() => {
        fetchStories();
    }, []);

    const storyFormat = stories.map((story) => ({
        content: () => (
            <CustomStoryContent
                story={story}
                onDelete={() => handleDeleteStory(story.id)}
            />
        ),
        ...story.getFormattedStory(),
    }));

    return (
        <div>
            {/* STORY NAVBAR */}
            <div className="md:max-w-[90vw] max-w-[100vw] mx-auto">
                <HomeStoryNavigation
                    onStoryClick={handleStoryClick}
                    stories={stories}
                    onAddStory={handleAddStory}
                    isUploadingStory={isUploadingStory}
                />
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleStroyChange}
                    accept={allowedImageFormats}
                    style={{ display: "none" }}
                />
            </div>

            {/* STORY MODAL */}
            {selectedStoryIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
                    <div className="relative">
                        {/* CLOSE BUTTON */}
                        <button
                            className="absolute z-[9999] p-8 top-2 right-2"
                            onClick={() => setSelectedStoryIndex(null)}
                        >
                            <IoCloseSharp color="#fff" size={25} />
                        </button>

                        {/* STORY SLIDES */}
                        <Stories
                            stories={[storyFormat[selectedStoryIndex]]}
                            defaultInterval={2500}
                            width={360}
                            height="100dvh"
                        />
                    </div>
                </div>
            )}

            <div className="md:flex justify-between pt-0">
                {/* SIDEBAR */}
                <div className="p-8 pt-0 hidden self-start md:block mx-auto">
                    <ProtectedSidebar />
                </div>

                <div className="p-6 pt-0 sm:p-8 sm:pt-0 w-full space-y-10 mb-20 md:mb-6 md:w-2/3">
                    <HomeCreatePost />
                    <DisplayPosts />
                </div>
            </div>
        </div>
    );
};

export default HomeIndex;
