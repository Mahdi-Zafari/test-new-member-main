import React from "react";
import "./landing.css";
import { __ } from "../../utils/translation";
import HomeBlogSection from "./components/LandingBlogSection";
import LandingBanner from "./components/LandingBanner";
import HomeTextArea from "./components/LandingTextArea";
import HomeMembersOpinions from "./components/LandingMembersOpinions";
import Img from "../../components/Shared/Img";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import User from "../../models/User";

export default function Home() {
    return (
        <>
            <Header />
            <LandingBanner />
            <div className="min-h-screen bg-white">
                <div className="custom-box">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 md:relative">
                            <Img
                                src="/assets/images/mobileImage1.png"
                                alt="mobileImage1"
                                // className=" md:absolute left-0 -mt-10"
                            />
                        </div>
                        <div className="w-full md:w-2/3 text-center">
                            <h3 className="title-custom">
                                {__("Islamic Marriage Site")}
                            </h3>
                            <p className="text-slate-400 pt-4">
                                {__(
                                    "Those who love wholeheartedly, islamic marriage website marriage who set out with the aim of marrying seriously brings together individuals who want to realize It is an online marriage site that brings Turkey's The first and largest marriage site Gönülden Those who love; friendship. friendship or matchmaker It is not a site. islamic marriage website Only for those who love wholeheartedly and whose intention is marriage. users become members. member users have been meticulously reviewed by editors. is examined and approved. intention of marriage Users who apparently do not exist are removed from the site. is removed. Messages reaching our system and User complaints are evaluated immediately are taken and necessary actions are taken. Single Our young people have a successful marriage To help them build a happy and peaceful home for themselves. We are helpful. Other for you Comfortable communication with our members: a Message System has been created"
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="custom-box">
                    <div className="flex flex-col md:flex-row md:flex-row-reverse">
                        <div className="w-full md:w-1/3 md:relative">
                            <Img
                                src="/assets/images/mobileImage2.png"
                                alt="mobileImage2"
                                // className=" md:absolute right-0 -mt-14"
                            />
                        </div>
                        <div className="w-full md:w-2/3 text-center">
                            <h3 className="title-custom">
                                {__("Detailed Search")}
                            </h3>
                            <p className="text-slate-400 pt-4">
                                {__(
                                    "Those who love the Islamic marriage site wholeheartedly can see millions of members registered on the site with its detailed search feature. You can easily find your soul mate among these millions of members with the smart filtering feature. With its very advanced filtering option, those who love wholeheartedly allow you to find the spouse candidate who best suits your character and lifestyle, by separating you from other members. It is very easy to reach the right spouse candidate with those who love you wholeheartedly! Islamic dating site helps those who love wholeheartedly to find your ideal spouse by creating a list of the most suitable people thanks to its detailed profile filtering feature."
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="custom-box">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 md:relative">
                            <Img
                                src="/assets/images/mobileImage1.png"
                                alt="mobileImage1"
                                // className=" md:absolute left-0 -mt-10"
                            />
                        </div>
                        <div className="w-full md:w-2/3 text-center">
                            <h3 className="title-custom">{__("Match Time")}</h3>
                            <p className="text-slate-400 pt-4">
                                {__(
                                    "The Islamic marriage site allows you to meet your ideal spouse with its detailed search feature for those who love wholeheartedly. With the filters you have selected in the detailed search, only suitable spouse candidates that you have filtered are listed on the home page. You can start chatting immediately by deciding on the most suitable spouse candidate among the spouse candidates listed on your home page. You can chat with your prospective spouse through those who love you wholeheartedly, without sharing your contact information first. In case of any negative situation against the marriage site during the chat, the member who violates the rules will be expelled from the membership and cannot become a member again with the same information. At Heartfelt Lovers, where active and reliable individuals are located, we do not include people on our site whose authenticity we are not sure of."
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <HomeMembersOpinions />

                <div className=" mx-10 md:mx-40 my-10 grid grid-cols-1 md:grid-cols-2 gap-x-5 ">
                    <div className="bg-slate-100 rounded-md">
                        <div className="p-5 rounded-tl-md rounded-tr-md">
                            <Img
                                src="/assets/images/groombride.jpg"
                                alt="groombride"
                                // className="p-5 rounded-tl-md rounded-tr-md"
                            />
                        </div>

                        <div className="bg-white mx-5 mb-5 px-5 pb-5 text-center">
                            <h3 className="font-medium">
                                {__("Ways to be happy and have a relationship")}
                            </h3>
                            <p>
                                {__(
                                    "While we are all looking for spouse candidates with whom we will spend the rest of our lives, we need to express ourselves well socially."
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-md">
                        <div className="p-5 rounded-tl-md rounded-tr-md">
                            <Img src="/assets/images/rings.jpg" alt="rings" />
                        </div>

                        <div className="bg-white mx-5 mb-5 px-5 py-3 text-center">
                            <h3 className="font-medium">NİHAT & AYŞE</h3>
                            <p>
                                {__(
                                    "We met through your site in 2019. We have been married for 5 months. We thank you very much."
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="custom-box bg-slate-100">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/3 ">
                            <Img src="/assets/images/img2.png" alt="img2" />
                        </div>
                        <div className="w-full md:w-2/3 text-center">
                            <h3 className="title-custom">
                                {__(
                                    "Meeting Point for Couples Who Want to Get Married for 17 Years"
                                )}
                            </h3>
                            <p className="text-slate-400 pt-4">
                                {__(
                                    "Family is the smallest cornerstone of society. Everyone wants to have a family with healthy individuals who come together with love. Heartfelt lovers have brought together many couples under the name of 'Happiness Movement' for 17 years and helped them get married. Our goal as a marriage website for those who love wholeheartedly; Our aim is to help people build a happy home by bringing together people with similar interests and values. At this point, we experience the joy of enabling 20,000 people to meet their soul mates in 17 years. The dating site for those who love wholeheartedly, which has been the meeting point for those who want to get married for 17 years, has made the dreams of many people who come together on the site with the dream of marriage come true. The marriage site, whose number of members is increasing day by day, brings together couples with the same values ​​with 2,000 matches a day, helping them take the first step on this path."
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="custom-box bg-slate-100">
                    <div className="flex flex-col md:flex-row md:flex-row-reverse items-center">
                        <div className="w-full md:w-1/3 text-righف">
                            <Img src="/assets/images/img.png" alt="img" />
                        </div>
                        <div className="w-full md:w-2/3 text-center">
                            <h3 className="title-custom">
                                {__("Why Those Who Love Wholeheartedly?")}
                            </h3>
                            <p className="text-slate-400 pt-4">
                                {__(
                                    "Those who love wholeheartedly; It is a marriage website where people considering Islamic marriage come together. The aim of those who love wholeheartedly, which is an Islamic marriage site; Our aim is to find the most suitable spouse for you and help you enter the path of a happy marriage. Only people who are seriously looking for marriage become members of online marriage sites. Every member who is looking for serious marriage is examined by our editors to ensure that they have a real identity. Membership transactions are completed after confirming that the information entered is correct. Many details, such as the information shared by members on their walls, are constantly checked by editors. In any negative situation, the membership is canceled and the person cannot re-register with the same information. In the heartfelt lovers, which is a reliable marriage site, the information of all members is kept confidential and not shared with anyone."
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="custom-box bg-slate-100">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 items-center">
                            <Img src="/assets/images/img2.png" alt="img2" />
                        </div>
                        <div className="w-full md:w-2/3 text-center">
                            <h3 className="title-custom">{__("Security")}</h3>
                            <p className="text-slate-400 pt-4">
                                {__(
                                    "The profiles on our matrimonial site are constantly checked by our editors 24/7. All information of our users is kept confidential and not shared with anyone. Additionally, you can safely contact your prospective spouses thanks to the precautions taken against the theft of your photos."
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <HomeBlogSection />
            <HomeTextArea />
            <Footer />
        </>
    );
}
