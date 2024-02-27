import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import App from "./App.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
]);
