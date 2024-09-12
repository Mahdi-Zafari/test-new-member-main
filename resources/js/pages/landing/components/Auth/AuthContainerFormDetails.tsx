import React, { useEffect } from "react";
import Select from "../../../../components/Shared/Select";
import DateSelect from "../../../../components/Shared/DateSelect";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AuthContainerFormDetails = ({ formData, setFormData, onSubmitUser }) => {
    const { isLoading, isRegister } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const handleChange = (name, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmitUser();
        console.log("Main info:", formData);
    };

    useEffect(() => {
        if (isRegister) {
            return navigate("/profile");
        }
    }, [isRegister, navigate]);

    return (
        <form className="space-y-3 max-w-sm" onSubmit={handleSubmit}>
            <Select
                label="Marital Status"
                name="maritalStatus"
                value={formData.maritalStatus}
                options={["Single", "Married", "Divorced"]}
                onChange={(value) => handleChange("maritalStatus", value)}
            />
            <Select
                label="Country"
                name="country"
                value={formData.country}
                options={["Country 1", "Country 2", "Country 3"]}
                onChange={(value) => handleChange("country", value)}
            />
            <Select
                label="City"
                name="city"
                value={formData.city}
                options={["City 1", "City 2", "City 3"]}
                onChange={(value) => handleChange("city", value)}
            />
            <DateSelect
                label="Birthday"
                value={formData.birthDay}
                onChange={(value) => handleChange("birthday", value)}
            />

            <button
                type="submit"
                className="w-full translate-y-2 uppercase rounded-md font-bold py-2 text-white bg-green-600 text-lg hover:bg-green-700 transition-all duration-300 border-2 border-green-300"
            >
                {isLoading ? "is loading..." : "Complete Membership"}
            </button>
        </form>
    );
};

export default AuthContainerFormDetails;
