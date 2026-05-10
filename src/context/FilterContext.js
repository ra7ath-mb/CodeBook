import { createContext, useCallback, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const filterInitialState = {
  products: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  rating: null,
};

export const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  const initialProductList = useCallback((products) => {
    dispatch({ type: "PRODUCT_LIST", payload: products });
  }, []);

  const bestSeller = (products) => {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  };

  const inStock = (products) => {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  };

  const sort = (products) => {
    if (state.sortBy === "PRICE_LOW_TO_HIGH") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "PRICE_HIGH_TO_LOW") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  };

  const ratingFilter = (products) => {
    if (state.rating === "4STARS_AND_ABOVE") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.rating === "3STARS_AND_ABOVE") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.rating === "2STARS_AND_ABOVE") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.rating === "1STAR_AND_ABOVE") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  };

  const filterProducts = ratingFilter(
    inStock(sort(bestSeller(state.products))),
  );

  const value = {
    state,
    dispatch,
    products: filterProducts,
    initialProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
