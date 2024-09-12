import "../css/app.css";
import Routes from "@/routes.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom/dist";
import { store } from "./store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import "./bootstrap.jsx";
import { setIsMember } from "./features/user/userSlice";
import User from "./models/User.ts";

const isMember = localStorage.getItem("isMember") === "1";
store.dispatch(setIsMember(isMember));

if (document.getElementById("app")) {
    const Index = createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Toaster />
                    <Routes />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}
