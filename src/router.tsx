import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import App from "./App.tsx";
import ProductPage from "./pages/ProductPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/products/:id",
                element: <ProductPage />,
            },
        ],
    },
]);
