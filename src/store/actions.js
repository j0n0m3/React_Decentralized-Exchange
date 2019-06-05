// WEB3
export const web3Loaded = connection => {
  return {
    type: 'WEB3_LOADED',
    connection
  };
};

export const web3AccountLoaded = account => {
  return {
    type: 'WEB3_ACCOUNT_LOADED',
    account
  };
};

// TOKEN
export const tokenLoaded = contract => {
  return {
    type: 'TOKEN_LOADED',
    contract
  };
};

// EXCHANGE
export const exchangeLoaded = contract => {
  return {
    type: 'EXCHANGE_LOADED',
    contract
  };
};

export const cancelledOrdersLoaded = cancelledOrders => {
  return {
    type: 'CANCELLED_ORDERS_LOADED',
    cancelledOrders
  };
};

export const filledOrdersLoaded = filledOrders => {
  return {
    type: 'FILLED_ORDERS_LOADED',
    filledOrders
  };
};

export const allOrdersLoaded = allOrders => {
  return {
    type: 'ALL_ORDERS_LOADED',
    allOrders
  };
};

// Cancel Order
export const orderCancelling = () => {
  return {
    type: 'ORDER_CANCELLING'
  };
};

export const orderCancelled = order => {
  return {
    type: 'ORDER_CANCELLED',
    order
  };
};

// Fill Order
export const orderFilling = () => {
  return {
    type: 'ORDER_FILLING'
  };
};

export const orderFilled = order => {
  return {
    type: 'ORDER_FILLED',
    order
  };
};

// Balances
export const etherBalanceLoaded = balance => {
  return {
    type: 'ETHER_BALANCE_LOADED',
    balance
  };
};

export const tokenBalanceLoaded = balance => {
  return {
    type: 'TOKEN_BALANCE_LOADED',
    balance
  };
};

export const exchangeEtherBalanceLoaded = balance => {
  return {
    type: 'EXCHANGE_ETHER_BALANCE_LOADED',
    balance
  };
};

export const exchangeTokenBalanceLoaded = balance => {
  return {
    type: 'EXCHANGE_TOKEN_BALANCE_LOADED',
    balance
  };
};

export const balancesLoaded = () => {
  return {
    type: 'BALANCES_LOADED'
  };
};

export const balancesLoading = () => {
  return {
    type: 'BALANCES_LOADING'
  };
};

export const etherDepositAmountChanged = amount => {
  return {
    type: 'ETHER_DEPOSIT_AMOUNT_CHANGED',
    amount
  };
};

export const etherWithdrawAmountChanged = amount => {
  return {
    type: 'ETHER_WITHDRAW_AMOUNT_CHANGED',
    amount
  };
};

export const tokenDepositAmountChanged = amount => {
  return {
    type: 'TOKEN_DEPOSIT_AMOUNT_CHANGED',
    amount
  };
};

export const tokenWithdrawAmountChanged = amount => {
  return {
    type: 'TOKEN_WITHDRAW_AMOUNT_CHANGED',
    amount
  };
};

// Buy Order
export const buyOrderAmountChanged = amount => {
  return {
    type: 'BUY_ORDER_AMOUNT_CHANGED'
  };
};

export const buyOrderPriceChanged = price => {
  return {
    type: 'BUY_ORDER_PRICE_CHANGED',
    price
  };
};

export const buyOrderMaking = price => {
  return {
    type: 'BUY_ORDER_MAKING'
  };
};
