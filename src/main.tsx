import "./index.css";

import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./routes/mainroutes.tsx";

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={mainRouter} />
);
