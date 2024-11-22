import "./index.css";

import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./routes/mainroutes.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <RouterProvider router={mainRouter} />
    </Provider>
);
