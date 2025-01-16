"use client";

import Header from "@/components/header/Header";
import store from "@/store";
import { Provider } from "react-redux";

export const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  );
};
