import { JSX } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "../partials/Navbar.tsx";
import Footer from "../partials/Footer.tsx";

export default function Default(): JSX.Element {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
