import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductsList, ProductDetails, Login, Register, DashboardPage, CartPage, OrderPage, PageNotFound } from '../pages';
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
      <Route path='/order-summary' element={<ProtectedRoute><OrderPage/></ProtectedRoute>} />
      <Route path='/dashboard' element={<ProtectedRoute><DashboardPage/></ProtectedRoute>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}

export default AllRoutes
