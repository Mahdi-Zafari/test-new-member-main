import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Img from "../../components/Shared/Img";
import Blogs from "../../models/Blog";
import Pagination from "../../components/Shared/Pagination";
import usePagination from "../../hooks/usePagination";
import User from "../../models/User";

const BlogsIndex = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentPage, totalPages, paginate, currentItems } = usePagination(
        blogs.length,
        6
    );

    const fetchBlogs = async () => {
        setLoading(true);

        const allBlogs = await Blogs.all();
        setBlogs(allBlogs);

        setLoading(false);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <>
            <div className="blog-header">
                <h2 className="font-medium text-white text-2xl md:text-4xl text-center">
                    Gönülden Sevenler Blog Sitesi
                </h2>
            </div>

            <div className="mx-10 md:mx-40 my-10 grid grid-cols-1 md:grid-cols-3 gap-x-5">
                {loading && (
                    <p className="text-center capitalize">loading...</p>
                )}
                {!loading &&
                    currentItems(blogs).map((blog) => (
                        <div key={blog.id}>
                            <Img
                                src={blog.image}
                                alt={blog.title}
                                className="p-5 rounded-tl-md rounded-tr-md"
                            />
                            <div className="bg-white mx-5 mb-5 px-5 pb-5 text-left">
                                <h2 className="font-medium text-2xl py-4">
                                    {blog.title}
                                </h2>
                                <p className="text-justify">
                                    {blog.body.substring(0, 500)}
                                </p>
                                <div className="mt-5">
                                    <Link
                                        to={`/blogs/${blog.id}`}
                                        className="mt-5 px-4 py-2 bg-pink-500 rounded text-white font-medium"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="mb-24 md:mb-10">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    paginate={paginate}
                />
            </div>
        </>
    );
};

export default BlogsIndex;
