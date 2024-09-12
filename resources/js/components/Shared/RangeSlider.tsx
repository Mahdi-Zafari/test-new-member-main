import React from "react";

interface RangeSliderProps {
    label: string;
    min: number;
    max: number;
    value: number;
    withRange?: boolean;
    onChange: (value: number) => void;
}

const RangeSlider = ({
    label,
    min,
    max,
    value,
    withRange,
    onChange,
}: RangeSliderProps) => {
    const getLabelWithUnit = (label: string) => {
        if (label === "height") {
            return "Height (cm)";
        } else if (label === "weight") {
            return "Weight (kg)";
        }
        return label;
    };

    return (
        <div className="my-4">
            {/* LABEL */}
            <label className="block -mb-1 text-sm font-medium text-gray-700">
                {getLabelWithUnit(label)}
            </label>

            {/* SHOW CURRENT VALUE */}
            <div
                className={`text-center text-sm ${
                    withRange && "-mb-1.5"
                } font-medium text-gray-700`}
            >
                {withRange ? `${min} - ${value}` : value}
            </div>

            {/* SLIDER */}
            <div className="flex items-center">
                <span className="text-sm">{min}</span>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="mx-2 flex-1 accent-[#e72a7f]"
                />
                <span className="text-sm">{max}</span>
            </div>
        </div>
    );
};

export default RangeSlider;
