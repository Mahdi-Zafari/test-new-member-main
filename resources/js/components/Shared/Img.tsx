import React from "react";
import { config } from "../../config";

interface ImgProps {
    src: string;
    alt: string;
    className?: string;
}

const removeExtraSlashes = (url: string): string => {
    return url?.replace(/^\/+|\/+$/g, "");
};

const Img = ({ ...props }: ImgProps) => {
    // const appUrl = config.host;

    // const cleanedAppUrl = removeExtraSlashes(appUrl);
    // const cleanedUrl = removeExtraSlashes(url);

    // const fullUrl = `${cleanedAppUrl}/${cleanedUrl}`;

    // console.log("Full URL:", fullUrl);

    // return <img src={fullUrl} alt={alt} className={className} />;
    return <img {...props} />;
};

export default Img;
