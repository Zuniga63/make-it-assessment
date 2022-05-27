import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

const actionBody = (type, payload) => ({ type, payload });

export const getAllProducts = () => {
  return async (dispatch) => {
    const res = await axios.get('https://fakestoreapi.com/products');
    dispatch(actionBody(GET_ALL_PRODUCTS, res.data));
  };
};

const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
