import React, { useState, useRef } from "react";
import { __, __c } from "../../utils/translation";

const allowedImageFormats = [
    "image/gif",
    "image/jpeg",
    "image/jpg",
    "image/png",
];

interface FormEditPhotoProps {
    uploadedImage: string | null;
    setUploadedImage: (url: string | null) => void;
}

const FormEditPhoto = ({
    uploadedImage,
    setUploadedImage,
}: FormEditPhotoProps) => {
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const fileInputRef = useRef(null);

    const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMsg("");
        setSuccessMsg("");

        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            if (allowedImageFormats.includes(file.type)) {
                const imageUrl = URL.createObjectURL(file);
                setUploadedImage(imageUrl);
                setSuccessMsg(__c("image uploaded successfully."));
            } else {
                setErrorMsg(__c("the selected file format is not allowed."));
            }
        }
    };

    const handleImgPlaceholderClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleDeleteImage = () => {
        setUploadedImage(null);
        setSuccessMsg("");
        setErrorMsg("");
    };

    return (
        <div>
            <div className="flex justify-center">
                <div
                    className="border-2 border-dashed m-6 dark:border-gray-200 p-2 rounded-[20px] size-48 flex items-center justify-center cursor-pointer"
                    onClick={handleImgPlaceholderClick}
                >
                    {uploadedImage ? (
                        <img
                            src={uploadedImage}
                            alt="Uploaded"
                            className="object-cover object-center size-44 rounded-[20px]"
                        />
                    ) : (
                        <span className="text-7xl font-thin text-gray-200">
                            +
                        </span>
                    )}
                </div>

                <input
                    type="file"
                    id="image-file-input"
                    accept="image/gif, image/jpeg, image/jpg, image/png"
                    onChange={handleUploadImage}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                />
            </div>

            {uploadedImage && (
                <div className="flex justify-center">
                    <button
                        className="flex justify-center mb-4 bg-red-500 text-white px-4 py-1 rounded capitalize"
                        onClick={handleDeleteImage}
                    >
                        {__("delete")}
                    </button>
                </div>
            )}

            {successMsg && <p className="text-green-500">{successMsg}</p>}
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}

            <p className="text-sm my-2 text-gray-400">
                1.{" "}
                {__c(
                    "you can upload up to 20 photos. when you want to upload a new photo, you need to delete one of the old photos."
                )}
            </p>
            <p className="text-sm text-gray-400">
                2.{" "}
                {__c(
                    "the format of the photo you upload should be jpeg, jpg, gif or png. the photo size can not exceed 5 MB."
                )}
            </p>
        </div>
    );
};

export default FormEditPhoto;
