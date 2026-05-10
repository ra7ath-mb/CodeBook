import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductsList, ProductDetails } from '../pages';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default AllRoutes
