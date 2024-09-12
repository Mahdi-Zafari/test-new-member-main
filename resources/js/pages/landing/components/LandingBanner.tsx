import React, { useState } from "react";
import AuthContainer from "./Auth/AuthContainer";
import { __ } from "../../../utils/translation";
import Modal from "../../../components/Shared/Modal";
import AuthFormLogin from "./Auth/AuthFormLogin";
import Img from "../../../components/Shared/Img";
import bg from "../../../../../public/assets/images/landing-bg.jpg";

export default function Homeimage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const desktopBackgroundStyle = {
        backgroundImage: `linear-gradient(to top, rgba(255, 0, 111, 0.597), rgba(213, 74, 255, 0.591)), url(${bg})`,
    };

    return (
        <>
            <div
                className="min-h-screen landing-bg "
                style={desktopBackgroundStyle}
            >
                <div className="container-custom">
                    <div>
                        {/* <Img
                            src="/assets/images/pinkLogo.png"
                            alt="logo"
                            className="w-full h-auto"
                        /> */}
                    </div>
                    <div>
                        <>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-white border border-solid border-white rounded px-3 py-1 login-btn"
                            >
                                GİRİȘ YAP
                            </button>
                            <Modal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                title="login to your account"
                            >
                                <AuthFormLogin />
                            </Modal>
                        </>
                    </div>
                </div>
                <div className="container-custom mt-10 flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <p className="text-white mb-4">
                            ÇEVRİMİCİ UYE:
                            <span className="font-medium text-white">1288</span>
                        </p>

                        <AuthContainer />
                    </div>
                    <div className=" md:w-1/2 text-center md:text-right mt-10 md:mt-0">
                        <h1 className="text-white text-4xl font-medium">
                            İslami Evlilik Sitesi
                        </h1>
                        <p className="text-white font-medium mt-3">
                            Diğer flört uygulamaları gibi değiliz.
                        </p>
                        <p className="text-white my-4">
                            Ciddi bir ilişki arayan <br /> milyonlarca üyeyi bir
                            araya getiren <br /> Gönülden Sevenler, her gun 1000
                            den <br /> fazla çiftin mutluluğuna şahitlik ediyor
                        </p>
                        <p className="text-white font-medium">
                            Siradaki sen olabiltrsin Hemen aramia
                        </p>
                    </div>
                </div>
                <div className="bg-white mx-10 md:mx-40 rounded px-8 py-8 mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-5">
                    <div className="bg-slate-100 flex justify-between items-center shadow-md rounded-md px-5 py-3">
                        <Img src="/assets/images/vector1.png" alt="vector1" />
                        <div className="text-center">
                            <p>18 yılda</p>
                            <p className="font-medium">4.687.917</p>
                            <p>Üye</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 flex justify-between items-center mt-5 md:mt-0 shadow-md rounded-md px-5 py-3">
                        <Img src="/assets/images/vector3.png" alt="vector3" />
                        <div className="text-center">
                            <p>18 yılda</p>
                            <p className="font-medium">4.687.917</p>
                            <p>Mutlu çift</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 flex justify-between items-center mt-5 md:mt-0 shadow-md rounded-md px-5 py-3">
                        <Img src="/assets/images/vector2.png" alt="vector2" />
                        <div className="text-center">
                            <p>Günde </p>
                            <p className="font-medium">4.687.917</p>
                            <p>Yeni Eşleştirme </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
