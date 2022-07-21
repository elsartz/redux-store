import React from "react"; // , { createContext, useContext }
import { useProductReducer } from './reducers';

import { legacy_createStore as createStore} from 'redux';
import { useSelector, useDispatch as dispatch } from 'react-redux'
// import { Provider } from 'react-redux';

// const StoreContext = createContext();
const StoreContext = createStore();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  // return <Provider value={[state, dispatch]} {...props} />;
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useSelector(StoreContext);
};

export { StoreProvider, useStoreContext };
