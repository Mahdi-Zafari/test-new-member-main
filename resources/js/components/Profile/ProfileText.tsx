import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditButton from "./EditButton";
import Modal from "../Shared/Modal";
import FormEditText from "../Form/FormEditText";
import { __, __c } from "../../utils/translation";
import { updateProfileText } from "../../features/user/userSlice";

const ProfileText = () => {
    const dispatch = useDispatch();
    const profileText = useSelector((state: any) => state.user.profileText);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [draftText, setDraftText] = useState(profileText);

    const handleOpenModal = () => {
        setDraftText(profileText);
        setIsModalOpen(true);
    };

    const handleSave = () => {
        console.log("Updated Profile Text:", draftText);
        dispatch(updateProfileText(draftText));
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setDraftText(profileText);
        setIsModalOpen(false);
    };

    const handleChangeText = (updatedText: string) => {
        setDraftText(updatedText);
    };

    return (
        <div className="shadow rounded-md max-w-screen-md mx-auto">
            {/* HEADER */}
            <div className="flex items-center justify-between bg-gray-100 border-b px-4 py-2">
                <p className="capitalize font-medium">{__("profile text")}</p>

                <EditButton openModal={handleOpenModal} />
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCancel}
                    title={__("profile text")}
                    actionButtons
                    onSave={handleSave}
                    onCancel={handleCancel}
                >
                    <FormEditText
                        text={draftText}
                        onChange={handleChangeText}
                    />
                </Modal>
            </div>

            {/* CONTENT */}
            <div className="p-4 text-wrap h-auto">
                {profileText ? (
                    <p>{__c(profileText)}</p>
                ) : (
                    <p className="text-gray-400">
                        {__c("don't write an approved profile yet")}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProfileText;
