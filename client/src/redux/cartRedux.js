import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      const deletedProduct = state.products.splice(index, 1)[0];
      if (state.quantity >= 1) state.quantity -= 1;
      if (state.total >= 1) state.total -= deletedProduct.price * deletedProduct.quantity;
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
