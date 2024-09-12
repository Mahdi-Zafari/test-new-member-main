import React, { useState, useEffect } from "react";
import Post from "../../models/Post";
import SinglePost from "./SinglePost";
import Pagination from "../Shared/Pagination";
import usePagination from "../../hooks/usePagination";
import User from "../../models/User";

interface PostsProps {
    userId?: number;
    deleteAction?: boolean;
}

const Posts = ({ userId, deleteAction }: PostsProps) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { currentPage, totalPages, paginate, currentItems } = usePagination(
        posts.length,
        10
    );

    const handleDeletePost = async (postId: number) => {
        await Post.delete(postId);
        setPosts(posts.filter((post) => post.id !== postId));
    };

    const fetchPosts = async () => {
        setIsLoading(true);

        let fetchedPosts;
        if (userId) {
            fetchedPosts = await Post.getUserPosts(userId);
        } else {
            fetchedPosts = await Post.all();
        }

        setPosts(fetchedPosts);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, [userId]);

    return (
        <div className="space-y-6">
            {isLoading && <p className="text-center capitalize">loading...</p>}
            {!isLoading &&
                currentItems(posts).map((post) => (
                    <SinglePost
                        key={post.id}
                        post={post}
                        deleteAction={deleteAction}
                        onDeletePost={handleDeletePost}
                    />
                ))}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
            />
        </div>
    );
};

export default Posts;
