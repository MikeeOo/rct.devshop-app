import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Test from "./components/Test.tsx";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}
export default function App() {
    const location = useLocation();

    useEffect(() => {
        window.HSStaticMethods.autoInit();
    }, [location.pathname]);
    return (
        <>
            {/*<div className="h-screen bg-black text-white">Hello World!</div>*/}
            <div className="bg-black text-white ">
                <Test />
            </div>
        </>
    );
}
