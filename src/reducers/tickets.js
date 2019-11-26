export default function(state = [], action = {}) {
  switch (action.type) {
    case 'CREATE_TICKET':
      return [...state, action.payload];
    case 'READ_TICKETS':
      return action.payload;
    case 'READ_TICKET':
      return action.payload;
    default:
      return state;
  }
}
