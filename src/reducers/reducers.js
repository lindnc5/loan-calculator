const initialState = {
  form: { initalAmount: 0, interestRate: 0 },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_INITIAL_AMOUNT": {
      let content = action.payload;
      return {
        ...state,
        form: { initialAmount: content.initialAmount },
      };
    }
    case "UPDATE_INTEREST_RATE": {
      const { content } = action.payload;
      return {
        ...state,
        form: { initialAmount: content.interestRate },
      };
    }
    default:
      return state;
  }
}
