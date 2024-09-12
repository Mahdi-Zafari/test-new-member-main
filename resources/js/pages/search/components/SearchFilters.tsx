import React, { useState } from "react";
import Modal from "../../../components/Shared/Modal";
import SearchFilterButtons from "./SearchFilterButtons";
import SearchFilterForm from "./SearchFilterForm";
import { ApplyFiltersFunction } from "../../../type";

const initialFilterValues = {
    name: "",
    age: 99,
    height: 210,
    weight: 150,
    maritalStatus: [],
    children: [],
};

const SearchFilters = ({
    onApplyFilters,
}: {
    onApplyFilters: ApplyFiltersFunction;
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filters, setFilters] = useState(initialFilterValues);

    const handleFilterChange = (key, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: value,
        }));
    };

    const handleCancelFilters = () => {
        setIsModalOpen(false);
    };

    const handleFilters = () => {
        setIsModalOpen(true);
        onApplyFilters(filters);
    };

    const handleResetFilters = () => {
        setFilters(initialFilterValues);
        onApplyFilters(initialFilterValues);
    };

    ////////////////////////////
    // TEMP:
    // console.log("changes: ", filters);
    ////////////////////////////

    return (
        <>
            {/* MOBILE */}
            <div className="px-6 sm:px-8 md:hidden flex justify-between mb-4">
                <SearchFilterButtons
                    onFilter={handleFilters}
                    onReset={handleResetFilters}
                />

                {/* FILTER MODAL */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Filter Users"
                    actionButtons
                    onCancel={handleCancelFilters}
                    onSave={() => {
                        handleFilters();
                        setIsModalOpen(false);
                    }}
                >
                    <SearchFilterForm
                        filters={filters}
                        handleFilterChange={handleFilterChange}
                    />
                </Modal>
            </div>

            {/* DESKTOP */}
            <div className="p-8 pt-0 self-start mx-auto md:block hidden">
                {/* FILTER SIDEBAR */}
                <div className="shadow px-4 py-6 w-64 gap-2 rounded-md">
                    <SearchFilterButtons
                        onFilter={handleFilters}
                        onReset={handleResetFilters}
                    />
                    <SearchFilterForm
                        filters={filters}
                        handleFilterChange={handleFilterChange}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchFilters;
