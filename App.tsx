import React from "react";
import Navigation from "./navigation";
import { store } from "./src/app/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
