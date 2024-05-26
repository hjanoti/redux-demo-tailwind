const INIT_STATE = 0;

// take two parameters - one is state and second- action
export const accountBalanceReducer = (state = INIT_STATE, action) => {
  //console.log("reducer called");
  if (action.type == "Withdraw") {
    return state - action.payload;
  }

  if (action.type == "Deposit") {
    return state + action.payload;
  }

  return state;
};
