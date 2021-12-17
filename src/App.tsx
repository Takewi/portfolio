import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { About } from './components/About';
import { Home } from './components/Home';
import { Layout } from './components/layout/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />}/>
          <Route path='about' element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}