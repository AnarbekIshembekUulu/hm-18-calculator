export const calculaterActionsType = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
};

const initialState = {
  result: 0,
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case calculaterActionsType.ADD:
      return {
        ...state,
        result: state.result + action.payload,
      };
    case calculaterActionsType.SUBTRACT:
      return {
        ...state,
        result: state.result - action.payload,
      };
    case calculaterActionsType.DIVIDE:
      return {
        ...state,
        result: state.result / action.payload,
      };
    case calculaterActionsType.MULTIPLY:
      return {
        ...state,
        result: state.result * action.payload,
      };
    default:
      return state;
  }
};

export const addNumber = (payload) => ({
  type: calculaterActionsType.ADD,
  payload,
});
export const subtractNumber = (payload) => ({
  type: calculaterActionsType.SUBTRACT,
  payload,
});
export const divideNumber = (payload) => ({
  type: calculaterActionsType.DIVIDE,
  payload,
});
export const multiplyNumber = (payload) => ({
  type: calculaterActionsType.MULTIPLY,
  payload,
});
