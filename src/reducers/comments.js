export default function(state = [], action = {}) {
  switch (action.type) {
    case 'CREATE_COMMENT':
      return [...state, action.payload];
    case 'READ_COMMENTS':
      return action.payload;
    default:
      return state;
  }
}
