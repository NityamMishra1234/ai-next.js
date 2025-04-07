import { configureStore } from "@reduxjs/toolkit";
; // We'll create this next
import authReducer from "@/lib/features/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add more reducers here
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
