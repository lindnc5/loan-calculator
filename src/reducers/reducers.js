const initialState = {
  form: { initalAmount: 0, interestRate: 0, paymentAmount: 0 },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_INITIAL_AMOUNT": {
      let content = action.payload;
      return {
        form: { ...state.form, initialAmount: content.initialAmount },
      };
    }
    case "UPDATE_INTEREST_RATE": {
      let content = action.payload;
      return {
        form: { ...state.form, interestRate: content.interestRate },
      };
    }
    case "UPDATE_PAYMENT_AMOUNT": {
      let content = action.payload;
      return {
        form: { ...state.form, paymentAmount: content.paymentAmount },
      };
    }
    default:
      return state;
  }
}
