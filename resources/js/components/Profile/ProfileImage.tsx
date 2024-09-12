import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditButton from "./EditButton";
import Modal from "../Shared/Modal";
import FormEditPhoto from "../Form/FormEditPhoto";
import { updateProfileImage } from "../../features/user/userSlice";
import defaultAvatar from "../../../../public/assets/images/defaultAvatar.png";

const ProfileImage = () => {
    const dispatch = useDispatch();
    const uploadedImage = useSelector((state) => state.user.profileImage);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveImage = (imageUrl) => {
        dispatch(updateProfileImage(imageUrl));
    };

    return (
        <div className="flex justify-center h-2/3 pt-10 items-center">
            <div className="relative">
                <img
                    src={uploadedImage || defaultAvatar}
                    alt="Uploaded"
                    className="rounded-full size-[265px] sm:size-80 md:size-96 lg:size-[420px] object-cover object-center"
                />

                <EditButton
                    position="top-0 right-0"
                    openModal={() => setIsModalOpen(true)}
                />
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={"edit your picture"}
            >
                <FormEditPhoto
                    uploadedImage={uploadedImage}
                    setUploadedImage={handleSaveImage}
                />
            </Modal>
        </div>
    );
};

export default ProfileImage;
