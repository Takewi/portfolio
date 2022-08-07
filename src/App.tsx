import React from "react";
import { Layout } from "./components/layout/Index";
import { About } from "./components/about/Index";
import { Bonus } from "./components/bonus/Index";

export const App = () => {
    return (
        <div className="h-screen w-screen flex flex-row justify-center items-center">
            <About />
            <Layout />
            <Bonus />
        </div>
    );
};
