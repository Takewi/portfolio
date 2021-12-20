import React from 'react';
import { Layout } from './components/layout/Layout';
import { About } from "./components/about/About"
import { Bonus } from "./components/bonus/Bonus"

export const App = () => {
  return (
    <div className="d-flex justify-content-center m-3 flex-wrap">
      <About />
      <Layout />
      <Bonus/>
    </div>
  )
}