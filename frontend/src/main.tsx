import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import arEG from "antd/locale/ar_EG";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        token: {
          // Seed Token
          colorPrimary: "#00b96b",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
      }}
      locale={arEG}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
