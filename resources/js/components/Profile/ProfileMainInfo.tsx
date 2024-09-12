import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Shared/Modal";
import ProfileDisplayMainInfo from "./ProfileDisplayMainInfo";
import FormEditPersonalInfo from "../Form/FormEditPersonalInfo";
import FormEditPeerCandidate from "../Form/FormEditPeerCandidate";
import FormEditMainInfo from "../Form/FormEditMainInfo";
import EditButton from "./EditButton";
import Tabs from "../Profile/Tabs";
import { updateMainInfo } from "../../features/user/userSlice";
import { __ } from "../../utils/translation";

const tabs = [
    { id: "mainInfo", label: __("main info") },
    { id: "personalInfo", label: __("personal information") },
    { id: "peerCandidate", label: __("peer candidate") },
];

const ProfileMainInfo = () => {
    const dispatch = useDispatch();
    const mainInfo = useSelector((state) => state.user.mainInfo);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("mainInfo");
    const [tempData, setTempData] = useState(mainInfo);

    const handleOpenModal = () => {
        setTempData(mainInfo);
        setIsModalOpen(true);
    };

    const handleSave = () => {
        console.log("updated data: ", tempData);

        dispatch(updateMainInfo(tempData));
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChange = (updatedData) => {
        setTempData(updatedData);
    };

    const renderFormContent = () => {
        switch (activeTab) {
            case "mainInfo":
                return <ProfileDisplayMainInfo />;
            case "personalInfo":
                return <FormEditPersonalInfo />;
            case "peerCandidate":
                return <FormEditPeerCandidate />;
            default:
                return null;
        }
    };

    return (
        <div className="shadow rounded-md max-w-screen-md mx-auto">
            {/* HEADER */}
            <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
                <p className="font-medium capitalize">{__("main info")}</p>
                <EditButton openModal={handleOpenModal} />
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCancel}
                    title={__("basic information")}
                    actionButtons
                    onSave={handleSave}
                    onCancel={handleCancel}
                >
                    <FormEditMainInfo
                        initialData={tempData}
                        onChange={handleChange}
                    />
                </Modal>
            </div>

            {/* TABS */}
            <Tabs tabs={tabs} activeTab={activeTab} onClick={setActiveTab} />

            {/* RENDER FORM  */}
            <div>{renderFormContent()}</div>
        </div>
    );
};

export default ProfileMainInfo;
