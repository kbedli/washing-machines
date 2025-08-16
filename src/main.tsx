import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalContextProvider } from "./contexts/Context.tsx";
import { CartContextProvider } from "./contexts/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartContextProvider>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </CartContextProvider>
  </StrictMode>
);
