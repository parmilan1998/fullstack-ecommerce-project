import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_URL;

// TODO: register user
export const registerUser = createAsyncThunk("/user/register", async (data) => {
  const res = await axios.post(`${apiUrl}/api/v1/user/register`, data);
  return res.data;
});

// TODO: login user
export const loginUser = createAsyncThunk("/user/login", async (data) => {
  const res = await axios.post(`${apiUrl}/api/v1/user/login`, data);
  localStorage.setItem("token", res.data.token);
  return res.data;
});

// TODO: logout user
export const logoutUser = createAsyncThunk("/user/logout", async () => {
  await axios.post(`${apiUrl}/api/v1/user/logout`);
  localStorage.removeItem("token");
  return {};
});

const initialState = {
  user: null,
  role: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.user = action.payload.username;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
    },
    register: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
  },
});

export default userSlice.reducer;
export const { login, logout, register } = userSlice.actions;
