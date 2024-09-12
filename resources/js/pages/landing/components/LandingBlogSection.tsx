import React from "react";
import { __ } from "../../../utils/translation";
import Img from "../../../components/Shared/Img";
import { Link } from "react-router-dom";

export default function HomeBlogSection() {
    return (
        <>
            <div className=" my-10 grid grid-cols-1 md:grid-cols-3 gap-x-5 ">
                <div className="bg-slate-100 rounded-md">
                    <Img
                        src="/assets/images/blog3.jpg"
                        alt="blog3"
                        className="p-5 rounded-tl-md rounded-tr-md"
                    />
                    <div className="bg-white mx-5 mb-5 px-5 pb-5 text-center">
                        <h3 className="font-medium mt-2">
                            {__("Ways to be happy and have a relationship")}
                        </h3>
                        <p className="text-slate-400 mt-2">
                            {__(
                                "While we are all looking for spouse candidates with whom we will spend the rest of our lives, we need to express ourselves well socially."
                            )}
                        </p>
                        <Link
                            to={"/blogs/3"}
                            className="bg-pink-500 rounded py-2 px-4 text-white mt-10 font-medium"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="bg-slate-100 rounded-md">
                    <Img
                        src="/assets/images/blog2.jpg"
                        alt="blog2"
                        className="p-5 rounded-tl-md rounded-tr-md"
                    />
                    <div className="bg-white mx-5 mb-5 px-5 pb-5 text-center">
                        <h3 className="font-medium mt-2">
                            {__("Ways to be happy and have a relationship")}
                        </h3>
                        <p className="text-slate-400 mt-2">
                            {__(
                                "While we are all looking for spouse candidates with whom we will spend the rest of our lives, we need to express ourselves well socially."
                            )}
                        </p>
                        <Link
                            to={"/blogs/2"}
                            className="bg-pink-500 rounded py-2 px-4 text-white mt-10 font-medium"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="bg-slate-100 rounded-md">
                    <Img
                        src="/assets/images/blog1.jpg"
                        alt="blog1"
                        className="p-5 rounded-tl-md rounded-tr-md"
                    />
                    <div className="bg-white mx-5 mb-5 px-5 pb-5 text-center">
                        <h3 className="font-medium mt-2">
                            {__("Ways to be happy and have a relationship")}
                        </h3>
                        <p className="text-slate-400 mt-2">
                            {__(
                                "While we are all looking for spouse candidates with whom we will spend the rest of our lives, we need to express ourselves well socially."
                            )}
                        </p>
                        <Link
                            to={"/blogs/1"}
                            className="bg-pink-500 rounded py-2 px-4 text-white mt-10 font-medium"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
