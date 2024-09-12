import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Shared/Modal";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import { AiOutlineProfile } from "react-icons/ai";
import FormEditText from "../Form/FormEditText";
import FormEditMainInfo from "../Form/FormEditMainInfo";
import FormEditPhoto from "../Form/FormEditPhoto";
import {
    updateMainInfo,
    updateProfileText,
    updateProfileImage,
} from "../../features/user/userSlice";
import defaultAvatar from "../../../../public/assets/images/defaultAvatar.png";

const ProtectedSidebar = () => {
    const dispatch = useDispatch();
    const { mainInfo } = useSelector((state) => state.user);
    const { profileText } = useSelector((state) => state.user);
    const uploadedImage = useSelector((state) => state.user.profileImage);

    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [isTextModalOpen, setIsTextModalOpen] = useState(false);
    const [tempData, setTempData] = useState(mainInfo);
    const [tempProfileText, setTempProfileText] = useState(profileText);

    const handleOpenInfoModal = () => {
        setTempData(mainInfo);
        setIsInfoModalOpen(true);
    };

    const handleSaveInfo = () => {
        console.log("Updated Data:", tempData);
        dispatch(updateMainInfo(tempData));
        setIsInfoModalOpen(false);
    };

    const handleChangeInfo = (updatedData) => {
        setTempData(updatedData);
    };

    const handleOpenTextModal = () => {
        setTempProfileText(profileText);
        setIsTextModalOpen(true);
    };

    const handleSaveText = () => {
        console.log("Updated Profile Text:", tempProfileText);
        dispatch(updateProfileText(tempProfileText));
        setIsTextModalOpen(false);
    };

    const handleChangeText = (updatedText) => {
        setTempProfileText(updatedText);
    };

    const handleSaveImage = (imageUrl) => {
        dispatch(updateProfileImage(imageUrl));
        setIsPhotoModalOpen(false);
    };

    return (
        <div className="shadow p-6 w-64 rounded-md">
            {/* PROFILE */}
            <div className="flex flex-col items-center justify-center border-b pb-4">
                <img
                    src={uploadedImage || defaultAvatar}
                    alt=""
                    className="size-28 flex items-center justify-center bg-pink-100 rounded-full object-cover object-center mb-4"
                />

                {/* BIO */}
                <div className="text-center space-y-1">
                    <p>{mainInfo.name}</p>
                    <p>{`${mainInfo.birthday}, ${
                        mainInfo.maritalStatus || "-"
                    }, ${mainInfo.livingCity || "-"}`}</p>
                </div>
            </div>

            <div className="flex flex-col py-4 space-y-3">
                {/* EDIT PHOTO */}
                <>
                    <button
                        onClick={() => setIsPhotoModalOpen(true)}
                        className="capitalize flex items-center gap-3 bg-gray-100 p-2 rounded-md"
                    >
                        <MdOutlinePhotoLibrary className="text-lg" />
                        {"photos"}
                    </button>
                    <Modal
                        isOpen={isPhotoModalOpen}
                        onClose={() => setIsPhotoModalOpen(false)}
                        title={"edit your picture"}
                    >
                        <FormEditPhoto
                            uploadedImage={uploadedImage}
                            setUploadedImage={handleSaveImage}
                        />
                    </Modal>
                </>

                {/* EDIT PROFILE TEXT */}
                <>
                    <button
                        onClick={handleOpenTextModal}
                        className="capitalize flex items-center gap-3 bg-gray-100 p-2 rounded-md"
                    >
                        <AiOutlineProfile />
                        {"profile text"}
                    </button>
                    <Modal
                        isOpen={isTextModalOpen}
                        onClose={() => setIsTextModalOpen(false)}
                        title={"edit your profile text"}
                        actionButtons
                        onSave={handleSaveText}
                        onCancel={() => setIsTextModalOpen(false)}
                    >
                        <FormEditText
                            text={tempProfileText}
                            onChange={handleChangeText}
                        />
                    </Modal>
                </>

                {/* EDIT MAIN INFO */}
                <>
                    <button
                        onClick={handleOpenInfoModal}
                        className="capitalize flex items-center gap-3 bg-gray-100 p-2 rounded-md"
                    >
                        <LuUserCircle2 className="text-lg" />
                        {"main info"}
                    </button>
                    <Modal
                        isOpen={isInfoModalOpen}
                        onClose={() => setIsInfoModalOpen(false)}
                        title={"edit your main information"}
                        actionButtons
                        onSave={handleSaveInfo}
                        onCancel={() => setIsInfoModalOpen(false)}
                    >
                        <FormEditMainInfo
                            initialData={tempData}
                            onChange={handleChangeInfo}
                        />
                    </Modal>
                </>
            </div>
        </div>
    );
};

export default ProtectedSidebar;
