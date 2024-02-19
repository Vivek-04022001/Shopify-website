import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import productspageReducer from './productspage/productspageSlice'

export const store = configureStore({
    reducer:{
        products: productsReducer,
        productspage : productspageReducer
      
    }
})