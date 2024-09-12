import React from "react";
import { FiEdit3 } from "react-icons/fi";

interface EditButtonProps {
    position?: string;
    openModal: () => void;
}

const EditButton = ({ position, openModal }: EditButtonProps) => {
    return (
        <button
            onClick={openModal}
            className={`${
                position && `absolute ${position}`
            } size-10 bg-white shadow transition-all duration-200 text-lg flex items-center justify-center rounded-full`}
        >
            <FiEdit3 />
        </button>
    );
};

export default EditButton;
