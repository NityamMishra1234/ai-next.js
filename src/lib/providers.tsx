"use client"; // ✅ Required for client-side context

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // ✅ Adjust this path if your store file is elsewhere

export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}