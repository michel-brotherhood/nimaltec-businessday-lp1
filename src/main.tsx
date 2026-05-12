import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./index.css";

if (import.meta.env.PROD) {
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  window.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    if (
      k === "f12" ||
      ((e.ctrlKey || e.metaKey) && e.shiftKey && (k === "i" || k === "j" || k === "c")) ||
      ((e.ctrlKey || e.metaKey) && k === "u")
    ) {
      e.preventDefault();
    }
  });
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
