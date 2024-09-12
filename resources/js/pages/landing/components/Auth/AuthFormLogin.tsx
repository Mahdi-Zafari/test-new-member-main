import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../../features/user/userSlice";
import TextField from "../../../../components/Shared/TextField";
import { Link } from "../../../../components/Shared/Link";
import { useNavigate } from "react-router-dom";
import User from "../../../../models/User";

const AuthFormLogin = () => {
    const dispatch = useDispatch();
    const { isLoading, isMember } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
        email: "user@mail.com",
        password: "user1234",
    });
    const [errors, setErrors] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors = {
            email: formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
                ? ""
                : "Invalid email address.",
            password:
                formData.password.length >= 6
                    ? ""
                    : "Password must be at least 6 characters long.",
        };

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(loginUser(User.fromJson(formData)));
        }
    };

    useEffect(() => {
        if (isMember) {
            return navigate("/home");
        }
    }, [isMember, navigate]);

    return (
        <div>
            <div className="text-center mb-6">logo</div>
            <div className="text-gray-600 text-center mb-6">
                <p className="font-bold">Gönülden Sevenler,</p>
                <p className="-mt-0.5">hayat arkadaşını bulman için var.</p>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
                <TextField
                    label="e-mail"
                    type="email"
                    placeholder="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.nickname}
                />
                <TextField
                    label="password"
                    type="password"
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                />

                <button
                    type="submit"
                    className="w-full translate-y-2 uppercase text-lg rounded-md font-bold py-2 text-white bg-green-600 hover:bg-green-700 transition-all duration-300 border-2 border-green-300"
                >
                    {isLoading ? "is loading..." : "Login"}
                </button>
            </form>

            <p className="underline mt-6 text-sm text-gray-600 hover:text-gray-700 transition-all duration-300">
                <Link to="/">I forgot my password</Link>
            </p>
        </div>
    );
};

export default AuthFormLogin;
