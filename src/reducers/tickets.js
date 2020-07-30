export default function (state = [], action = {}) {
  switch (action.type) {
    case 'CREATE_TICKET':
      return action.payload;
    case 'READ_TICKETS':
      return action.payload;
    case 'READ_TICKET':
      return action.payload;
    case 'UPDATE_TICKET':
      return action.payload;
    case 'DELETE_TICKET':
      return state.filter((ticket) => ticket.id !== action.payload);
    default:
      return state;
  }
}
