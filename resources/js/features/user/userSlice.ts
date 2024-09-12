import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    registerUserThunk,
    loginUserThunk,
    logoutUserThunk,
} from "./userThunk";
import toast from "react-hot-toast";

const initialState = {
    mainInfo: {
        name: "",
        email: "",
        gender: "male",
        maritalStatus: "",
        birthday: "",
        hasHijab: 0,
        education: "",
        jobType: "",
        profession: "",
        livingCity: "",
        livingDistrict: "",
    },
    personalInfo: {
        weight: "70",
        height: 170,
        skinColor: "white",
        eyeColor: "brown",
        hairColor: "black",
        bodyType: "slim",
        hasDisability: 0,
        hasChild: 0,
        wantChild: 0,
        isAlcoholic: 0,
        livesWith: "alone",
        income: "",
    },
    profileText: "",
    profileImage: null,
    isLoading: false,
    isRegister: 0,
    isMember: localStorage.getItem("isMember") === "1" ? 1 : 0,
};

export const registerUser = createAsyncThunk(
    "user/registerUser",
    registerUserThunk
);
export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
export const logoutUser = createAsyncThunk("user/logoutUser", logoutUserThunk);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateMainInfo(state, action) {
            state.mainInfo = { ...state.mainInfo, ...action.payload };
        },
        updatePersonalInfo(state, action) {
            state.personalInfo = { ...state.personalInfo, ...action.payload };
        },
        updateProfileText(state, action) {
            state.profileText = action.payload;
        },
        updateProfileImage(state, action) {
            state.profileImage = action.payload;
        },
        setIsMember(state, action) {
            state.isMember = action.payload;
            localStorage.setItem("isMember", action.payload ? "1" : "0");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isRegister = action.payload;
                state.isMember = 1;
                toast.success("Successfully registered.");
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                toast.error(action.payload);
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.isLoading = false;
                state.isMember = 1;
                toast.success("Successfully logged in.");
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
                toast.error("You need to register first.");
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isMember = 0;
                toast.success(action.payload.message);
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                toast.error(action.payload);
            });
    },
});

export const {
    updateMainInfo,
    updatePersonalInfo,
    updateProfileText,
    updateProfileImage,
    setIsMember,
} = userSlice.actions;

export default userSlice.reducer;
