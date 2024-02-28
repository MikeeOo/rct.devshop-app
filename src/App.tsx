import { JSX, useEffect } from "react";

import { useLocation } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";

import Default from "./layouts/Default.tsx";

declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}
export default function App(): JSX.Element {
    const location = useLocation();

    useEffect(() => {
        window.HSStaticMethods.autoInit();
    }, [location.pathname]);

    return (
        <div className="font-headings bg-gray-700 text-white">
            <Default />
        </div>
    );
}
