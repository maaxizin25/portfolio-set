import React from "react";
import { AppProvider } from "./appContext";

interface iProvider {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return <AppProvider>{children}</AppProvider>;
};
