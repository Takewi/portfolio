import React from 'react';
import { Layout } from './components/layout/Index';
import { About } from "./components/about/Index"
import { Bonus } from "./components/bonus/Index"

export const App = () => {
  return (
    <div className="d-flex justify-content-center m-3 flex-wrap">
      <About />
      <Layout />
      <Bonus/>
    </div>
  )
}