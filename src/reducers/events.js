const initialState = {
  loading: false,
  eventsList: [],
  event: {},
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CREATE_EVENT':
      return action.payload;
    case 'READ_EVENTS_STARTED':
      console.log('reducer 1', state);
      return {
        ...state,
        loading: true,
      };
    case 'READ_EVENTS_SUCCESS':
      console.log('reducer 2', action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        eventsList: action.payload,
      };
    case 'READ_EVENTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case 'READ_EVENT':
      return {
        ...state,
        event: action.payload,
      };
    default:
      return state;
  }
}
