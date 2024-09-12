import React from "react";
import { __ } from "../../utils/translation";

interface Tab {
    id: string;
    label: string;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onClick: (tabId: string) => void;
}

const Tabs = ({ tabs, activeTab, onClick }: TabsProps) => {
    return (
        <div className="flex border-b">
            {tabs.map((tab) => (
                <button
                    key={__(tab.id)}
                    className={`py-1 xs:py-2.5 px-2 text-[13px] xs:text-sm text-gray-800 capitalize flex-1 ${
                        activeTab === __(tab.id) ? "bg-gray-100" : ""
                    }`}
                    onClick={() => onClick(__(tab.id))}
                >
                    {__(tab.label)}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
