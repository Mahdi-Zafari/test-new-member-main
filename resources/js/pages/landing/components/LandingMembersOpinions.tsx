import React from "react";
import { __ } from "../../../utils/translation";
import Img from "../../../components/Shared/Img";

export default function HomeMembersOpinions() {
    return (
        <>
            <div className="custom-gradient-box p-5 md:p-10 mx-10 md:mx-40 mt-20 rounded-md">
                <h3 className="font-medium text-2xl text-white text-center">
                    {__("What Do Our Members Say?")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 text-center text-white">
                    <div>
                        <p className="font-medium py-10">
                            {__(
                                "I can say that it is a very nice and high-quality, simple and easy-to-use application, there are no fake people."
                            )}
                        </p>
                        <div className="flex justify-center items-center">
                            <Img
                                src="/assets/images/userprofile.png"
                                alt={__("Userprofile")}
                                className="rounded-full mr-3"
                            />
                            <p>Ayşe Coşkunerler</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium py-10">
                            {__(
                                "I met many people with the qualities I was looking for. This platform is for those who want to get married."
                            )}
                        </p>
                        <div className="flex justify-center items-center">
                            <Img
                                src="/assets/images/userprofile.png"
                                alt={__("Userprofile")}
                                className="rounded-full mr-3"
                            />
                            <p>Burak Demirciler</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium py-10">
                            {__(
                                "It's a nice application that reflects reality completely. The theme is also nice, I recommend it."
                            )}
                        </p>
                        <div className="flex justify-center items-center">
                            <Img
                                src="/assets/images/userprofile.png"
                                alt={__("Userprofile")}
                                className="rounded-full mr-3"
                            />
                            <p>Yeliz Ece Gerginler</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center pt-5 md:pt-10">
                    <Img
                        src="/assets/images/app-store-logo.png"
                        alt={__("App store logo")}
                        className="max-w-1/2 px-2 h-auto rounded"
                    />
                    <Img
                        src="/assets/images/google-play-logo.png"
                        alt={__("Google play logo")}
                        className="max-w-1/2 px-2 h-auto rounded  mt-5 md:mt-0"
                    />
                </div>
            </div>
        </>
    );
}
