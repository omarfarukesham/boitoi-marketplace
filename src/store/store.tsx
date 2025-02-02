import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feature/cart/cartSlice'
import authReducer from '../feature/auth/authSlice'
import { productApiSlice } from '@/feature/products/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch