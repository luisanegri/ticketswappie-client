export default function (state = '', action) {
  switch (action.type) {
    case 'READ_EVENT':
      return action.payload;
    default:
      return state;
  }
}
