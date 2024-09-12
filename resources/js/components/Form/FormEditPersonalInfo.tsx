import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __ } from "../../utils/translation";
import Select from "../Shared/Select";
import RangeSlider from "../Shared/RangeSlider";
import TextField from "../Shared/TextField";
import { updatePersonalInfo } from "../../features/user/userSlice";

const skinColorOptions = ["white", "dark", "bronze"];
const eyeColorOptions = ["brown", "blue", "green", "black"];
const hairColorOptions = ["black", "brown", "yellow"];
const bodyTypeOptions = ["slim", "average", "athletic", "obese"];
const livesWithOptions = ["alone", "family"];

const defaultWeight = 70;
const defaultHeight = 170;

const FormEditPersonalInfo = () => {
    const dispatch = useDispatch();
    const personalInfo = useSelector((state) => state.user.personalInfo);
    const [formData, setFormData] = useState({
        ...personalInfo,
        weight: personalInfo.weight || defaultWeight,
        height: personalInfo.height || defaultHeight,
    });

    useEffect(() => {
        setFormData({
            ...personalInfo,
            weight: personalInfo.weight || defaultWeight,
            height: personalInfo.height || defaultHeight,
        });
    }, [personalInfo]);

    const handleChange = (name, value) => {
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        dispatch(updatePersonalInfo(updatedData));
    };

    console.log("form data: ", formData);

    return (
        <form className="h-64 overflow-y-auto p-4">
            <div className="space-y-4">
                <RangeSlider
                    label="weight"
                    min={40}
                    max={200}
                    value={formData.weight}
                    onChange={(value) => handleChange("weight", value)}
                />
                <RangeSlider
                    label="height"
                    min={140}
                    max={220}
                    value={formData.height}
                    onChange={(value) => handleChange("height", value)}
                />
                <Select
                    label={__("Skin Color")}
                    value={formData.skinColor}
                    options={skinColorOptions}
                    onChange={(value) => handleChange("skinColor", value)}
                />
                <Select
                    label={__("Eye Color")}
                    value={formData.eyeColor}
                    options={eyeColorOptions}
                    onChange={(value) => handleChange("eyeColor", value)}
                />
                <Select
                    label={__("Hair Color")}
                    value={formData.hairColor}
                    options={hairColorOptions}
                    onChange={(value) => handleChange("hairColor", value)}
                />
                <Select
                    label={__("Body Type")}
                    value={formData.bodyType}
                    options={bodyTypeOptions}
                    onChange={(value) => handleChange("bodyType", value)}
                />
                <Select
                    label={__("Has Disability")}
                    value={formData.hasDisability ? "Yes" : "No"}
                    options={["Yes", "No"]}
                    onChange={(value) =>
                        handleChange("hasDisability", value === "Yes" ? 1 : 0)
                    }
                />
                <Select
                    label={__("Has Children")}
                    value={formData.hasChild ? "Yes" : "No"}
                    options={["Yes", "No"]}
                    onChange={(value) =>
                        handleChange("hasChild", value === "Yes" ? 1 : 0)
                    }
                />
                <Select
                    label={__("Wants Children")}
                    value={formData.wantChild ? "Yes" : "No"}
                    options={["Yes", "No"]}
                    onChange={(value) =>
                        handleChange("wantChild", value === "Yes" ? 1 : 0)
                    }
                />
                <Select
                    label={__("Drinks Alcohol")}
                    value={formData.isAlcoholic ? "Yes" : "No"}
                    options={["Yes", "No"]}
                    onChange={(value) =>
                        handleChange("isAlcoholic", value === "Yes" ? 1 : 0)
                    }
                />
                <Select
                    label={__("Lives With")}
                    value={formData.livesWith}
                    options={livesWithOptions}
                    onChange={(value) => handleChange("livesWith", value)}
                />
                <TextField
                    label={__("Income")}
                    placeholder={__("Enter Income")}
                    name="income"
                    type="number"
                    value={formData.income || ""}
                    onChange={(e) => handleChange("income", e.target.value)}
                />
            </div>
        </form>
    );
};

export default FormEditPersonalInfo;
