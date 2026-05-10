export const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LIST":
      return {
        ...state,
        products: payload,
      };
    case "SORT":
      return {
        ...state,
        sortBy: payload,
      };
    case "RATING":
      return {
        ...state,
        rating: payload,
      };
    case "BEST_SELLER_ONLY":
      return {
        ...state,
        bestSellerOnly: payload,
      };
    case "ONLY_IN_STOCK":
      return {
        ...state,
        onlyInStock: payload,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        sortBy: null,
        rating: null,
        bestSellerOnly: false,
        onlyInStock: false,
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
