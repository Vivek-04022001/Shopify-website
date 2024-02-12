import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBonusTab: "Pro",
  selectedProductTab: "Pro",
  tabsValue: ["Mega", "Pro", "Arsenal"],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedBonusTab(state, action) {
      state.selectedBonusTab = action.payload;
    },

    setSelectedProductTab(state, action) {
      state.selectedProductTab = action.payload;
    },
  },
});

export const { setSelectedBonusTab, setSelectedProductTab } =
  productsSlice.actions;

export const BonusTabStatus = (state) => state.products.selectedBonusTab;
export const ProductTabStatus = (state) => state.products.selectedProductTab;
export const TabsValue = (state)=> state.products.tabsValue

export default productsSlice.reducer;
