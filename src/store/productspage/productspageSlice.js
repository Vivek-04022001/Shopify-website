import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../Data/Data";

const initialState = {
  productOptions: [],
  currentProduct: null,
  allProductDetails: Products,
};

const productspageSlice = createSlice({
  name: "productspage",
  initialState,
  reducers: {
    setProductOptions(state) {
      state.productOptions = state.allProductDetails.map(
        (product) => product.description.h1_title
      );
    },
    setCurrentProduct(state, action) {
      if (action.payload) {
        const formattedId = action.payload.toLowerCase().replace(/\s+/g, "");
        state.currentProduct = state.allProductDetails.find(
          (product) =>
            product.description.h1_title.toLowerCase().replace(/\s+/g, "") ===
            formattedId
        );
      }
    },
  },
});

export const selectProductOptions = (state) =>
  state.productspage.productOptions;
export const selectCurrentProduct = (state) =>
  state.productspage.currentProduct;
export const selectAllProductDetails = (state) =>
  state.productspage.allProductDetails;

export const { setProductOptions, setCurrentProduct } =
  productspageSlice.actions;

export default productspageSlice.reducer;
