import React, { useEffect, useState } from "react";
import Select from "../Shared/Select";
import DateSelect from "../Shared/DateSelect";
import TextField from "../Shared/TextField";

const genderOptions = ["male", "female", "other"];
const maritalStatusOptions = ["single", "married", "divorced", "widowed"];
const educationOptions = ["high school", "bachelor", "master", "PhD"];
const jobTypeOptions = ["full-time", "part-time", "freelancer"];

const FormEditMainInfo = ({ initialData, onChange }) => {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (name, value) => {
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        onChange(updatedData);
    };

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    return (
        <form className="overflow-y-auto space-y-4">
            {/* NAME */}
            <Select
                label="name"
                value={formData.name}
                options={[formData.name]}
                onChange={(value) => handleChange("name", value)}
                disabled
            />
            {/* E-MAIL */}
            <Select
                label="e-mail"
                value={formData.email}
                options={[formData.email]}
                onChange={(value) => handleChange("e-mail", value)}
                disabled
            />
            {/* GENDER */}
            <Select
                label="gender"
                value={formData.gender}
                options={genderOptions}
                onChange={(value) => handleChange("gender", value)}
                disabled
            />
            {/* MATERIAL STATUS */}
            <Select
                label="Marital Status"
                value={formData.maritalStatus}
                options={maritalStatusOptions}
                onChange={(value) => handleChange("maritalStatus", value)}
            />
            {/* BIRTH DATA */}
            <DateSelect
                label="Birthday"
                value={formData.birthday}
                onChange={(value) => handleChange("birthday", value)}
            />
            {/* HAS HIJAB */}
            <Select
                label="Hijab"
                options={["Yes", "No"]}
                value={formData.hasHijab}
                onChange={(value) =>
                    handleChange("hasHijab", value === "Yes" ? 1 : 0)
                }
            />
            {/* EDUCATION */}
            <Select
                label="Education"
                options={educationOptions}
                value={formData.education}
                onChange={(value) => handleChange("education", value)}
            />
            {/* JOB TYPE */}
            <Select
                label="Job Type"
                options={jobTypeOptions}
                value={formData.jobType}
                onChange={(value) => handleChange("jobType", value)}
            />
            {/* PROFESSION */}
            <TextField
                label="Profession"
                placeholder="Enter your profession"
                name="profession"
                value={formData.profession}
                onChange={(e) => handleChange("profession", e.target.value)}
            />
            {/* LIVING CITY */}
            <TextField
                label="Living City"
                placeholder="Enter your city"
                name="livingCity"
                value={formData.livingCity}
                onChange={(e) => handleChange("livingCity", e.target.value)}
            />
            {/* LIVING DISTRICT */}
            <TextField
                label="Living District"
                placeholder="Enter your district"
                name="livingDistrict"
                value={formData.livingDistrict}
                onChange={(e) => handleChange("livingDistrict", e.target.value)}
            />
        </form>
    );
};

export default FormEditMainInfo;
