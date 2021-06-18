import { CLEAR_PRODUCTS, GET_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
  isLoaded: false,
};

const products = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoaded: true,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: [],
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default products;
