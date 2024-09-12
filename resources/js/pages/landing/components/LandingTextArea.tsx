import React from "react";
import {__} from '../../../utils/translation';

export default function HomeTextArea (){
    return (
        <>
        <div className="mx-10 md:mx-40 my-20 min-h-screen text-center">
                <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-4">
                    <div className="w-full md:w-1/2">
                        <h2 className="font-medium text-2xl">
                            {__("Secure Messaging")}
                        </h2>
                        <p className="text-slate-400 pt-4">
                            {__("You can safely exchange messages with your ideal spouse whom you have reached through the online marriage site of those who love you wholeheartedly. If any of the parties sends an insult or inappropriate message to the other person, it will be detected by the editors of those who love you wholeheartedly and the person will be expelled from membership.")}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 mt-10 md:mt-0">
                        <h2 className="font-medium text-2xl">{__("Detailed Search")}</h2>
                        <p className="text-slate-400 pt-4">
                        {__("With the detailed profile scanning here, you can filter the features your spouse candidate should have. Detailed profile search allows you to find the most suitable spouse candidates for you. With the detailed search feature, you can browse the profiles of your prospective spouses, add suitable spouse candidates to your favorites, and send them a smile or a gift.")}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-4">
                    <div className="w-full md:w-1/2">
                        <h2 className="font-medium text-2xl">{__("Increase Your Chances")}</h2>
                        <p className="text-slate-400 pt-4">
                        {__("Thanks to the Increase Your Chances feature, candidates matching the characteristics you specified during the membership phase (age, zodiac sign, physical characteristics, interests, etc.) are filtered and the most suitable spouse candidates are listed on your home page.")}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 mt-10 md:mt-0">
                        <h2 className="font-medium text-2xl">{__("Member")}</h2>
                        <p className="text-slate-400 pt-4">
                        {__("In the first stage, you can sign up with your information such as gender, age and e-mail address.")}
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-10 md:mt-20">
                    <h2 className="font-medium text-2xl">{__("Premium membership")}</h2>
                    <p className="text-slate-400 pt-4">
                    {__("Islamic marriage site enthusiasts also offer a premium membership option to offer extra features and services to their members. By becoming a premium member for a certain fee, you can get one step closer to the person you will marry. Premium membership increases your chances and allows you to meet your ideal spouse more quickly.")}
                    </p>
                </div>
            </div>
        </>
    )
}

