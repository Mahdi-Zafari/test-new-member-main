import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    registerUser,
    updateMainInfo,
} from "../../../../features/user/userSlice";
import AuthContainerFormBasic from "./AuthContainerFormBasic";
import AuthContainerFormDetails from "./AuthContainerFormDetails";
import "../../landing.css";
import User from "../../../../models/User";

const initialInfo = {
    name: "",
    email: "",
    gender: "Male",
    maritalStatus: "Never married",
    birthday: "1999-09-09",
    hijab: "No",
    country: "",
    city: "",
    password: "",
};

const AuthContainer = () => {
    const dispatch = useDispatch();
    const { mainInfo } = useSelector((state) => state.user);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(mainInfo);
    const [errors, setErrors] = useState({ name: "", email: "", password: "" });
    const [fadeClass, setFadeClass] = useState("fade-in");

    const handleNextStep = () => {
        setFadeClass("fade-out");
        setTimeout(() => {
            setStep(2);
            setFadeClass("fade-in");
        }, 300);
    };

    const handleSubmitUser = () => {
        dispatch(registerUser(User.fromJson(formData)));
        dispatch(updateMainInfo(formData));

        setFormData(initialInfo);
    };

    return (
        <div className={fadeClass}>
            {step === 1 && (
                <AuthContainerFormBasic
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    setErrors={setErrors}
                    setStep={handleNextStep}
                />
            )}
            {step === 2 && (
                <AuthContainerFormDetails
                    formData={formData}
                    setFormData={setFormData}
                    onSubmitUser={handleSubmitUser}
                />
            )}
        </div>
    );
};

export default AuthContainer;
