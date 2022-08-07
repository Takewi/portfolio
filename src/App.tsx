import React from "react";
import { Layout } from "./components/layout/Index";
import { About } from "./components/about/Index";
import { Bonus } from "./components/bonus/Index";

export const App = () => {
    return (
        <div className="h-full w-full flex flex-wrap justify-center items-center gap-2">
            <About />
            <Layout />
            <Bonus />
        </div>
    );
};
