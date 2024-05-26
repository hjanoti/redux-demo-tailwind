// action
/*
{
 payload,
 type
}
*/

export const withdraw = (amount) => {
  // actual action
  return {
    payload: amount,
    type: "Withdraw",
  };
};

/// Action creator
export const deposit = (amount) => {
  //actual action
  return {
    payload: amount,
    type: "Deposit",
  };
};
