import React from "react";
import { App } from "./core";
import { theme } from "./config";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
