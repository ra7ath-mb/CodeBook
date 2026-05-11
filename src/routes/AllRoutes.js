import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductsList, ProductDetails, Login, Register, DashboardPage, CartPage } from '../pages';
import ProtectedRoute from './ProtectedRoute';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path='/cart' element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
    </Routes>
  )
}

export default AllRoutes
