import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "jotai";
import { mainStore } from "./components/stores/index.ts";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </StrictMode>
);
