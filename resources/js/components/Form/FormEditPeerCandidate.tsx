import React, { useState } from "react";
import { __ } from "../../utils/translation";
import MultiSelect from "../Shared/MultiSelect";
import Slider from "../Shared/RangeSlider";

const maritalStatusOptions = [
    "Never married",
    "Divorced",
    "His wife / her husband passed away",
    "It doesn't matter",
];

const FormEditPeerCandidate = () => {
    const [selectedMaritalStatus, setSelectedMaritalStatus] = useState([]);
    const [height, setHeight] = useState(165);

    return (
        <form className="h-64 overflow-y-auto p-4">
            <Slider
                label={__("height")}
                min={120}
                max={209}
                value={height}
                onChange={setHeight}
            />
            <MultiSelect
                label={__("marital status")}
                options={maritalStatusOptions}
                selectedOptions={selectedMaritalStatus}
                onChange={setSelectedMaritalStatus}
            />
        </form>
    );
};

export default FormEditPeerCandidate;
