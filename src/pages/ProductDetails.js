import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Elements/Rating";
import useTitle from "../hooks/useTitle";
import { useCart } from "../context";
import { getProduct } from "../services";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { addToCart, removeFromCart, cartList } = useCart();
  const [product, setProduct] = useState(null);
  const [inCart, setInCart] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  const [error, setError] = useState("");

  useTitle(product ? product.name : "Product Details");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
        setError("");
      } catch (error) {
        const message = error.message || "Product unavailable";
        setError(message);
        setErrorMessage(message);
        toast.error(message, {
          CloseButton: true,
          closeOnClick: true,
          position: "bottom-center",
        });
      }
    }
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) {
      setInCart(false);
      return;
    }

    const productInCart = cartList.find((item) => item.id === product.id);
    setInCart(Boolean(productInCart));
  }, [cartList, product]);

  if (error) {
    return (
      <main>
        <section className="my-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-200">
            Product unavailable
          </h1>
          <p className="mt-3 text-lg text-gray-900 dark:text-slate-200">
            {errorMessage}
          </p>
        </section>
      </main>
    );
  }

  if (!product) {
    return (
      <main>
        <section className="my-10 text-center">
          <p className="text-lg text-gray-900 dark:text-slate-200">
            Loading product...
          </p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {product.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {product.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.poster} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <span>{<Rating rating={product.rating} />}</span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {product.in_stock ? (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  IN STOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {product.size} MB
              </span>
            </p>
            <p className="my-3">
              {inCart ? (
                <button
                  onClick={() => removeFromCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
