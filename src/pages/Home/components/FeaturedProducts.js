import React, {useState, useEffect} from 'react';
import { ProductCard } from '../../../components';
import {getFeaturedList} from '../../../services';

import { toast } from "react-toastify";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
  useEffect(()=>{
      // Fetch featured products from API and setProducts
      async function fetchFeaturedProducts() {
          try {
              const data = await getFeaturedList();
              setProducts(data);
          } catch (error){
              const message = error.message || "Unable to load featured products";
              setError(message);
              toast.error(message, {
                  CloseButton: true,
                  closeOnClick: true,
                  position: "bottom-center",
              });
          }
      }
      fetchFeaturedProducts();
  }, []);
  return (
    <section className="my-20">
        
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
          {error}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </section>
  )
}

export default FeaturedProducts;
