import React from "react";
import MultiSelect from "../../../components/Shared/MultiSelect";
import TextField from "../../../components/Shared/TextField";
import RangeSlider from "../../../components/Shared/RangeSlider";
import { SearchFilterFormProps } from "../../../type";

const maritalStatusOptions = ["single", "married", "divorced", "widowed"];
const childrenOptions = ["none", "1", "2", "3+"];

const SearchFilterForm = ({
    filters,
    handleFilterChange,
}: SearchFilterFormProps) => (
    <form className="space-y-4 md:h-96 md:overflow-y-auto md:pr-1">
        <TextField
            label="Name"
            placeholder="Enter name"
            name="name"
            value={filters.name}
            onChange={(e) => handleFilterChange("name", e.target.value)}
        />
        <RangeSlider
            label="Age"
            min={18}
            max={99}
            value={filters.age}
            onChange={(value) => handleFilterChange("age", value)}
        />
        <RangeSlider
            label="height"
            min={120}
            max={210}
            value={filters.height}
            onChange={(value) => handleFilterChange("height", value)}
        />
        <RangeSlider
            label="weight"
            min={35}
            max={150}
            value={filters.weight}
            onChange={(value) => handleFilterChange("weight", value)}
        />
        <MultiSelect
            label="material status"
            selectedOptions={filters.maritalStatus}
            options={maritalStatusOptions}
            onChange={(selected) =>
                handleFilterChange("maritalStatus", selected)
            }
        />
        <MultiSelect
            label="children"
            selectedOptions={filters.children}
            options={childrenOptions}
            onChange={(selected) => handleFilterChange("children", selected)}
        />
    </form>
);

export default SearchFilterForm;
