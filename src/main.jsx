import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DataProvider from "./context/DataProvider.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
