import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function mount(el: Element | DocumentFragment) {
  const root = createRoot(el);
  root.render(<App />);
}

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_dev-approval-mfe");

  if (el) {
    mount(el);
  }
}

export { mount };
