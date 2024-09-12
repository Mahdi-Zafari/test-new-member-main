import React from "react";
import { HiEnvelope, HiGift } from "react-icons/hi2";
import { MdAddReaction } from "react-icons/md";
import { IoMdFlag } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import defaultAvatar from "../../../../public/assets/images/defaultAvatar.png";
import Post from "../../models/Post";
import DropDown from "../Shared/DropDown";

interface SinglePostProps {
    post: Post;
    deleteAction?: boolean;
    onDeletePost?: (postId: number) => void;
    key: number;
}

const SinglePost = ({
    post,
    deleteAction,
    onDeletePost,
    ...props
}: SinglePostProps) => {
    const handleDeletePost = async () => {
        await Post.delete(post.id);
        if (onDeletePost) {
            onDeletePost(post.id);
        }
    };

    return (
        <div
            className="w-full divide-y divide-gray-200 bg-gray-50 shadow rounded-md p-4"
            {...props}
        >
            {/* PROFILE */}
            <div className="flex gap-4 pb-4 items-center">
                <img
                    src={post.user.profileImg || defaultAvatar}
                    alt={post.user.name}
                    className="size-12 rounded-full object-cover object-center"
                />
                <div className="flex flex-col -space-y-0.5 w-full">
                    <div className="flex items-center justify-between space-y-1">
                        <span className="font-medium">{post.user.name}</span>
                        {deleteAction && (
                            <DropDown
                                buttons={[
                                    {
                                        name: "Delete",
                                        icon: <IoTrashOutline />,
                                        onClick: handleDeletePost,
                                    },
                                ]}
                            />
                        )}
                    </div>
                    <div className="text-sm flex items-center justify-between space-y-1">
                        <span className="text-gray-500">
                            {post.getUserSummary()}
                        </span>
                        <span>{post.getFormattedDate()}</span>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="min-h-6 max-h-60 overflow-y-auto p-2">
                {post.getBodyContent()}
            </div>

            {/* BUTTONS */}
            {!deleteAction && (
                <div className="flex justify-end gap-2 p-2 pb-0 items-center">
                    <button>
                        <IoMdFlag color="#4b5563" size={20} />
                    </button>
                    <button>
                        <HiEnvelope color="#4b5563" size={20} />
                    </button>
                    <button>
                        <MdAddReaction color="#4b5563" size={20} />
                    </button>
                    <button>
                        <HiGift color="#4b5563" size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default SinglePost;
