import React from 'react';
import OrderSuccess from './components/OrderSuccess';
import OrderFailed from './components/OrderFailed';
import { useLocation } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const OrderPage = () => {
  useTitle("Order Summary")
    const {state} = useLocation();
  return (
    <main>
        { state ? <OrderSuccess data={state.data}/> : <OrderFailed/>}
    </main>
  )
}

export default OrderPage