// reducers/cartReducer.js
const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Check if the item is already in the cart
        const isItemInCart = state.items.find(item => item.id === action.payload.id);
  
        if (isItemInCart) {
          // If the item is already in the cart, return the current state
          return state;
        }
  
        // If the item is not in the cart, add it
        return {
          ...state,
          items: [...state.items, action.payload],
        };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
        
      case 'CLEAR_CART':
        return {
          ...state,
          items: [],
        };
        
      default:
        return state;
    }
  };
  
  export default cartReducer;
  