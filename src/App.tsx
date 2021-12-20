import React from 'react';
import { Layout } from './components/layout/Layout';

export const App = () => {
  return (
    <div className="d-flex justify-content-center" style={{height: "100%", flexWrap: "wrap"}}>
      <Layout />
    </div>
  )
}