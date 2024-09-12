import React from "react";
import { Link } from "../Shared/Link";
import { ProfileNotifications } from "../../constants";

const Notifications = () => {
    return (
        <div className="space-x-2 flex items-center px-2">
            {ProfileNotifications.map((item, index) => (
                <Link
                    key={index}
                    to={item.url}
                    className="p-1 relative cursor-pointer"
                >
                    <item.icon className="text-xl text-white" />
                    <span className="absolute -top-1.5 -right-2 bg-pink-900 text-white size-5 flex items-center justify-center rounded-full text-sm font-medium">
                        {item.count}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default Notifications;
