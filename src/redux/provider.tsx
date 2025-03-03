"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../redux/store"; // ✅ Correct Store Import

interface ProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
