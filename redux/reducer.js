const initalState = {
  cart: [],
};

export default function Reducer(state = initalState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };

    case "DELETEALL": {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return {
        ...state,
      };
  }
}
