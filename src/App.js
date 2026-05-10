import React from 'react';
import './App.css';
import AllRoutes from './routes/AllRoutes';
import { Header, Footer } from './components';

const App = () => {
  return (
    <div className="App dark:bg-dark dark:text-white">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App