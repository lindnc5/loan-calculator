
export const updateInitialAmount = content => ({
    type: 'UPDATE_INITIAL_AMOUNT',
    payload: {
      initialAmount: content
    }
  });
  
  export const updateInterestRate = content => ({
    type: 'UPDATE_INTEREST_RATE',
    payload: { 
        interestRate: content }
  });

  export const updatePaymentAmount = content => ({
    type: 'UPDATE_PAYMENT_AMOUNT',
    payload: { 
        paymentAmount: content }
  });