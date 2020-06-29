
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