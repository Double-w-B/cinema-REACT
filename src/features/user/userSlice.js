import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  avatar: "",
  orders: "",
  paymentMethod: "",
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    changeName: (state, action) => {},
    changeEmail: (state, action) => {},
    changeAvatar: (state, action) => {},
    setOrders: (state, action) => {},
    setPaymentMethod: (state, action) => {},
  },
});

export const {
  changeName,
  changeEmail,
  changeAvatar,
  setOrders,
  setPaymentMethod,
} = userSlice.actions;

export default userSlice.reducer;
