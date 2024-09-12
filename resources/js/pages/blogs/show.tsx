import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Img from "../../components/Shared/Img";
import Blogs from "../../models/Blog";

interface BlogPosts {
    id: number;
    title: string;
    image: string;
    body: string;
}

export default function BlogShow() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchBlog = async () => {
                try {
                    const blog = await Blogs.get(Number(id));
                    setBlog(blog || null);
                } catch (error) {
                    console.error(error);
                    setBlog(null);
                }
            };
            fetchBlog();
        }
    }, [id]);

    if (!id || !blog) {
        return <div>Blog post not found {id}</div>;
    }

    return (
        <>
            <div className="mx-10 md:mx-40 my-10">
                <div className="text-left">
                    <Img
                        src={blog.image}
                        alt={blog.title}
                        className="p-5 rounded-tl-md rounded-tr-md"
                    />
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <div className="mx-10 md:mx-60">
                    <h2 className="text-4xl">{blog.title}</h2>
                    <h3 className="text-2xl my-5">Bir cevap yazın</h3>
                    <p>{blog.body}</p>
                    <form action="">
                        <label htmlFor="comment" className="block">
                            Yorum *
                        </label>
                        <textarea
                            id="comment"
                            className="resize-none border border-black custom-field"
                        ></textarea>
                        <label htmlFor="name" className="block">
                            İsim *
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border border-black mt-4 custom-field"
                        />
                        <label htmlFor="email" className="block">
                            E-posta
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-black mt-4 custom-field"
                        />
                        <label htmlFor="website" className="block">
                            İnternet sitesi
                        </label>
                        <input
                            type="text"
                            id="website"
                            className="block border border-black mt-4 custom-field"
                        />
                        <input
                            type="checkbox"
                            id="save-info"
                            className="mt-4"
                        />
                        <label htmlFor="save-info">
                            Bir dahaki sefere yorum yaptığımda kullanılmak üzere
                            adımı, e-posta adresimi ve web site adresimi bu
                            tarayıcıya kaydet.
                        </label>
                        <input
                            type="submit"
                            className="block border border-black mt-4 py-2 px-4"
                            value="Yorum gönder"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}
