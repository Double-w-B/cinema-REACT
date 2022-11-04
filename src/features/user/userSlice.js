import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  avatar: "",
  id: "",
  orders: "",
  paymentMethod: "",
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeAvatar: (state, action) => {
      state.avatar = action.payload;
    },
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
