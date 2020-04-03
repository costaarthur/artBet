const INITIAL_STATE = 1000;

// const headerCoins = 1356;

export default function showHeaderCoins(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COINS':
      return state + action.num;
    default:
      return state;
  }
}
