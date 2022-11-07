import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  avatar: "",
  id: "",
  orders: [],
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
    setOrder: (state, action) => {
      const currentState = current(state);
      state.orders = [...currentState.orders, action.payload];
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const {
  changeName,
  changeEmail,
  changeAvatar,
  setOrder,
  setPaymentMethod,
} = userSlice.actions;

export default userSlice.reducer;
