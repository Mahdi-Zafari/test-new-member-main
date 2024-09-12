import React from "react";
import Select from "../../../../components/Shared/Select";
import TextField from "../../../../components/Shared/TextField";
import { Link } from "react-router-dom";

const AuthContainerFormBasic = ({
    formData,
    setFormData,
    errors,
    setErrors,
    setStep,
}) => {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
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
            name:
                formData.name.length >= 3 && formData.name.length <= 14
                    ? ""
                    : "Name must be between 3 and 14 characters.",
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setStep(2);
        }
    };

    return (
        <form className="space-y-3 max-w-sm" onSubmit={handleSubmit}>
            <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                options={["male", "female", "other"]}
                onChange={(value) =>
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        gender: value,
                    }))
                }
            />
            <TextField
                label="name"
                placeholder="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="e-mail"
                type="email"
                placeholder="E-Posta Adresiniz"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
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

            <input type="checkbox" />
            <label className="text-medium ml-3" htmlFor="">
                <span className="text-blue-600 underline">
                    <Link to={"./contract"}>Üyelik sözlesmesini</Link>
                </span>{" "}
                ve{" "}
                <span className="text-blue-600 underline">
                    <Link to={"./policy"}>Gizlilik sözlesmesini</Link>{" "}
                </span>{" "}
                okudum, kabul ediyorum.
            </label>

            <button
                type="submit"
                className="w-full translate-y-2 uppercase text-lg rounded-md font-bold py-2 text-white bg-green-600 hover:bg-green-700 transition-all duration-300 border-2 border-green-300"
            >
                ÜRETSİZ UYE OL
            </button>
        </form>
    );
};

export default AuthContainerFormBasic;
