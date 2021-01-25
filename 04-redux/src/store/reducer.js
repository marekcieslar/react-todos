const initialState = {
  balance: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { balance: state.balance + action.payload };
    case 'WITHDRAW':
      if (state.balance - action.payload > 0)
        return { balance: state.balance - action.payload };
      return state;
    default:
      return state;
  }
};

export default reducer;
