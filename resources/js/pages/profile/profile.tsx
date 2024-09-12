import React, { useEffect } from "react";
import ProfileImage from "../../components/Profile/ProfileImage";
import ProfileText from "../../components/Profile/ProfileText";
import ProfileMainInfo from "../../components/Profile/ProfileMainInfo";
import ProtectedSidebar from "../../components/Sidebar/ProtectedSidebar";
import DisplayPosts from "../../components/Post/Posts";
import axios from "../../utils/axios";

const Profile = () => {
    // const currentUserId = getCurrentUserId();

    const fetchProfileData = async () => {
        const res = await axios.get("localhost/api/user");
        console.log("res:", res);
    };

    useEffect(() => {
        fetchProfileData();
    }, []);

    return (
        <div className="md:flex items-center justify-between">
            <div className="p-8 hidden self-start md:block lg:py-12 mx-auto">
                <ProtectedSidebar />
            </div>
            <div className="p-6 sm:p-8 space-y-12 mb-20 md:mb-6 md:w-2/3">
                <ProfileImage />
                <ProfileText />
                <ProfileMainInfo />
                <DisplayPosts
                    //  userId={currentUserId}
                    deleteAction
                />
            </div>
        </div>
    );
};

export default Profile;
