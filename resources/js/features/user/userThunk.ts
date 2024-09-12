import { setIsMember } from "./userSlice";
import User from "../../models/User";
import axios from "../../utils/axios";

export const registerUserThunk = async (user: User, thunkAPI) => {
    try {
        if (!(await user.register())) throw new Error("Failed to register");
        thunkAPI.dispatch(setIsMember(1));
        return true;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const loginUserThunk = async (user: User, thunkAPI) => {
    try {
        if (!(await user.login())) throw new Error("Failed to login");
        thunkAPI.dispatch(setIsMember(1));

        // now we can retrieve currently authenticated user
        console.log(await User.current());

        return true;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const logoutUserThunk = async (user, thunkAPI) => {
    try {
        let res = await axios.delete("/api/logout");
        console.log("res.data.logout: ", res.data);
        thunkAPI.dispatch(setIsMember(0));
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};
