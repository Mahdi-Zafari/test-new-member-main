import React from "react";
import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../../hooks/useClickOutside";
import { __ } from "../../utils/translation";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCancel?: () => void;
    onSave?: () => void;
    title: string;
    children: any;
    actionButtons?: boolean;
}

const Modal = ({
    isOpen,
    onClose,
    onCancel,
    onSave,
    title,
    children,
    actionButtons,
}: ModalProps) => {
    const modalRef = useOutsideClick(onClose);

    return (
        isOpen && (
            // BACKDROP
            <div className="backdrop-brightness-50 fixed top-0 left-0 w-full h-screen bg-gray-300 bg-opacity-30 z-40">
                {/* OVERLAY */}
                <div
                    ref={modalRef}
                    className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 md:p-8 shadow-lg transition-all duration-500 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto ${
                        actionButtons && "pb-2 md:pb-2"
                    }`}
                >
                    {/* OVERLAY HEADER */}
                    <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
                        <p className="text-gray-800 font-bold capitalize text-base">
                            {title}
                        </p>
                        <button onClick={onClose}>
                            <HiOutlineX size={20} />
                        </button>
                    </div>

                    {/* OVERLAY CONTENT */}
                    {children}

                    {/* OVERLAY ACTIONS */}
                    {actionButtons && (
                        <div className="flex items-center justify-end gap-2 text-end mt-8">
                            <button
                                className="flex justify-center mb-4 bg-gray-300 hover:bg-gray-400 transition-all duration-300 text-white px-4 py-1 rounded capitalize min-w-20"
                                onClick={onCancel}
                            >
                                {__("cancel")}
                            </button>
                            <button
                                className="flex justify-center mb-4 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white px-4 py-1 rounded capitalize min-w-20"
                                onClick={onSave}
                            >
                                {__("save")}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )
    );
};
export default Modal;
