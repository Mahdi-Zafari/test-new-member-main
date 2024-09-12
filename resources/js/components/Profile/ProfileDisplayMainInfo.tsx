import React from "react";
import { useSelector } from "react-redux";
import { camelCaseToSpaceSeparated } from "../../utils/camelCaseToSpaceSeparated";

const ProfileDisplayMainInfo = () => {
    const mainInfo = useSelector((state) => state.user.mainInfo);

    const formatValue = (key, value) => {
        if (key === "hasHijab") {
            return value === 1 ? "Yes" : "No";
        }
        return value;
    };

    return (
        <div className="h-64 overflow-y-auto">
            {Object.entries(mainInfo)
                .filter(([key, _]) => key !== "password")
                .map(([key, value]) => (
                    <div key={key} className="flex border-b p-4 capitalize">
                        <div className="flex-1 text-sm flex-nowrap px-2 font-medium text-gray-800">
                            {camelCaseToSpaceSeparated(key)}:
                        </div>

                        <div className="flex-1 text-sm px-2 text-gray-500">
                            {formatValue(key, value)}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ProfileDisplayMainInfo;
