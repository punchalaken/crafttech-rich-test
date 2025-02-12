import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@app/styles/variables/global.scss";
import App from "@app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
