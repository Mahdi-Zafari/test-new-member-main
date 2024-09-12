import React from "react";
import { useSelector } from "react-redux";
import defaultAvatar from "../../../../../public/assets/images/defaultAvatar.png";
import Story from "../../../models/Story";

type HomeStoryNavigationProps = {
    onStoryClick: (index: number) => void;
    stories: Story[];
};

const HomeStoryNavigation = ({
    onStoryClick,
    stories,
}: HomeStoryNavigationProps) => {
    const { profileImage } = useSelector((state: any) => state.user);

    return (
        <div className="flex overflow-x-auto px-4 py-8 scrollbar-hide">
            <nav className="flex gap-4 flex-shrink">
                {/* ADD STORY */}
                <div className="cursor-pointer size-16 relative">
                    <span className="absolute -bottom-0 -right-0 rounded-full bg-blue-500 size-5 flex items-center text-2xl text-white font-bold justify-center">
                        <span className="mb-[5px]">+</span>
                    </span>

                    <img
                        src={profileImage || defaultAvatar}
                        alt="Uploaded"
                        className="size-full rounded-full object-cover object-center mb-4"
                    />
                </div>

                {/* OTHERS STORY */}
                {stories.map((story, index) => {
                    const formattedStory = story.getFormattedStory();
                    return (
                        <div
                            key={story.id}
                            onClick={() => onStoryClick(index)}
                            className="cursor-pointer bg-blue-100 ring-2 ring-offset-2 ring-purple-600 rounded-full size-14 flex items-center justify-center"
                        >
                            <img
                                src={formattedStory.header.profileImage}
                                alt=""
                                className="rounded-full object-cover w-full h-full"
                            />
                        </div>
                    );
                })}
            </nav>
        </div>
    );
};

export default HomeStoryNavigation;
